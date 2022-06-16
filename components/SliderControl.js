import React, {Component} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet, View, Text} from 'react-native';
import {multipleOfMod} from './Utils';

class SliderControl extends Component {
    static defaultProps = {
        value: 1,
        animateTransitions: true,
        maximumTrackTintColor: "#d3d3d3",
        minimumTrackTintColor: "#2f95dc",
        minimumValue: 0,
        thumbTintColor: "#2f95ed",
        step: 1,
        formatter: (value, step) => value,
        onValueChange: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.default || 0,
        };
    }

    onValueChange(value) {
        value = multipleOfMod(value, this.props.step);
        this.setState({value});
        this.props.onValueChange(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.onValueChange(value)}
                    maximumValue={this.props.maximumValue}
                    minimumValue={this.props.minimumValue}
                    step={this.props.step}

                    animateTransition={this.props.animateTransition}
                    maximumTrackTintColor={this.props.maximumTrackTintColor}
                    minimumTrackTintColor={this.props.minimumTrackTintColor}
                    thumbTintColor={this.props.thumbTintColor}
                />
                <Text>{this.props.name}: {this.props.formatter(this.state.value, this.props.step)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '28%',
    },
});

export default SliderControl;
