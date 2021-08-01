

<!--Using the default parameter technique, overload the overloadedFunc() function, -->
<!--which takes 3 arguments. For the 1st argument of the function set the default value [1, 2, 3],-->
<!--for the 2nd - the value 2, for the 3rd - the function that returns the product of the first two arguments,-->
<!--and the function can multiply both arrays and numbers.-->




  function overloadedFunc(arg1=[1,2,3], arg2=2, arg3 = (arg1,arg2) => {
          let res;
    if (Array.isArray(arg1)) {
          res = arg1.map(le => le * arg2)
          return res
      } return arg1 * arg2
  }){
      return arg3(arg1,arg2)
  }


  console.log(overloadedFunc())
