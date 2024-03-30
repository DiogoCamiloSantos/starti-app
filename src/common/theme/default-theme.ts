import { useSelector } from "react-redux";
import {default as DefaultTheme} from "./light-theme";
export default DefaultTheme;

export const useThemeSelector = () => useSelector((state: any) => state.theme);
