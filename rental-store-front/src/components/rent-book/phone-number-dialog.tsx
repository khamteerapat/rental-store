import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PhoneNumberDialog = ({ open, setOpen, messageError, handleSubmit }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, messageError: string, handleSubmit: (phoneNumber: string) => void }) => {
    const [phoneNumber, setPhoneNumber] = useState('');



    return (
        <Dialog open={open}>
            <DialogTitle>กรอกเบอร์โทรศัพท์ลูกค้า</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="เบอร์โทรศัพท์"
                    type="tel"
                    fullWidth
                    error={messageError === '' ? false : true}
                    helperText={messageError}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>ยกเลิก</Button>
                <Button onClick={() => handleSubmit(phoneNumber)}>ตกลง</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PhoneNumberDialog;