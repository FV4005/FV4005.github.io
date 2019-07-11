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
}