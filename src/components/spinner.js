import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const StyledSpinner = styled.svg`
  animation: ${rotate} 2s linear infinite;
  will-change: stroke-dasharray, stroke-dashoffset;
  margin: auto;
  height: 28px;

  .path {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-width: 4px;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`

export const Spinner = (props) => (
  <StyledSpinner viewBox='0 0 50 50' {...props}>
    <circle className='path' cx='25' cy='25' r='20' />
  </StyledSpinner>
)
