import * as React from "react";
import { withRouter } from 'react-router-dom';

import './init.style.scss';
import { logo } from './../../images';
import { Constants } from '../../constants';
// import { Requests } from '../utils';
import Button from '@material-ui/core/Button';

const nextPageTime = 5 * 1000;

interface AppProps {
    history: any,
}

class App extends React.Component<AppProps> {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount = () => {
        const syn = this.sync(0);
        while (true) {
            const next = syn.next();
            if (next && next.done === true) {
                // Sync Done
                return setTimeout(() => {
                    // this.goto(Constants.page.counts, null);
                }, nextPageTime)
            }
        }
    }

    // public componentWillMount = () => { console.log('componentWillMount.'); }
    // public componentWillUnmount = () => { console.log('componentWillUnmount.'); }
    // public componentWillReceiveProps = (nextProps: any) => { console.log('componentWillReceiveProps.', nextProps); }

    public *sync(steps: number): IterableIterator<any> {
        yield steps;
        yield 1;
        return 0;
    }

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
                <p>
                    <Button onClick={this.onNextPage} variant="contained" color="primary">Next</Button>
                </p>
            </div>
        );
    }
}

export default withRouter(App);