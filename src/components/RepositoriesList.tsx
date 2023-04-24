import * as React from 'react';
import { useTypedSelector } from '../reduxHooks/useTypedSelector';
import { useActions } from '../reduxHooks/useActions';

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = React.useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };
    
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map(name => 
            <div key={name}>
            <a href={`https://www.npmjs.com/package/${name[0]}`} target="_blank" rel="noopener noreferrer">{name[0]}</a>
            <p>{name[1]}</p>
            </div>)}
        </div> 
        ); 
    };

export default RepositoriesList;