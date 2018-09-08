const function823 = function (t, e, i) {
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
        function e() {
            var e = t.call(this) || this;
            e._onClickYes = function () {
                e.onClickYes()
            }, e._onClickNo = function () {
                e.onClickNo()
            };
            var i = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(49)),
                n = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(13)),
                a = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(0)), _ = new o.TextBox(25, 5523516),
                u = new o.TextBox(25, 5523516), l = new o.TextBox(18, 5523516);
            return l.text = "\u2192", _.anchor.x = 1, _.position.set(395, 119), u.position.set(438, 119), n.position.set(78, 210), a.position.set(351, 210), l.position.set(404, 122), n.interactive = n.buttonMode = !0, a.interactive = a.buttonMode = !0, n.addListener(s.EventType.CLICK, e._onClickYes), a.addListener(s.EventType.CLICK, e._onClickNo), e.addChild(i, n, a, _, l, u), e.beforeCount = _, e.afterCount = u, e.positive = n, e.negative = a, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.positive.removeAllListeners(s.EventType.CLICK), this.negative.removeAllListeners(s.EventType.CLICK), this.positive = null, this.negative = null, this.onClickYes = null, this.onClickNo = null, this.beforeCount = null, this.afterCount = null, this._onClickYes = this._onClickYes = null, this._onClickNo = this._onClickNo = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.beforeCount.text = t.toString(), this.afterCount.text = (t - 1).toString()
        }, e
    }(PIXI.Container);
    e.ExtensionConfirm = a
}