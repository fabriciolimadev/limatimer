import styled from "styled-components";

export const HomeContainer = styled.main`
        flex: 1;
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;

        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3.5rem;
        }

`




const BaseButton = styled.button`
width: 100%;
    border: 0;
    padding: 1rem;

    font-weight: bold;
    font-size: 1.125rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme["gray-100"]};
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

`

export const StartCountdownButton = styled(BaseButton)`
    background-color: ${props => props.theme["green-500"]};
    
        &:not(:disabled):hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
     }

`




export const StopCountdownButton = styled(BaseButton)`
    background-color: ${props => props.theme["red-500"]};
    &:not(:disabled):hover {
        background-color: ${props => props.theme["red-700"]};
        transition: background-color 0.2s;
     }
`