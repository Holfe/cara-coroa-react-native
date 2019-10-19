import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Menu from './components/Menu';
import About from './components/About';
import OtherGames from './components/OtherGames';
import Result from './components/Result';

const routes = () => {
  return (
    <Router>
      <Stack key="root" transitionConfig={transitionConfig}>
        <Scene initial key={'menu'} component={Menu} title="Cara ou Coroa" titleStyle={{ flex: 1, textAlign: 'center' }} />
        <Scene key={'about'} component={About} title="Sobre o Jogo" />
        <Scene key={'otherGames'} component={OtherGames} title="Sobre outros Jogos" />
        <Scene key={'result'} component={Result} title="Resultado" />
      </Stack>
    </Router>
  );
}

const MyTransitionSpec = ({
  duration: 500,
  //easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  //timing: Animated.timing,
});

const transitionConfig = () => ({
  transitionSpec: MyTransitionSpec,
  // screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;
    const width = layout.initWidth;

    //right to left by replacing bottom scene
    // return {
    //     transform: [{
    //         translateX: position.interpolate({
    //             inputRange: [index - 1, index, index + 1],
    //             outputRange: [width, 0, -width],
    //         }),
    //     }]
    // };

    const inputRange = [index - 1, index, index + 1];

    const opacity = position.interpolate({
      inputRange,
      outputRange: ([0, 1, 0]),
    });

    const translateX = position.interpolate({
      inputRange,
      outputRange: ([width, 0, 0]),
    });

    return {
      opacity,
      transform: [
        { translateX }
      ],
    };

    //from center to corners
    // const inputRange = [index - 1, index, index + 1];
    // const opacity = position.interpolate({
    //     inputRange,
    //     outputRange: [0.8, 1, 1],
    // });

    // const scaleY = position.interpolate({
    //     inputRange,
    //     outputRange: ([0.8, 1, 1]),
    // });

    // return {
    //     opacity,
    //     transform: [
    //         { scaleY }
    //     ]
    // };
  }
});

export default routes;
