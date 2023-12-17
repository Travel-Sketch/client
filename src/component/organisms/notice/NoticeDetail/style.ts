import styled from "styled-components";

export const NoticeDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 60%;
    margin: auto;
    
    .main-title {
        margin: 2rem;
        text-align: center;
        font-size: 4rem;
        padding-bottom: 2rem;
        
        border-bottom: black 2px solid;
    }
    
    .top-content {
        margin: 0 2rem;
        padding-bottom: 2rem;
        display: flex;
        justify-content: space-between;

        border-bottom: gray 1px solid;
    }

    .top-content > div {
        font-size: 1.25rem;
    }
    
    .content {
        margin: 2rem 3.5rem;
    }
`;