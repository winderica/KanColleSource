const function293 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._check()
            }, e.prototype._check = function () {
                var t = o.default.model.deck.getAll();
                t = t.filter(function (t, e, i) {
                    return null != t.expedition && 2 == t.expedition.state
                });
                var e = o.default.view.portMain.expedition_alert;
                t.length > 0 ? (e.initialize(t[0].mstID), e.activate(), e.visible = !0) : (e.deactive(), e.visible = !1), this._endTask()
            }, e
        }(r.TaskBase);
    e.TaskExpeditionAlertUpdate = s
}