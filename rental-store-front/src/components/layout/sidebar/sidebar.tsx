
"use client"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { getMenuList } from "@/app/api/menuService"
import { useEffect, useState } from "react"
import { MenuInterface } from "@/payload/menu-payload"

interface MenuProps {
    code: string
    path: string
}

const menuPath: MenuProps[] = [
    {
        code: "HOME",
        path: "/recommend"
    },
    {
        code: "HISTORY",
        path: "/history-rent"
    },
    {
        code: "RENTAL",
        path: "/rent-book"
    },
    {
        code: "RETURN",
        path: "/return-book"
    },
    {
        code: "REGISTER",
        path: "/register"
    }
]



export default function Sidebar() {
    const router = useRouter()
    const [menuList, setMenuList] = useState<MenuInterface[]>([])

    useEffect(() => {
        setupMenu()
    }, [])

    const setupMenu = async () => {
        const response = await getMenuList()
        const menuRows: MenuInterface[] = response.data
        const updatedResponse = menuRows.map(menu => {
            const matchedMenu = menuPath.find(item => item.code === menu.menu_code)
            if (matchedMenu) {
                return {
                    ...menu,
                    path: matchedMenu.path
                }
            }
            return menu
        })


        setMenuList(updatedResponse)
    }

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
                        {menu.menu_name}
                    </button>
                ))
            }
            <div className="mt-auto flex justify-end p-2">
                <button className="bg-[#955c56]" onClick={() => handleLogout()} color="primary">
                    ออกจากระบบ
                </button>
            </div>
        </div>
    )
}