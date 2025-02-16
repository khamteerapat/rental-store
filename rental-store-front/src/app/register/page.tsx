"use client"

import { useState } from 'react';
import { register } from '../api/authService';
import { useSetAtom } from "jotai";
import { modalAtom } from '@/atoms/modal-atom';
import { CardContent } from '@mui/material';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const setModal = useSetAtom(modalAtom);

    const handleRegister = async () => {
        const response = await register({ username, password, fullname: fullName });
        console.log('response:', response);
        if (response.message === 'Success') {
            setModal({ type: 'success', open: true })
        } else {
            setModal({ open: true, type: 'failure' })
        }

        setUsername('');
        setPassword('');
        setFullName('');
    };

    return (
        <div className="flex items-center bg-[#955c56] justify-center w-full h-screen ">
            <div className="bg-[#FFF] p-8  rounded-lg shadow-lg w-96">
                <h2 className="text-[#955c56] text-2xl font-bold mb-4 text-center">สมัครสมาชิก</h2>
                <CardContent>
                    <label className="block text-[#955c56] mb-2">เบอร์โทรศัพท์</label>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 rounded bg-[#955c56] text-white focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label className="block text-[#955c56] mb-2">เลขบัตรประชาชน</label>
                    <input
                        type="password"
                        className="w-full p-2 mb-4 rounded bg-[#955c56] text-white focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label className="block text-[#955c56] mb-2">ชื่อ - นามสกุล</label>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 rounded bg-[#955c56] text-white focus:outline-none"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <button onClick={() => handleRegister()}
                        type="submit"
                        className="w-full p-3 text-white rounded bg-[#955c56] transition"
                    >
                        สมัครสมาชิก
                    </button>
                </CardContent>
            </div>
        </div>
    );
};

export default Register;