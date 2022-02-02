import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { auth, signOut } from '../FirebaseConfig'

function HeaderMain() {

    const signOutUser = localStorage.getItem("StatusConnect");
    const imgUserProfile = localStorage.getItem("photoURL");

    useEffect( () => {
        console.log(imgUserProfile)
    }, [] )

    const SignOutGoogle = () => {
        signOut(auth).then(()=> {
            localStorage.setItem("StatusConnect", false);
            window.location.href = "/";
        })
        .catch((erro) => {
            console.log(erro)
        });
    }

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
            {
             signOutUser ?
             <SignOutButton onClick={SignOutGoogle}>
                <SignOutImg  src={imgUserProfile}/>
             </SignOutButton>
             
             :
             <LoginButton >SignIn</LoginButton>
            }
            
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
    padding: 20px 36px;
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

const SignOutButton = styled.button`
    height: 55px;
    width: 55px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
`


const SignOutImg = styled.img`
    height: 100%;
    border-radius: 30px;
`

const Links = styled.div`
    a {
        cursor: pointer;
        padding-right: 40px ;
        font-weight: bold
    }
`

export default HeaderMain;