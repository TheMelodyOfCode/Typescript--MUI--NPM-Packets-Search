import * as React from 'react';
import { useTypedSelector } from '../../reduxHooks/useTypedSelector';
import { MUIDataGrid, MUILink } from '../../utils/MaterialUI';
import { GridColDef, GridRenderCellParams  } from '@mui/x-data-grid';


/*
 * useWindowWidth is a custom React hook that returns the current window
 * width and updates its value whenever the window is resized. */
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

// Add the event listener and clean up on unmount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

/*
 * RepoTable is a React functional component that renders a data grid
 * containing information about repositories/packages from npm.
 */
const RepoTable: React.FC = () => {

  const { data } = useTypedSelector((state) => state.repositories);
  const [rows, setRows] = React.useState<any[]>([]);

  const windowWidth = useWindowWidth();

/*
* LinkCellRenderer is a custom cell renderer that renders a link
* in the data grid.
*/
  const LinkCellRenderer = (params: GridRenderCellParams ) => {
    return (
      <MUILink href={params.value} target="_blank" rel="noopener noreferrer">
        {params.value}
      </MUILink>
    );
  };

// Define the structure and configuration of the data grid columns
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'Name', headerName: 'Name', width: 120 },
    { field: 'description', headerName: 'Description', width: 1000 },
    {
      field: 'link',
      headerName: 'Link',
      width: 400,
      renderCell: (params) => <LinkCellRenderer {...params} />,
    },
  ];

  const columnWidths = {
    id: windowWidth * 0.02,
    Name: windowWidth * 0.16,
    description: windowWidth * 0.4,
    link: windowWidth * 0.4,
  };

    React.useEffect(() => {
    if (data.length) {

      const newRows = data.map((result: any, index: number) => {
        return { id: index + 1, Name: result[0], description: result[1], link: `https://www.npmjs.com/package/${result[0]}` };
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

export default RepoTable;



