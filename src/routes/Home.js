import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeData from '../components/HomeData';
function Home()
{
   return(
     <div>
        <Header/>
           <HomeData/>
        <Footer/>
     </div>
   )
}
export default Home;
