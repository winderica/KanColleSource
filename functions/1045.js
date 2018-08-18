const function1045 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(234), o = function () {
        function t() {
        }

        return t.prototype.addInfoData = function (t) {
            for (var e = 0, i = t; e < i.length; e++) {
                var o = i[e];
                new n.RecordInfoModel(o)
            }
        }, t
    }();
    e.RecordModelManager = o
}