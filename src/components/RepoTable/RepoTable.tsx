import * as React from 'react';
import { MUIDataGrid } from '../../utils/MaterialUI';
import { useTypedSelector } from '../../reduxHooks/useTypedSelector';

import { GridColDef } from '@mui/x-data-grid';


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};


const MyComponent: React.FC = () => {

  const { data } = useTypedSelector((state) => state.repositories);
  const [rows, setRows] = React.useState<any[]>([]);

  const windowWidth = useWindowWidth();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 1000 },
  ];

  const columnWidths = {
    id: windowWidth * 0.04,
    Name: windowWidth * 0.18,
    description: windowWidth * 0.4,
  };

    React.useEffect(() => {
    if (data.length) {

      const newRows = data.map((result: any, index: number) => {
        return { id: index + 1, Name: result[0], description: result[1] };
      });
      setRows(newRows);
    }
  }, [data, data.length]);

  return (
    <div>
      <MUIDataGrid data={rows} columns={columns} columnWidths={columnWidths} />
    </div>
  );
};

export default MyComponent;



