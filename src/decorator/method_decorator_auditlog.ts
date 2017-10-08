function auditLogDec2(target: any,
    methodName: string,
    descriptor?: PropertyDescriptor) {

    let originalFunction = target[methodName];

    let auditFunction = function () {
        console.log(`auditLogDec : overide of ` + ` ${methodName} called `);
        originalFunction.apply(this, arguments);
    }

    console.log(methodName);
    console.log(`target[methodName] : ${target[methodName]}`);
    // target[methodName] = auditFunction;
    target[methodName] = function () {
        console.log('shit');
    };
    target[methodName] = function () {
        console.log('fuck');
    };
    console.log(`target[methodName] : ${target[methodName]}`);
    // target['x'] = auditFunction;
}

class ClassWithAuditDec {
    @auditLogDec2
    print(output: string) {
        console.log(`ClassWithMethodDec.print`
            + `(${output}) called.`);
    }
}

let auditClass = new ClassWithAuditDec();
auditClass.print("test");
// (<any>auditClass).x('hay');