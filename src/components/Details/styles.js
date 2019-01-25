import styled from 'styled-components/native'

export const Container = styled.View`
    background: #FFF;
    height: 230px;
    width: 100%;
    position: absolute;
    bottom: 50px;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 0.3;
    border: 1px solid #FFF;
    align-items: center;
    padding: 20px;
`

export const TypeTitle = styled.Text`
    font-size: 20px;
    color: #222;
`
export const TypeDescription = styled.Text`
    color: #666;
    font-size: 14px;
`
export const RequestButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
    padding: 6px;
`
export const TypeImage = styled.Image`
    height: 70px;
    margin:10px 0;
`
export const RequestButton = styled.TouchableOpacity`
    background: #666699;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    margin: 3px;  
`
