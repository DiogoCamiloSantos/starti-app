import styled from "styled-components/native";
import { useFonts } from 'expo-font';
import { useCallback } from "react";

interface ILabelStyleProps {
    size?: number;
    color?: string;
    align?: 'center' | 'left' | 'right'; 
    children?: any;
}

const LabelStyle = styled.Text<ILabelStyleProps>`
    font-family: 'Comfortaa-Regular';
    font-size:  ${props => (props.size || 10) + 'px;' };
    text-align:  ${props => props.align || 'left' };
    color: ${props => (props.color || props.theme.color.font)};
`
export default (props: ILabelStyleProps) => {
    const [fontsLoaded, fontError] = useFonts({
        'Comfortaa-Regular': require('../../../assets/font/Comfortaa-Regular.ttf')
      });

      const onLayoutRootView = useCallback(async () => {
        
      }, [fontsLoaded, fontError]);
    

    return <LabelStyle {...props} style={{ fontFamily: 'Comfortaa-Regular' }}>
        {props.children}
    </LabelStyle>;
}
