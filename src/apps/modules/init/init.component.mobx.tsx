import { observable, decorate } from "mobx";


export class CSInit {

    public done: boolean = false;

    constructor() {
        const syn = this.sync(0);
        while (true) {
            const next = syn.next();
            if (next && next.done === true) {
                this.done = true;
            }
        }
    }

    public *sync(steps: number): IterableIterator<any> {
        yield steps;
        yield 1;
        return 0;
    }

    public autoRun = () => {
        console.log('autoRun')
    }
}

decorate(CSInit, {
    done: observable,
})

export const InitMb = new CSInit();
