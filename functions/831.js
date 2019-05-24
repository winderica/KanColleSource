const function831 = function (t, e, i) {
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
        r = i(3),
        s = i(1),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._onClickYes = function () {
                    n._cb_onYes && n._cb_onYes()
                }, n._onClickNo = function () {
                    n._cb_onNo && n._cb_onNo()
                }, n._cb_onYes = e, n._cb_onNo = i;
                var a = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(49));
                return n.addChild(a), n._btnYes = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(13)), n._btnYes.position.set(78, 210), n._btnYes.interactive = !0, n._btnYes.buttonMode = !0, n.addChild(n._btnYes), n._btnNo = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(0)), n._btnNo.position.set(351, 210), n._btnNo.interactive = !0, n._btnNo.buttonMode = !0, n.addChild(n._btnNo), n._beforeCount = new o.TextBox(25, 5523516), n._beforeCount.anchor.x = 1, n._beforeCount.position.set(395, 119), n.addChild(n._beforeCount), n._arrow = new o.TextBox(18, 5523516), n._arrow.text = "\u2192", n._arrow.position.set(404, 122), n.addChild(n._arrow), n._afterCount = new o.TextBox(25, 5523516), n._afterCount.position.set(438, 119), n.addChild(n._afterCount), n._btnYes.on(s.EventType.CLICK, n._onClickYes), n._btnNo.on(s.EventType.CLICK, n._onClickNo), n
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._btnYes.off(s.EventType.CLICK), this._btnNo.off(s.EventType.CLICK), this._beforeCount.destroy(), this._afterCount.destroy(), this._arrow.destroy(), this._cb_onYes = null, this._cb_onNo = null, this._btnYes = null, this._btnNo = null, this._beforeCount = null, this._afterCount = null, this._arrow = null
            }, e.prototype.update = function (t) {
                this._beforeCount.text = t.toString(), this._afterCount.text = (t - 1).toString()
            }, e
        }(PIXI.Container);
    e.ExtensionConfirm = a
}