const function395 = function (t, e, i) {
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
    var o = i(1102),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._btns = [], i._btns.push(new o.TabBtn(0, e)), i._btns.push(new o.TabBtn(1, e)), i._btns.push(new o.TabBtn(2, e));
                for (var n = 0; n < i._btns.length; n++) {
                    var r = i._btns[n];
                    r.y = 61 * n, i.addChild(r)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                for (var e = 0; e < this._btns.length; e++) {
                    this._btns[e].initialize(t)
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.update = function (t) {
                for (var e = 0, i = this._btns; e < i.length; e++) {
                    var n = i[e];
                    n.selected = n.target == t
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e
        }(PIXI.Container);
    e.TabContainer = r
}