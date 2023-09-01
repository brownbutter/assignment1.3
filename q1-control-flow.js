/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const envArray = ["DEV", "STAGE", "PROD"];
const env = envArray[Math.floor(Math.random() * envArray.length)];

console.log(env);

let databaseCredential = "devuser:password";

switch (env) {
  case "DEV":
    databaseCredential = "devuser:password";
    break;
    // code block
    break;
  case "STAGE":
    databaseCredential = "stageuser:password";
    // code block
    break;
  case "STAGE":
    databaseCredential = "produser:password";
    // code block
    break;
  default:
    databaseCredential = "devuser:password";
  // code block
}

console.log(
  `Database credential for environment ${env} is ${databaseCredential}`
);
