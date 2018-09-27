const function1212 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(1213), o = function () {
        function t() {
            this._dic = {}
        }

        return t.prototype.add = function (t) {
            null != t && (this._dic[t.mem_id] = new n.ShipInstantModel(t))
        }, t.prototype.addList = function (t) {
            if (null != t) for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e];
                this.add(n)
            }
        }, t.prototype.get = function (t) {
            return 1 == this._dic.hasOwnProperty(t.toString()) ? this._dic[t] : null
        }, t.prototype.getTotalHP = function () {
            var t = 0;
            for (var e in this._dic) {
                t += this._dic[e].hp
            }
            return t
        }, t
    }();
    e.DeckInstantModel = o
}