const bcrypt = require("bcrypt");

const pasword = "mysecretpassword";
// hashcode+salt
async function hashing() {
    const hashedPassword = await bcrypt.hash(pasword, 10);
    console.log(hashedPassword);
}
hashing();
//$2b$10$PGkE/yJmyCam3mobHvjCD.OoAN/Dq4aFQvga11Nnb4RYG4ughDZ2.
// every time we run the code it will generate different hashcode because of salt