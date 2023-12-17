import styled from "styled-components";

export const NoticeListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 60%;
    margin: auto;
    
    .main-title {
        margin: 2rem;
        text-align: center;
        font-size: 4rem;
    }
    
    .search-form {
        display: flex;
    }
    
    .page-info {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
    }
`;