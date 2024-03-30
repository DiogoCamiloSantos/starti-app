import styled from "styled-components/native";

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
export default (props: ILabelStyleProps) => <LabelStyle {...props}>
    {props.children}
</LabelStyle>; 
