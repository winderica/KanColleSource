const function851 = function (t, e, i) {
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
    var o = i(3), r = i(3), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onMouseOver = function () {
                e.popup.visible = !0
            }, e._onMouseOut = function () {
                e.popup.visible = !1
            }, e._onClick = function () {
                e.hasKey ? e.onClick(e.memDockId) : r.SE.play("248")
            };
            var i = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(11)), n = new PIXI.Sprite;
            n.position.set(462, -24), e.addChild(i, n);
            var a = o.REPAIR_MAIN.getTexture(25), _ = o.REPAIR_MAIN.getTexture(24);
            return e.background = i, e.background.addListener(s.EventType.MOUSEOVER, e._onMouseOver), e.background.addListener(s.EventType.MOUSEOUT, e._onMouseOut), e.background.addListener(s.EventType.CLICK, e._onClick), e.popup = n, e.huki_r_01 = _, e.huki_r_02 = a, e
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            this.popup.texture = PIXI.Texture.EMPTY, this.popup.visible = !1, this.popup.texture = this.huki_r_01, this.hasKey = i, i && (this.popup.texture = this.huki_r_02), this.background.interactive = this.background.buttonMode = !1, e && (this.background.interactive = this.background.buttonMode = !0), this.memDockId = t
        }, e.prototype.dispose = function () {
            this.removeChild(this.background), this.removeChild(this.popup), this.background.removeAllListeners(s.EventType.MOUSEOVER), this.background.removeAllListeners(s.EventType.MOUSEOUT), this.background.removeAllListeners(s.EventType.CLICK), this.background.interactive = this.background.buttonMode = !1, this.background.texture = PIXI.Texture.EMPTY, this.popup.texture = PIXI.Texture.EMPTY, this.onClick = this._onClick = null, this._onMouseOut = null, this._onMouseOver = null, this.huki_r_01 = null, this.huki_r_02 = null, this.background = null, this.popup = null, this.memDockId = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ExtensionDock = a
}