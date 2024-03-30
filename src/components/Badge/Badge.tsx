import styled from "styled-components/native";
import LabelStyle from "../Label/Label";

const BadgeStyle = styled.View`
    height: 20px;
    padding: 0 5px;
    border-radius: 5px;
    background-color:  ${props => props.theme.color.emphasis};
`;

const DescriptionStyle = styled(LabelStyle)`
    color: white;
    line-height: 20px;
`;

export default function Badge({ text }: any) {
    return (
        <BadgeStyle>
            <DescriptionStyle>{text}</DescriptionStyle>
        </BadgeStyle>
    )
};