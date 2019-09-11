const function355 = function (t, e, i) {
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
    var o = i(26),
        r = i(962),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._total_num = 0, i._tabs = [];
                for (var n = 0; n < 3; n++) {
                    var o = new r.AirUnitPanelTab(e);
                    o.x = 101 * n, i.addChild(o), i._tabs.push(o)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = o.SALLY_AIRUNIT.getTexture(123), this._total_num = t;
                for (var e = 0; e < this._tabs.length; e++) {
                    this._tabs[e].initialize(e + 1, t)
                }
            }, e.prototype.update = function (t) {
                for (var e = 0; e < this._tabs.length; e++) {
                    var i = this._tabs[e];
                    i.selected = i.airunit_id == t
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
        }(PIXI.Sprite);
    e.AirUnitPanelTabContainer = s
}