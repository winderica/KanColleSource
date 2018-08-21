const function1072 = function (t, e, i) {
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
    var o = i(1), r = i(82), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick(i._target)
            }, i._cb_onClick = e, i._bg = new PIXI.Graphics, i._bg.beginFill(0, 0), i._bg.drawRect(0, 0, 260, 260), i._bg.endFill(), i.addChild(i._bg), i._img = new PIXI.Sprite, i.addChild(i._img), i.scale.set(1), i.interactive = !0, i
        }

        return n(e, t), e.prototype.update = function (t) {
            if (this._target = t, this._img.texture = PIXI.Texture.EMPTY, null == t) return null;
            var e = t.mst_ids[0];
            new r.TaskLoadSlotResource("card_t", this._img, e).start()
        }, e.prototype.activate = function () {
            null != this._target && 1 != this.buttonMode && (this.buttonMode = !0, this.on(o.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(o.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onClick = null
        }, e
    }(PIXI.Container);
    e.MainItemSlot = s
}