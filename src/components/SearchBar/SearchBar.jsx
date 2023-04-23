
import { 
  MUIBox, 
  MUIInput, 
  MUISearchIcon
 } from '../../utils/MaterialUI';

const SearchBar = ({placeholder, onChange, searchBarWidth}) => {

  return (
    <MUIBox sx={{display: 'flex', alignItems: 'center', }} >
        <MUISearchIcon ssx={{marginRight: '10px'}} />
        <MUIInput 
            placeholder={placeholder} 
            onChange={onChange}
            sx={{width: searchBarWidth, color: 'rgbaa(0,0,0,0.6)', fontSize: '1.1rem'}}
            disableUnderline
        />
    </MUIBox>
  )
}

export default SearchBar
