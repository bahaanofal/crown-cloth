import styled from 'styled-components';

export const SignInAndSignUp = styled.div`
	width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        grid-gap: 30px;
        padding: 0 10px;
    }
`;
