import React, { useState } from 'react';
import { Image, Platform, TextInput, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import BackgroundImageContainer from '../../components/BackgroundImage/BackgroundImageContainer';
import Button from '../../components/Button/Button';
import LabelStyle from '../../components/Label/Label';
import Loading from '../../components/Loading/Loading';

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
const logo_g = require('../../../assets/images/logo_g.png');
const logo_ln = require('../../../assets/images/logo_ln.png');
const logo = resolveAssetSource(require('../../../assets/icons/logo.svg')).uri;
const line = resolveAssetSource(require('../../../assets/icons/line.svg')).uri;
const height = '60px';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = () => {
        setLoading(true);
        console.log('Login:', login);
        console.log('Senha:', senha);

        setTimeout(() => {
            dispatch({ type: 'TOGGLE_AUTHENTICATION', payload: login });    
            setLoading(false);
        }, 2500);
    };

    return (
        <ContainerStyle>
            <BackgroundImageContainer>
                <Logo uri={logo}/>
                <FormStyle>
                    <InputStyle
                        placeholder="Login"
                        value={login}
                        onChangeText={setLogin}
                    />
                    <InputStyle
                        placeholder="Senha"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <ButtonStyle onPress={handleLogin} isLoading={isLoading}>
                        {!isLoading && <LabelStyle color='white' size={14}>ACESSAR</LabelStyle>}
                        {isLoading && <Loading />}
                    </ButtonStyle>
                </FormStyle>
                <PartnerLoginWrapperStyle>
                    <PartnerLoginLabelWrapperStyle>
                        <SvgUri uri={line} />
                        <LabelStyle size={12} color='grey'>
                            Ou acesse com
                        </LabelStyle>
                        <SvgUri uri={line} />
                    </PartnerLoginLabelWrapperStyle>
                    <PartnerLoginOptionsWrapperStyle>
                        <PartnerLoginOptionStyle>
                            <PartnerLoginOptionImageStyle source={logo_g} />
                        </PartnerLoginOptionStyle>
                        <PartnerLoginOptionStyle>
                            <PartnerLoginOptionImageStyle source={logo_ln} />
                        </PartnerLoginOptionStyle>
                    </PartnerLoginOptionsWrapperStyle>
                    <LabelStyle size={12} color='grey'>
                        Ainda não possui um login?
                        <LabelStyle size={12} color='#DD3F94'>{` cadastre-se :)`}</LabelStyle>
                    </LabelStyle>
                </PartnerLoginWrapperStyle>
            </BackgroundImageContainer>
        </ContainerStyle>
    );
};


const ContainerStyle = styled(View)`
  background-color: ${props => props.theme.color.background};
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled(SvgUri)`
    margin-top: 60px;
`;

const FormStyle = styled.View`
  width: 80%;
  gap: 5px;
  margin-bottom: -20px;
`;

const InputStyle = styled(TextInput)`
  height: ${height};
  font-family: 'Comfortaa-Regular';
  border-width: .5px;
  border-color: white;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
  padding-horizontal: 10px;
  margin-bottom: 10px;

  ${Platform.select({
        ios: `
            shadow-color: #cacacac8;
            shadow-offset: 1px 2px;
            shadow-opacity: 0.7;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 2.5;
        `,
    })}
`;

const PartnerLoginWrapperStyle = styled.View`
    display: flex;
`;

const ButtonStyle = styled(Button)<{isLoading?: boolean}>`
    background-color: #E34D8C;
    font-size: 24px;
  ${props => props.isLoading && `background-color: #F3EDEF; pointer-events: none;`}
`;

const PartnerLoginLabelWrapperStyle = styled.View`
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const PartnerLoginOptionsWrapperStyle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 60px;
`;

const PartnerLoginOptionStyle = styled(Button)`
    border-radius: 10px;
    background-color: white;
    height: 50px;
    width: 110px;

     ${Platform.select({
        ios: `
            shadow-color: #cccccc;
            shadow-offset: 1px 2px;
            shadow-opacity: 0.7;
            shadow-radius: 4px;
        `,
        android: `
            elevation: 2.5;
        `,
    })}
`;

const PartnerLoginOptionImageStyle = styled(Image)`
    width: 24px;
    height: 24px;
`;

export default LoginPage;