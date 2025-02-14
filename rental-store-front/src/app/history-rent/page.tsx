import { Box, Typography } from '@mui/material';
import HistoryTable from '@/components/history-rent/history-table';
import { HistoryTableProps } from '@/payload/history-table-payload';

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

export default function History() {
    return (
        <Box className="w-full h-12">
            <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                <Typography className="text-primary" variant="h4">ประวัติการเช่าและกำหนดส่งคืน</Typography>
            </div>
            <div className="mt-4">
                <HistoryTable rawData={mockData} setSelectedRows={() => { }} />
            </div>
        </Box>
    )
}