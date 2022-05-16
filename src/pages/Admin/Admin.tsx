import React from "react";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";

const Admin = () => {
    return (
        <Wrapper>
            <Sidebar>
            </Sidebar>
        </Wrapper>
    )
}

const Sidebar = styled.div`
    width: 30%;
    height: 100vh;
    overflow-y: scroll;
    scrollbar-width: 0;
    background: #333;
`

export default Admin;