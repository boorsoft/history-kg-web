import React from "react";
import { FC } from "react";
import styled from "styled-components";

const LoadingSpinner: FC = () => {
    return <Spinner />
}

const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 5px solid transparent;
    border-top-color: var(--accent-color);
    animation: 0.6s infinite loadingSpinner;

    @keyframes loadingSpinner {
        to {
            transform: rotate(1turn);
        }
    }
`

export default LoadingSpinner;