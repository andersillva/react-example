import styled from 'styled-components';

export const StyledMainMenu = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    flex-wrap: nowrap;
    justify-content: flex-start;

    div {
        width: 100%;
        margin-right: auto;
        margin-left: auto !important;
        padding-right: var(--bs-gutter-x, 0.75rem);
        padding-left: var(--bs-gutter-x, 0.75rem);

        ul {
            display: flex;
            flex-direction: row;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
    
            li {
                font-size: 0.75rem;
                font-weight: 800;
                letter-spacing: 0.0625em;
                text-transform: uppercase;
                padding-right: 0.5rem;
                padding-left: 0.5rem;

                a {
                    color: #fff;
                }
                a:focus {
                    color: rgba(255, 255, 255, 0.8);
                }
                a:hover {
                    color: #0085A1;
                }
                
            }
        }
    }
`