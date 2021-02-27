import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    margin: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    color: #4A4A4A;

    &:hover {
        color: #000;
        transform: scale(1.05);
        cursor: pointer;
    }
`;
