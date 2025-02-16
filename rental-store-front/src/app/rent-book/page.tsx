"use client"

import { Box, Typography, Button } from '@mui/material';
import BookShelfTable from '@/components/rent-book/book-shelf-table';
import BookRentSelectTable from '@/components/rent-book/book-rent-select-table';
import { BookPayload } from '@/payload/book-payload';
import { useEffect, useState } from 'react';
import SearchGroup from '@/components/global/search-group';
import { getAllBookBySearch } from '@/app/api/bookService';
import { getUserByPhoneNo } from '@/app/api/userService';
import PhoneNumberDialog from '@/components/rent-book/phone-number-dialog';
import { UserPayload } from '@/payload/user-payload';
import SummaryRentBookDialog from '@/components/rent-book/summary-rent-book-dialog';
import { saveRentTransaction } from '@/app/api/rentService';
import { useSetAtom } from "jotai";
import { modalAtom } from '@/atoms/modal-atom';



export default function RentBook() {
    const [openInputPhoneNumber, setOpenInputPhoneNumber] = useState(true);
    const [bookShelfRows, setBookShelfRows] = useState<BookPayload[]>([]);
    const [bookRentSelectRows, setBookRentSelectRows] = useState<BookPayload[]>([]);
    const [searchText, setSearchText] = useState('');
    const [findUser, setFindUser] = useState<UserPayload | null>(null);
    const [messageError, setMessageError] = useState('');
    const [openSummaryDialog, setOpenSummaryDialog] = useState(false);
    const setModal = useSetAtom(modalAtom);

    useEffect(() => {
        if (findUser === null) {
            setOpenInputPhoneNumber(true)
        }
    }, []);

    const fetchBookData = async () => {
        try {
            console.log('searchText:', searchText);
            const response = await getAllBookBySearch({ search: searchText });
            setBookShelfRows(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }
    const handleOnSearch = () => {
        fetchBookData();
    }

    const handleSelectBook = (selectedBook: BookPayload) => {
        setBookShelfRows(prevRows =>
            prevRows.map(book =>
                book.id === selectedBook.id
                    ? { ...book, number_in_stock: book.number_in_stock - 1 }
                    : book
            )
        );
        setBookRentSelectRows(prevRows => {
            const bookExists = prevRows.find(book => book.id === selectedBook.id);
            if (bookExists) {
                return prevRows.map(book =>
                    book.id === selectedBook.id
                        ? { ...book, number_in_stock: book.number_in_stock + 1 }
                        : book
                );
            } else {
                return [...prevRows, { ...selectedBook, number_in_stock: 1 }];
            }
        });
    }

    const handleCancelBook = (selectedBook: BookPayload) => {
        setBookRentSelectRows(prevRows => {
            const bookExists = prevRows.find(book => book.id === selectedBook.id);
            if (bookExists?.number_in_stock === 1) {
                return prevRows.filter(book => book.id !== selectedBook.id);
            } else {
                return prevRows.map(book =>
                    book.id === selectedBook.id
                        ? { ...book, number_in_stock: book.number_in_stock - 1 }
                        : book
                )
            }
        });
        setBookShelfRows(prevRows =>
            prevRows.map(book =>
                book.id === selectedBook.id
                    ? { ...book, number_in_stock: book.number_in_stock + 1 }
                    : book
            )
        );

    }

    const handleSubmitRentBook = async () => {
        if (findUser !== null) {
            const response = await saveRentTransaction({ username: findUser.username, books: bookRentSelectRows });
            console.log('response:', response);
            if (response.message === 'Success') {
                setBookRentSelectRows([])
                setBookShelfRows([])
                setOpenSummaryDialog(false)
                setFindUser(null)
                setOpenInputPhoneNumber(true)
                setSearchText('')
                setModal({ type: 'success', open: true })
            } else {
                console.error('Error saving rent transaction:', response);
            }
        }

    }

    const handleFindPhoneNumber = async (phoneNumber: string) => {
        const response = await getUserByPhoneNo({ phone: phoneNumber });
        if (response.message === 'Success') {
            setFindUser(response.data)
            await fetchBookData()
            setOpenInputPhoneNumber(false)
        } else {
            setModal({ type: 'failure', open: true })
            setSearchText('')
            setMessageError('ไม่พบข้อมูลผู้ใช้งาน')
        }

    }
    const handleOpenSummaryDialog = () => {
        setOpenSummaryDialog(true)
    }
    const handleCloseSummaryDialog = () => {
        setOpenSummaryDialog(false)
    }

    return (
        <Box className="w-full h-full">
            <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                <Typography className="text-primary" variant="h4">เช่าหนังสือ</Typography>
            </div>
            <div className='bg-[#FFF] rounded-lg mt-4 h-full flex flex-1 flex-col'>
                <div className='p-2'>
                    <SearchGroup placeholder='ค้นหาด้วยชื่อหนังสือ' value={searchText} inputOnChange={handleOnChange} buttonOnClick={() => handleOnSearch()} />
                </div>

                <div className="h-full flex-1">
                    <BookShelfTable rawData={bookShelfRows} handleSelectBook={handleSelectBook} />
                </div>
                <div className="h-full flex-1">
                    <BookRentSelectTable rawData={bookRentSelectRows} handleCancelBook={handleCancelBook} />
                </div>
                <div className='flex justify-end p-2'>
                    <Button variant="contained" disabled={bookRentSelectRows.length == 0} onClick={() => handleOpenSummaryDialog()} color="primary">
                        ยืนยันการคืนหนังสือ
                    </Button>
                </div>
            </div>
            <PhoneNumberDialog open={openInputPhoneNumber} setOpen={setOpenInputPhoneNumber} messageError={messageError} handleSubmit={handleFindPhoneNumber} />
            <SummaryRentBookDialog open={openSummaryDialog} onSubmit={handleSubmitRentBook} onClose={handleCloseSummaryDialog} selectedBook={bookRentSelectRows} />
        </Box>
    )
}