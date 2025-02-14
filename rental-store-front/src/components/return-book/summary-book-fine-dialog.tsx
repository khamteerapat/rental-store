import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { HistoryTableProps } from '@/payload/history-table-payload';

interface SummaryDialogProps {
    open: boolean;
    onClose: () => void;
    selectedRows: HistoryTableProps[];
}

const SummaryDialog: React.FC<SummaryDialogProps> = ({ open, onClose, selectedRows }) => {
    const totalFine = selectedRows.reduce((total, row) => total + row.fine, 0);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>สรุปการคืนหนังสือ</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    รายการหนังสือที่ต้องคืน:
                </DialogContentText>
                <ul>
                    {selectedRows.map((row) => (
                        <li key={row.title}>{row.title} - ค่าปรับ: {row.fine} บาท</li>
                    ))}
                </ul>
                <DialogContentText>
                    ยอดรวมค่าปรับ: {totalFine} บาท
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    ปิด
                </Button>
                <Button onClick={onClose} color="primary" variant="contained">
                    ยืนยัน
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SummaryDialog;