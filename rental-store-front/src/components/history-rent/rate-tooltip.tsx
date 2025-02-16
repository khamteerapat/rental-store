import { Box, Tooltip, Typography } from '@mui/material';

const RateTooltip = ({ book_cover }: { book_cover: string }) => {
    return (
        <Tooltip
            title={
                <Box>
                    {/* <Image src={book_cover} alt="book" width={100} height={100} className="rounded-md" /> */}
                    <Typography variant="body2">นี่คือรูปภาพตัวอย่าง</Typography>
                </Box>
            }
            arrow
        >
            <Typography variant="body1">วางเมาท์ที่นี่</Typography>
        </Tooltip>
    );
}

export default RateTooltip;