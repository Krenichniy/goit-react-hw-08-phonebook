import { useState } from "react";
import { StyledContainer } from '../../components/StyledComponent';
import { UserInput } from './MoviesSearchForm.styled';
import { SearchStyledBtn, StyledLabel } from '../MoviesSearchForm/MoviesSearchForm.styled';
export const MovieSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search:''
    })

    const handleChanges = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state, 
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ ...state });
        setState({ search:''})
    }

    return (
        <StyledContainer>
        <form onSubmit={handleSubmit}>
            <StyledLabel >
                <UserInput name="search" type="text" onChange={handleChanges} value={state.search } placeholder="Enter your favorite movie" required/>
                <SearchStyledBtn  type="submit">Search movie</SearchStyledBtn>
            </StyledLabel>
            </form>
            </StyledContainer>
    )
}
