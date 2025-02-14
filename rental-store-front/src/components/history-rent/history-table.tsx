import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { HistoryTableProps } from '@/payload/history-table-payload';

interface TableProps {
    rawData: HistoryTableProps[]
    enableSelect?: boolean
    setSelectedRows: React.Dispatch<React.SetStateAction<HistoryTableProps[]>>
}



const HistoryTable: React.FC<TableProps> = ({ rawData, enableSelect, setSelectedRows }) => {

    const handleOnCheck = (row: HistoryTableProps) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(row)) {
                return prevSelectedRows.filter((selectedRow) => selectedRow !== row);
            } else {
                return [...prevSelectedRows, row];
            }
        });
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {enableSelect && <TableCell></TableCell>}
                        <TableCell>ชื่อหนังสือ</TableCell>
                        <TableCell align="right">จำนวน</TableCell>
                        <TableCell align="right">วันที่เช่า</TableCell>
                        <TableCell align="right">กำหนดส่งคืน</TableCell>
                        <TableCell align="right">วันที่ส่งคืน</TableCell>
                        <TableCell align="right">ค่าปรับ</TableCell>
                        <TableCell align="right">สถานะ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rawData.map((row) => (
                        <TableRow
                            key={row.title}
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
                                {row.title}
                            </TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{row.rentNumber}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{row.rentDate}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{row.dueDate}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{row.returnDate}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{row.fine}</TableCell>
                            <TableCell sx={getCellStyle(row)} align="right">{checkStatus(row.status)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const getCellStyle = (row: HistoryTableProps) => ({
    color: row.status === 'RENTED' ? 'red' : 'inherit'
});

const checkStatus = (status: string) => {
    return status === 'RENTED' ? 'ค้างคืน' : 'ส่งคืนแล้ว'
}

export default HistoryTable;