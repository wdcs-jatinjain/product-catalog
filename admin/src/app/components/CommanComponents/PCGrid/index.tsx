// 'use client';
// import React, { useMemo }  from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';

// interface Roles {
// id:string,
// name:string,
// role:string
// }


// interface ColDef {
//   field: string
//   headerName: string
//   width?: number
//   suppressSizeToFit: boolean
//   cellRenderer?:(params: any) => JSX.Element
// }

// const PCGrid= ({colDef, rowData, actionArray}: {actionArray?:string[], colDef: ColDef[], rowData: any}) => {
//   const actionCellRenderer = (params: any) => {
//     const actions = actionArray || [];
//     colDef.forEach(col => {
//       if (col.field === 'action') {
//         col['cellRenderer'] = actionCellRenderer;
//       }
//     });
//     console.log(colDef);
    
//     return (
//       <div>
//         {actions.map(action => (
//           <span key={action} className="action-icon">
//             {action === 'edit' && <i className="fa fa-pencil"></i>}
//             {action === 'delete' && <i className="fa fa-trash"></i>}
//           </span>
//         ))}

        
//       </div>
//     );
//   };

//   return (
//     <div className="ag-theme-quartz m-10">
//       <AgGridReact
//         rowData={rowData}
//         columnDefs={colDef}
//         domLayout="autoHeight"
//       />
//     </div>
//   );
// };

// export default PCGrid;

'use client'
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

interface ColDef {
  field: string;
  headerName: string;
  width?: number;
  suppressSizeToFit: boolean;
  cellRenderer?: (params: any) => JSX.Element;
}

const PCGrid = ({ colDef, rowData, editRoute, handleDelete }: { colDef: ColDef[]; rowData: any[]; editRoute: string; handleDelete: (id: string) => void; }) => {
  const actionCellRenderer = () => (
    <div className="action-icons">
      <HiPencilAlt className="edit-icon" title="Edit user" />
      <HiTrash className="delete-icon" title="Delete user" />
    </div>
  );

  const updatedColDefs = colDef.map(col => {
    if (col.field === 'action') {
      return {
        ...col,
        cellRenderer: 'actionCellRenderer'
      };
    }
    return col;
  });

  return (
    <div className="ag-theme-quartz m-10">
      <AgGridReact
        rowData={rowData}
        columnDefs={updatedColDefs}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default PCGrid;
