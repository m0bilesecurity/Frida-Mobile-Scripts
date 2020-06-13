/************************************************************************
 * Name: Print args and return value
 * OS: Android
 * Author: @mobilesecurity_
 * Source: https://github.com/m0bilesecurity
 * Info: make sure to replace placeholders
        * {className}
        * {classMethod}
        * {overload} = overload(<signature>)
        * {args} = v0,v1,v2, etc...
*************************************************************************/

Java.perform(function () {
    var classname = "{className}";
    var classmethod = "{classMethod}";
    var hookclass = Java.use(classname);
    

    hookclass.{classMethod}.{overload}implementation = function ({args}) {
        send("[Call_Stack]\\nClass: " +classname+"\\nMethod: "+methodsignature+"\\n");
        var ret = this.{classMethod}({args});
        
        var s="";
        s=s+"[Hook_Stack]\\n"
        s=s+"Class: " +classname+"\\n"
        s=s+"Method: " +classmethod+"\\n"
        s=s+"Called by: "+Java.use('java.lang.Exception').$new().getStackTrace().toString().split(',')[1]+"\\n"
        s=s+"Input: "+eval({args})+"\\n";
        s=s+"Output: "+ret+"\\n";
        //uncomment the line below to print StackTrace
        //s=s+"StackTrace: "+Java.use('android.util.Log').getStackTraceString(Java.use('java.lang.Exception').$new()).replace('java.lang.Exception','') +"\\n";

        send(s);
                
        return ret;
    };
});