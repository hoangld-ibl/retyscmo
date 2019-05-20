import { observable, decorate } from "mobx";


export class CSCount {

    public count: number;

    constructor(count: number) {
        this.count = count;
    }

    public countDo = () => {
        this.count += 1;
    }
}

decorate(CSCount, {
    count: observable,
})

export const CountMb = new CSCount(0);
