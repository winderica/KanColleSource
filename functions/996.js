const function996 = function (t, e, i) {
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
    var o = i(997),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._tabs = [];
                for (var n = 0; n < 5; n++) {
                    var r = new o.AirUnitListTab(e);
                    r.x = 69 * n, i.addChild(r), i._tabs.push(r)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0; t < this._tabs.length; t++) {
                    var e = this._tabs[t];
                    0 == t && (e.selected = !0), e.initialize(t)
                }
            }, e.prototype.update = function (t) {
                for (var e = 0, i = this._tabs; e < i.length; e++) {
                    var n = i[e];
                    n.selected = n.category == t
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._tabs; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e
        }(PIXI.Container);
    e.AirUnitListTabContainer = r
}