const function1071 = function (t, e, i) {
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
    var o = i(1), r = i(67), s = i(37), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClick = function () {
                null != i._cb_onClick && i._cb_onClick(i._target)
            }, i._cb_onClick = e, i._bg = new PIXI.Graphics, i._bg.beginFill(0, 0), i._bg.drawRect(0, 0, 327, 450), i._bg.endFill(), i._bg.scale.set(.5), i.addChild(i._bg), i._img = new PIXI.Sprite, i._img.scale.set(.5), i.addChild(i._img), i._ring = new r.RingMiddle, i._ring.position.set(114, 175), i._ring.visible = !1, i.addChild(i._ring), i.interactive = !0, i
        }

        return n(e, t), e.prototype.update = function (t) {
            if (this._target = t, this._img.texture = PIXI.Texture.EMPTY, this._ring.visible = !1, null != t) {
                var e = t.mst_ids[0];
                this._ring.initialize(), this._ring.visible = t.hasMarriage(), this._ring.deactivate(), 1 == this._ring.visible && this._ring.activate(), new s.TaskLoadShipResource("card", this._img, e, !1).start()
            }
        }, e.prototype.activate = function () {
            null != this._target && 1 != this.buttonMode && (this.buttonMode = !0, this.on(o.EventType.CLICK, this._onClick), this._ring.activate())
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(o.EventType.CLICK, this._onClick), this._ring.deactivate()
        }, e.prototype.dispose = function () {
            this.deactivate(), this._ring.dispose(), this._cb_onClick = null
        }, e
    }(PIXI.Container);
    e.MainItemShip = a
}