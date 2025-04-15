import React from "react";
import {Text, View, Pressable, GestureResponderEvent} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import EmbedDemo from './components/svg/Embed_Demo';

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

    const SendCommand = (command : string, event : GestureResponderEvent) => {
        const jsCommand = `const player = document.querySelector('svg').svgatorPlayer;
        player['seek'](50);
        player['${command}']();
        true;
        `;
        SVGatorWebView.current.injectJavaScript(jsCommand);
    };

    return (
      <View>
        <EmbedDemo {...svgProps} />
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
