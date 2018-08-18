const function336 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(50)), n = new PIXI.Graphics;
            return n.beginFill(0, 0), n.drawRect(0, 0, 30, 45), n.y = -n.height / 2 + i.height / 2, n.endFill(), n.renderable = !1, e.addChild(n, i), e.slotIconDelete = i, e.clickArea = n, e.interactive = e.buttonMode = !0, e.addListener(r.EventType.CLICK, e._onClick), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeAllListeners(r.EventType.CLICK), this.slotIconDelete.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.interactive = this.buttonMode = !1, this.slotIconDelete = null, this.clickArea = null, this.onClick = this._onClick = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.DetachButton = s
}