/************************************************************************
 * Name: Print args and return value
 * OS: Android
 * Author: @mobilesecurity_
 * Source: https://github.com/m0bilesecurity
 * Info: make sure to replace placeholders
        * {className}
        * {classMethod}
        * {overload} = overload(<signature>)
        * {args}
*************************************************************************/


Java.perform(function () {
    var classname = "{className}"; 
    var classmethod = "{classMethod}";
    var hookclass = Java.use(classname);
    hookclass.{classMethod}.{overload}.implementation = function ({args}) {
        console("CALLED: " + classname + "." + classmethod + "()\\n");
        var ret = this.{classMethod}({args});
        var s="";
        s=s+("HOOK: " + classname + "." + classmethod + "()\\n");
        s=s+"Input: "+eval(args)+"\\n";
        s=s+"Output: "+ret+"\\n";
        console.log(s);
                
        return ret;
    };
})