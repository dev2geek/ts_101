const inferredString = "this is a string";
const inferredNumber = 1;

// compiler reports error for following statement
// inferredString = inferredNumber;

let complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "anotherName" };

// compiler reports error for following statement as missing 'name' property
// complexType = { id: 2 };

// compiler reports error for following statement as object literal can only assign known properties
// complexType = { id: 2, name: "anotherName", scope: 'aone' };

// complexType.scope = 'aone';
