const { default: styled } = require('styled-components');

export const StyledContainer = styled.div`
        width:1200px;
        margin: 0 auto ;
        padding: 30px 15px;
`
export const StyledCastConatiner = styled.ul`
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        margin:0;
        padding:0;
`

export const StyledCastItem = styled.li`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        width:200px;
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