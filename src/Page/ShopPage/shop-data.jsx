

import brownBrim from '../../images/shop-img/hats/brown-brim.png'
import blueBeanie from '../../images/shop-img/hats/blue-beanie.png'
import brownCowboy from '../../images/shop-img/hats/brown-cowboy.png'
import greyBrim from '../../images/shop-img/hats/grey-brim.png'
import greenBeanie from '../../images/shop-img/hats/green-beanie.png'
import palmTreeCap from '../../images/shop-img/hats/palm-tree-cap.png'
import redBeanie from '../../images/shop-img/hats/red-beanie.png'
import wolfCap from '../../images/shop-img/hats/wolf-cap.png'
import bluesnapback from '../../images/shop-img/hats/blue-snapback.png'
import addidas from '../../images/shop-img/sneakers/adidas-nmd.png'
import converse from '../../images/shop-img/sneakers/black-converse.png'
import yeezy from '../../images/shop-img/sneakers/yeezy.png'
import nike from '../../images/shop-img/sneakers/white-nike-high-tops.png'
import blackJean from '../../images/shop-img/jackets/black-shearling.png'
import brownJean from '../../images/shop-img/jackets/brown-shearling.png'
import greyJean from '../../images/shop-img/jackets/grey-jean-jacket.png'
import blueJean from '../../images/shop-img/jackets/blue-jean-jacket.png'
import blueTank from '../../images/shop-img/womens/blue-tank.png'
import blouse from '../../images/shop-img/womens/floral-blouse.png'
import skirt from '../../images/shop-img/womens/floral-skirt.png'
import redDress from '../../images/shop-img/womens/red-polka-dot-dress.png'
import vest from '../../images/shop-img/mens/camo-vest.png'
import Tshirt from '../../images/shop-img/mens/floral-shirt.png'
import longSleeve from '../../images/shop-img/mens/long-sleeve.png'
import pinkTshit from '../../images/shop-img/mens/pink-shirt.png'












const ShopData = [

{
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: `${brownBrim}`,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: `${blueBeanie}`,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: `${brownCowboy}`,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: `${greyBrim}`,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: `${greenBeanie}`,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: `${palmTreeCap}`,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: `${redBeanie}`,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: `${wolfCap}`,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: `${bluesnapback}`,
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: `${addidas}`,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: `${yeezy}`,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: `${converse}`,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: `${nike}`,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: `${blackJean}`,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: `${blueJean}`,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: `${greyJean}`,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: `${brownJean}`,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: `${blueTank}`,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: `${blouse}`,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: `${skirt}`,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: `${redDress}`,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: `${vest}`,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: `${Tshirt}`,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: `${longSleeve}`,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: `${pinkTshit}`,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
];

export default ShopData;
