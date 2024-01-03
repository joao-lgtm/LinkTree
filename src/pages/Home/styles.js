import styled from "styled-components";


export const Container = styled.main`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 700px;
    margin: 0px auto;
    gap: 20px;
    border-radius: 15px;
    padding: 30px;

    > img {        
        border: 5px #e48679 solid;
        width: 200px;
        border-radius: 50%;
    }

`;

export const Contact = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;    
`;
