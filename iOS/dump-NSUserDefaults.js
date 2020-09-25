/************************************************************************
 * Name: Dump NSUserDefaults
 * OS: iOS
 * Author: @noobpk
 * Source: https://github.com/noobpk/frida-ios-hook
*************************************************************************/

console.log("[*] Started: Read NSUserDefaults PLIST file");

try {
  var NSUserDefaults = ObjC.classes.NSUserDefaults;
  var NSDictionary = NSUserDefaults.alloc().init().dictionaryRepresentation();
  console.log(NSDictionary.toString())
} catch (err) {
  console.log("[!] Exception: " + err.message);
}

console.log("[*] Completed: Read NSUserDefaults PLIST file");