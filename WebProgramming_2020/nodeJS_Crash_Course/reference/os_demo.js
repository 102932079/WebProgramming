const os = require('os');

// platform
console.log(os.platform()); // darwin means mac window means windows linux

// cpu arch
console.log(os.arch);
//x64

// cpu core info
console.log(os.cpus()); // object for each core

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home dir
console.log(os.homedir()); // user /tengw

// uptime
console.log(os.uptime());
