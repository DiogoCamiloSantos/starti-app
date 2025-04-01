import React from "react";
import { Provider } from 'react-redux';
import styled from "styled-components/native";
import store from "../redux/store";
import RouterView from "./RouterView";

const StarterViewStyle = styled.View`

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
`

const StarterView = (props) => {
  return (
    <Provider {...props} store={store}>
      <StarterViewStyle>
        <RouterView />
      </StarterViewStyle>
    </Provider>
  )
}

export default StarterView;
