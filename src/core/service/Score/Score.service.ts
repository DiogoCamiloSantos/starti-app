import UserScore from "../../../domain/models/UserScore.model";
import SingletonService from "../singleton/Singleton.service";

class ScoreService extends SingletonService {
    constructor() {
        super();
    }

    public getAll(): UserScore[] {
        // Gerando uma lista mockada de IUserScore
        const mockUserScores: UserScore[] = [
            { description: 'Score 1', level: 20 },
            { description: 'Score 2', level: 50 },
            { description: 'Score 4', level: 80 },
            // Adicione mais objetos conforme necessário
        ];

        return mockUserScores;
    }
}

export default ScoreService.getInstance(ScoreService);