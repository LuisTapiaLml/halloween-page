import React from 'react';
import ReactDOM from 'react-dom';
import { Halloween } from './Halloween';
import './styles/halloween.scss'

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';


ReactDOM.render(
  <Halloween />,
  document.getElementById('root')
);
