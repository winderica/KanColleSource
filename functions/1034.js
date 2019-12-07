const function1034 = function (t, e, i) {
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
    var o = i(4),
        r = i(8),
        s = i(37),
        a = i(1035),
        _ = i(1036),
        l = i(374),
        u = i(1037),
        c = i(1038),
        h = i(375),
        p = i(1),
        d = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onClose = function () {
                    null != n._cb_onClose && n._cb_onClose()
                }, n._cb_onClose = i, n._bg = new a.UserinfoPanelBG, n.addChild(n._bg), n._detail = new _.UserinfoPanelInfoDetail, n.addChild(n._detail), n._deck_name = new o.TextBox(25, 4999235), n._deck_name.anchor.set(.5, 0), n._deck_name.position.set(885, 132), n.addChild(n._deck_name), n._flag = new l.CompFlag, n._flag.position.set(1065, 129), n.addChild(n._flag), n._ship_container = new PIXI.Container, n._ship_container.position.set(711, 172), n.addChild(n._ship_container), n._ships = [], n._area_close = new r.AreaBox(0), n.addChild(n._area_close), n._btn = new c.GoPracticeBtn(e), n._btn.position.set(249, 583), n.addChild(n._btn), n._btn_close = new h.CloseBtn(i), n._btn_close.position.set(1108, 27), n.addChild(n._btn_close), n
            }
            return n(e, t), e.prototype.initialize = function () {
                this._bg.initialize(), this._detail.initialize();
                for (var t = 0; t < 6; t++) {
                    var e = new u.CompRivalShip;
                    e.initialize(), e.y = 80 * t, this._ship_container.addChild(e), this._ships.push(e)
                }
                this._btn.initialize(), this._btn_close.initialize()
            }, e.prototype.update = function (t) {
                this._detail.update(t), this._flag.update(t.flag_type);
                for (var e = 0; e < this._ships.length; e++) {
                    var i = this._ships[e],
                        n = t.ships[e];
                    i.update(n)
                }
            }, e.prototype.activate = function () {
                this._area_close.on(p.EventType.CLICK, this._onClose), this._btn.activate(), this._btn_close.activate()
            }, e.prototype.deactivate = function () {
                this._area_close.off(p.EventType.CLICK, this._onClose), this._btn.deactivate(), this._btn_close.deactivate()
            }, e.prototype.dispose = function () {
                s.TaskLoadShipResource.abortBy(this._ship_container), this._detail.dispose(), this._deck_name.destroy();
                for (var t = 0, e = this._ships; t < e.length; t++) {
                    e[t].dispose()
                }
                this._area_close.off(p.EventType.CLICK, this._onClose), this._btn.dispose(), this._btn_close.dispose(), this._cb_onClose = null
            }, e
        }(PIXI.Container);
    e.UserinfoPanel = d
}