import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { RentalTrnPayload } from '@/payload/rental-trn-payload';

interface SummaryDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    selectedRows: RentalTrnPayload[];
}

const SummaryDialog: React.FC<SummaryDialogProps> = ({ open, onClose, onSubmit, selectedRows }) => {
    const totalFine = selectedRows.reduce((total, row) => total + row.fine, 0);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>สรุปการคืนหนังสือ</DialogTitle>
            <DialogContent>
                <p>
                    รายการหนังสือที่ต้องคืน:
                </p>
                {selectedRows.map((row) => (
                    <DialogContentText key={row.transaction_id}>
                        {row.book_title} - ค่าปรับ: {row.fine} บาท
                    </DialogContentText>

                ))}

                <p>
                    ยอดรวมค่าปรับ: {totalFine} บาท
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    ปิด
                </Button>
                <Button onClick={onSubmit} color="primary" variant="contained">
                    ยืนยัน
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SummaryDialog;