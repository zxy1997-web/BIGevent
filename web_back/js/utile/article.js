var article ={
 show : function (curPage,type,state, callback){
     $.get(APIURLS.list_search,
        {
            page:curPage,
            type: type,
            state: state
        },function(res){
         callback(res)
     })
 },
 del : function (id,callback){
     $.get(APIURLS.list_del,{'id':id},function(res){
         callback(res)
     })
 },

}