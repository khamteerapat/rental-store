
"use client"
import { useRouter } from "next/navigation"
import { Button } from "@mui/material"
import { signOut } from "next-auth/react"

interface MenuInterface {
    title: string
    path: string
}

const menuList: MenuInterface[] = [
    {
        title: "หน้าหลัก",
        path: "/recommend"
    },
    {
        title: "ประวัติการเช่าและกำหนดส่งคืน",
        path: "/history-rent"
    },
    {
        title: "ยืมหนังสือ",
        path: "/rent-book"
    },
    {
        title: "คืนหนังสือ",
        path: "/return-book"
    }
]



export default function Sidebar() {
    const router = useRouter()

    const onClickMenu = (menu: MenuInterface) => {

        router.push(menu.path)
    }

    const handleLogout = async () => {
        await signOut()
    }


    return (
        <div className="bg-[#955c56] text-white flex flex-col p-4 gap-4 h-full">
            {
                menuList.map((menu, index) => (
                    <button key={index} className="py-2 px-4 bg-[#955c56] text-white rounded" onClick={() => onClickMenu(menu)}>
                        {menu.title}
                    </button>
                ))
            }
            <div className="mt-auto flex justify-end p-2">
                <Button className="bg-[#955c56]" variant="contained" style={{ border: 'none' }} onClick={() => handleLogout()} color="primary">
                    ออกจากระบบ
                </Button>
            </div>
        </div>
    )
}