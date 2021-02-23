import { SwishSpinner } from 'react-spinners-kit';

export const Loading = () => {
  return(
      <div style={{height: '100vh', paddingTop:'24%', paddingLeft: '48%'}}>
            <SwishSpinner size={20} color="#00F" fontColor="#00F" backColor="#00F"/>
      </div>
  )
}
