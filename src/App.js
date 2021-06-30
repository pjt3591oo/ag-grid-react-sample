import React, { rowData } from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
   const rowData = [
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxter", price: 72000}
   ];


   const onCellValueChanged = ({colDef, value}) => {
    console.log(colDef.field, value);
   }


   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
          <AgGridReact
            rowData={rowData}
            defaultColDef={{
              editable: true,
            }}
            suppressRowTransform={true}
            suppressRowClickSelection={true}
            rowSelection={'multiple'}
            onCellValueChanged={onCellValueChanged}

          >
              <AgGridColumn field="make"></AgGridColumn>
              <AgGridColumn field="model"></AgGridColumn>
              <AgGridColumn field="price"></AgGridColumn>
          </AgGridReact>

       </div>
   );
};
export default App;
