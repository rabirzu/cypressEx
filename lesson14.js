function bankRobbery(){
    const hero = "Batman";
    function cryForHelp(){
        function inner(){
            console.log(`Please, help us${hero}!`)
        }
        inner()
    }
    cryForHelp();
}