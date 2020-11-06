import React from 'react';

const RecipeItem = ({id, title, image}) => {

  return (
    <div>
    <div className="gallery">
            <img className="gallery_img" src={image} alt={title}/>
            <div className="gallery_desc">{title}</div>
    </div>
    </div>
  );
}
export default RecipeItem;