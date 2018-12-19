const client = require('./client')
const provider = require('./provider')
const ups = require('./ups')
const user = require('./user')

Parse.Cloud.define('ClientSync', client.clientSync)
Parse.Cloud.define('ProviderSync', provider.providerSync)
Parse.Cloud.define('UpsLabelRecovery', ups.labelRecovery)

Parse.Cloud.define('CreateUser', user.createUser)
Parse.Cloud.define('GetAllUsers', user.getAllUsers)
Parse.Cloud.define('GetUserById', user.getUserById)
Parse.Cloud.define('UpdateUser', user.updateUser)
