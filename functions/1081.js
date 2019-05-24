const function1081 = function (t, e, i) {
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
        r = i(70),
        s = i(37),
        a = i(3),
        _ = i(4),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick(i._target)
                }, i._cb_onClick = e;
                var n = new PIXI.Container;
                i._no = new PIXI.Sprite, i._no.position.set(0, 10), n.addChild(i._no), i._label = new _.TextBox(28, 4999235), i._label.position.set(37, 0), i._label.text = "", n.addChild(i._label), i.addChild(n);
                var o = new PIXI.Container;
                return o.position.set(0, 34), i._bg = new PIXI.Sprite, o.addChild(i._bg), i._img = new PIXI.Sprite, i._img.position.set(2, 2), i._img.scale.set(.5), o.addChild(i._img), i._ring = new r.RingMiddle, i._ring.position.set(114, 175), i._ring.visible = !1, o.addChild(i._ring), i.addChild(o), i._bg.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._no.texture = a.ALBUM_MAIN.getTexture(19), this._bg.texture = a.ALBUM_MAIN.getTexture(15)
            }, e.prototype.update = function (t) {
                if (this._target = t, this._img.texture = PIXI.Texture.EMPTY, this._ring.visible = !1, null != t) {
                    var e = t.mst_ids[0];
                    this._ring.initialize(), this._ring.visible = t.hasMarriage(), this._ring.deactivate(), 1 == this._ring.visible && this._ring.activate(), new s.TaskLoadShipResource("card", this._img, e, !1).start()
                }
            }, e.prototype.updateLabel = function (t) {
                this._label.text = t
            }, e.prototype.activate = function () {
                null != this._target && 1 != this._bg.buttonMode && (this._bg.buttonMode = !0, this._bg.on(o.EventType.CLICK, this._onClick), this._ring.activate())
            }, e.prototype.deactivate = function () {
                this._bg.buttonMode = !1, this._bg.off(o.EventType.CLICK, this._onClick), this._ring.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._ring.dispose(), this._label.destroy(), this._target = null, this._bg = null, this._img = null, this._ring = null, this._no = null, this._label = null, this._cb_onClick = null
            }, e
        }(PIXI.Container);
    e.MainItemShip = l
}