
import { useContext } from 'react';
import {ProductContext} from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop =()=>{
    const {products} =useContext(ProductContext);
    return (
        <div className='product-container'>
        {products?.map((data)=>(
           <ProductCard key={data.id} product={data}/>
         ))
       }
    </div>
    )
}

export default Shop;