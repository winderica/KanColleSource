const function712 = function (t, e, i) {
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
        function e(e) {
            var i = t.call(this) || this;
            i._onMouseOut = function () {
                i.hukidashi.visible = !1
            }, i._onMouseOver = function () {
                i.hukidashi.visible = !0
            }, i._onClick = function () {
                i.onClick()
            }, i.index = e, i.buttonOpen = new PIXI.Sprite, i.offButtonOpen = new PIXI.Sprite, i.hukidashi = new PIXI.Sprite;
            var n = o.ORGANIZE_MAIN.getTexture(21), s = o.ORGANIZE_MAIN.getTexture(22),
                a = o.ORGANIZE_MAIN.getTexture(39);
            return i.buttonOpen.texture = n, i.offButtonOpen.texture = s, i.hukidashi.texture = a, i.buttonOpen.interactive = !0, i.buttonOpen.buttonMode = !0, i.buttonOpen.position.set(412, 24), i.offButtonOpen.position.set(412, 24), i.hukidashi.position.set(9, 16), i.offButtonOpen.interactive = !0, i.buttonOpen.addListener(r.EventType.CLICK, i._onClick), i.offButtonOpen.addListener(r.EventType.MOUSEOUT, i._onMouseOut), i.offButtonOpen.addListener(r.EventType.MOUSEOVER, i._onMouseOver), i.buttonOpen.visible = !1, i.offButtonOpen.visible = !1, i.hukidashi.visible = !1, i.addChild(i.offButtonOpen, i.buttonOpen, i.hukidashi), i
        }

        return n(e, t), e.prototype.update = function (t) {
            this.buttonOpen.visible = !1, this.offButtonOpen.visible = !1, this.hukidashi.visible = !1, t ? this.buttonOpen.visible = !0 : this.offButtonOpen.visible = !0
        }, e.prototype.dispose = function () {
            this.buttonOpen.removeAllListeners(r.EventType.CLICK), this.offButtonOpen.removeAllListeners(r.EventType.MOUSEOUT), this.offButtonOpen.removeAllListeners(r.EventType.MOUSEOVER), this._onMouseOut = this._onClick = this._onMouseOver = null, this.onClick = null, this.buttonOpen = null, this.offButtonOpen = null, this.hukidashi = null, this.index = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.PresetExtensionView = s
}