const function943 = function (t, e, i) {
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
    var o = i(17),
        r = i(352),
        s = i(945),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                return n._btn_extend = new s.AirUnitExtendBtn(i), n._btn_extend.visible = !1, n.addChild(n._btn_extend), n
            }
            return n(e, t), e.prototype.initialize = function (e) {
                t.prototype.initialize.call(this, e), this._btn_extend.initialize()
            }, e.prototype.activate = function () {
                t.prototype.activate.call(this), this._btn_extend.activate()
            }, e.prototype.deactivate = function () {
                t.prototype.deactivate.call(this), this._btn_extend.deactivate()
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this._btn_extend.dispose()
            }, e.prototype.updateExtendBtn = function (t, e) {
                this._total_num < 3 && t != o.EVENT_AREA_ID ? (this._btn_extend.enabled = e > 0, this._btn_extend.x = 101 * this._total_num, this._btn_extend.visible = !0) : this._btn_extend.visible = !1
            }, e
        }(r.AirUnitPanelTabContainer);
    e.AirUnitPanelTabContainerWithExtend = a
}