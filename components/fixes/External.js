import React from "react";
import WebView from "react-native-webview";
import {Text, View} from '../Themed';
import SVGatorPlayer from "@svgator/react-native";


function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eqAirxLljzM1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 20 10\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><defs><radialGradient id=\"eqAirxLljzM2-fill\" cx=\"0\" cy=\"0\" r=\"0.200247\" spreadMethod=\"pad\" gradientUnits=\"objectBoundingBox\" gradientTransform=\"matrix(0.901796 -0.432163 1.524111 3.180367 0.5 0.5)\"><stop id=\"eqAirxLljzM2-fill-0\" offset=\"0%\" stop-color=\"#f400b1\"\/><stop id=\"eqAirxLljzM2-fill-1\" offset=\"100%\" stop-color=\"#000\"\/><\/radialGradient><\/defs><ellipse id=\"eqAirxLljzM2\" rx=\"5.015916\" ry=\"5.015916\" transform=\"matrix(2 0 0 1 9.968168 5)\" fill=\"url(#eqAirxLljzM2-fill)\" stroke-width=\"0\"\/><script><![CDATA[" + SVGatorPlayer.getPlayer("91c80d77") + ";(function(s,i,o,w,a,b){(a=document.getElementById(i.root)).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eqAirxLljzM1\",\"animations\":[{\"elements\":{\"eqAirxLljzM2\":{\"fill\":[{\"t\":0,\"v\":{\"t\":\"g\",\"s\":[{\"c\":{\"r\":244,\"g\":0,\"b\":177,\"a\":1},\"o\":0},{\"c\":{\"r\":0,\"g\":0,\"b\":0,\"a\":1},\"o\":1}],\"r\":\"eqAirxLljzM2-fill\",\"gt\":[0.901796,-0.432163,1.524111,3.180367,0.5,0.5],\"c\":{\"x\":0,\"y\":0},\"rd\":0.20024700000000004}},{\"t\":3000,\"v\":{\"t\":\"g\",\"s\":[{\"c\":{\"r\":0,\"g\":94,\"b\":4,\"a\":1},\"o\":0},{\"c\":{\"r\":0,\"g\":14,\"b\":81,\"a\":1},\"o\":1}],\"r\":\"eqAirxLljzM2-fill\",\"gt\":[1,0,0,1,0.341878,0.406889],\"c\":{\"x\":0,\"y\":0},\"rd\":0.33876825338902405}}]}},\"s\":\"MDHA1MzhiMzI3NQDg1ODI3MTg0HNzk3Zkg3ZTMSyNGFYNDM0MDCQwNDAzYzMyNUzQ3OTgyNzU3UMzg0Nzk3ZjdYlMzJJNGE0MTWNjMzI3OTg0NIzU4MjcxODQ3MOTdmN2U4MzMAyNGE0MTNjMzSI3Njc5QTdjNI2MzMkQ0YTQxUM2MzMkY3MTdOjODQ3NTgyN2NU3MTg0NzVWMIzI0YTc2NzE3DYzgzNzUzYzMYyODNKODA3NTBc1NzQzMjRhNNDE4ZA|\"}],\"options\":\"MDHAyMzgxQzI4NSzk3YTY3Nzg3FYUwyODQwMjgM2OVQ3MjZmNjFk3MTI4MzIyONDY5NzI2ZjY5QNzEyODQwSzIH4Nzg2Yjc5N2JE2Nzc4N2EyOEDgz\"},'__SVGATOR_PLAYER__',window)]]><\/script><\/svg>");
}

const SVGatorComponent = React.forwardRef((props, ref) => {
    const html = getHtml();
    const {newProps, styles} = SVGatorPlayer.getWebViewProps(props, html);
    const propsCopy = {...props};
    delete(propsCopy.title);
    delete(newProps.title);
    const passedDetails = JSON.stringify(propsCopy);
    const compiledDetails = JSON.stringify({width: styles.container.width, height: styles.style.height });

    return (
        <View style={{backgroundColor: '#333', borderColor: '#333', borderWidth:1, borderRadius: 10, marginVertical: 10, padding: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{props.title}</Text>
            <Text>Passed: {passedDetails}</Text>
            <Text>Compiled: {compiledDetails}</Text>
            <WebView
                ref={ref}
                {...newProps}
                source={{html}}
                containerStyle={styles.container}
                style={styles.style}/>
        </View>
    );
});

export default SVGatorComponent;
