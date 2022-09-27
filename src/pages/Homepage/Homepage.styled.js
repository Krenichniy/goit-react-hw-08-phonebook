import styled from "styled-components";
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
        color:teal;
        text-decoration:none;
        &:hover{
                color:#ff8500de;
        }
`
export const StyledMoviesList = styled.ul`
        margin:0;
        padding:0;
        list-style:none;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
`
export const StyledItem = styled.li`
        display:flex;
        align-items:center;
        padding:5px;
        border-radius: 10px;
        
        margin-bottom:30px;
        transform:scale(1);
        transition: transform 500ms linear;
        &:hover, &:focus{
                box-shadow: 0 8px 20px rgba(0,128,128,0.5), 0 20px 25px rgba(0,128,128,0.5);
                transform:scale(1.1);
        }
`

export const StyledTitle = styled.p`
        width:200px;
`