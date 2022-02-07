import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";

function ImgSlider(props) {

    let settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                  <a>
                      <img src="/assets/img/slider-badging.jpg"/>
                  </a>
                </Wrap>

                <Wrap>
                  <a>
                      <img src="/assets/img/slider-scale.jpg"/>
                  </a>
                </Wrap>

                <Wrap>
                  <a>
                      <img src="/assets/img/slider-badag.jpg"/>
                  </a>
                </Wrap>

                <Wrap>
                  <a>
                      <img src="/assets/img/slider-scales.jpg"/>
                  </a>
                </Wrap>

            </Carousel>
        </div>
    )
}


const Carousel = styled(Slider)`
    margin-top: 0px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

    &:hover {
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
 } 

 ul li button {
     &:before {
         font-size: 10px;
         color: rgb(150, 158, 171);
     }
 }

 li.stick-active button:before {
     color: white;
 }

 .stick-list {
     overflow: initial;
 }

`

const Wrap = styled.div`
      a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
      }
    img {
      width: 100%;
      height: 100%;
    }

    & > img {
        width: 100%;
    }

    & a:hover {
        border: 3px solid white;
    }
`

export default ImgSlider;