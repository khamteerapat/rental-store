import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BookPayload } from '@/payload/book-payload';
import { Button } from '@mui/material';

interface TableProps {
    rawData: BookPayload[]
    handleCancelBook: (selectedBook: BookPayload) => void
}
const BookRentSelectTable: React.FC<TableProps> = ({ rawData, handleCancelBook }) => {
    return (
        <TableContainer className='h-full' component={Paper} style={{ maxHeight: 322, overflow: 'auto' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ชื่อหนังสือ</TableCell>
                        <TableCell align="right">ผู้แต่ง</TableCell>
                        <TableCell align="right">จำนวน</TableCell>
                        <TableCell align="right">จัดการ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rawData.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.author}</TableCell>
                            <TableCell align="right">{row.number_in_stock}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" disabled={row.number_in_stock <= 0} onClick={() => handleCancelBook(row)} color="primary">ลบ</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BookRentSelectTable;