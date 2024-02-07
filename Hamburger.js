import React, { useState, useEffect } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

const Hamburger = ({ color, type, active, onPress }) => {
  const [containerAnim] = useState(new Animated.Value(0));
  const [topBar, setTopBar] = useState(new Animated.Value(0.9));
  const [bottomBar, setBottomBar] = useState(new Animated.Value(0.9));
  const [middleBarOpacity, setMiddleBarOpacity] = useState(new Animated.Value(0));
  const [bottomBarMargin, setBottomBarMargin] = useState(new Animated.Value(-10));
  const [topBarMargin, setTopBarMargin] = useState(new Animated.Value(0));
  const [marginLeft, setMarginLeft] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(new Animated.Value(25));

  const spinCross = () => {
    if (!active) {
      Animated.spring(containerAnim, { toValue: 1 }).start();
      Animated.spring(topBar, { toValue: 0.9 }).start();
      Animated.spring(bottomBar, { toValue: 0.9 }).start();
      Animated.spring(bottomBarMargin, { toValue: -10 }).start();
      Animated.spring(middleBarOpacity, { toValue: 0, duration: 30 }).start();
    } else {
      setTopBar(0);
      setBottomBar(0);
      setBottomBarMargin(4);
      setMiddleBarOpacity(1);

      Animated.spring(containerAnim, { toValue: 0 }).start();
      Animated.spring(topBar, { toValue: 0 }).start();
      Animated.spring(bottomBar, { toValue: 0 }).start();
      Animated.spring(bottomBarMargin, { toValue: 4 }).start();
      Animated.timing(middleBarOpacity, { toValue: 1, duration: 1200 }).start();
    }
  };

  const cross = () => {
    if (!active) {
      Animated.spring(topBar, { toValue: 0.9 }).start();
      Animated.spring(bottomBar, { toValue: 0.9 }).start();
      Animated.spring(bottomBarMargin, { toValue: -10 }).start();
      Animated.timing(middleBarOpacity, { toValue: 0, duration: 30 }).start();
    } else {
      setTopBar(0);
      setBottomBar(0);
      setBottomBarMargin(4);
      setMiddleBarOpacity(1);

      Animated.spring(topBar, { toValue: 0 }).start();
      Animated.spring(bottomBar, { toValue: 0 }).start();
      Animated.spring(bottomBarMargin, { toValue: 4 }).start();
      Animated.timing(middleBarOpacity, { toValue: 1, duration: 1200 }).start();
    }
  };

  const spinArrow = () => {
    if (!active) {
      Animated.spring(containerAnim, { toValue: 1 }).start();
      Animated.spring(topBar, { toValue: 1 }).start();
      Animated.spring(bottomBar, { toValue: 1 }).start();
      Animated.spring(width, { toValue: 14 }).start();
      Animated.spring(marginLeft, { toValue: -13 }).start();
      Animated.spring(bottomBarMargin, { toValue: 2 }).start();
      Animated.spring(topBarMargin, { toValue: -2 }).start();
    } else {
      setTopBar(0);
      setBottomBar(0);
      setWidth(25);
      setMarginLeft(0);
      setBottomBarMargin(4);
      setTopBarMargin(0);

      Animated.spring(containerAnim, { toValue: 0 }).start();
      Animated.spring(topBar, { toValue: 0 }).start();
      Animated.spring(bottomBar, { toValue: 0 }).start();
      Animated.spring(width, { toValue: 25 }).start();
      Animated.spring(marginLeft, { toValue: 0 }).start();
      Animated.spring(bottomBarMargin, { toValue: 4 }).start();
      Animated.spring(topBarMargin, { toValue: 0 }).start();
    }
  };

  const arrow = () => {
    if (!active) {
      Animated.spring(topBar, { toValue: 1 }).start();
      Animated.spring(bottomBar, { toValue: 1 }).start();
      Animated.spring(width, { toValue: 14 }).start();
      Animated.spring(marginLeft, { toValue: -13 }).start();
      Animated.spring(bottomBarMargin, { toValue: 2 }).start();
      Animated.spring(topBarMargin, { toValue: -2 }).start();
    } else {
      setTopBar(0);
      setBottomBar(0);
      setWidth(25);
      setMarginLeft(0);
      setBottomBarMargin(4);
      setTopBarMargin(0);

      Animated.spring(topBar, { toValue: 0 }).start();
      Animated.spring(bottomBar, { toValue: 0 }).start();
      Animated.spring(width, { toValue: 25 }).start();
      Animated.spring(marginLeft, { toValue: 0 }).start();
      Animated.spring(bottomBarMargin, { toValue: 4 }).start();
      Animated.spring(topBarMargin, { toValue: 0 }).start();
    }
  };

  const _animate = (active) => {
    setTopBar(active);
    setBottomBar(active);
    setBottomBarMargin(active ? 4 : -10);
    setMiddleBarOpacity(active ? 1 : 0);

    switch (type) {
      case 'spinArrow':
        spinArrow();
        break;
      case 'arrow':
        arrow();
        break;
      case 'spinCross':
        spinCross();
        break;
      default:
        cross();
        break;
    }
  };

  useEffect(() => {
    // componentDidUpdate benzeri işlemleri burada gerçekleştirin
    if (active !== topBar) {
      // active prop'undaki değişikliklere tepki ver
      _animate(active);
    }
  }, [active, topBar]);

  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <Animated.View
        style={{
          width: 35,
          justifyContent: 'center',
          alignItems: 'center',
          height: 35,
          transform: [
            {
              rotate: containerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}>
        <Animated.View
          style={{
            height: 3,
            marginLeft: marginLeft,
            width: width,
            marginBottom: topBarMargin,
            backgroundColor: color ? color : 'black',
            transform: [
              {
                rotate: topBar.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-50deg'],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            height: 3,
            width: 25,
            opacity: middleBarOpacity,
            backgroundColor: color ? color : 'black',
            marginTop: 4,
          }}
        />
        <Animated.View
          style={{
            height: 3,
            marginLeft: marginLeft,
            width: width,
            backgroundColor: color ? color : 'black',
            marginTop: bottomBarMargin,
            transform: [
              {
                rotate: bottomBar.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '50deg'],
                }),
              },
            ],
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Hamburger;
