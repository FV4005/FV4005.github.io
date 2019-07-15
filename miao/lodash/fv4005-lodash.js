var fv4005 = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  filter: function(ary,test){
  //数组过滤
    if(ary === undefined){
      ary = []
    }
    var passed = []
    for(var i = 0;i < ary.length;i++){
      if(test(ary[i])){
        passed.push(ary[i])
      }
    }
    return passed
  },
  concat: function(ary1,ary2) {
//连接两个或多个数组，并将新的数组返回
    if(ary1 === undefined){
      ary1 = []
    }
    if(ary2 === undefined){
      ary2 = []
    }
    var newary = []
    for(var i = 0; i < ary2.length;i++){
      ary1.push(ary2[i])
    }
    newary = newary.push(ary1)
    return newary
  },
//深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
  flat:function(ary) {
    var result = []
    for(var i = 0; i < ary.length; i++){
      if(Array.isArray(ary[i])){
        for(var j = 0; j < ary[i].length; j++){
          result.push(ary[i][j])
        }
      }else{
        result.push(ary[i])
      }
    }
    return result
  },
//判断一个数组是否包含一个指定的值
  includes:function(ary,value){
    for(var i = 0; i < ary.length;i++){
      if(ary[i] === value){
        return true
      }else{
        return false
      }
    }
  },
  slice:function(ary,start,end){
    var result = []
    if(start === undefined){
      start == 0
    }
    if(end == undefined){
      end == 0
    }
    for(var i = start; i < end; i++){
      result.push(ary[i])
    }
    return result
  },

}