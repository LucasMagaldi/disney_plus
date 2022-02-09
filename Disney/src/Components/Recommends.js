import React from "react";
import styled from "styled-components";
import { Link } from   'react-router-dom';

function Recommends() {
    return (
        <Container>
            <h1>Recommends to you</h1>
            <Content>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap:25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

`

export default Recommends;