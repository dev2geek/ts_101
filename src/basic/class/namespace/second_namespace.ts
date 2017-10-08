export namespace SecondNameSpace {
    export class NameSpaceClass {
        token: string;
        
        constructor(private id: number) {
            this.token = `yaya-${this.id}`;
        }

        ya() {
            console.log(`token: ${this.token}; id: ${this.id}`)
        }
    }
}