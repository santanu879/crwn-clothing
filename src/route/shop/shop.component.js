
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import CategoriesPreview from '../../route/categories-preview/categories-preview.component';
import Category from '../../route/category/category.component';
import './shop.styles.scss';
import {useDispatch} from 'react-redux';

import{ addCollectionAndDocuments,getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {setCategoriesMap} from '../../store/categories/category.action';

const Shop =()=>{ 
  const dispatch = useDispatch();
  useEffect(()=>{  
   const getCategoriesmap=async () =>{
      const categotyMap=await getCategoriesAndDocuments();   
      dispatch(setCategoriesMap(categotyMap))  
   }
   getCategoriesmap();
  },[])

    return (    
        <Routes>
          <Route index element={<CategoriesPreview/>}></Route>
          <Route path=':category' element={<Category />}></Route>
        </Routes>
   
     )
}


export default Shop;