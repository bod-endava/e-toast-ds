/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'double chevron right': '&#xe936;',
            'money': '&#xe92d;',
            'coin': '&#xe92d;',
            'circle close': '&#xe92e;',
            'circle x': '&#xe92e;',
            'check': '&#xe92f;',
            'check mark': '&#xe92f;',
            'circle check': '&#xe930;',
            'circle checkmark': '&#xe930;',
            'trash': '&#xe931;',
            'delete': '&#xe931;',
            'share': '&#xe932;',
            'message': '&#xe933;',
            'email': '&#xe933;',
            'mail': '&#xe933;',
            'lock': '&#xe934;',
            'secure': '&#xe934;',
            'warning circle': '&#xe900;',
            'warning circle filled': '&#xe901;',
            'information line': '&#xe902;',
            'information': '&#xe902;',
            'clock': '&#xe903;',
            'time': '&#xe903;',
            'hour': '&#xe903;',
            'warning': '&#xe904;',
            'alert': '&#xe904;',
            'notification': '&#xe905;',
            'bell': '&#xe905;',
            'upload': '&#xe906;',
            'new folder': '&#xe907;',
            'cloud': '&#xe908;',
            'copy': '&#xe909;',
            'duplicate': '&#xe909;',
            'document': '&#xe90a;',
            'folder': '&#xe90b;',
            'new file': '&#xe90c;',
            'new document': '&#xe90c;',
            'arrow down': '&#xe90d;',
            'navigate down': '&#xe90d;',
            'down': '&#xe90d;',
            'arrow left': '&#xe90e;',
            'navigate left': '&#xe90e;',
            'left': '&#xe90e;',
            'arrow right': '&#xe90f;',
            'navigate right': '&#xe90f;',
            'right': '&#xe90f;',
            'arrow up': '&#xe910;',
            'navigate up': '&#xe910;',
            'up': '&#xe910;',
            'back': '&#xe911;',
            'before': '&#xe911;',
            'chevron down': '&#xe912;',
            'chevron left': '&#xe913;',
            'chevron right': '&#xe914;',
            'chevron up': '&#xe915;',
            'open': '&#xe916;',
            'chevron down circle': '&#xe916;',
            'full screen': '&#xe917;',
            'menu': '&#xe918;',
            'hamburger menu': '&#xe918;',
            'more': '&#xe919;',
            'options': '&#xe919;',
            'next': '&#xe91a;',
            'forward': '&#xe91a;',
            'search': '&#xe91b;',
            'magnifying glass': '&#xe91b;',
            'settings': '&#xe91c;',
            'gear': '&#xe91c;',
            'adjustments': '&#xe91c;',
            'chevron up circle': '&#xe91d;',
            'collapse': '&#xe91d;',
            'label': '&#xe91e;',
            'image': '&#xe91f;',
            'picture': '&#xe91f;',
            'home': '&#xe920;',
            'house': '&#xe920;',
            'filter': '&#xe921;',
            'expand': '&#xe922;',
            'edit': '&#xe923;',
            'pencil': '&#xe923;',
            'download': '&#xe924;',
            'compress': '&#xe925;',
            'close': '&#xe926;',
            'x': '&#xe926;',
            'chat': '&#xe927;',
            'speech bubble': '&#xe927;',
            'calendar': '&#xe928;',
            'date': '&#xe928;',
            'schedule': '&#xe928;',
            'bookmark': '&#xe929;',
            'announcement': '&#xe92a;',
            'empty speech bubble': '&#xe92a;',
            'add': '&#xe92b;',
            'plus': '&#xe92b;',
            'alert message': '&#xe92c;',
            'chat alert': '&#xe92c;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/eds-icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());