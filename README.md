# Demo App for SVGator's Player API - React Native

SVGator's animation player implementation for React native.

## Getting Started

* Download your animated project for React Native from [SVGator](https://app.svgator.com/) (using `External` player option)
* Copy the `.js` file into your project (anywhere in `components` directory)
* import the file (choosing any arbitrary name):

      import TestRobot from './svg/Test-Robot';

## Size

Both percentage (`%`) and unitless values are supported for `width` and `height`. If neither is provided, the `width` will take up all available space (100% of the screen), while the `height` will scale proportionally.

## Player API

For `Player API` usage, you must pass an `onMessage` callback listener to the SVGator component. This can also be an empty arrow function, such as `() => {}`.

## Usage

Find an example below of an SVGator animation implemented in React Native.

`Test-Robot.js` should be the file exported from [SVGator](https://app.svgator.com/).
To capture `Player Events`, pass your callback to the `onMessage` property of the SVGator component. To control the animation, call `SVGatorWebView.current.injectJavaScript(jsCommand);`, where:
* `SVGatorWebView` is the `ref` passed to the SVGator component
* `jsCommand` is the JavaScript command(s) to execute inside the SVGator component

```js
import React from "react";
import {Text, View, Pressable} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import TestRobot from './components/svg/Test-Robot';

export default function App() {
    const SVGatorWebView : any = React.createRef();

    const ReceiveMessage = (event: any) => {
        const data = JSON.parse(event.nativeEvent.data);
        console.log(data.event + ' event occurred at offset ' + data.offset);
    };

    const svgProps = {
        ref: SVGatorWebView,
        height: 310,
        onMessage: ReceiveMessage,
    };

    const SendCommand = () => {
        const jsCommand = `document.querySelector('svg').svgatorPlayer['seek'](50);
        true;
        `;
        SVGatorWebView.current.injectJavaScript(jsCommand);
    };

    return (
      <View>
        <TestRobot {...svgProps} />
          <Pressable
              onPress={(event) => SendCommand('play', event)}
              style={({pressed}) => ({
                  opacity: pressed ? 0.5 : 1,
              })}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FontAwesome5
                      name="arrows-alt-h"
                      size={40}
                      color={'red'}
                  />
                  <Text>Send to 50%</Text>
              </View>
          </Pressable>
      </View>
    );
  }
```

## Changelog
#### 3.0.0
* Capturing player events with `onMessage` fixed

#### 3.0.0
* Dependency update
* Updated players codebase
* Player API Support Extended with control for the following properties (through `set` method):
  * speed
  * fps
  * iterations
  * direction
  * alternate
  * fill mode
* Player API new properties:
  * player.speed
  * player.fps
  * player.isInfinite
  * player.direction
  * player.isBackwards
  * player.isReversed
  * player.fill
* Player API new methods:
  * player.togglePlay()
  * player.set(property, value)

#### 2.0.1
* Dependency update

#### 2.0.0
* Player API Support Implemented
  * Starting the animation programmatically
  * Capturing animation events
* Scaling SVGs fixed
* Sizing issues fixed
* Added support for percentage values for width & height
* Calculating width (or height) based on height (or width)
* Automatic width & height calculation if none given
* Demo added to Readme

#### 1.0.1

* Dependency update

#### 1.0.0

* SVGator animation player for React Native

## Useful Links

For more information, check out the links below:
* [SVGator API - React Native Test App](https://github.com/SVGator/React-Native-Player-API)
* [SVGator Player JS API Documentation](https://www.svgator.com/help/getting-started/svgator-player-js-api)
* [Animate Programmatically with SVGator](https://www.svgator.com/help/getting-started/animate-programmatically)
* [Export React Native Animations with SVGator](https://www.svgator.com/help/getting-started/export-react-native-animations)
