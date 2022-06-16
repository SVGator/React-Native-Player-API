# Demo App for SVGator's Player API - React Native

SVGator's animation player implementation for React native.

## Getting Started

* Download you animated project for React Native from [SVGator](https://app.svgator.com/) (using `External` player option)
* Copy the `.js` file into your project (anywhere in `components` directory)
* import the file (choosing any arbitrary name):

      import TestRobot from './svg/Test-Robot';

## Size

Both `%` and unitless values are supported for both `width` and `height`. If none is given, `width` will take all available space (100% of the screen) yet `height` will be proportionally scaled.

## Player API

For `Player API` usage one must pass an `onMessage` callback listener to the SVGator compoment (can be an emtpy arrow function as well, i.e. `() => {}`).

## Usage

Find an example below of SVGator animation implemented in React Native.

Please note that `Test-Robot.js` should be the file exported from [SVGator](https://app.svgator.com/).
Pass your callback in the `onMessage` property to SVGator's component to capture `Player Events` & call `SVGatorWebView.current.injectJavaScript(jsCommand);` to control the animation, where:
* `SVGatorWebView` is the `ref` passed to SVGator component
* `jsCommand` is the js command(s) to run insinde the SVGator component

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

#### 2.1.0

* Player API Support Extended with:
    * adjusting speed
    * adjusting direction
    * adjusting alternate
    * adjusting fill mode
    * adjusting the number of iterations

#### 2.0.0

* Player API Support Implemented
    * Starting the animation programatically
    * Capturing animation events 
* Scaling SVGs fixed
* Sizing issues fixed
* Added support for percentage values for width & height
* Calculating width (or )height) based on height (or width)
* Automatic width & height calculation if none given
* Demo added to Readme

#### 1.0.1

* Dependency update 

#### 1.0.0

* SVGator animation player for React Native

## Useful Links

For more information, check out the links below:
* [SVGator Player JS API Documentation](https://www.svgator.com/help/getting-started/svgator-player-js-api)
* [Animate Programatically with SVGator](https://www.svgator.com/help/getting-started/animate-programmatically)
* [Export React Native Animations with SVGator](https://www.svgator.com/help/getting-started/export-react-native-animations)
