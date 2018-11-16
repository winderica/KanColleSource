const function94 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(63), r = i(76), s = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            if (this._data = this._record.raw.raigeki_opening, null == this._data) this._endTask(); else {
                new o.PhaseEnemyEnter(this._scene, this._record).start(function () {
                    t._ready()
                })
            }
        }, e
    }(r.PhaseRaigeki);
    e.PhaseRaigekiOpening = s
}