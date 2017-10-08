function auditLogDec1(target: any,
    methodName: string,
    descriptor?: PropertyDescriptor) {

    let originalFunction = descriptor.value;
    descriptor.value = function () {
        console.log(`auditLogDec : overide of ` + ` ${methodName} called `);
        originalFunction.apply(this, arguments);
    };

    // let originalFunction = target[methodName];

    // let auditFunction = function () {
    //     console.log(`auditLogDec : overide of ` + ` ${methodName} called `);
    //     originalFunction.apply(this, arguments);
    // }

    // target[methodName] = auditFunction;
    // console.log(`target[methodName] : ${target[methodName]}`);

    // return auditFunction;
}

class Student {
    constructor(private name: string) {
    }

    @auditLogDec1
    say(): void {
        console.log(this.name);
    }
}

// Student.prototype.say = function() {
//     console.log(`hello ${this.name}`);
// };

const a1 = new Student('jack');

a1.say();