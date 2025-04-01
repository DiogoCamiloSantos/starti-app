import { useState } from "react";
import { Button, View } from "react-native";
import { useDispatch } from 'react-redux';
import darkTheme from "../../common/theme/dark-theme";
import lightTheme from "../../common/theme/light-theme";
import Card from "../../components/Card/Card";
import Score from "../../components/Score/Score";
import ScoreService from "../../core/service/Score/Score.service";


export default function HomePage() {
    console.log('View - 3');

    const [theme, setTheme] = useState('light');

    const dispatch = useDispatch();

    const toggleTheme = () => {
        setTheme((theme == 'light') ? 'dark' : 'light');
        dispatch({ type: 'TOGGLE_THEME', payload: (theme == 'light' ? lightTheme : darkTheme) });        
    };

    return <View>
        <Card height={100}>
            <Button title="Trocar Tema" onPress={toggleTheme}></Button>
        </Card>
        <Card height={100} />
    </View>
}