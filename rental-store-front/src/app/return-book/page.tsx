"use client"
import { Box, CardContent, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import SearchGroup from '@/components/global/search-group';
import { HistoryTableProps } from '@/payload/history-table-payload';
import HistoryTable from '@/components/history-rent/history-table';
import SummaryDialog from '@/components/return-book/summary-book-fine-dialog';

const mockData: HistoryTableProps[] = [
    {
        title: "one-piece",
        rentNumber: 1,
        rentDate: "2021-10-01",
        dueDate: "2021-10-08",
        returnDate: "2021-10-10",
        fine: 21,
        status: "RETURNED"
    },
    {
        title: "bleach",
        rentNumber: 1,
        rentDate: "2021-10-01",
        dueDate: "2021-10-08",
        returnDate: "2021-10-10",
        fine: 50,
        status: "RENTED"
    }
]

export default function ReturnBook() {
    const [searchText, setSearchText] = useState('');
    const [selectedRows, setSelectedRows] = useState<HistoryTableProps[]>([]);
    const [openSummaryDialog, setOpenSummaryDialog] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    const handleOnCloseSummaryDialog = () => {
        setOpenSummaryDialog(false);
    }

    const handleOnSeach = () => {
    }

    const handleOnSubmitReturn = () => {
        setOpenSummaryDialog(true);
    }

    return (
        <Box className="w-full h-12">
            <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                <Typography className="text-primary" variant="h4">คืนหนังสือ</Typography>
            </div>
            <div className="bg-[#FFF] rounded-lg mt-4"
                style={{
                    boxShadow: '0px 0px 15px 0px rgba(59, 89, 152, 0.10)',
                }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <SearchGroup placeholder='กรุณากรอกเบอร์โทรศัพท์ผู้คืนหนังสือ' value={searchText} inputOnChange={handleOnChange} inputOnKeyDown={() => handleOnSeach} buttonOnClick={() => handleOnSeach} />
                    </Grid>
                    <HistoryTable rawData={mockData} enableSelect={true} setSelectedRows={setSelectedRows} />
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <Button variant="contained" disabled={selectedRows.length == 0} color="primary" onClick={() => handleOnSubmitReturn()}>
                            ยืนยันการคืนหนังสือ
                        </Button>
                    </Box>
                </CardContent>
            </div>
            <SummaryDialog open={openSummaryDialog} onClose={handleOnCloseSummaryDialog} selectedRows={selectedRows} />
        </Box>
    )
}

