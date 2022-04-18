import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const directory=({categories})=>{
  return(
     <div className="categories-container">
        {
            categories.map((category)=>(
                <DirectoryItem key={category.id} category={category}/>
            ))  
        }            
    </div>
  )
}

export default directory;