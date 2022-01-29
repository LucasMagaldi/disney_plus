import React from "react";

import styled from "styled-components";

function Header() {
    return (
        <Container>
            <Logo>
               
                <img src="/assets/img/logo.svg" />
            </Logo>
            <LoginButton href="https://www.youtube.com/">LOGIN</LoginButton>
        </Container>
    )
}

const Container = styled.div`
    //position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13;
    padding: 15px 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`

const Logo = styled.a`
   position: relative;
   

   img { 
       width: 100%;
       height: 50px;
       cursor: pointer;
   }
`

const LoginButton = styled.a`
   font-size:16px;
   padding: 10px;
   background-color: none;
   border-radius: 4px;
   cursor: pointer;
   border: 1px solid #f9f9f9;
`

export default Header;