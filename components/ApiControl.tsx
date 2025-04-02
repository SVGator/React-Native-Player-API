import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {Text, View} from './Themed';
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import SVGatorLogo from './svg/SVGator-Logo';
import TestRobot from './svg/Test-Robot';
import RocketTestExternal from './svg/Rocket-Test-External';

import ApiLog from '../components/ApiLog';
import * as WebBrowser from "expo-web-browser";

export default function ApiControl(props: any) {
    const SVGatorWebView : any = React.createRef();
    const apiLog : any = React.createRef();

    const commands : any = {
        play: {},
        pause: {},
        toggle: {},
        reverse: {},
        stop: {},
        restart: {},
        destruct: {},
        seekByFwd: {command: 'seekBy', param: 500},
        seekByBack: {command: 'seekBy', param: -500},
        seekHalf: {command: 'seek', param: 50},
        seek: {command: 'seek', param: 50},
    };

    const SendCommand = (command: any, event: object) => {
        if (!commands[command]) {
            return;
        }
        const apiCommand = commands[command]['command'] || command;
        const apiCommandParam = commands[command]['param'] || '';
        const jsCommand = `document
        && document.querySelector
        && document.querySelector('svg')
        && document.querySelector('svg').svgatorPlayer
        && document.querySelector('svg').svgatorPlayer['${apiCommand}']
        && document.querySelector('svg').svgatorPlayer['${apiCommand}'](${apiCommandParam});
        true;
        `;
        SVGatorWebView.current.injectJavaScript(jsCommand);
    };

    const ReceiveMessage = (event: any) => {
        const data = JSON.parse(event.nativeEvent.data);
        apiLog.current.setDetails(data.event, ' event occurred at offset ', data.offset);
    };

    const colorScheme = useColorScheme();
    const iconSize = 32;
    const buttonWidth = '20%';
    const buttonProps = {
        width: buttonWidth,
    };
    const svgProps = {
        ref: SVGatorWebView,
        height: 310,
        onMessage: ReceiveMessage,
    };
    const svg = props && props.type === 'external'
        ? <RocketTestExternal {...svgProps} />
        : <TestRobot {...svgProps} />;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <SVGatorLogo height={30}/>
                </View>
                <ApiLog ref={apiLog} msg={'Events will show up here'}/>
                {svg}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={(event) => SendCommand('play', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="play"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Play</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('pause', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="pause"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Pause</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('stop', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="stop"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Stop</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('reverse', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="play"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                    style={{transform: [{scaleX: -1}], marginRight: 10}}
                                />
                                <Text>Reverse</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('toggle', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={{paddingLeft: 20}}>
                                <MaterialCommunityIcons
                                    name="play-pause"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Toggle</Text>
                            </View>
                        </Pressable>

                    </View>

                    <View style={styles.buttons}>
                        <Pressable
                            onPress={(event) => SendCommand('seekByBack', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="backward"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Seek -0.5s</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('seekHalf', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="arrows-alt-h"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Seek 50%</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('seekByFwd', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="forward"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Seek +0.5s</Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('restart', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <MaterialCommunityIcons
                                    name="restart"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Restart</Text>
                            </View>

                        </Pressable>

                        <Pressable
                            onPress={(event) => SendCommand('destruct', event)}
                            style={({pressed}) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                            {...buttonProps}>
                            <View style={styles.button}>
                                <FontAwesome5
                                    name="eject"
                                    size={iconSize}
                                    color={Colors[colorScheme].text}
                                />
                                <Text>Destruct</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <TouchableOpacity onPress={handleHelpPress} style={{marginTop: 10}}>
                    <Text lightColor={Colors.light.tint}>
                        Tap here to see SVGator's Full Player API documentation.
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://www.svgator.com/help/getting-started/svgator-player-js-api'
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logoContainer: {
        backgroundColor: '#020917',
        width: '100%',
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginVertical:10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    buttonsContainer: {
        alignItems: 'flex-start',
        flex: 0,
        justifyContent: 'flex-start',
        paddingVertical: 10,

    },
    buttons: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

