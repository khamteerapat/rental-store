"use client"

import { Box, Typography } from "@mui/material"
import BookGalleryCard from "../../components/recommend/book-gallery-card"
import { getAllNewBook } from "@/app/api/bookService"
import { BookPayload } from "@/payload/book-payload"
import { useEffect, useState } from "react"


export default function RecommendPage() {
    const [newBooks, setNewBooks] = useState<BookPayload[]>([]);


    useEffect(() => {
        fetchNewBooks();
    }, [])

    const fetchNewBooks = async () => {
        try {
            const response = await getAllNewBook();
            setNewBooks(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <Box className="w-full h-12">
                <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                    <Typography className="text-primary" variant="h4">หน้าหลัก</Typography>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-5 gap-4">
                        {newBooks.map((data) => (
                            <BookGalleryCard
                                key={data.id}
                                name={data.title}
                                category={data.category}
                                imageUrl={data.book_cover}
                                rating={data.avg_rating} />
                        ))}
                    </div>
                </div>
            </Box>


        </>
    )
}