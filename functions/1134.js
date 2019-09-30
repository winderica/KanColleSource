const function1134 = function (t, e, i) {
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
    var o = i(3),
        r = i(33),
        s = i(404),
        a = i(405),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._bg = new PIXI.Sprite, n._bg.position.set(-106, 37), n.addChild(n._bg), n._message = new PIXI.Sprite, n._message.position.set(282, 74), n.addChild(n._message), n._icon = new a.MedalIcon, n._icon.position.set(358, 152), n.addChild(n._icon), n._btn_yes = new r.BtnBase(e, i), n._btn_yes.position.set(241, 251), n.addChild(n._btn_yes), n._btn_no = new r.BtnBase(-1, i), n._btn_no.position.set(451, 251), n.addChild(n._btn_no), n
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._bg.texture = o.ITEM_ILIST_MEDAL.getTexture(8), this._message.texture = o.ITEM_ILIST_MEDAL.getTexture(9), this._initialize(t, 4)
            }, e
        }(s.ConfirmViewBase);
    e.ConfirmRemodelPlanView = _
}