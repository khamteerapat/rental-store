"use client"

import { useState } from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await signIn("credentials", { username, password, callbackUrl: "/" })
    }

    return (
        <div className="flex items-center bg-[#955c56] justify-center w-full h-screen ">
            <div className="bg-[#FFF] p-8  rounded-lg shadow-lg w-96">
                <h2 className="text-[#955c56] text-2xl font-bold mb-4 text-center">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block text-[#955c56] mb-2">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 rounded bg-[#955c56] text-white focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label className="block text-[#955c56] mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 mb-4 rounded bg-[#955c56] text-white focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full p-3 text-white rounded bg-[#955c56] transition"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;