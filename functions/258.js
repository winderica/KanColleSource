const function258 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    ! function (t) {
        function e(e) {
            return e && t.hasItem(e) ? decodeURI(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + encodeURI(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1")) : null
        }

        function i(t, e, i, n, o, r) {
            if (t && !/^(?:expires|max\-age|path|domain|secure)$/i.test(t)) {
                var s = "";
                if (i) switch (i.constructor) {
                    case Number:
                        s = i === 1 / 0 ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + i;
                        break;
                    case String:
                        s = "; expires=" + i;
                        break;
                    case Date:
                        s = "; expires=" + i.toUTCString()
                }
                document.cookie = encodeURI(t) + "=" + encodeURI(e) + s + (o ? "; domain=" + o : "") + (n ? "; path=" + n : "") + (r ? "; secure" : "")
            }
        }

        function n(t) {
            return new RegExp("(?:^|;\\s*)" + encodeURI(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        }
        t.getItem = e, t.setItem = i, t.hasItem = n
    }(e.CookieUtil || (e.CookieUtil = {}))
}