import { ScrollView, View } from "react-native";
import Card from "../../components/Card/Card";
import styled from "styled-components/native";
import Button from "../../components/Button/Button";
import LabelStyle from "../../components/Label/Label";
import { useDispatch } from "react-redux";

export default function ProfilePage() {
    console.log('View - 5');

    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: "TOGGLE_AUTHENTICATION", payload: null });
    }

    return <ScrollViewStyle>
        <Card>
            <ButtonStyle onPress={logout}>
                <LabelStyle color="white">SAIR</LabelStyle>
            </ButtonStyle>
        </Card>
    </ScrollViewStyle>
}

const ScrollViewStyle = styled(ScrollView)`
`


const ButtonStyle = styled(Button)`
    background-color: #E34D8C;
`
