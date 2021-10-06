import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import Cart from './Cart/Cart';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mocks = {
  'page': 1,
  'per_page': 40,
  'photos': [
    {
      'id': 9671540,
      'width': 4000,
      'height': 6000,
      'url': 'https://www.pexels.com/photo/pink-and-green-ice-cream-on-white-ceramic-cup-9671540/',
      'photographer': 'Andy',
      'photographer_url': 'https://www.pexels.com/@soyum',
      'photographer_id': 110688296,
      'avg_color': '#373225',
      'src': {
        'original': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png',
        'large2x': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9671540/pexels-photo-9671540.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9671541,
      'width': 3741,
      'height': 5611,
      'url': 'https://www.pexels.com/photo/sliced-bread-with-white-cream-and-green-vegetable-9671541/',
      'photographer': 'Andy',
      'photographer_url': 'https://www.pexels.com/@soyum',
      'photographer_id': 110688296,
      'avg_color': '#8A7F62',
      'src': {
        'original': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png',
        'large2x': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9671541/pexels-photo-9671541.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9658369,
      'width': 2395,
      'height': 3125,
      'url': 'https://www.pexels.com/photo/city-street-building-architecture-9658369/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#6F6F6F',
      'src': {
        'original': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg',
        'large2x': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9658369/pexels-photo-9658369.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9658381,
      'width': 2551,
      'height': 3608,
      'url': 'https://www.pexels.com/photo/wood-bench-black-and-white-road-9658381/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#5B5B5B',
      'src': {
        'original': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg',
        'large2x': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9658381/pexels-photo-9658381.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9658398,
      'width': 2531,
      'height': 3704,
      'url': 'https://www.pexels.com/photo/man-statue-on-white-concrete-bench-9658398/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#A4A4A4',
      'src': {
        'original': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg',
        'large2x': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9658398/pexels-photo-9658398.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 1906821,
      'width': 4912,
      'height': 7360,
      'url': 'https://www.pexels.com/photo/cold-fashion-people-woman-1906821/',
      'photographer': 'Alessio Cesario',
      'photographer_url': 'https://www.pexels.com/@alessio-cesario-975080',
      'photographer_id': 975080,
      'avg_color': '#C1914E',
      'src': {
        'original': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg',
        'large2x': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/1906821/pexels-photo-1906821.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9605213,
      'width': 4160,
      'height': 6240,
      'url': 'https://www.pexels.com/photo/girl-in-black-and-red-floral-long-sleeve-shirt-and-red-pants-standing-on-brown-rope-9605213/',
      'photographer': 'Mitya  Zotov',
      'photographer_url': 'https://www.pexels.com/@mitya-zotov-71755548',
      'photographer_id': 71755548,
      'avg_color': '#5A5349',
      'src': {
        'original': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg',
        'large2x': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9605213/pexels-photo-9605213.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9605214,
      'width': 4160,
      'height': 6240,
      'url': 'https://www.pexels.com/photo/flock-of-black-and-white-birds-on-brown-brick-floor-9605214/',
      'photographer': 'Mitya  Zotov',
      'photographer_url': 'https://www.pexels.com/@mitya-zotov-71755548',
      'photographer_id': 71755548,
      'avg_color': '#63614C',
      'src': {
        'original': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg',
        'large2x': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9605214/pexels-photo-9605214.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9605215,
      'width': 4160,
      'height': 6240,
      'url': 'https://www.pexels.com/photo/child-in-red-and-white-knit-cap-smiling-9605215/',
      'photographer': 'Mitya  Zotov',
      'photographer_url': 'https://www.pexels.com/@mitya-zotov-71755548',
      'photographer_id': 71755548,
      'avg_color': '#706F6B',
      'src': {
        'original': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg',
        'large2x': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9605215/pexels-photo-9605215.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9598866,
      'width': 2589,
      'height': 3632,
      'url': 'https://www.pexels.com/photo/angel-statue-in-grayscale-photography-9598866/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#626262',
      'src': {
        'original': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg',
        'large2x': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9598866/pexels-photo-9598866.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9598867,
      'width': 2494,
      'height': 3606,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-man-statue-9598867/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#515151',
      'src': {
        'original': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg',
        'large2x': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9598867/pexels-photo-9598867.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9598868,
      'width': 2444,
      'height': 3599,
      'url': 'https://www.pexels.com/photo/white-concrete-pillar-near-green-grass-field-9598868/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#A4A198',
      'src': {
        'original': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg',
        'large2x': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9598868/pexels-photo-9598868.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9599169,
      'width': 2548,
      'height': 3824,
      'url': 'https://www.pexels.com/photo/man-in-black-coat-standing-near-white-concrete-pillar-9599169/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#A9A9A9',
      'src': {
        'original': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg',
        'large2x': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9599169/pexels-photo-9599169.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9587579,
      'width': 3024,
      'height': 4032,
      'url': 'https://www.pexels.com/photo/green-lemon-fruit-on-white-surface-9587579/',
      'photographer': 'Lisa',
      'photographer_url': 'https://www.pexels.com/@fotios-photos',
      'photographer_id': 26735,
      'avg_color': '#4F682F',
      'src': {
        'original': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg',
        'large2x': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9587579/pexels-photo-9587579.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9118012,
      'width': 2880,
      'height': 3306,
      'url': 'https://www.pexels.com/photo/purple-flowers-in-macro-shot-9118012/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#422963',
      'src': {
        'original': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg',
        'large2x': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9118012/pexels-photo-9118012.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9533466,
      'width': 4160,
      'height': 6240,
      'url': 'https://www.pexels.com/photo/selective-focus-photo-of-woman-with-her-hair-flying-9533466/',
      'photographer': 'Mitya  Zotov',
      'photographer_url': 'https://www.pexels.com/@mitya-zotov-71755548',
      'photographer_id': 71755548,
      'avg_color': '#6D5B51',
      'src': {
        'original': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg',
        'large2x': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9439930,
      'width': 2480,
      'height': 3380,
      'url': 'https://www.pexels.com/photo/people-standing-near-water-fountain-in-grayscale-photography-9439930/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#777777',
      'src': {
        'original': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg',
        'large2x': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9439930/pexels-photo-9439930.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9439929,
      'width': 2586,
      'height': 3673,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-water-fountain-9439929/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#7B7B7B',
      'src': {
        'original': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg',
        'large2x': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9497440,
      'width': 3648,
      'height': 5472,
      'url': 'https://www.pexels.com/photo/snow-wood-dawn-landscape-9497440/',
      'photographer': 'Isaac Garcia',
      'photographer_url': 'https://www.pexels.com/@basiciggy',
      'photographer_id': 95846066,
      'avg_color': '#764B42',
      'src': {
        'original': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png',
        'large2x': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9480126,
      'width': 3888,
      'height': 5184,
      'url': 'https://www.pexels.com/photo/a-reflection-of-the-building-on-the-lake-9480126/',
      'photographer': 'Lisa',
      'photographer_url': 'https://www.pexels.com/@fotios-photos',
      'photographer_id': 26735,
      'avg_color': '#6D6D6D',
      'src': {
        'original': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg',
        'large2x': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9480126/pexels-photo-9480126.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9477096,
      'width': 3024,
      'height': 4032,
      'url': 'https://www.pexels.com/photo/green-vegetable-on-white-ceramic-plate-9477096/',
      'photographer': 'Lisa',
      'photographer_url': 'https://www.pexels.com/@fotios-photos',
      'photographer_id': 26735,
      'avg_color': '#C4C8B1',
      'src': {
        'original': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg',
        'large2x': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9477096/pexels-photo-9477096.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9480102,
      'width': 3888,
      'height': 5184,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-brick-building-9480102/',
      'photographer': 'Lisa',
      'photographer_url': 'https://www.pexels.com/@fotios-photos',
      'photographer_id': 26735,
      'avg_color': '#666666',
      'src': {
        'original': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg',
        'large2x': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9480102/pexels-photo-9480102.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9507863,
      'width': 3000,
      'height': 4000,
      'url': 'https://www.pexels.com/photo/purple-leaves-on-white-background-9507863/',
      'photographer': 'Kulbir',
      'photographer_url': 'https://www.pexels.com/@plantsandgraphics',
      'photographer_id': 22209501,
      'avg_color': '#B7ADB6',
      'src': {
        'original': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg',
        'large2x': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9468795,
      'width': 3888,
      'height': 5184,
      'url': 'https://www.pexels.com/photo/white-and-brown-window-curtain-9468795/',
      'photographer': 'Lisa',
      'photographer_url': 'https://www.pexels.com/@fotios-photos',
      'photographer_id': 26735,
      'avg_color': '#3A3027',
      'src': {
        'original': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg',
        'large2x': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9468795/pexels-photo-9468795.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9480300,
      'width': 3888,
      'height': 5184,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-cars-parked-beside-building-9480300/',
      'photographer': 'Lisa',
      'photographer_url': 'https://www.pexels.com/@fotios-photos',
      'photographer_id': 26735,
      'avg_color': '#686868',
      'src': {
        'original': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg',
        'large2x': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9443699,
      'width': 4160,
      'height': 6240,
      'url': 'https://www.pexels.com/photo/topless-man-in-water-9443699/',
      'photographer': 'Mitya  Zotov',
      'photographer_url': 'https://www.pexels.com/@mitya-zotov-71755548',
      'photographer_id': 71755548,
      'avg_color': '#7F8F8F',
      'src': {
        'original': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg',
        'large2x': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9443587,
      'width': 4160,
      'height': 6240,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-girl-smiling-9443587/',
      'photographer': 'Mitya  Zotov',
      'photographer_url': 'https://www.pexels.com/@mitya-zotov-71755548',
      'photographer_id': 71755548,
      'avg_color': '#5F5F5F',
      'src': {
        'original': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg',
        'large2x': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9439904,
      'width': 2586,
      'height': 3652,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-woman-in-black-jacket-and-pants-walking-on-stairs-9439904/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#525252',
      'src': {
        'original': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg',
        'large2x': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9439931,
      'width': 2298,
      'height': 3561,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-concrete-pillar-9439931/',
      'photographer': 'Alex Kozlov',
      'photographer_url': 'https://www.pexels.com/@alex-kozlov-3442124',
      'photographer_id': 3442124,
      'avg_color': '#333333',
      'src': {
        'original': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg',
        'large2x': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9329355,
      'width': 3244,
      'height': 4866,
      'url': 'https://www.pexels.com/photo/woman-in-blue-one-piece-swimsuit-standing-on-beach-9329355/',
      'photographer': 'Lexa Nicole',
      'photographer_url': 'https://www.pexels.com/@lexa-nicole-88109157',
      'photographer_id': 88109157,
      'avg_color': '#B0BEC7',
      'src': {
        'original': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg',
        'large2x': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9351592,
      'width': 3917,
      'height': 4896,
      'url': 'https://www.pexels.com/photo/woman-in-black-jacket-standing-near-glass-door-9351592/',
      'photographer': 'Henrique Morais',
      'photographer_url': 'https://www.pexels.com/@henrique-morais-1906596',
      'photographer_id': 1906596,
      'avg_color': '#434434',
      'src': {
        'original': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg',
        'large2x': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9363205,
      'width': 4000,
      'height': 6000,
      'url': 'https://www.pexels.com/photo/man-in-white-crew-neck-shirt-9363205/',
      'photographer': 'Lara Jameson',
      'photographer_url': 'https://www.pexels.com/@lara-jameson',
      'photographer_id': 80197268,
      'avg_color': '#6D40B7',
      'src': {
        'original': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg',
        'large2x': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9363205/pexels-photo-9363205.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9321606,
      'width': 3535,
      'height': 5302,
      'url': 'https://www.pexels.com/photo/man-in-orange-and-black-t-shirt-wearing-black-cap-9321606/',
      'photographer': 'Erik Mclean',
      'photographer_url': 'https://www.pexels.com/@introspectivedsgn',
      'photographer_id': 2417028,
      'avg_color': '#8E5B40',
      'src': {
        'original': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg',
        'large2x': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9332139,
      'width': 3756,
      'height': 5037,
      'url': 'https://www.pexels.com/photo/woman-in-white-tank-top-holding-black-and-silver-headphones-9332139/',
      'photographer': 'Nina  Hill',
      'photographer_url': 'https://www.pexels.com/@nina-hill-76946523',
      'photographer_id': 76946523,
      'avg_color': '#AD8B6F',
      'src': {
        'original': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg',
        'large2x': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9332139/pexels-photo-9332139.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9320371,
      'width': 3456,
      'height': 5184,
      'url': 'https://www.pexels.com/photo/woman-in-purple-shirt-standing-beside-green-plant-9320371/',
      'photographer': 'Yaroslav Chaadaev',
      'photographer_url': 'https://www.pexels.com/@soulofmurcidus',
      'photographer_id': 82251264,
      'avg_color': '#654C4F',
      'src': {
        'original': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg',
        'large2x': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 7365263,
      'width': 1680,
      'height': 2592,
      'url': 'https://www.pexels.com/photo/white-clouds-and-blue-sky-during-night-time-7365263/',
      'photographer': 'Simon Gough',
      'photographer_url': 'https://www.pexels.com/@scgough',
      'photographer_id': 1785348,
      'avg_color': '#61779D',
      'src': {
        'original': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg',
        'large2x': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9320317,
      'width': 3456,
      'height': 5184,
      'url': 'https://www.pexels.com/photo/black-and-white-concrete-building-9320317/',
      'photographer': 'Yaroslav Chaadaev',
      'photographer_url': 'https://www.pexels.com/@soulofmurcidus',
      'photographer_id': 82251264,
      'avg_color': '#2F3A3E',
      'src': {
        'original': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg',
        'large2x': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9285378,
      'width': 2878,
      'height': 4391,
      'url': 'https://www.pexels.com/photo/grayscale-photo-of-palm-tree-9285378/',
      'photographer': 'mukesh s',
      'photographer_url': 'https://www.pexels.com/@mukesh-s-97169712',
      'photographer_id': 97169712,
      'avg_color': '#313131',
      'src': {
        'original': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg',
        'large2x': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9307233,
      'width': 2852,
      'height': 3565,
      'url': 'https://www.pexels.com/photo/a-diver-swimming-underwater-9307233/',
      'photographer': 'Leticia  Azevedo',
      'photographer_url': 'https://www.pexels.com/@leticia-azevedo-95410198',
      'photographer_id': 95410198,
      'avg_color': '#D8D8D8',
      'src': {
        'original': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg',
        'large2x': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9307233/pexels-photo-9307233.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    },
    {
      'id': 9320088,
      'width': 3449,
      'height': 4463,
      'url': 'https://www.pexels.com/photo/beach-woman-ocean-portrait-9320088/',
      'photographer': 'Lexa Nicole',
      'photographer_url': 'https://www.pexels.com/@lexa-nicole-88109157',
      'photographer_id': 88109157,
      'avg_color': '#B7B8B3',
      'src': {
        'original': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg',
        'large2x': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'large': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'medium': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&h=350',
        'small': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&h=130',
        'portrait': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        'landscape': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        'tiny': 'https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
      },
      'liked': false
    }
  ],
  'total_results': 8000,
  'next_page': 'https://api.pexels.com/v1/curated/?page=2&per_page=40'
}

const API_KEY = '563492ad6f91700001000001647246300ed247b7b6748ac61d528807';
const DEFAULT_URL = 'https://api.pexels.com/v1/curated?page=1&per_page=40';
const SERCH_URL = {
  start: 'https://api.pexels.com/v1/search?query=',
  end: '&page=1&per_page=20',
}

const fetchPhotos = async (URL) => {
  try {
    const response = await fetch(URL, {
      headers: {
       'Authorization': API_KEY,
      },
      method: 'GET',
    });
    if (!response.ok) return console.log('fetch response error');

    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
};

const TAG_NAMES = [
  'Nature',
  'People',
  'Ocean',
  'Autumn',
  'Planes',
  'Chill',
  'Sports',
  'Animals',
  'Architecture',
  'Indoor Plants',
  'Health',
  'Coffee break',
  'Books',
  'Food',
  'Music',
  'Design',
  'Art',
  'Finance',
  'Woodwork',
  'Cozy home',
  'Science',
  'Retro',
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [tags, setTags] = useState({ names: TAG_NAMES, currentIndex: -1 });
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState({show: false, photo: {}});

  const addToCart = (photo) => {
    setCart(state => [...state, photo]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const removeFromCart = (id) => {
    setCart(state => state.filter(cartPhoto => cartPhoto.id !== id));
  }

  const setFilter = (name) => {
    const setFilteredPhotos = async () => {
      const data = await fetchPhotos(SERCH_URL.start + name + SERCH_URL.end);
      setPhotos(data.photos);
      setTags(state => ({ ...state, currentIndex: state.names.findIndex(stateName => stateName === name)}));
    }
    setFilteredPhotos();
  };

  const openModal = (id) => {
    setModal({show: true, photo: photos.find(photo => photo.id === id)});
  };

  const closeModal = () => {
    setModal({show: false, photo: {}});
  };

  useEffect(() => {
    // const getPhotos = async () => {
    //   const data = await fetchPhotos(DEFAULT_URL);
    //   setPhotos(data.photos);
    // }
    // getPhotos();
    setPhotos(mocks.photos);
  },[]);

  return (
    <Router>
      <Header cartCount={cart.length} setFilter={setFilter}/>
      <Switch>
        <Route path='/' exact>
          <div className='container'>
            <Gallery photos={photos} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} tags={tags} setTag={setFilter}/>
          </div>
        </Route>
        <Route path='/cart'>
          <div className='container'>
            <Cart cart={cart} openModal={openModal} handleRemoveFromCart={removeFromCart}/>
          </div>
        </Route>
      </Switch>
      <Modal modalShow={modal.show} modalPhoto={modal.photo} modalClose={closeModal} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}/>
    </Router>
  );
}

export default App;
