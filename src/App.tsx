import * as React from 'react'
import { useTypedSelector } from './reduxHooks/useTypedSelector';
import { useActions } from './reduxHooks/useActions';

import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import BasicCard from "./components/BasicCard/BasicCard";
import SearchBar from './components/SearchBar/SearchBar';
import GridWrapper from './components/GridWrapper/GridWrapper';
import Loading from './components/loading/loading';

import RepoTable from './components/RepoTable/RepoTable';

import { 
  MUIButton,
  MUIBox,
  MUITypography,
 } from './utils/MaterialUI';

// styles
import {cardHeaderStyles} from './App.styles'


const App: React.FC = () => {

  const [term, setTerm] = React.useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);
  

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      searchRepositories(term);
  };



const getHeader = () => {

    return (
      <form onSubmit={onSubmit}>
         <MUIBox sx={cardHeaderStyles.wrapper}>
          <SearchBar
            placeholder="Search by name for the package"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTerm(event.target.value)
            }
            searchBarWidth="90%"
          />
          <MUIBox >
            <MUIButton
              variant="contained"
              type="submit"
              sx={cardHeaderStyles.searchButton}
            >
              Search
            </MUIButton>
          </MUIBox>
        </MUIBox>
      </form>
    )
};



const getContent = () => (
        <>
            <>
              {error && <h3>{error}</h3>}
              {loading && <><Loading><h3>Loading...</h3></Loading> <h3>Loading...</h3></>}
              {!error &&
                !loading &&
              <RepoTable />
              }
            </>
          {
            data.length === 0 ? (
              <MUITypography
              align="center"
              sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
              >
              No Packages found yet
            </MUITypography>
          ) : null
        }
        </>
      );
      
      return (
        <GridWrapper>
            <ResponsiveAppBar />
            <BasicCard header={getHeader()} content={getContent()} />
          </GridWrapper>
      );

}

export default App;
