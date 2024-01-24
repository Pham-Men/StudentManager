export class Student {
    private _name: string;
    private _group: string;
    private _score: number;


    constructor(name: string, group: string, score: number) {
        this._name = name;
        this._group = group;
        this._score = score;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}