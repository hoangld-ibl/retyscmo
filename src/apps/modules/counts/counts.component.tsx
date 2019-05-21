import * as React from "react";
import { connect } from 'react-redux';
import { observer } from 'mobx-react';

import { countActionDo } from './counts.action';
import { CountMb } from './counts.mobx';

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
        <p>Mobx: {count}</p>
    )
}

const CountDo = (props: any) => {
    const { countDo } = props;
    return (
        <button onClick={countDo}>Count</button>
    )
}

const App = observer(
    class AppCom extends React.Component<Props, State> {
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
                        <button onClick={this.onCountState}>Count</button>
                    </div>
                    <div>
                        <p>Redux: {count.count}</p>
                        <button onClick={this.onCountDispath}>Count</button>
                    </div>
                    <div>
                        <CountCom count={CountMb.count} />
                        <CountDo countDo={CountMb.countDo} />
                    </div>
                </div>
            );
        }
    }
)

const StateInProps = ({ count }: any) => ({
    count,
})

const FunInProps = (dispatch: any) => ({
    OnCount: () => dispatch(countActionDo()),
})

export default connect(StateInProps, FunInProps)(App);