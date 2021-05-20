import React from 'react';
import '../../css/about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about-page'>
      <div className='about-text'>
        <p>
          <h3> Hanmal 24 Restaurant </h3> Hanmal 24 Haifa Port French restaurant
          Italian food, French food, seafood New at Port 24! Thursdays - a
          special banquet atmosphere in honor of the weekend, during which enjoy
          our new bar which includes a variety of unique nails. Port 24, a
          wonderful chef's restaurant owned by chef Ran Rosh, is located on Port
          Street - in the developing entertainment complex in the lower city of
          Haifa.
        </p>
        <p>
          Port 24 combines gourmet food, spectacular Tuscan design and courteous
          and professional service. Chef Ran Rosh, a graduate of the Paul
          Bouqués High School in Lyon, France, offers a menu influenced by the
          cooking methods of French cuisine, and contains touches of Italian and
          Mediterranean cuisine.
        </p>
        <p>
          {' '}
          The restaurant is designed as a Tuscan villa and is divided into
          beautifully designed private rooms, which create a new guest
          experience in each and every room: the main piazza, the romantic
          double room, the wine cellar and the conference room. The restaurant
          has a hall for boutique events, used for family events, conferences
          and social evenings.
        </p>
      </div>
      <div className='about-info'>
        <p>Activity time: Thursday: 18:00-22:00</p>
        <p> Friday-Saturday: 12:00-22:00</p>
        <p> Phone: 053-9442262</p>
      </div>
      <div className='div-btn dark'>
        <Link to='/dishes'>
          <button className='menu-btn'>To Our Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default About;

// https://hanamal24.rest.co.il/img/0580/679.jpg
