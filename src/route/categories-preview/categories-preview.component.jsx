import React,{ useContext, Fragment } from 'react';

//import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

//Redux 
import {selectCategoriesMap} from '../../store/categories/category.selector';
import {useSelector} from 'react-redux';

const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap =useSelector(selectCategoriesMap);
  
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
  return true;// prevMovie.length === nextMovie.length
    //&& prevMovie.releaseDate === nextMovie.releaseDate;
}
export default React.memo(CategoriesPreview,propsAreEqual);