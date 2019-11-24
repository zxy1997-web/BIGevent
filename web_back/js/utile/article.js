var article ={
 show : function (callback){
     $.get(APIURLS.list_search,function(res){
         callback(res)
     })
 },
 del : function (id,callback){
     $.get(APIURLS.list_del,{'id':id},function(res){
         callback(res)
     })
 }
}