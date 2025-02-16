"use client" // ✅ ทำให้เป็น Client Component

import Sidebar from "@/components/layout/sidebar/sidebar";
import Topbar from "@/components/layout/topbar/topbar";
import ModalManager from "@/components/global/modal-manager";
import Provider from "./provider"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children, session }: { children: React.ReactNode; session: any }) {
    const pathname = usePathname() // ✅ ใช้ได้เพราะเป็น Client Component
    const isLoginPage = pathname === "/login"

    return (
        <Provider session={session}>
            {isLoginPage ? (
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    {children}
                </div>
            ) : (
                <div className="grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] h-screen">
                    <div className="col-span-2">
                        <Topbar />
                    </div>

                    <div className="row-span-2">
                        <Sidebar />
                    </div>

                    <div className="bg-gray-200 p-6 col-start-2 row-start-2 h-full w-full overflow-auto">
                        {children}
                        <ModalManager />
                    </div>
                </div>
            )}
        </Provider>
    )
}