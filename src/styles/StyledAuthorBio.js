import styled from 'styled-components';

export const StyledAuthorBio = styled.div`
    margin-right: auto;
    margin-left: auto;
    position: relative !important;
    padding-right: 3rem !important;
    padding-left: 3rem !important;

    div {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(var(--bs-gutter-y) * -1);
        margin-right: calc(var(--bs-gutter-x) * -.5);
        margin-left: calc(var(--bs-gutter-x) * -.5);
        justify-content: center !important;

        div {
            flex: 0 0 auto;
            width: 83.33333333%;

            div {
                color: #fff;
                text-align: center;

                h1 {
                    font-size: 3rem;
                }

                span {
                    font-size: 1.5rem;
                    font-weight: 300;
                    line-height: 1.1;
                    display: block;
                    margin-top: 0.625rem;
                    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                }
            }
        }
    }
`