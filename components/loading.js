import { SpinnerDotted } from 'spinners-react';

export const Loading = () => {
  return(
      <div style={{height: '100vh'}}>
            <SpinnerDotted size="10%" color="#249DFB" speed={200} style={{ marginTop:'20%', marginLeft: '45%',}}/>
      </div>
  )
}
