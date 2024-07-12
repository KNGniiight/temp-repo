// --OS MODULE--

// built-in module general setup 

const os = require('os')

//method returns info about current user 
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds 
console.log(`the system uptime is ${os.uptime()}seconds`)

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);

