import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const background = require('../../../assets/images/login-bg.png');

const ImageBackgroundStyle =  styled(ImageBackground)`
    width: 100%;
    height: 100%;
    gap: 100px;
    justify-content: center;
    align-items: center;
`;

export default ({children}: any) => (
  <ImageBackgroundStyle  source={background} resizeMode="cover">
    {children}
  </ImageBackgroundStyle>
)