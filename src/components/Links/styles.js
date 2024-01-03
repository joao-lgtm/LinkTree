import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #c0576f;
    padding: 15px;
    box-shadow: -9px -1px 16px #7e2f56;
    border: 1px #363636 solid;
    border-radius: 12px;
    transition: 0.4s;
   > a {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        text-decoration: none;
        color: #FFFFFF;
        text-align: center;

        > span {
          font-size: 26px;
        }
   }

   &:hover{
        transition: 0.4s;
        box-shadow: 1px 2px 16px #e48679;
   }
`