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
                <div>
                   <h3>Nps</h3>
                </div>
                <div>
                   <h3>1</h3>
                </div>
                <div>
                   <h3>778</h3>
                </div>
            </Carousel>
        </div>
    )
}


const Carousel = styled(Slider)`
    margin-top: 20px;

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
         font-size: 20px;
         color: white;
     }
 }

 .stick-list {
     overflow: initial;
 }

`

export default ImgSlider;