import { createContext, useEffect, useState } from "react";
import{ addCollectionAndDocuments,getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

//import SHOP_DATA from '../route/shop/shop-data.js';


export const CategoriesContext=createContext(
  {categoriesMap:{}}
);

export const CategoriesProvider=({children})=>{
   const [categoriesMap,setCategoriesMap]  =useState({});
   useEffect(()=>{    
     //one time call to add categories to db 
    // addCollectionAndDocuments('categories',SHOP_DATA);
   
    const getCategoriesmap=async () =>{
       const categotyMap=await getCategoriesAndDocuments();
       setCategoriesMap(categotyMap);
    }
    getCategoriesmap();
   },[])
   const value={categoriesMap};
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}