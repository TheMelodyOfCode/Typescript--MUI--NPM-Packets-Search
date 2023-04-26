/* 
  Import necessary libraries, components, and hooks:
  - React: A JavaScript library for building user interfaces.
  - useTypedSelector: A custom hook for accessing the Redux store with TypeScript support.
  - useActions: A custom hook for dispatching Redux actions.
  - ResponsiveAppBar, BasicCard, SearchBar, GridWrapper, Loading, RepoTable: Custom components.
  - MUIButton, MUIBox, MUITypography: Helper functions imported from ./utils/MaterialUI.
    These helper functions allow a single point of change when Material-UI decides to make breaking changes.
*/
import * as React from 'react';
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



const App: React.FC = () => {

/* 
    Define state for the search term, actions, and store data.
  */
    const [term, setTerm] = React.useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);
  
    /*
      Define the onSubmit event handler for the search form.
    */
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      searchRepositories(term);
    };
  
    /*
      Define the getHeader function to create the header with a search bar and submit button.
    */
const getHeader = () => {

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
      display: 'flex',
      justifySelf: 'right',
      size: 'small',
      fontWeight: 'bold',
      backgroundColor: 'black',
    },
  };

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


    /*
      Define the getContent function to render the content, including error messages, 
      loading indicator, and search results.
    */
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
