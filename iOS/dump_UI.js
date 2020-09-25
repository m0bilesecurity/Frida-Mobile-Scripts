/************************************************************************
 * Name: Dump UI
 * OS: iOS
 * Author: @mobilesecurity_
 * Source: https://github.com/m0bilesecurity
*************************************************************************/

console.log("[*] Dumping UI - script loaded")

var current_window = ObjC.classes.UIWindow.keyWindow()
console.log(current_window.recursiveDescription().toString());

console.log("[*] Dumping UI - completed")