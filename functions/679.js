const function679 = function (t, e, i) {
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
    var o = i(8),
        r = i(680),
        s = function (t) {
            function e() {
                var e = t.call(this, 1, 0) || this;
                return e._pukapuka = new r.Pukapuka, e._pukapuka.position.set(600, 360), e.addChild(e._pukapuka), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._pukapuka.initialize()
            }, e.prototype.activate = function () {
                this._pukapuka.activate()
            }, e.prototype.deactivate = function () {
                this._pukapuka.deactivate()
            }, e.prototype.dispose = function () {
                this._pukapuka.dispose()
            }, e
        }(o.AreaBox);
    e.PukapukaLayer = s
}