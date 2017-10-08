function propertyDecoratorStatic(target: any, propertyKey: string) {
    if (typeof (target) === 'function') {
        console.log(`class name : ${target.name}`);
        console.log(`wrong class name for static property: ${target.constructor.name}`);
    } else {
        console.log(`class name : ${target.constructor.name}`);
    }

    console.log(`propertyKey : ${propertyKey}`);
}

class ClassWithPropertyDecorator1 {
    @propertyDecoratorStatic
    name: string;

    @propertyDecoratorStatic
    static family: string
}

