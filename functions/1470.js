const function1470 = function (t, e, i) {
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
    var o = i(5),
        r = i(11),
        s = i(1471),
        a = function (t) {
            function e(e, i, n, o) {
                void 0 === o && (o = !1);
                var r = t.call(this) || this;
                return r._hideTelop = function () {
                    createjs.Tween.get(r._telop).to({
                        alpha: 0
                    }, 300).call(function () {
                        r._layer.removeChild(r._telop), r._telop = null, r._endTask()
                    })
                }, r._layer = e, r._type = i, r._mst_id = n, r._sub_text = o, r
            }
            return n(e, t), e.prototype._start = function () {
                this._showTelop()
            }, e.prototype._showTelop = function () {
                this._telop = new s.BonusTelop, this._telop.position.set(o.default.width / 2, o.default.height / 2), 3 == this._type ? this._telop.initializeForShip(this._sub_text) : 2 == this._type ? this._telop.initializeForSlot() : 6 == this._type && this._telop.initializeForUseitem(this._mst_id), this._layer.addChild(this._telop), this._telop.play(), this._telop.once("complete", this._hideTelop)
            }, e
        }(r.TaskBase);
    e.TaskBonusTelop = a
}