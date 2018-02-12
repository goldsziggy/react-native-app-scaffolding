import styled from 'styled-components';

export default Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
    margin: 10px 5px;
    padding: 5px;
    color: #fff;
    border-bottom-color: #fff;
    border-bottom-width: 1;
    height: ${props => (props.height ? props.height : '20px')};
    width: ${props => (props.width ? props.width : '60px')};
`;
