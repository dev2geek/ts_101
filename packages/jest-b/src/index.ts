import iJestable from './base/iJestable';

export default class JESTB implements iJestable {
    token: string;
    
    constructor(private id: number) {
        this.token = `yoyo-${this.id}`;
    }

    yo() {
        return this.token;
    }

    jest() {
        return "hey";
    }
};