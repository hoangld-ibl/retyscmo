import * as React from "react";
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import './init.style.scss';
import { logo } from './../../images';
import { Constants } from '../../constants';
// import { Requests } from '../utils';
import Button from '@material-ui/core/Button';
import { InitCs } from './init.component.mobx';

// const nextPageTime = 5 * 1000;

interface AppProps {
    history: any,
}

const App = observer(
    class AppCom extends React.Component<AppProps> {
        public InitMb: InitCs;

        constructor(props: any) {
            super(props);
            this.InitMb = new InitCs();
        }

        public componentDidMount = () => {
            this.InitMb.SyncApp();
        }
        // public componentWillMount = () => { console.log('componentWillMount.'); }
        // public componentWillUnmount = () => { console.log('componentWillUnmount.'); }
        // public componentWillReceiveProps = (nextProps: any) => { console.log('componentWillReceiveProps.', nextProps); }


        public goto(pathname: string, data: any) {
            const { history } = this.props;
            return history.push({
                pathname,
                data,
            });
        }

        /**
         * onNextPage
         */
        public onNextPage = () => {
            this.goto(Constants.page.counts, null);
        }

        public render() {
            return (
                <div className='init-component'>
                    <p><img src={logo} /></p>
                    {this.InitMb.done === true && <p>
                        <Button onClick={this.onNextPage} variant="contained" color="primary">Next</Button>
                    </p>}
                </div>
            );
        }
    }
)

export default withRouter(App);