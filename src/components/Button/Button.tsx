import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const height = '60px';

export default styled(TouchableOpacity)`
    height: ${height};
    color: white;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-top: 25px;
`;