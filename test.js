const jwt = require("jsonwebtoken");
const a = jwt.sign("123", "1");

const b = jwt.verify(a, "1");
console.log(b);
