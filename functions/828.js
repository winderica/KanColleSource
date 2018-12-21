const function828 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(4), r = i(3), s = i(1), a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            n._onClickSign = function () {
                n._cb_onSign && n._cb_onSign()
            }, n._onClickBack = function () {
                n._cb_onBack && n._cb_onBack()
            }, n._cb_onSign = e, n._cb_onBack = i;
            var a = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(47));
            n.addChild(a);
            var _ = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(33));
            return _.position.set(18, -117), a.addChild(_), n._buttonSign = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(12)), n._buttonSign.position.set(48, 212), n._buttonSign.interactive = !0, n._buttonSign.buttonMode = !0, n.addChild(n._buttonSign), n._buttonBack = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(0)), n._buttonBack.position.set(384, 212), n._buttonBack.interactive = !0, n._buttonBack.buttonMode = !0, n.addChild(n._buttonBack), n._textBeforeCount = new o.TextBox(25, 5523516), n._textBeforeCount.position.set(386, 78), n._textBeforeCount.anchor.x = 1, n.addChild(n._textBeforeCount), n._arrow = new o.TextBox(18, 5523516), n._arrow.position.set(393, 83), n._arrow.text = "\u2192", n.addChild(n._arrow), n._textAfterCount = new o.TextBox(25, 5523516), n._textAfterCount.position.set(417, 78), n.addChild(n._textAfterCount), n._buttonSign.on(s.EventType.CLICK, n._onClickSign), n._buttonBack.on(s.EventType.CLICK, n._onClickBack), n
        }

        return n(e, t), e.prototype.dispose = function () {
            this._buttonSign.off(s.EventType.CLICK), this._buttonBack.off(s.EventType.CLICK), this._textBeforeCount.destroy(), this._textAfterCount.destroy(), this._arrow.destroy(), this._cb_onSign = null, this._cb_onBack = null, this._buttonSign = null, this._buttonBack = null, this._textBeforeCount = null, this._textAfterCount = null, this._arrow = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this._textBeforeCount.text = "" + t, this._textAfterCount.text = "" + (t - 1)
        }, e
    }(PIXI.Container);
    e.MarriageConfirm = a
}