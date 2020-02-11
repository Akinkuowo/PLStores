import React from 'react';
import ShopData from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview';


class ShopPage extends React.Component {
    constructor(props){
        super()

        this.state = {
            collections: ShopData 
        }
    }


    render(){
        const {collections} = this.state
        return(
            <div className="shop-page">
                {
                    collections.map(({id, title, routeName, items}) => {
                        return (
                            <CollectionPreview key={id}  title={title} routeName={routeName} items={items} />
                        )
                    })
                }
            
            </div>
        )
    }
}

export default ShopPage;