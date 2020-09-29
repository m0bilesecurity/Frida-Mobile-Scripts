/************************************************************************
 * Name: Enumerate Native Lib Exports 
 * OS: Android
 * Author: @mobilesecurity_
 * Source: https://github.com/m0bilesecurity
*************************************************************************/

Java.perform(function () {
    var lib_name = "Insert_lib_name" //e.g. libnative-lib.so 

    var exports = Module.enumerateExportsSync(lib_name);

    console.log("Enumerate Native Lib Exports - started")
    console.log("Native lib name: " + lib_name)

    if (exports === undefined || exports.length == 0) {
        console.log("No exported methods for " + lib_name)
    }
    for (var i = 0; i < exports.length; i++) {
        var current_export = {
            name: exports[i].name,
            address: exports[i].address
        };
        console.log(JSON.stringify(current_export, null, 1))
    }
    console.log("Enumerate Native Lib Exports - completed")
});