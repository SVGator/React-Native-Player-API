import React from 'react';

class AbstractComponent extends React.Component<any, any> {
    private componentIsMounted: boolean = false;

    componentDidMount() {
        this.componentIsMounted = true;
    }

    componentWillUnmount() {
        this.componentIsMounted = false;
    }

    setState(args: object | null) {
        if (this.componentIsMounted) {
            super.setState(args);
        }
    }
}

export default AbstractComponent;
