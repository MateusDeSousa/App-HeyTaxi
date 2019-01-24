import Styled, {css} from 'styled-components/native'
import { Platform} from 'react-native'

export const LocationBox = Styled.View`
    background: #FFF;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 0.1;
    border: 1px solid #ddd;
    border-radius: 3px;
    flex-direction: row;

    ${Platform.select({
        ios: css`
            margin-top: 20px;
        `,
        android: css`
            margin-top: 30px;
            margin-left: 10px;
        `
    })}
`;

export const LocationText = Styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
`;

export const LocationTimeBox = Styled.View`
    background: #666699;
    padding: 3px 8px;
`
export const LocationTimeText = Styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight:bold;
    text-align: center;
`

export const LocationTimeTextSmall = Styled.Text`
    color: #fff;
    font-size: 10px;
    font-weight:bold;
    text-align: center;
`