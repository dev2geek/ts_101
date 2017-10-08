function methodDec1 (target: any, methodName: string, descriptor?: PropertyDescriptor) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor: ${descriptor}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}

class ClassWithMethodDec1 {
    @methodDec1
    print(output: string) {
        console.log(`ClassWithMethodDec.print`
            + `(${output}) called.`);
    }
}