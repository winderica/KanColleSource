const function821 = function (t, e, i) {
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
            e._onClickSign = function () {
                e.onClickSign()
            }, e._onClickBack = function () {
                e.onClickBack()
            };
            var i = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(47)),
                n = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(12)),
                a = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(0)),
                _ = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(33)), u = new o.TextBox(25, 5523516),
                l = new o.TextBox(25, 5523516), c = new o.TextBox(18, 5523516);
            return u.position.set(386, 78), l.position.set(417, 78), c.position.set(393, 83), n.position.set(48, 212), a.position.set(384, 212), _.position.set(18, -117), i.addChild(_), c.text = "\u2192", u.anchor.x = 1, n.interactive = a.interactive = !0, n.buttonMode = a.buttonMode = !0, n.addListener(s.EventType.CLICK, e._onClickSign), a.addListener(s.EventType.CLICK, e._onClickBack), e.addChild(i, n, a, u, c, l), e.textBeforeCount = u, e.textAfterCount = l, e.buttonSign = n, e.buttonBack = a, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.buttonSign.removeAllListeners(s.EventType.CLICK), this.buttonBack.removeAllListeners(s.EventType.CLICK), this.textBeforeCount.text = "", this.textAfterCount.text = "", this.onClickSign = null, this.onClickBack = null, this.textBeforeCount = null, this.textAfterCount = null, this.buttonSign = this._onClickSign = null, this.buttonBack = this._onClickBack = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.textBeforeCount.text = "" + t, this.textAfterCount.text = "" + (t - 1)
        }, e
    }(PIXI.Container);
    e.MarriageConfirm = a
}