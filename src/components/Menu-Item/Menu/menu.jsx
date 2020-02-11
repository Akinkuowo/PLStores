import React from 'react';
import './menu.css'

import men from '../../../images/men.png'
import womens from '../../../images/womens.png'
import hats from '../../../images/hats.png'
import jackets from '../../../images/jackets.png'
import sneakers from '../../../images/sneakers.png'

import MenuItem from '../menu-item.jsx';

class Menu extends React.Component{
    constructor(){
        super()

        this.state = {
             sections: [
                {
                  title: 'hats',
                  imageUrl: `${hats}`,
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: `${jackets}`,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: `${sneakers}`,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: `${womens}`,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens  ',
                  imageUrl: `${men}`,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]            
        }
    }

    // HandleShopRouting  = () => {

    // }

    render(){
        return (
            <div className="menu">
               {
                 this.state.sections.map( ({ title, imageUrl, id, size, linkUrl }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                    
                 ))
               }
            </div>
        )
    }
}


export default Menu;