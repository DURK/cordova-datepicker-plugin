<b>Datepicker (Android+iOS) that works with Apache Cordova 3.x</b>

For an example on how to use this plugin, please refer to this [demo-project](https://github.com/DURK/cordova-datepicker-plugin-test-project/)

## Install
To install the plugin, run the following command (Check that you have node.js and the cordova/phonegap-cli installed)

   `cordova plugin add https://github.com/DURK/cordova-datepicker-plugin`
   <p>or:</p>
   `phonegap local plugin add https://github.com/DURK/cordova-datepicker-plugin`

## Note
* All I did was refactor [this](https://github.com/mrfoh/cordova-datepicker-plugin) Android plugin and combine it with [this](https://github.com/sectore/phonegap3-ios-datepicker-plugin) iOS plugin.
* I've kept the JS-interface file for iOS `www/ios/datepicker.js`

## TODO
* Add this plugin to build.phonegap.com/plugins
* Refactor the iOS-plugin, so it is able to use the same refactored JS-interface file that Android uses
