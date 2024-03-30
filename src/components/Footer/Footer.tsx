import { Platform } from "react-native";
import styled from "styled-components/native";
import TabItem from "./Itens/TabItem";

const FooterStyle = styled.View`
    height: 80px;
    width: 100%;
    border-top-right-radius: 36px;
    border-top-left-radius: 36px;
    background-color: ${props => props.theme.color.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding: 6px 24px;

    ${Platform.select({
        ios: `
            shadow-color: #000;
            shadow-offset: 0px 2px;
            shadow-opacity: 0.1;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 20;
        `,
    })}

`

export default function Footer(props: IFooter) {

    return (
        <FooterStyle>
            <TabItem description="Níveis" icon="stats" onSelectedTab={() => props.onSelectedTab(0)} activated={props.activatedTabIndex === 0}></TabItem>
            <TabItem description="Pesquisas" icon="search" onSelectedTab={() => props.onSelectedTab(1)} activated={props.activatedTabIndex === 1} />
            <TabItem description="Início" icon="home" onSelectedTab={() => props.onSelectedTab(2)} activated={props.activatedTabIndex === 2} />
            <TabItem description="Chat" icon="chat" onSelectedTab={() => props.onSelectedTab(3)} activated={props.activatedTabIndex === 3} />
            <TabItem description="Perfil" icon="profile" onSelectedTab={() => props.onSelectedTab(4)} activated={props.activatedTabIndex === 4} />
        </FooterStyle>
    )
}

interface IFooter {
    onSelectedTab: Function,
    activatedTabIndex: number
}