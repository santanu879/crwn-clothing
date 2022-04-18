import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem=({category})=>{
    const {title,imageUrl}=category;
    const naivgate= useNavigate()

    const categoriesPreviewHandler=(title)=>{
        naivgate(`/shop/${title}`);
    }
    return (        
            <div className='directory-container'>
            <div  className='background-image' style={{
              backgroundImage:`url(${imageUrl})`
              }}/>
  
            <div className='directory-body-container'  onClick={()=>{
                  categoriesPreviewHandler(title)
              }}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
           </div>
    );
}

export default DirectoryItem;