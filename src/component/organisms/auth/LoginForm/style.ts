import styled from "styled-components";

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 8rem 2rem;

    .login-main {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.7rem;
        
        .title {
            padding: 2rem;
            font-size: 3rem;
            display: flex;
            justify-content: center;
        }

        .save-login-state-btn {
            text-align: initial;
            padding: 0;
            display: flex;
            align-items: center;
            color: var(--gray-500);

            svg {
                width: 24px;

                
            }
        }
    }
    
    .btn-group {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        width: 30%;

        .menu {
            text-align: center;

            .bar {
                font-size: 0.8rem;
                color: var(--gray-500);
                margin: 0 1rem;
            }
        }
    }
`