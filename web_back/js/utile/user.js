var user = {
    login:function(myName,myPassword){
        $.post(APIURLS.user_login,
        {
            user_name :myName,
            password:myPassword,
        },
        function(res){
            if(res.code === 200){
                location.href = './index.html'
            }
            else{
                $('#msgInfo').text(res.msg)
                $('#myModal').modal('show')
            }
        })
    },
    logout:function(){
        $.post(APIURLS.user_logout,function(res){
            if(res.code === 200){
                location.href = './login.html'
            }
            
        })
    },
    getInfo:function(){
        $.get(APIURLS.user_getInfo,function(res){
            if(res.code === 200){
                $('#userImg').prop('src',res.data.user_pic)
                $('#userName').text(res.data.nickname)
            }
            
        })
    }
}