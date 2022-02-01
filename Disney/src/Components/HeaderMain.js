import React from "react";

import styled from "styled-components";

function    HeaderMain() {
    return (
        <Container>
            <Logo href='/'>              
                <img src="/assets/img/logo.svg"  />
            </Logo>
            <Links>
                <a>BEGIN</a>
                <a>SEARCH</a>
                <a>MY LIST</a>
                <a>ORIGINALS</a>
                <a>MOVIES</a>
                <a>SHOWS</a>
            </Links>
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
   cursor: pointer;

   img { 
       width: 100%;
       height: 50px;
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

const Links = styled.div`
    a {
        cursor: pointer;
        padding-right: 40px ;
        font-weight: bold
    }
`

export default HeaderMain;