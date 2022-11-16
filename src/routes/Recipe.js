import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeData from '../components/RecipeData';
function Recipe()
{
   return(
     <div>
         <Header/>
         <RecipeData name1="Pasta" name2="Pizza" name3="Momos" name4="Samosa" name5="Chowmein" name6="Burger"/>
        <Footer/>
     </div>
   )
}
export default Recipe;
