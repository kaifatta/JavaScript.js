const accountId = 144553
let accountEmail = "mdkaif@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"


// accountId = 2 Not allowed

accountEmail = "kaif.com"
accountPassword = "43434"
accountCity = "Meerut"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scpe and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])