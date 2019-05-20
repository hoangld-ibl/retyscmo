import * as React from "react";
import { connect } from 'react-redux';

import { countActionDo } from './counts.action';

interface Props {
    count: any,
    OnCount: () => void,
}

interface State {
    count: number,
}

const CountCom = (props: any) => {
    const { count } = props;
    return (
        <p>Count: {count}</p>
    )
}

const CountDo = (props: any) => {
    const { onCountDispath } = props;
    return (
        <button onClick={onCountDispath}>Props</button>
    )
}


class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { count: 0 };
    }

    public onCountState = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    public onCountDispath = () => {
        this.props.OnCount();
    }

    public render() {
        const { count } = this.props;
        return (
            <div>
                <div>
                    <p>State: {this.state.count}</p>
                    <button onClick={this.onCountState}>State</button>
                </div>
                <div>
                    <p>Props: {count.count}</p>
                    <button onClick={this.onCountDispath}>Props</button>
                </div>
                <div>
                    <CountCom count={count.count} />
                    <CountDo onCountDispath={this.onCountDispath} />
                </div>
            </div>
        );
    }
}

const StateInProps = ({ count }: any) => ({
    count,
})

const FunInProps = (dispatch: any) => ({
    OnCount: () => dispatch(countActionDo()),
})

export default connect(StateInProps, FunInProps)(App);