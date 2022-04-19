import React,{ useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

function propsAreEqual(prevMovie, nextMovie) { 
  debugger;  
  return true;// prevMovie.length === nextMovie.length
    //&& prevMovie.releaseDate === nextMovie.releaseDate;
}
export default React.memo(CategoriesPreview,propsAreEqual);