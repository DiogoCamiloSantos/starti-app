import { View } from "react-native";
import { SvgUri } from 'react-native-svg';
import styled from "styled-components/native";
import { useThemeSelector } from "../../../common/theme/default-theme";
import IDefaultLayoutSettings from "../../../domain/interfaces/IDefaultLayoutSettings.interface";
import Label from "../../Label/Label";

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
const defaultTabItemDimensions = '36px';

const TabItemStyle = styled.View<IDefaultLayoutSettings>`
    background-color: ${props => props.theme.color.primary};
    width: 15%;
    height: ${defaultTabItemDimensions};
    align-items: center;
`
const WrapperStyle = styled.View<ITabItemWrapperStyleProps>`
    background-color: 'transparent';
    height: ${defaultTabItemDimensions};
    width:  ${defaultTabItemDimensions};
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`

const TabItemSelectedFlagStyle = styled.View`
    background-color: ${props => props.theme.color.emphasis};
    border-radius: 25px;
    height: 5px;
`

const SvgUriStyle = styled(SvgUri)` 
    font-size: 10px;
`

function resolveSvg(image: TabItemIcon) {
    let required: NodeRequire;

    switch (image) {
        case "stats":
            required = require('../../../../assets/icons/stats.svg');
            break;
        case "search":
            required = require('../../../../assets/icons/book.svg');
            break;
        case "home":
            required = require('../../../../assets/icons/home.svg');
            break;
        case "chat":
            required = require('../../../../assets/icons/chat.svg');
            break;
        case "profile":
            required = require('../../../../assets/icons/profile.svg');
            break;
        default:
            required = require('../../../../assets/icons/house.svg');
    }

    return resolveAssetSource(required).uri;
}

export default function TabItem(props: ITabItemProps) {
    const theme = useThemeSelector();

    return (
        <TabItemStyle onTouchEnd={() => props.onSelectedTab()}>
            <WrapperStyle activated={props.activated}>
                <SvgUriStyle fill={theme.color.font} width={20} uri={resolveSvg(props.icon)} />
            </WrapperStyle>
            <View>
                <Label>{props.description}</Label>
                {props.activated && <TabItemSelectedFlagStyle />}
            </View>
        </TabItemStyle>
    );
}

interface ITabItemWrapperStyleProps extends IDefaultLayoutSettings {
    activated?: boolean;
}

interface ITabItemProps {
    description: string;
    icon: TabItemIcon;
    onSelectedTab: Function;
    activated?: boolean;
}

type TabItemIcon = 'stats' | 'search' | 'home' | 'chat' | 'profile';
