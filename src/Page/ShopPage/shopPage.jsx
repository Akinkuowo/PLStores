import React from 'react';


class ShopPage extends React.Component {
    constructor(){
        super()

        this.state = {
            collections: []
        }
    }


    render(){
        return(
            <div className="shop-page">
                <h3>Collections</h3>
                <div className="hat-container">
                    <h5 className="hats">Hats</h5>
                </div>
            
            </div>
        )
    }
}

export default ShopPage;