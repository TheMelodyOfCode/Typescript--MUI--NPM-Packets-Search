import * as React from 'react'
// import { Provider } from 'react-redux';
// import {store} from './reducerState/centralReduxDistribution'
import { useTypedSelector } from './reduxHooks/useTypedSelector';
import { useActions } from './reduxHooks/useActions';

import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import BasicCard from "./components/BasicCard/BasicCard";
import SearchBar from './components/SearchBar/SearchBar';
import GridWrapper from './components/GridWrapper/GridWrapper';
import Loading from './components/loading/loading';

import { 
  MUIButton,
  MUIBox,
  MUITypography,
 } from './utils/MaterialUI';




const App: React.FC = () => {

  const [term, setTerm] = React.useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      searchRepositories(term);
  };


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
                data.map((name) => (
                  <div key={name}>
                    <a
                      href={`https://www.npmjs.com/package/${name[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      {name[0]}
                    </a>
                    <p>{name[1]}</p>
                  </div>
                ))}
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
