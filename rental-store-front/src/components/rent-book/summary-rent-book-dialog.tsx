import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { BookPayload } from '@/payload/book-payload';

interface SummaryRentBookDialogProps {
    open: boolean
    onClose: () => void
    onSubmit: () => void
    selectedBook: BookPayload[]
}

const SummaryRentBookDialog = (props: SummaryRentBookDialogProps) => {
    const totalBooks = props.selectedBook.reduce((total, row) => total + row.number_in_stock, 0);
    const totalAmount = props.selectedBook.reduce((total, row) => total + row.price * 0.10, 0);

    return (
        <Dialog open={props.open}>
            <DialogTitle>สรุปการยืมหนังสือ</DialogTitle>
            <DialogContent>
                <p>
                    รายการหนังสือที่ต้องยืม:
                </p>
                {props.selectedBook.map((row) => (
                    <DialogContentText key={row.id}>
                        {row.title} - จำนวน: {row.number_in_stock} เล่ม
                    </DialogContentText>
                ))}
                <p >
                    ยอดรวม: {totalBooks} เล่ม
                </p>
                <p className="text-bold weight-bold">
                    คำนวนยอดรวม: {totalAmount} บาท
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onClose()} color="primary">
                    ปิด
                </Button>
                <Button onClick={() => props.onSubmit()} color="primary" variant="contained">
                    ยืนยัน
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SummaryRentBookDialog;