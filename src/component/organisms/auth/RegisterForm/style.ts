import styled from "styled-components";


export const RegisterFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 4rem;

    .login-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        .email-info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                width: 68%;
            }

            .right {
                width: 30%;
            }
        }
    }

    .user-info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        .birth-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nickname-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .left {
                width: 68%;
            }
            
            .right {
                width: 30%;
            }
        }
    }
`