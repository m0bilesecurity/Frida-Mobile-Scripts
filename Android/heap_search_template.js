/************************************************************************
 * Name: Heap Search and method call
 * OS: Android
 * Author: @mobilesecurity_
 * Source: https://github.com/m0bilesecurity
 * Info: make sure to replace placeholders
        * {className}
        * {classMethod}
        * {args}
*************************************************************************/


Java.performNow(function () {
    var classname = "{className}"
    var classmethod = "{classMethod}";
    send("Heap Search - START ("+classname+")\\n");
    Java.choose(classname, {
      onMatch: function (instance) {
        
        var s="";
        s=s+"[*] Instance Found: " +instance.toString()+"\\n";
        s=s+"Calling method: " +classmethod+"\\n";
        
        var ret = instance.{classMethod}({args}); 

        s=s+"Output: "+ ret + "\\n";
        console.log(s);
      }
    });
    send("Heap Search - END ("+classname+")");
  });