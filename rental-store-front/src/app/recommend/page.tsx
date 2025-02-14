import { Box, Typography } from "@mui/material"
import BookGalleryCard from "../../components/recommend/book-gallery-card"

const mockData = [
    {
        title: "one-piece",
        category: "Fantasy",
        imageUrl: "http://localhost:9000/rental-store/book-cover/one-piece.jpg",
        rating: 4.5
    },
    {
        title: "bleach",
        category: "Fantasy",
        imageUrl: "http://localhost:9000/rental-store/book-cover/bleach.jpg",
        rating: 3.5
    },
]

export default function RecommendPage() {
    return (
        <>
            <Box className="w-full h-12">
                <div className="border-[#955c56] border-2 p-4 border-t-0 border-l-0 border-r-0">
                    <Typography className="text-primary" variant="h4">หน้าหลัก</Typography>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-5 gap-4">
                        {mockData.map((data) => (
                            <BookGalleryCard
                                key={data.title}
                                name={data.title}
                                category={data.category}
                                imageUrl={data.imageUrl}
                                rating={data.rating} />
                        ))}
                    </div>
                </div>
            </Box>


        </>
    )
}