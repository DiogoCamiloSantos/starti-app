import styled from "styled-components/native";

interface ILabelStyleProps {
    size?: number;
    color?: string;
}

const Label = styled.Text<ILabelStyleProps>`
    font-family: 'Comfortaa-Regular';
    ${props => props.size && 'font-size: ' + props.size + 'px;' };
    color: ${props => (props.color || props.theme.color.font)};
`
export default Label; 
