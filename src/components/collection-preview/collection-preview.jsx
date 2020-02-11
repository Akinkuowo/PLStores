import React from 'react';

import './collection-preview.css'
import CollectionItems from '../collection-items/collection-items';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview"> 
    <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, itemToDisplay) => itemToDisplay < 4).map(({ id, imageUrl, price, name  }) => {
                        return(
                        <CollectionItems key={id} name={name} imageUrl={imageUrl} price={price} />
                        
                        )
                    })
                }
            </div>

        </div>
    )
}


export default CollectionPreview;