import React, {useEffect, useState} from 'react'
import { CirclesWithBar } from 'react-loader-spinner'


const LoaderSpinner = () => {
    const [Loader, setLoader] = useState(true)
    
    useEffect(()=>{
       const timer = setTimeout(()=> {
        setLoader(false);
    },1000);
    
    return()=>{
       clearTimeout(timer);
    }
},[]);

  return(
  <>
    
      {Loader ? (
      <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="#4fa94d"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true} 
  />):<h1>( Welcome!)</h1>}
    </>
);
};

export default LoaderSpinner

