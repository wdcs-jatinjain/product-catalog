'use client';
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

interface Car {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const PCGrid: React.FC = () => {
  const [rowData, setRowData] = useState<Car[]>([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ]);

  const colDefs: ColDef[] = [
    { field: 'make', headerName: 'Make' },
    { field: 'model', headerName: 'Model' },
    { field: 'price', headerName: 'Price' },
    { field: 'electric', headerName: 'Electric' },
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: '400px', width: '600px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default PCGrid;
