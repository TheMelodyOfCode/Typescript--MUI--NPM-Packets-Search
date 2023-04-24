import { MUISkeleton } from "../../utils/MaterialUI";

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