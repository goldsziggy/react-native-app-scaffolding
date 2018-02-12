import React from 'react';
import styled from 'styled-components';

const Btn = styled.TouchableHighlight.attrs({
    underlayColor: '#ccc'
})`
    background-color: #fff;
    justify-content: center;
    margin-top: 10px;
    border-radius: 100px;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
`;

// for text styling of button later
const ButtonText = styled.Text``;

export default Button = props => {
    const { height, width, title } = props;
    return (
        <Btn {...props} height={height} width={width}>
            <ButtonText>{props.value}</ButtonText>
        </Btn>
    );
};
