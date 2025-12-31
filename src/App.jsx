
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Collections from './Collections';
import Collectionscopy from './Collectionscopy';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import LoaderSpinner from './LoaderSpinner';



const App = () => {
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 5000)
    return () => clearTimeout(timer);
  }, []);

  if (Loader) {
    return <LoaderSpinner />;
  
  }
  return (
    <>
      <Nav />
      <Hero />
      <Collections />
       <Collectionscopy/>
      <About />
      <Contact />
      <Footer />
     
      
      
    </>

  );
};

export default App;
