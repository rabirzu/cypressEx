function func(){
    for(var i=1; i<5;i++){
        setTimeout(function(){
            console.log(i);
    },[1000]);
       // console.log(i);
    }
}
func();