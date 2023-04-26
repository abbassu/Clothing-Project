import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from "./../../imageee/a11.png";
import logo2 from "./../../imageee/a22.png";
import logo3 from "./../../imageee/a33.png";
import HomePage from '../homepage/HomePage';

import "./tt.scss"

function Test() {
  return (
    <div className='sllidebarr'> 

    <Carousel className='fafa'>
      <Carousel.Item className='fafaibn'>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p className='tete'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fafaibn'>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className='tete'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fafaibn'>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className='tete'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Test