// Import necessary helper functions from the MaterialUI utils file
import {
  MUIBox,
  MUIInput,
  MUISearchIcon
} from '../../utils/MaterialUI';

/**
 * SearchBar component to display a search bar with a search icon.
 */
const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <MUIBox sx={{ display: 'flex', alignItems: 'center' }}>
      <MUISearchIcon ssx={{ marginRight: '10px' }} />
      <MUIInput
        placeholder={placeholder}
        onChange={onChange}
        sx={{ width: searchBarWidth, color: 'rgba(0,0,0,0.6)', fontSize: '1.1rem' }}
        disableUnderline
      />
    </MUIBox>
  );
};

export default SearchBar;
