class JESTA {
    token: string;
    
    constructor(private id: number) {
        this.token = `yaya-${this.id}`;
    }

    ya() {
        return this.token;
    }
}

export = JESTA;