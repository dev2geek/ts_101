export namespace FirstNameSpace {
    class NotExported {
    }
    export class NameSpaceClass {
        token: string;

        constructor(private id: number) {
            this.token = `token-${this.id}`;
        }

        ya() {
            console.log(`token: ${this.token}; id: ${this.id}`)
        }
    }
}
