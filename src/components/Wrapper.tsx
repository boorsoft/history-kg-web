import React, { FC } from "react"
import styled from "styled-components"

const Wrapper: FC<{children: JSX.Element}> = ({children}) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

const StyledWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
`

export default Wrapper;