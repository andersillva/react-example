import styled from 'styled-components';

export const StyledRecentPostList = styled.div`
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    padding-right: 10rem !important;
    padding-left: 10rem !important;

    div {
        flex-wrap: wrap;
        justify-content: center !important;
        
        div {
            h1 {
                font-size: 2rem;
                margin-top: 1.875rem;
                margin-bottom: 0.625rem;
                text-align: center;
            }
        }

    }
`