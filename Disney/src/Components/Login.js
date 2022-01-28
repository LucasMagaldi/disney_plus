import React from "react";
import styled from 'styled-components';

import { Link } from 'react-router-dom'

function Login(props) {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/assets/img/cta-logo-one.svg" />  
                    <SingUp >GET ALL THERE</SingUp>
                    <Description >
                        Get Premier Access to Raya and the Last Dragon 
                        for an additional  free with a Disney+ subscription.
                        As of 06/25/2022, the price of Disney+ and the Disney
                        Bundle will increse by $1.
                    </Description>
                    <CTALogoOne src="/assets/img/cta-logo-two.png" />
                </CTA>
              <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/assets/img/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 850px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    align-items: center;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 700px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SingUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 24px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    text-align: center;

    &:hover {
        background-color: #0483ee;
    }

`

const Description = styled.p`
    
    color: hsla(0, 0%, 95.3%, 1);
    line-height: 1.5;
    text-align: center;
`

export default Login;