var userFacade = require("./../userFacade")

userFacade.createNewUser("che", "123", function(data){
    if(data != null) console.log("USER che created!"+data.username)
    
})

userFacade.createNewUser("test", "test", function(data){
    if(data != null) console.log("USER test created!")
})