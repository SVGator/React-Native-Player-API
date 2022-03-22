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
