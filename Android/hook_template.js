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
    var jlog = Java.use('android.util.Log')
    var jexception = Java.use('java.lang.Exception');

    hookclass.{classMethod}.{overload}.implementation = function ({args}) {
        console.log("CALLED: " + classname + "." + classmethod + "()\\n");
        var ret = this.{classMethod}({args});
        var s="";
        s=s+"HOOK: " + classname + "." + classmethod + "()\\n";
        s=s+"IN: "+eval(args)+"\\n";
        s=s+"OUT: "+ret+"\\n";
        s=s+"StackTrace: "+jlog.getStackTraceString(jexception.$new()) +"\\n";
        console.log(s);
                
        return ret;
    };
})