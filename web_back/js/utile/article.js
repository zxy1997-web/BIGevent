var article ={
 show : function (curPage,callback){
     $.get(APIURLS.list_search,
        {
            page:curPage,
        },function(res){
         callback(res)
     })
 },
 del : function (id,callback){
     $.get(APIURLS.list_del,{'id':id},function(res){
         callback(res)
     })
 }
}