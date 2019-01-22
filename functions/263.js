const function263 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {
            this.normal = 0, this.rengo = 0, this.yugeki = 0
        }
        return t.prototype.init = function (t) {
            this.normal = 0, this.rengo = 0, this.yugeki = 0, null != t && (t.length < 1 || (this.normal = t[0], t.length < 2 || (this.rengo = t[1], t.length < 3 || (this.yugeki = t[2]))))
        }, t
    }();
    e.AllowedDeckTypeModel = n
}