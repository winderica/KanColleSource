const function260 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    ! function (t) {
        function e(t, e) {
            e || (e = "YYYY/MM/DD hh:mm:ss");
            var i = new Date(t);
            return e = e.replace(/YYYY/g, i.getFullYear().toString()), e = e.replace(/MM/g, ("0" + (i.getMonth() + 1)).slice(-2)), e = e.replace(/DD/g, ("0" + i.getDate()).slice(-2)), e = e.replace(/hh/g, ("0" + i.getHours()).slice(-2)), e = e.replace(/mm/g, ("0" + i.getMinutes()).slice(-2)), e = e.replace(/ss/g, ("0" + i.getSeconds()).slice(-2))
        }
        t.format = e
    }(e.DateUtil || (e.DateUtil = {}))
}