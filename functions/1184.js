const function1184 = function (t, e, i) {
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
    var o = i(117),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._dic = {}, e
            }
            return n(e, t), e.prototype.showAlert = function (t) {
                var e, i = t.model.alert,
                    n = 384,
                    r = 0;
                if (1 == i) e = 1, n = 444, r = -7;
                else if (2 == i) e = 2;
                else if (3 == i) e = 3;
                else if (4 == i) e = 4;
                else {
                    if (5 != i) return;
                    e = 5
                }
                var s = new PIXI.Sprite(o.DUTY_COMMON.getTexture(e));
                s.x = t.x + n, s.y = t.y + r, this.addChild(s), this._dic[t.model.id] = s
            }, e.prototype.hideAlert = function (t) {
                if (void 0 === t && (t = null), null == t)
                    for (var e in this._dic) this._hideAlert(e);
                else {
                    var i = t.model.id;
                    this._hideAlert(i.toString())
                }
            }, e.prototype._hideAlert = function (t) {
                if (1 == this._dic.hasOwnProperty(t)) {
                    var e = this._dic[t];
                    null != e.parent && (e.parent.removeChild(e), delete this._dic[t])
                }
            }, e
        }(PIXI.Container);
    e.AlertLayer = r
}