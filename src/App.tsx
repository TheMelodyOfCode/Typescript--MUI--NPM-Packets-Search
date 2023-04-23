import * as React from 'react'
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import BasicCard from "./components/BasicCard/BasicCard";
import SearchBar from './components/SearchBar/SearchBar';
import GridWrapper from './components/GridWrapper/GridWrapper';

import { 
  MUIButton,
  MUIBox,
  MUITypography,
 } from './utils/MaterialUI';


 interface Package {
  name: string[];
}

const App: React.FC = () => {
    const [packages, setPackages] = React.useState<Package[]>([]);
    const [searchResults] = React.useState<Package[]>(packages);

    const cardHeaderStyles = {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        height: '65px',
        backgroundColor: '#e0dada',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
      },
      searchButton: {
        // fontSize: '1.05rem',
        sx: {
          size: {
            xs: 'small',
            sm: 'small',
            md: 'large',
          },
        },
      },
    };
     

const getHeader = () => {

  const handleSearch = (value: string) => {
    filterData(value);
  };

  const filterData = (value: string) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === '') setPackages(searchResults);
    else {
      const filteredData = searchResults.filter((item) => {
        return item.name.some((namePart) =>
          namePart.toLowerCase().includes(lowercasedValue),
        );
      });
      setPackages(filteredData);
    }
  };
  
    return (
        <MUIBox sx={cardHeaderStyles.wrapper}>
            <SearchBar
              placeholder="Search by name for the package"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(event.target.value)
              }
              searchBarWidth="90%"
            />
            <MUIBox>
                <MUIButton 
                    variant="contained"
                    // onClick={addPackage}
                    sx={cardHeaderStyles.searchButton}
                >
                    Search
                </MUIButton>
            </MUIBox>
        </MUIBox>
    )
};


// const addPackages = (data) => {
//   packages.push({ ...data });
// };

const getContent = () => (
  <>
      {
          packages.length ? 
              packages.map((data) => (
                  <MUIBox key={data.name.join()} sx={{ marginBottom: '20px' }}>
                      <MUITypography>Package: {data.name[0]}</MUITypography>
                      <MUITypography>Description: {data.name[1]}</MUITypography>
                  </MUIBox>
              )) :
              <MUITypography 
                  align="center"
                  sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
              >
                  No Packages found yet
              </MUITypography>
      }
  </>
);


  return (
    <GridWrapper >
      <ResponsiveAppBar />
      <BasicCard
                header={getHeader()}
                content={getContent()}
            />
    </GridWrapper>
  );
}

export default App;
