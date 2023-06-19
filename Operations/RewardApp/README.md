## Rewards App Exercise

Use these logic examples as inspiration to add into code:

Coffee shop member will have points and the points will decide the membership they have
let points = 11;
let type = points > 100 ? 'gold' : 'silver';

On membership individuals can sign up for on loan coffee but two variables most be true 
let highIncome = true;
let goodCreditScore == true;
let eligibleForLoan = highIncome &&* goodCreditScore;

Let member know if they are eligible 
let applicationRefused = !eligibleForLoan

Permissions

const readPersion = 4
const writePermission = 2;
const executePertmission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission

let message = (myPermission & readPermission) ? 'yes': 'no';

