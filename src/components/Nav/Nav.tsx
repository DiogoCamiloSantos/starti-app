import { useEffect } from "react";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import Badge from "../Badge/Badge";
import LabelStyle from "../Label/Label";

const NavStyle = styled.View`
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 20px;
  border-bottom-left-radius: 20px ;
  border-bottom-right-radius: 20px ;

  ${Platform.select({
        ios: `
            shadow-color: #000;
            shadow-offset: 0px 2px;
            shadow-opacity: 0.1;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 10;
        `,
    })}
`

const NameStyle = styled(LabelStyle)`
    font-size: 14px;
`

const Nav = () => {

    const defaultTheme = useSelector((state: any) => state.theme);
    
    useEffect(() => {
        console.log('nav', defaultTheme);
    }, [defaultTheme])
    
    
    return (
        <NavStyle>
            <NameStyle>Diogo Camilo Santos</NameStyle>
            <Badge text="5000XP"></Badge>
        </NavStyle>
    );
}

export default Nav;