import styled from 'styled-components';
import img from '../assets/home-bg.jpg';

export const StyledHeader = styled.header`
& {
    position: relative;
    margin-bottom: 3rem;
    padding-top: calc(8rem + 57px);
    padding-bottom: 8rem;
    background: no-repeat center center;
    background-color: #6c757d;
    background-size: cover;
    background-attachment: scroll;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${img});
    opacity: 0.5;
  }
`