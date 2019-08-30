const function618 = function (t, e, i) {
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
    var o = i(0),
        r = i(6),
        s = i(292),
        a = i(293),
        _ = i(294),
        l = i(295),
        u = i(157),
        c = i(1),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mouse_down = !1, i._cb_onRelateOpen = null, i._cb_onRelateClose = null, i._onMouseOver = function () {
                    i._mouse_down = !1, i._bg_on.visible = !0, i._bg_on.activate(), i._img.visible = !1, i._img_on.visible = !0, i._showWaves(), i._description.show(), null != i._cb_onRelateOpen && i._cb_onRelateOpen()
                }, i._onMouseOut = function () {
                    i._mouse_down = !1, i._bg_on.visible = !1, i._bg_on.deactivate(), i._img.visible = !0, i._img_on.visible = !1, i._setScale(1), i._hideWaves(), i._description.hide(), null != i._cb_onRelateClose && i._cb_onRelateClose()
                }, i._onMouseDown = function () {
                    i._mouse_down = !0, i._bg_on.visible = !0, i._bg_on.deactivate(), i._img.visible = !1, i._img_on.visible = !0, i._setScale(.9), i._hideWaves(), i._description.hide()
                }, i._onMouseUp = function () {
                    i._bg_on.visible = !0, i._bg_on.activate(), i._img.visible = !1, i._img_on.visible = !0, i._setScale(1), i._showWaves(), i._description.show(), 1 == i._mouse_down && o.default.scene.change(i._type) && r.SE.play("246"), i._mouse_down = !1
                }, i._type = e, i._bg_on = new s.RingMenuBtnBgOn, i.addChild(i._bg_on), i._img = new _.RingMenuBtnImg, i.addChild(i._img), i._img_on = new l.RingMenuBtnImgOn, i.addChild(i._img_on), i._waves = new u.RingMenuWaves, i._description = new a.RingMenuBtnDescription, i.addChild(i._description), i._hit_area = new PIXI.Graphics, i._hit_area.beginFill(0, 0), i._hit_area.drawCircle(0, 0, 71), i._hit_area.endFill(), i.addChild(i._hit_area), i._hit_area.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                void 0 === t && (t = null), void 0 === e && (e = null), this._cb_onRelateOpen = t, this._cb_onRelateClose = e, this._bg_on.initialize(), this._img.initialize(this._type), this._img_on.initialize(this._type), this._waves.initialize(), this._description.initialize(this._type), this._onMouseOut()
            }, e.prototype.activate = function () {
                1 != this._hit_area.buttonMode && (this._hit_area.buttonMode = !0, this._hit_area.on(c.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.on(c.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.on(c.EventType.MOUSEDOWN, this._onMouseDown), this._hit_area.on(c.EventType.MOUSEUP, this._onMouseUp))
            }, e.prototype.deactivate = function () {
                this._hit_area.buttonMode = !1, this._hit_area.off(c.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.off(c.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.off(c.EventType.MOUSEDOWN, this._onMouseDown), this._hit_area.off(c.EventType.MOUSEUP, this._onMouseUp), this._onMouseOut()
            }, e.prototype.interactiveApply = function (t) {
                this._hit_area.interactive = t
            }, e.prototype.dispose = function () {
                this._cb_onRelateOpen = null, this._cb_onRelateClose = null, this.deactivate(), this._hideWaves(), this._bg_on.dispose()
            }, e.prototype._showWaves = function () {
                null == this._waves.parent && (this.addChild(this._waves), this._waves.startAnimation())
            }, e.prototype._hideWaves = function () {
                null != this._waves.parent && (this.removeChild(this._waves), this._waves.stopAnimation())
            }, e.prototype._setScale = function (t) {
                this._bg_on.scale.set(t), this._img.scale.set(t), this._img_on.scale.set(t)
            }, e
        }(PIXI.Container);
    e.RingMenuBtn = h
}