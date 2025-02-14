"use client"

import { Box, Typography, Button } from '@mui/material';
import BookShelfTable from '@/components/rent-book/book-shelf-table';
import BookRentSelectTable from '@/components/rent-book/book-rent-select-table';
import { BookPayload } from '@/payload/book-payload';
import { useState } from 'react';
import SearchGroup from '@/components/global/search-group';

const mockData: BookPayload[] = [
    {
        title: "one-piece",
        category: "Fantasy",
        author: "Eiichiro Oda",
        book_cover: "http://localhost:9000/rental-store/book-cover/one-piece.jpg",
        avg_rating: 4.5,
        number_in_stock: 10,
        id: 'dwaojdai',
        bar_code: '',
        price: 0,
    },
    {
        title: "bleach",
        category: "Fantasy",
        author: "Eiichiro Oda",
        book_cover: "http://localhost:9000/rental-store/book-cover/one-piece.jpg",
        avg_rating: 4.5,
        number_in_stock: 8,
        id: 'e2qeopk',
        bar_code: '',
        price: 0,
    },
]

export default function RentBook() {
    const [bookShelfRows, setBookShelfRows] = useState<BookPayload[]>(mockData);
    const [bookRentSelectRows, setBookRentSelectRows] = useState<BookPayload[]>([]);
    const [searchText, setSearchText] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    }
    const handleOnSeach = () => {
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

    return (
        <Box className="w-full h-full">
            <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                <Typography className="text-primary" variant="h4">เช่าหนังสือ</Typography>
            </div>
            <div className='bg-[#FFF] rounded-lg mt-4 h-full flex flex-1 flex-col'>
                <div className='p-2'>
                    <SearchGroup placeholder='ค้นหาด้วยชื่อหนังสือ' value={searchText} inputOnChange={handleOnChange} inputOnKeyDown={() => handleOnSeach} buttonOnClick={() => handleOnSeach} />
                </div>

                <div className="h-full flex-1">
                    <BookShelfTable rawData={bookShelfRows} handleSelectBook={handleSelectBook} />
                </div>
                <div className="h-full flex-1">
                    <BookRentSelectTable rawData={bookRentSelectRows} handleCancelBook={handleCancelBook} />
                </div>
                <div className='flex justify-end p-2'>
                    <Button variant="contained" disabled={bookRentSelectRows.length == 0} color="primary">
                        ยืนยันการคืนหนังสือ
                    </Button>
                </div>
            </div>

        </Box>
    )
}