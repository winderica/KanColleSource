const function871 = function (t, e, i) {
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
        r = i(4),
        s = i(21),
        a = i(35),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onClickYes = function () {
                    i._cb_onComplete(!0)
                }, i._onClickNo = function () {
                    i._cb_onComplete(!1)
                }, i._cb_onComplete = e;
                var n = new PIXI.Sprite(s.COMMON_MAIN.getTexture(63)),
                    _ = new PIXI.Sprite(a.ARSENAL_MAIN.getTexture(83)),
                    l = new PIXI.Sprite(a.ARSENAL_MAIN.getTexture(3));
                i.labelUse = new r.TextBox(21, 16777215), i.labelName = new r.TextBox(21, 1949120), i.beforeCount = new r.TextBox(22, 16777215), i.afterCount = new r.TextBox(22, 16777215);
                var u = new PIXI.Sprite(a.ARSENAL_MAIN.getTexture(0));
                return i.labelName.text = "\u9ad8\u901f\u5efa\u9020", i.labelUse.text = "\u4f7f\u7528\u3059\u308b", i.beforeCount.anchor.x = 1, i.beforeCount.position.set(630, 217), i.afterCount.position.set(664, 217), i.labelName.position.set(307, 166), i.labelUse.position.set(513, 166), u.position.set(730, 297), l.position.set(432, -43), _.position.set(498, 210), u.position.set(639, 226), i.addChild(n, l), i._btn_yes = new PIXI.Sprite(a.ARSENAL_MAIN.getTexture(44)), i._btn_yes.interactive = !0, i._btn_yes.buttonMode = !0, i._btn_yes.position.set(540, 484), i._btn_yes.on(o.EventType.CLICK, i._onClickYes), i.addChild(i._btn_yes), i._btn_no = new PIXI.Sprite(a.ARSENAL_MAIN.getTexture(36)), i._btn_no.interactive = !0, i._btn_no.buttonMode = !0, i._btn_no.position.set(273, 484), i._btn_no.on(o.EventType.CLICK, i._onClickNo), i.addChild(i._btn_no), i.addChild(i.beforeCount, i.afterCount, u, _, i.labelName, i.labelUse), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._btn_yes.off(o.EventType.CLICK, this._onClickYes), this._btn_no.off(o.EventType.CLICK, this._onClickNo), this.beforeCount.destroy(), this.afterCount.destroy(), this.labelName.destroy(), this.labelUse.destroy(), this._cb_onComplete = null, this._btn_yes = null, this._btn_no = null, this.beforeCount = null, this.afterCount = null, this.labelName = null, this.labelUse = null
            }, e.prototype.update = function (t, e) {
                this.beforeCount.text = t.toString(), this.afterCount.text = e.toString()
            }, e
        }(PIXI.Container);
    e.HighSpeedConfirmView = _
}