import { ReactNode } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { useThemeSelector } from "../../common/theme/default-theme";

interface ICardStyleProps {
    height?: number;
    width?: number;
    theme: any;
}

let CardStyle = styled.View<ICardStyleProps>`
    height: ${(props) => (props.height || '100px') + 'px'};
    width: ${(props) => (props.width || '100px') + 'px'};
    background-color: ${props => props.theme.color.primary};
    border-radius: 25px;
    padding: 16px;
    margin: 20px;

    ${Platform.select({
        ios: `
            shadow-color: #c1c1c1;
            shadow-offset: 0px 2px;
            shadow-opacity: 0.1;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 2.5;
        `,
    })}
`;

export default function Card({ height, width, children }: ICardProps) {
    const defaultTheme = useThemeSelector();

    return <CardStyle height={height} width={width} theme={defaultTheme}>
        {children}
    </CardStyle>;
}

interface ICardProps {
    height?: number;
    width?: number;
    children?: ReactNode;
}