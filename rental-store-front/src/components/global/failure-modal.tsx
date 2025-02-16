"use client";
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import { useState } from 'react';
import { modalAtom } from '@/atoms/modal-atom';
import { useAtom } from 'jotai';

export default function FailureModal() {
    const [modal, setModal] = useAtom(modalAtom);
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false)
        setModal({ type: null, open: false })
    }
    return (
        <Dialog open={open} >
            <DialogContent className="max-w-md p-6 text-center">
                <DialogTitle className="text-xl font-semibold mt-2">บันทึกล้มเหลว</DialogTitle>
                <p className="text-gray-600">ข้อมูลของคุณล้มเหลว</p>
                <div className="flex justify-end p-2">
                    <Button onClick={() => handleClose()}>ปิด</Button>
                </div>

            </DialogContent>
        </Dialog>
    );
}