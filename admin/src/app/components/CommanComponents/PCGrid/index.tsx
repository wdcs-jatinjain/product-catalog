'use client';
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

interface Roles {
id:string,
name:string,
role:string
}

const PCGrid: React.FC = () => {
  const [rowData, setRowData] = useState<Roles[]>([
    { id: '123254', name: ' Deadpool',  role: 'Admin' },
    { id: 'Ford546524456124456', name: 'Spiderman',  role: 'Manager' },
    { id: '15364564', name: 'Superman',role: 'Manager' },
  ]);
const colDefs:ColDef[]=[
  {field:'id', headerName:'ID'},
  {field:'name', headerName:'Name'},
  {field:'role', headerName:'Role'}
]
  return (
    <div className="ag-theme-quartz" style={{ width: '1000px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default PCGrid;
