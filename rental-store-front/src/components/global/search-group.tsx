import { Box, InputBase, Button } from '@mui/material';

const SearchGroup = ({
    placeholder,
    value,
    inputOnChange,
    buttonOnClick
}: {
    placeholder: string;
    value: string;
    inputOnChange: any;
    buttonOnClick: any;
}) => {
    return (
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
            <InputBase
                id="SearchText"
                sx={{
                    ml: 1,
                    flex: 1,
                    fontFamily: 'IBM Plex Sans Thai',
                }}
                placeholder={placeholder}
                inputProps={{
                    'aria-label': `${{ placeholder }}`,
                }}
                value={value}
                onChange={inputOnChange}
            />
            <Button
                variant="contained"
                sx={{
                    width: 150,
                    height: 44,
                    marginRight: 2,
                    padding: '10px 32px 10px 32px'
                }}
                className='bg-primary'
                onClick={buttonOnClick}
            >
                <p className="text-[16px] leading-[24px] font-semibold text-[#FFF]">
                    ค้นหา
                </p>
            </Button>
        </Box>
    )
}

export default SearchGroup;