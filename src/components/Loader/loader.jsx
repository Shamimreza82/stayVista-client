import { ScaleLoader } from 'react-spinners'

// eslint-disable-next-line react/prop-types
const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader size={100} color='red' />
    </div>
  )
}

export default Loader