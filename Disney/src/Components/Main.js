import React from "react";

import HeaderMain from "./HeaderMain";
import styled from "styled-components";

function Main() {
    return (
        <Container>
            <HeaderMain />
            <h1>Main</h1>
        </Container>
    )
}

const Container = styled.div`

`

export default Main;