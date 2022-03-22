import {Text, View} from './Themed';
import {StyleSheet} from 'react-native';
import {MonoText} from './StyledText';
import AbstractComponent from "./AbstractComponent";

class ApiLog extends AbstractComponent {
    constructor(props: any) {
        super(props);
        this.state = {
            event: props && props.event || '',
            msg: props && props.msg || '',
            offset: props && props.offset || '',
        }
    }

    setDetails(event: String, msg: String, offset: String) {
        this.setState({
            event: event,
            msg: msg,
            offset: offset,
        })
    }

    render() {
        return (
            <View style={styles.logContainer}>
                <Text
                    style={styles.logTitle}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)">
                    SVGator Player API - Event Log:
                </Text>
                <View
                    style={styles.log}
                    darkColor="rgba(255,255,255,0.05)"
                    lightColor="#2d2d2d">
                    <MonoText lightColor="rgba(255,255,255,0.8)" darkColor="rgba(0,0,0,0.8)">
                        &gt;&nbsp;
                        <Text lightColor="rgba(255,255,255,1)"
                              darkColor="rgba(0,0,0,1)">{this.state.event}</Text>
                        {this.state.msg}
                        <Text lightColor="rgba(255,255,255,1)"
                              darkColor="rgba(0,0,0,1)">{this.state.offset}</Text>
                        .
                    </MonoText>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logContainer: {
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
    },
    logTitle: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    log: {
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: '100%',
    },
    highlight: {
        fontWeight: 'bold',
    }
});

export default ApiLog;
