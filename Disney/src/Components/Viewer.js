import React from "react";
import styled from "styled-components";



function Viewer(props) {

    return (
        <Container>
            <Wrap>
                <img  src="/assets/img/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <img  src="/assets/img/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
                <img  src="/assets/img/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
                <img  src="/assets/img/viewers-starwars.png"/>
            </Wrap>
            <Wrap>
                <img  src="/assets/img/viewers-national.png"/>
            </Wrap>
        </Container>
    );

}

const Container = styled.div`
   
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));


    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`

const Wrap = styled.div`
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position: relative;

    img {
        inset: 0px;
        display: block;
        position: absolute;
        height: 100%;
        object-fit: cover;
        opacity: 1;
    }
    border: 3px solid #5c5c5c;
`


export default Viewer;