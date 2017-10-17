import iJestable from './base/iJestable';

export default class JESTC implements iJestable {
    token: string;
    
    constructor(private id: number) {
        this.token = `${this.id}`;
    }

    jest() {
        return this.token;
    }
};