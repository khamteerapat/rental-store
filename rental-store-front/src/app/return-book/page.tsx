"use client"
import { Box, CardContent, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import SearchGroup from '@/components/global/search-group';
import HistoryTable from '@/components/history-rent/history-table';
import SummaryDialog from '@/components/return-book/summary-book-fine-dialog';
import { RentalTrnPayload } from '@/payload/rental-trn-payload';
import { getRentedTransaction, returnBook } from '../api/returnService';
import { useSetAtom } from "jotai";
import { modalAtom } from '@/atoms/modal-atom';


export default function ReturnBook() {
    const [searchText, setSearchText] = useState('');
    const [transactionData, setTransactionData] = useState<RentalTrnPayload[]>([]);
    const [selectedRows, setSelectedRows] = useState<RentalTrnPayload[]>([]);
    const [openSummaryDialog, setOpenSummaryDialog] = useState(false);
    const setModal = useSetAtom(modalAtom);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    const handleOnCloseSummaryDialog = () => {
        setOpenSummaryDialog(false);
    }

    const handleOnSearch = async () => {
        loadRentedTransaction()
    }

    const loadRentedTransaction = async () => {
        const response = await getRentedTransaction({ username: searchText });
        setTransactionData(response.data)
    }

    const handleOnSubmitReturn = () => {
        setOpenSummaryDialog(true);
    }

    const handleSubmitReturnBook = async () => {
        const response = await returnBook({ username: searchText, returnTrn: selectedRows });
        if (response.message == 'Success') {
            setModal({ type: 'success', open: true })
            setOpenSummaryDialog(false)
            loadRentedTransaction()
        } else {
            setModal({ type: 'failure', open: true })
        }
    }

    return (
        <Box className="w-full h-full">
            <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                <Typography className="text-primary" variant="h4">คืนหนังสือ</Typography>
            </div>
            <div className="bg-[#FFF] rounded-lg mt-4 h-full"
                style={{
                    boxShadow: '0px 0px 15px 0px rgba(59, 89, 152, 0.10)',
                }}>
                <CardContent sx={{ height: '100%' }}>
                    <Grid container spacing={2}>
                        <SearchGroup placeholder='กรุณากรอกเบอร์โทรศัพท์ผู้คืนหนังสือ' value={searchText} inputOnChange={handleOnChange} buttonOnClick={() => handleOnSearch()} />
                    </Grid>
                    <HistoryTable rawData={transactionData} enableSelect={true} setSelectedRows={setSelectedRows} />
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <Button variant="contained" disabled={selectedRows.length == 0} color="primary" onClick={() => handleOnSubmitReturn()}>
                            ยืนยันการคืนหนังสือ
                        </Button>
                    </Box>
                </CardContent>
            </div>
            <SummaryDialog open={openSummaryDialog} onSubmit={handleSubmitReturnBook} onClose={handleOnCloseSummaryDialog} selectedRows={selectedRows} />
        </Box>
    )
}

