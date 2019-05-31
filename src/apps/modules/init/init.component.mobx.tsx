import { observable, decorate, action } from "mobx";

export class InitCs {

    public done: boolean = false;

    // constructor() { }

    public SyncApp() {
        const syn = this.sync(0);
        while (true) {
            const next = syn.next();
            if (next && next.done === true) {
                setTimeout(() => {
                    this.done = true;
                }, 5 * 1000);
                break;
            }
        }
    }

    public *sync(steps: number): IterableIterator<any> {
        yield steps;
        yield 1;
        return 0;
    }

    public autorun = () => {
        this.done = true;
    }
}

decorate(InitCs, {
    done: observable,
    autorun: action
})

// export const InitMb = new InitCs();
