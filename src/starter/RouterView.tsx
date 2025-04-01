import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from "react";
import { View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { useThemeSelector } from "../common/theme/default-theme";
import BackgroundImageContainer from "../components/BackgroundImage/BackgroundImageContainer";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import Nav from "../components/Nav/Nav";
import { TabPageEnum } from '../domain/enums/tab-page.enum';
import ChatPage from "../pages/Home/Chat";
import HomePage from "../pages/Home/Home";
import LevelsPage from "../pages/Home/Levels";
import ProfilePage from "../pages/Home/Profile";
import ResearchsPage from "../pages/Home/Researchs";
import LoginPage from "../pages/Login/Login";
import { useAuthenticationSelector } from "../redux/reducer/Authentication/authentication-selector";

const Tab = createBottomTabNavigator();
const RouterViewStyle = styled.View`
    background-color: ${props => props.theme.color.background};
    height: 100%;
`;

const NavigationContainerStyle = () => {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{ header: () => <Nav /> }}
            tabBar={props => <Footer {...props} />}
            initialRouteName={TabPageEnum.Home}>
            <Tab.Screen name={TabPageEnum.Levels} component={LevelsPage} />
            <Tab.Screen name={TabPageEnum.Researchs} component={ResearchsPage} />
            <Tab.Screen name={TabPageEnum.Home} component={HomePage} />
            <Tab.Screen name={TabPageEnum.Chat} component={ChatPage} />
            <Tab.Screen name={TabPageEnum.Profile} component={ProfilePage} />
        </Tab.Navigator>
    </NavigationContainer>;
}

export default () => {
    const theme = useThemeSelector();
    const authenticated = useAuthenticationSelector();
    const [enable, setEnable] = useState(false);

    setTimeout(() => {
        setEnable(true);
    }, 10000);

    return (
        <ThemeProvider theme={theme}>
            {!authenticated && <LoginPage />}
            {(authenticated && enable)
                ? <RouterViewStyle>
                    <NavigationContainerStyle />
                </RouterViewStyle>
                : <BackgroundImageContainer>
                    <View style={{ paddingTop: 50 }}>
                        <Loading duration={10000} loops={7} size={60} />
                    </View>
                </BackgroundImageContainer>
            }
        </ThemeProvider>
    )
}
