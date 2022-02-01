import React from "react";

import styled from "styled-components";

import { auth, provider, signInWithPopup, GoogleAuthProvider } from "../FirebaseConfig";

function Header(props) {

    const handleAuth = () => {
        /*auth.signInWithPopup(provider)
        .then((result) =>{
            console.log(result)
        }).catch((erro) => {
            alert(erro)
        })*/

        signInWithPopup(auth, provider)
            .then((res)=>{
                const credential = GoogleAuthProvider.credentialFromResult(res);
                console.log(credential);
                const token = credential.accessToken;
                console.log(token);
                const user = res.user;
                console.log(user);
                localStorage.setItem("StatusConnect", true);
               window.location.href = "/home";
            }).catch((erro)=>{
                console.log(erro);
            });
    }

    return (
        <Container>
            <Logo href='/'>
               
                <img src="/assets/img/logo.svg"  />
            </Logo>
            <LoginButton onClick={handleAuth}>LOGIN</LoginButton>
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

export default Header;