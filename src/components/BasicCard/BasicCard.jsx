
import { 
  MUICard, 
  MUICardContent
 } from "../../utils/MaterialUI"


 /*
 * BasicCard that renders a Material UI card with a header and content, passed as props.
 */
const BasicCard = ({header, content}) => {

  const cardStyles = {
    width: '1050px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    borderradius: '8px',
  }

  return (
    <MUICard sx={{cardStyles}}>
        {header}
        <MUICardContent>
            {content}
        </MUICardContent>
      
    </MUICard>
    
    
    
  )
}

export default BasicCard
