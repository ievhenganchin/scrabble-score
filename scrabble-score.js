module.exports = (function() {
    'use strict';
    var config = {
        1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']
    };

    var buildMap = function (conf) {
        var result = {};

        for (var key in conf) {
            if (conf.hasOwnProperty(key) && Array.isArray(conf[key])) {
                conf[key].forEach(function (letter) {
                    result[letter] = parseInt(key);
                });
            }
        }

        return result;
    };

    var mapTable = buildMap(config);

    return function(str) {
        var result = 0;

        if (str) {
            str = str.toLowerCase();

            for (var i = 0, len = str.length; i < len; i++) {
                result += mapTable[str[i]];
            }
        }

        return result;
    }
})();