const function465 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(11),
        r = i(1413),
        s = function (t) {
            function e(e, i, n, o, s) {
                var a = t.call(this) || this;
                return a._attacker = e, a._slot_mst_id1 = i, a._slot_mst_id2 = n, a._slot_mst_id3 = o, a._preload_task = new r.PreloadCutinKubo(e, i, n, o, s), a
            }
            return n(e, t), e.prototype.getPreloadTask = function () {
                return this._preload_task
            }, e.prototype.setCallback = function (t) {
                this._cb_onAttack = t
            }, e.prototype._endTask = function () {
                this._attacker = null, this._preload_task = null, this._cb_onAttack = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.CutinKuboBase = s
}