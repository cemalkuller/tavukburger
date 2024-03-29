# tavukburger
Animated fully configurable hamburger menu for react-native!
![alt tag](gif/hamburger.gif)

[`original repository`](https://github.com/GeekyAnts/react-native-hamburger)

## Installation
NPM
```bash
npm install tavukburger --save
```

Yarn
```bash
yarn add tavukburger
```

## Usage
```javascript
...
import Hamburger from 'tavukburger';
...
<Hamburger type="cross" active={this.state.active} onPress={() => {
              this.setState({ active: !this.state.active })
          }}
          underlayColor="transparent"
          >
 </Hamburger>
```

## Props
| Prop    | Description                                                               | Typ      | Default   |
|---------|---------------------------------------------------------------------------|----------|-----------|
| type    | Type of Animation. &nbsp;&nbsp;&nbsp; Available types: {**arrow, spinArrow, cross, spinCross**} | String   | cross     |
| onPress | Called when the hamburger gets pressed                                    | Function | undefined |
| active  | Determines the activation state of Hamburger.                             | Boolean  | false     |


## Todo
- [ ] Add an example of integrating with Redux.
- [ ] Add an example of integrating with NativeBase drawer.



 ---


*This repository is a fork of [`react-native-hamburger`](https://github.com/GeekyAnts/react-native-hamburger)*
