import { MUISkeleton } from "../../utils/MaterialUI";

/*
 * Loading displays a skeleton loading indicator for any wrapped child component.
 */
const Loading = ({ children }) => {
  return (
      <>
        <MUISkeleton
        sx={{ bgcolor: '#638ccf' }}
        width={110}
        height={35}
        >
          {children}
        </MUISkeleton>
    </>
  )
}

export default Loading;