import { NavigationHelpers } from "@react-navigation/native";
import { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { TabPageEnum } from "../../domain/enums/tab-page.enum";
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

export default (props: IFooter) => {
    const [activatedTabIndex, setActivatedTabIndex] = useState(TabPageEnum.Home);
    const navigate = (tab: TabPageEnum) => {

        props.navigation.navigate(tab);
        
        setActivatedTabIndex(tab);
    };

    return (
        <FooterStyle>
            <TabItem description={TabPageEnum.Levels} icon="stats" onSelectedTab={() => navigate(TabPageEnum.Levels)} activated={activatedTabIndex === TabPageEnum.Levels}></TabItem>
            <TabItem description={TabPageEnum.Researchs} icon="search" onSelectedTab={() => navigate(TabPageEnum.Researchs)} activated={activatedTabIndex === TabPageEnum.Researchs} />
            <TabItem description={TabPageEnum.Home} icon="home" onSelectedTab={() => navigate(TabPageEnum.Home)} activated={activatedTabIndex === TabPageEnum.Home} />
            <TabItem description={TabPageEnum.Chat} icon="chat" onSelectedTab={() => navigate(TabPageEnum.Chat)} activated={activatedTabIndex === TabPageEnum.Chat} />
            <TabItem description={TabPageEnum.Profile} icon="profile" onSelectedTab={() => navigate(TabPageEnum.Profile)} activated={activatedTabIndex === TabPageEnum.Profile} />
        </FooterStyle>
    )
}

interface IFooter {
    onSelectedTab?: Function,
    activatedTabIndex?: number,
    navigation: NavigationHelpers<any, any>;
}