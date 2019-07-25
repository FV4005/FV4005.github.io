Array.prototype.flatten=function(){
  return this.reduce(function(prev, cur) {
      var moreArr = [].concat(cur).some(Array.isArray);  //判断cur是不是一个数组
      return prev.concat(moreArr ? cur.flatten() : cur);
  },[]);
};


var fv4005 = {
  compact: function (ary) {
    return ary.filter (it => it)
  },
    //数组过滤
filter: function (ary,test){
  if(ary === undefined){
    ary = []
  }
  var passed = []
  for(var i = 0;i < ary.length;i++){
    if(test(ary[i],i,ary)){
      passed.push(ary[i])
    }
  }
  return passed
},
//   concat: function(ary1,...ary2) {
// //连接两个或多个数组，并将新的数组返回
//     if(ary1 === undefined){
//       ary1 = []
//     }
//     if(ary2 === undefined){
//       ary2 = []
//     }
//     var newary = [...ary2]
//     for(var i = 0; i < ary2.length;i++){
//       ary1.push( ary2[i])
//     }
//     newary = newary.push(ary1)
//     return newary
//   },
//深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
flat:function (ary) {
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
includes:function (ary,value){
  for(var i = 0; i < ary.length;i++){
    if(ary[i] === value){
      return true
    }else{
      return false
    }
  }
},
  slice:function (ary,start,end){
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
//negate 反函数
negate:function (f){
  return function(...args){
    return !f(...args)
  }
},
//flip
flip:function (func){
  return function(...args){
    return func(...args.reverse())
  }
},
//before
before:function (){
  var times = 0
  var lastResult
  return function (...args){
    times++
    if(times < n){
      return lastResult = func(...args)
    }else{
      return lastResult
    }
  }
},
//after
// after:function(){
//   var times = 0
//   return function(...args){
//     times++
//     if(times < n){
//       return
//     }else{
//       return func(...args)
//     }
//   }
// },
//ary
ary:function (f,n = f.length){
  return function (...args){
  return f(...args.slice(0,n))
  }
},
//spread
spread:function (f){
  return function (ary){
    return f(...ary)
  }
},
//property
property:function (propName){
  return function (obj){
  return obj[propName]
  }
},
//every
every:function (ary,test){
  for(var i = 0; i < ary.length; i++){
    if(!test(ary[i],i,ary)){
      return false
    }
  }
  return true
},
indcludes:function (ary,...char){
  for(var i = 0; i < ary.length; i++){
    if(ary[i] == char){
      return true
    }
  }
  return false
},

chunk:function (ary,size){
  var result = []
  while (ary.length) {
      result.push(ary.splice(0, size))
  }
  return result
},

difference:function (ary, ...val) {
  var a = [...val]
  var args = a.flatten()
  for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < args.length; j++) {
          if (ary[i] == args[j]) {
              ary.splice(i, 1)
          }
      }
  }
  return ary
},

flatten:function (array){
  var result = [array[0]];
  for (var i = 1; i < array.length; i++) {
      result = result.concat(array[i]);
    }
  return result;
},
flattenDeep:function (ary){
  return [].concat(...ary.map(v => {
    return  Array.isArray(v) ? flattenDeep(v) : v
  }))
},
flattenDepth:function (ary,dep){

},
drop:function (array,n = 1){
  // if(n >= array.length){
  //   return []
  // }
  // if(n == 0){
  //   return array
  // }
  // array.splice(0,n)
  // return array
  return array.slice(n)
  },

dropRight: function (array,n = 1){
    if(n == 0) {return array}
    return array.slice(0, n * - 1)

  },

dropRightWhile:function (ary,pre){
  return this.dropWhile(ary.reverse(), pre).reverse();
  },
dropWhile:function(ary,pre){
  return this.dropRightWhile(ary.slice().reverse(),pre).reverse()
  },
fill:function (ary,value,start = 0,end = ary.length){
    for(var i = start; i < end;i++){
    ary[i] = value
    }

    return ary
  },
head:function (ary){
  if(ary == []) return undefined
  if(!ary) return null
  return ary[0]
},

initial:function (array){
  return array.slice(0,array.length-1)
},
intersection:function ([arrays]){
	var a = [arrays]
	var b = a.flatten()
  var map = {}

  for(var i = 0; i < b.length ; i++){
    var chard = b[i]
    if(chard in map){
      map[chard]++
    }else{
      map[chard] = 1
    }
  }

 var max = 0

 for(var i = 0;i < b.length;i++){
   if( max < map[chard]){
     var j = i;
     max = map[chard];
    }
 }
   return [b[j]];
},
indexOf:function (array, value, fromIndex=0) {
    for(var i = fromIndex; i < array.length; i++){
      if(array[i] == value){
      return i
      }
    }
    return -1
},
lastIndexOf:function (array,value,fromIndex = 0){
	for (var i = array.length; i > fromIndex; i--) {
    if (array[i] == value) {
        return i
    }

  }
  return -1
},
nth:function (array,n = 0){
  if(n >= 0){
	return array[n]
  }
else{
	array = array.reverse()
	n = Math.abs(n)
	return array[n-1]
  }
},
join:function (array,sep){
	var res = ''
  for(var i = 0; i<array.length; i++){
	if(i == array.length-1){
	  res += array[i]
    }else{
	  res += '' + array[i] + sep
	}

  }
return res
},
last:function (ary){
  if(ary == []) return undefined
  if(!ary) return null
  return ary[ary.length-1]
},
fromPairs:function ([...pairs]){
  var a = [...pairs]
  var args = a.flatten()
  var result = {}
  for(var i = 0 ; i < args.length; i++){
    result.push(args[i])
  }
  return result
},
fromPairs:function (pairs) {
  var map = {}
  var x = pairs.forEach(item =>  map[item[0]] = item[1])
  return map
},
isArguments:function (val){
  return Object.prototype.toString.call(val) === '[object Arguments]'
},
isArray:function(val){
  return Object.prototype.toString.call(val) === '[object Array]'
},
pull:function (array,...value){
	var res = []
	for(var arySeem in array){
		if(value.indexOf(arySeem) == -1){
			res.push(arySeem)
		}
	}
	return res
},
}