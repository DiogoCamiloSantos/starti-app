import { View } from "react-native";
import Card from "../../components/Card/Card";
import ScoreService from "../../core/service/Score/Score.service";
import Score from "../../components/Score/Score";

export default function LevelsPage() {

    console.log('View - 1');

    const list = ScoreService.getAll();      

    return (
        <View>
            <Card>
                <Score list={list} />
            </Card>
            <Card height={100} />
        </View>
    )
}