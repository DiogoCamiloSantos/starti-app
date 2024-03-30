import { forwardRef, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import styled, { ThemeProvider } from "styled-components/native";
import { useThemeSelector } from "../common/theme/default-theme";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { TabPageEnum } from "../domain/enums/tab-page.enum";
import ChatPage from "../pages/Home/Chat";
import HomePage from "../pages/Home/Home";
import LevelsPage from "../pages/Home/Levels";
import ProfilePage from "../pages/Home/Profile";
import ResearchsPage from "../pages/Home/Researchs";
import LoginPage from "../pages/Login/Login";
import { useAuthenticationSelector } from "../redux/reducer/Authentication/authentication-selector";
import BackgroundImageContainer from "../components/BackgroundImage/BackgroundImageContainer";
import Loading from "../components/Loading/Loading";

const RouterViewStyle = styled.View`
    background-color: ${props => props.theme.color.background};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
`

const TabNavigationView = forwardRef((props, ref) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: String(TabPageEnum.Levels) },
        { key: String(TabPageEnum.Researchs) },
        { key: String(TabPageEnum.Home) },
        { key: String(TabPageEnum.Chat) },
        { key: String(TabPageEnum.Profile) },
    ]);

    return <>
        <Nav />
        <TabView 
            renderTabBar={() => null}
            navigationState={{ index, routes }}
            renderScene={({ route }) => {
                switch (route.key) {
                    case String(TabPageEnum.Levels):
                        return index === TabPageEnum.Levels ? <LevelsPage /> : null;
                    case String(TabPageEnum.Researchs):
                        return index === TabPageEnum.Researchs ? <ResearchsPage /> : null;
                    case String(TabPageEnum.Home):
                        return index === TabPageEnum.Home ? <HomePage /> : null;
                    case String(TabPageEnum.Chat):
                        return index === TabPageEnum.Chat ? <ChatPage /> : null;
                    case String(TabPageEnum.Profile):
                        return index === TabPageEnum.Profile ? <ProfilePage /> : null;
                    default:
                        return null;
                }
            }}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
        <Footer onSelectedTab={setIndex} activatedTabIndex={index} />
    </>
});


export default function RouterView() {
    const theme = useThemeSelector();
    const authentication = useAuthenticationSelector();

    const [enable, setEnable] = useState(false);

    console.log(`teste`, authentication);

    setTimeout(()=> {
        setEnable(true);
    }, 10000);
   

    return (
        <ThemeProvider theme={theme}>
            {!authentication && <LoginPage />}
            {(authentication && enable)
                ? <RouterViewStyle>
                    <TabNavigationView />
                </RouterViewStyle>
                : <BackgroundImageContainer style> 
                    <View style={{paddingTop: 50}}>
                        <Loading duration={10000} loops={7} height={80} width={80} />
                    </View>
                </BackgroundImageContainer>
            }
        </ThemeProvider>
    )
}

const LoadingStyle = styled(Loading)`
`