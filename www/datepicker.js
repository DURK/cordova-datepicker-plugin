/**
 * Phonegap DatePicker Plugin Copyright (c) Greg Allen 2011 MIT Licensed
 * Reused and ported to Android plugin by Daniel van 't Oever
 * Revised for phonegap 3.0.0 by Patrick Foh
 * Revised and refactored for phonegap build 3.0.0 by Dirk-Jan Hoek
 */
var exec = require("cordova/exec");

var datePicker = {
    show: function (options, cb) {
        if (typeof cb !== "function") {
            console.log("DatePicker.show failure: success callback must be a function");
            return;
        }

        if (options.date && options.date instanceof Date)
            options.date = formatDate(options.date);

        var defaults = {
            mode: 'datetime',
            date: new Date(),
            allowOldDates: true
        };

        for (var key in defaults) {
            if (typeof options[key] !== "undefined")
                defaults[key] = options[key];
        }

        exec(cb, null, "Datepicker", "show", [defaults]);
    }
};

//helpers
var formatDate = function (date) {
    return (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear()) + "/" + (date.getHours()) + "/" + (date.getMinutes());
};

module.exports = datePicker;
