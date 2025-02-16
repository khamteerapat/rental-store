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

    return (
        <Dialog open={props.open}>
            <DialogTitle>สรุปการคืนหนังสือ</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    รายการหนังสือที่ต้องคืน:
                </DialogContentText>
                <ul>
                    {props.selectedBook.map((row) => (
                        <li key={row.title}>{row.title} - จำนวน: {row.number_in_stock} เล่ม</li>
                    ))}
                </ul>
                <DialogContentText>
                    ยอดรวม: {totalBooks} เล่ม
                </DialogContentText>
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