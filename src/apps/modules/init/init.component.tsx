import * as React from "react";

import './init.style.scss';
import { logo } from './../../images';

class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount = () => {
        const syn = this.sync(0);
        while (true) {
            const next = syn.next();
            if (next && next.done === true) {
                // Sync Done
                break;
            }
        }
    }
    // public componentWillMount = () => { }
    // public componentWillUnmount = () => { }
    // public componentWillReceiveProps = (nextProps: any) => { }

    public *sync(steps: number): IterableIterator<any> {
        const result = this.getData();
        yield result;
        yield steps;
        return 0;
    }

    public getData = () => {
        return 1;
    }

    public render() {
        return (
            <div className='init-component'>
                <img src={logo} />
            </div>
        );
    }
}

export default App;