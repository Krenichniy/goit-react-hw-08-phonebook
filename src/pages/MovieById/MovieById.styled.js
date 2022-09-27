import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
        &:not(:last-child){
            margin-right:20px;
        }
`
export const StyledNavContainer = styled.div`
            display:flex;
            align-items:center;

`
export const StyledCardcontainer = styled.div`
            max-width:800px;
            width:100%;
            display:flex;
            padding:30px;  
            
            & div:first-child{
                margin-right:30px;
            }
`

export const AdditionalContainer = styled.div`
 
`