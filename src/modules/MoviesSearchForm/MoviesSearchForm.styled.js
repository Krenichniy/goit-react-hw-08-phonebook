import styled from "styled-components";
export const UserInput = styled.input`
        width:350px;
        height: 20px;
        margin-right:10px;
        padding: 14px 0px 14px 5px;
        font-size: 18px;
        border: 1px solid rgba(33, 33, 33, 0.2);
        border-radius: 4px;
        outline: none;
        transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
            border-color: #ff6c00;
        
`;

export const SearchStyledBtn = styled.button`
        display:block;
        width: 150px;
        height: 50px;
        padding: 10px;
        background-color: rgb(9, 26, 156);
        color: rgb(214, 220, 24);
        border-radius:5px ;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: 0.05em;   
        text-decoration: none;
        text-align: center;

        &:hover{
            background-color: rgb(255, 238, 0);
            color:blue;
            border:none;
}
`
export const StyledLabel = styled.label`
        display:flex;
        justify-content:center;
        align-items:center;
`
