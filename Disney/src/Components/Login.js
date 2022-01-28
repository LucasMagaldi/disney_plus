import React from "react";
import styled from 'styled-components';

function Login(props) {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/assets/img/cta-logo-one.svg" />  
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
    font-size: 24px;
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

export default Login;