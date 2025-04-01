import styled from "styled-components/native";
import Label from "../Label/Label";

const BadgeStyle = styled.View`
    height: 24px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color:  ${props => props.theme.color.emphasis};
`;

export default function Badge({ text }: any) {
    return (
        <BadgeStyle>
            <Label size={12} color="white">{text}</Label>
        </BadgeStyle>
    )
};