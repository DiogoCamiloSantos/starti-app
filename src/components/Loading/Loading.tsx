import type { PropsWithChildren } from 'react';
import React from 'react';
import type { ViewStyle } from 'react-native';
import { Animated, Easing, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import styled from 'styled-components/native';

type SpinnerViewStyle = PropsWithChildren<{
    style?: ViewStyle,
    duration?: number,
    loops?: number,
    height?: number,
    width?: number
}>;

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
const loading = resolveAssetSource(require('../../../assets/icons/loading.svg')).uri;


const SpinnerViewStyle: React.FC<SpinnerViewStyle> = (props) => {
    console.log(`props`, props);

    const spinValue = new Animated.Value(0);

    Animated.timing(
        spinValue,
        {
            toValue: props.loops || 3,
            duration: props.duration || 3000,
            easing: Easing.linear,
            useNativeDriver: true
        }
    ).start()

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });    

    return (
        <Animated.View
            style={{
                transform: [{ rotate: spin }]
            }}>
            {props.children}
        </Animated.View>
    );
};


export default (props: SpinnerViewStyle) => {
    return <SpinnerViewStyle {...props} />;
};

