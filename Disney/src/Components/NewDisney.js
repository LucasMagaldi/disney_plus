import React from "react";
import styled from "styled-components";
import { Link } from   'react-router-dom';

function NewDisney() {
    return (
        <Container>
            <h2>New on Disney+</h2>
            <Content>
                
                <Wrap>
                    <Link to='/'>
                        <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_W8OdG5Zz7Au4.png.jpeg" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_W8OdG5Zz7Au4.png.jpeg" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_W8OdG5Zz7Au4.png.jpeg" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_W8OdG5Zz7Au4.png.jpeg" />
                    </Link>
                </Wrap>
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

const Wrap = styled.div`
    padding-top: 56%;
    border-radius: 10px;
    box-shadow: rgb(0, 0 ,0 / 69%) 0px 26px 30px -10px,
    rgb(0, 0 ,0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        object-fit: cover;
        position: absolute;
        height: 100%;
        z-index: 1;
        transition: opacity 500ms ease-in-out 0s;
    }

    &:hover {
        box-shadow: rgb(0, 0 ,0 / 80%) 0px 40px 58px -16px,
        rgb(0, 0 ,0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.07);
        border-color: rgba( 249, 249, 249, 0.8) ;
    }
`

export default NewDisney;