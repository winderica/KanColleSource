const function1139 = function (t, e, i) {
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
    var o = i(1),
        r = i(74),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClickYes = function () {
                    null != i._cb_onClick && i._cb_onClick(!0)
                }, i._onClickNo = function () {
                    null != i._cb_onClick && i._cb_onClick(!1)
                }, i._cb_onClick = e, i._btn_yes = new PIXI.Sprite, i._btn_yes.position.set(153, 78), i.addChild(i._btn_yes), i._btn_no = new PIXI.Sprite, i._btn_no.position.set(246, 78), i.addChild(i._btn_no), i._btn_yes.interactive = !0, i._btn_no.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = r.COMMON_SELECTABLE_REWARD.getTexture(1);
                var e = new PIXI.Sprite(t),
                    i = Math.min(135 / e.width, 135 / e.height);
                e.scale.set(i), e.x = 11 + Math.round((135 - e.width) / 2), e.y = 12 + Math.round((135 - e.height) / 2), this.addChild(e), this._btn_yes.texture = r.COMMON_SELECTABLE_REWARD.getTexture(4), this._btn_no.texture = r.COMMON_SELECTABLE_REWARD.getTexture(3)
            }, e.prototype.activate = function () {
                1 != this._btn_yes.buttonMode && (this._btn_yes.buttonMode = !0, this._btn_yes.on(o.EventType.CLICK, this._onClickYes), this._btn_no.buttonMode = !0, this._btn_no.on(o.EventType.CLICK, this._onClickNo))
            }, e.prototype.deactivate = function () {
                this._btn_yes.buttonMode = !1, this._btn_yes.off(o.EventType.CLICK, this._onClickYes), this._btn_no.buttonMode = !1, this._btn_no.off(o.EventType.CLICK, this._onClickNo)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e
        }(PIXI.Sprite);
    e.RewardSelectConfirm = s
}