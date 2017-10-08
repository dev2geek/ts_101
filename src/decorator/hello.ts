// function classDecorator(constructor: Function) {
//   console.log('~~ Class Decorator called.');
//   console.log(`constructor : ${constructor}`);
//   console.log(`constructor.name : ${(<any>constructor).name}`);
//   constructor.prototype.testProperty = "testProperty_value";
//   console.log('3');
// }

// function propertyDecorator(target: any, propertyKey : string) { 
//   console.log('~~ Property Decorator called.');
//   console.log(`target : ${target}`); 
//   console.log(`target.constructor : ${target.constructor}`); 
//   console.log(`class name : `  
//     + `${target.constructor.name}`);   
//   console.log(`propertyKey : ${propertyKey}`); 
// }

// @classDecorator
// class ClassWithSimpleDecorator {

// }

// const instance_1 = new ClassWithSimpleDecorator();
// const instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1: ${instance_1}`);
console.log(`instance_2 : ${instance_2}`);

// console.log(`instance_1.testProperty : `
//   + `${(<any>instance_1).testProperty}`);

