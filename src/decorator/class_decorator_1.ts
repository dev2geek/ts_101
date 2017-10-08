function classDecorator1(constructor: Function) {
    console.log('~~ Class Decorator 1 called.');
    console.log(`constructor : ${constructor}`);
    console.log(`constructor.name : ${(<any>constructor).name}`);
    constructor.prototype.testProperty = "testProperty_value";
}

function classDecorator2(constructor: Function) {
    console.log('~~ Class Decorator 2 called.');
}

function propertyDecorator1(target: any, propertyKey: string) {
    console.log('~~ Property Decorator called.');
    console.log(`target : ${target}`);
    console.log(`target.constructor : ${target.constructor}`);
    console.log(`class name : `
        + `${target.constructor.name}`);
    console.log(`propertyKey : ${propertyKey}`);
}

@classDecorator1
@classDecorator2
class ClassWithSimpleDecorator1 {
    @propertyDecorator1
    name: string;

    @propertyDecorator1
    static family: string
}

const instance_1 = new ClassWithSimpleDecorator1();
const instance_2 = new ClassWithSimpleDecorator1();

console.log(`instance_1: ${instance_1}`);
console.log(`instance_2 : ${instance_2}`);


console.log(`instance_1.testProperty : ` + `${(<any>instance_1).testProperty}`);