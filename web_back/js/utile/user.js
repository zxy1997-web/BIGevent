var user = {
    login:function(myName,myPassword,callback){
        $.post(APIURLS.user_login,
        {
            user_name :myName,
            password:myPassword,
        },
        function(res){
            callback(res)
        })
    },
    logout:function(callback){
        $.post(APIURLS.user_logout,function(res){
            callback(res)  
        })
    },
    getInfo:function(callback){
        $.get(APIURLS.user_getInfo,function(res){
            callback(res)
            
        })
    }
}