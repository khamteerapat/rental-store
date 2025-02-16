import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { RentalTrnPayload } from '@/payload/rental-trn-payload';
import { formatDateTime } from '@/utils/parseDatetime';

interface TableProps {
    rawData: RentalTrnPayload[]
    enableSelect?: boolean
    setSelectedRows: React.Dispatch<React.SetStateAction<RentalTrnPayload[]>>
}



const HistoryTable: React.FC<TableProps> = ({ rawData, enableSelect, setSelectedRows }) => {

    const handleOnCheck = (row: RentalTrnPayload) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(row)) {
                return prevSelectedRows.filter((selectedRow) => selectedRow !== row);
            } else {
                return [...prevSelectedRows, row];
            }
        });
    }

    return (
        <TableContainer component={Paper} style={{ overflow: 'auto' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        {enableSelect && <TableCell></TableCell>}
                        <TableCell>ชื่อหนังสือ</TableCell>
                        <TableCell align="right">วันที่เช่า</TableCell>
                        <TableCell align="right">กำหนดส่งคืน</TableCell>
                        {enableSelect && <TableCell align="right">วันที่ส่งคืน</TableCell>}
                        <TableCell align="right">ค่าปรับ</TableCell>
                        <TableCell align="right">สถานะ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rawData.map((row) => (
                        <TableRow
                            key={row.transaction_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {
                                enableSelect &&
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        onChange={() => handleOnCheck(row)}
                                    />
                                </TableCell>
                            }
                            <TableCell component="th" scope="row">
                                {row.book_title}
                            </TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{formatDateTime(row.rent_timestamp)}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{row.due_date}</TableCell>
                            {
                                enableSelect &&
                                <TableCell sx={getCellStyle(row)} align="right">{row.return_date}</TableCell>
                            }

                            <TableCell sx={getCellStyle(row)} align="right">{row.fine}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{checkStatus(row.status)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const getCellStyle = (row: RentalTrnPayload) => ({
    color: row.status === 'RENTED' ? 'red' : 'inherit'
});

const checkStatus = (status: string) => {
    return status === 'RENTED' ? 'ค้างคืน' : 'ส่งคืนแล้ว'
}

export default HistoryTable;