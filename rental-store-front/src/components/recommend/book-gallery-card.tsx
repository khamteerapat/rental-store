"use client"
import Image from "next/image"
import { Rating } from "react-simple-star-rating"
import { styled } from '@mui/system';

interface BookGalleryCardProps {
    name: string;
    category: string;
    imageUrl: string;
    rating: number;
}
export default function BookGalleryCard(props: BookGalleryCardProps) {
    return (
        <div className="p-4 border rounded-lg shadow-lg bg-white">
            <div className="flex justify-center mb-4">
                <Image src={props.imageUrl} alt="book" width={100} height={100} className="rounded-md" />
            </div>
            <div className="text-start mb-2">
                <h3 className="text-lg font-semibold text-primary">{props.name}</h3>
                <p className="text-gray-500 text-sm">{props.category}</p>
            </div>
            <div className="flex justify-start">
                <CustomRatingStar className="flex flex-row w-[130px]" size={25} readonly={true} allowFraction={true} initialValue={props.rating} />
            </div>
        </div>
    )
}

export const CustomRatingStar = styled(Rating)(() => ({
    '& .star-svg': {
        display: 'inline',
    },
}));