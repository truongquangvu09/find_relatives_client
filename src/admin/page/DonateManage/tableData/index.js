import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Số Tài Khoản', width: 150 },
    { field: 'nameBank', headerName: 'Tên Ngân Hàng', width: 150 },
    { field: 'dateCreate', headerName: 'Ngày Chuyển', width: 150 },
    { field: 'time', headerName: 'Giờ', width: 70 },
    { field: 'money', headerName: 'Tiền Chuyển', type: 'number', width: 130 },
    { field: 'transactionId', headerName: 'Mã Giao dịch', width: 130 },
];

const rows = [
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
    { id: '0123456789', nameBank: 'TechComBank', dateCreate: '10/05/2023', time: '17:00', money: 15000, transactionId: 'FT23079506403351' },
];

function DonateTable() {
    return (
        <div style={{ height: 370, width: 900 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default DonateTable;