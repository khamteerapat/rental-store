"use client"

import { Box, Typography } from '@mui/material';
import HistoryTable from '@/components/history-rent/history-table';
import { RentalTrnPayload } from '@/payload/rental-trn-payload';
import { useState, useEffect } from 'react';
import { getHistory } from '../api/historyService';


export default function History() {
    const [historyData, setHistoryData] = useState<RentalTrnPayload[]>([]);

    useEffect(() => {
        getHistoryData()
    }, [])

    const getHistoryData = async () => {
        const response = await getHistory();
        setHistoryData(response.data)
    }

    return (
        <Box className="w-full h-12">
            <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0 font-noto-sans-thai">
                <Typography className="text-primary font-noto-sans-thai" variant="h4">ประวัติการเช่าและกำหนดส่งคืน</Typography>
            </div>
            <div className="mt-4">
                <HistoryTable rawData={historyData} setSelectedRows={() => { }} />
            </div>
        </Box>
    )
}