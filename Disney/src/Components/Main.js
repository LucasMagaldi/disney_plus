import React from "react";

import HeaderMain from "./HeaderMain";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import styled from "styled-components";

function Main() {
    return (
        <Container>
            <HeaderMain />
            <ConteinerMain> 
                <ImgSlider />
                <Viewer />
                
            </ConteinerMain>
            
        </Container>
    )
}

const Container = styled.div`
`
const ConteinerMain = styled.div`
    position: relative;
   // background-image: url('/assets/img/home-background.png');
   min-height: calc(100vh-250px);
   overflow-x: hidden;
   display: block;
   top: 30px;
   padding: 0 calc(3.5vw + 5px);
   overflow-y: hidden;

   &:after {
       background: center center / cover no-repeat fixed;
        opacity: 1;
  }
`
export default Main;