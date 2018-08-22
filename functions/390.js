const function390 = function (t, e, i) {
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
    var o = i(31), r = i(3), s = i(1), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onMouseOver = function () {
                i._update(!0)
            }, i._onMouseOut = function () {
                i._update(!1)
            }, i._onClick = function (t) {
                null != i._cb_onClick && i._cb_onClick(t)
            }, i._icon = new o.Sprite, i._icon.position.set(19, 19), i._icon.anchor.set(.5), i._icon.scale.set(.5), i.addChild(i._icon), i._t = createjs.Tween.get(i._icon, { loop: !0 }).to({
                scaleX: .8,
                scaleY: .8
            }, 1e3).to({
                scaleX: .5,
                scaleY: .5
            }, 1e3), i._t.setPaused(!0), i._cb_onClick = e, i.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = this;
            this._icon.texture = r.ALBUM_MAIN.getTexture(11), this._update(!1, function () {
                var e = t.texture;
                t.hitArea = new PIXI.Rectangle(0, 0, e.width, e.height)
            })
        }, e.prototype.activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(s.EventType.MOUSEOVER, this._onMouseOver), this.off(s.EventType.MOUSEOUT, this._onMouseOut), this.off(s.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this._t.setPaused(!0), this._t = null
        }, e.prototype._update = function (t, e) {
            void 0 === e && (e = null), 0 == t ? (this.texture = r.ALBUM_MAIN.getTexture(0), this._icon.visible = !0, this._t.setPaused(!1)) : (this.texture = r.ALBUM_MAIN.getTexture(14), this._icon.visible = !1, this._t.setPaused(!0)), null !== e && e()
        }, e
    }(PIXI.Sprite);
    e.VoiceBtn = a
}