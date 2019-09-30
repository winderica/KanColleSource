const function619 = function (t, e, i) {
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
        s = i(294),
        a = i(295),
        _ = i(296),
        l = i(297),
        u = i(157),
        c = i(1),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mouse_down = !1, i._open_force = !1, i._onMouseOver = function () {
                    i._mouse_down = !1, i._open()
                }, i._onMouseOut = function () {
                    i._mouse_down = !1, i._close()
                }, i._onMouseDown = function () {
                    i._mouse_down = !0
                }, i._onMouseUp = function () {
                    1 == i._mouse_down && o.default.scene.change(i._type) && r.SE.play("246"), i._mouse_down = !1
                }, i._type = e, i._content = new p, i._content.alpha = 0, i.addChild(i._content), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._content.initialize(this._type, this._onMouseOver, this._onMouseOut, this._onMouseDown, this._onMouseUp), this._onMouseOut()
            }, e.prototype.activate = function () {
                this._content.activate()
            }, e.prototype.deactivate = function () {
                this._content.deactivate(), this._onMouseOut()
            }, e.prototype.interactiveApply = function (t) {
                this._content.interactiveApply(t)
            }, e.prototype.dispose = function () {
                this._content.dispose(), this._stopOpenTween(), this._stopCloseTween()
            }, e.prototype.open = function () {
                this._open_force = !0, this._open()
            }, e.prototype.close = function () {
                this._open_force = !1, this._close()
            }, e.prototype._open = function () {
                var t = this;
                this._stopCloseTween(), null == this._t_open && (this._t_open = createjs.Tween.get(this._content).to({
                    x: 75,
                    alpha: 1
                }, 700).call(function () {
                    t._t_open = null
                }))
            }, e.prototype._close = function () {
                var t = this;
                1 != this._open_force && (this._stopOpenTween(), null == this._t_close && (this._t_close = createjs.Tween.get(this._content).to({
                    x: 0,
                    alpha: 0
                }, 700).call(function () {
                    t._t_close = null
                })))
            }, e.prototype._stopOpenTween = function () {
                null != this._t_open && (this._t_open.setPaused(!0), this._t_open = null)
            }, e.prototype._stopCloseTween = function () {
                null != this._t_close && (this._t_close.setPaused(!0), this._t_close = null)
            }, e
        }(PIXI.Container);
    e.RingMenuBtnRevamp = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._bg_on.visible = !0, e._bg_on.activate(), e._img.visible = !1, e._img_on.visible = !0, e._showWaves(), e._description.show(), null != e._cb_onMouseOver && e._cb_onMouseOver()
            }, e._onMouseOut = function () {
                e._bg_on.visible = !1, e._bg_on.deactivate(), e._img.visible = !0, e._img_on.visible = !1, e._setScale(1), e._hideWaves(), e._description.hide(), null != e._cb_onMouseOut && e._cb_onMouseOut()
            }, e._onMouseDown = function () {
                e._bg_on.visible = !0, e._bg_on.deactivate(), e._img.visible = !1, e._img_on.visible = !0, e._setScale(.9), e._hideWaves(), e._description.hide(), null != e._cb_onMouseDown && e._cb_onMouseDown()
            }, e._onMouseUp = function () {
                e._bg_on.visible = !0, e._bg_on.activate(), e._img.visible = !1, e._img_on.visible = !0, e._setScale(1), e._showWaves(), e._description.show(), null != e._cb_onMouseUp && e._cb_onMouseUp()
            }, e._bg_on = new s.RingMenuBtnBgOn, e.addChild(e._bg_on), e._img = new _.RingMenuBtnImg, e.addChild(e._img), e._img_on = new l.RingMenuBtnImgOn, e.addChild(e._img_on), e._waves = new u.RingMenuWaves, e._description = new a.RingMenuBtnDescription, e.addChild(e._description), e._hit_area = new PIXI.Graphics, e._hit_area.beginFill(0, 0), e._hit_area.drawCircle(0, 0, 71), e._hit_area.endFill(), e.addChild(e._hit_area), e._hit_area.interactive = !0, e
        }
        return n(e, t), e.prototype.initialize = function (t, e, i, n, o) {
            this._bg_on.initialize(), this._img.initialize(t), this._img_on.initialize(t), this._waves.initialize(), this._description.initialize(t), this._onMouseOut(), this._cb_onMouseOver = e, this._cb_onMouseOut = i, this._cb_onMouseDown = n, this._cb_onMouseUp = o
        }, e.prototype.activate = function () {
            1 != this._hit_area.buttonMode && (this._hit_area.buttonMode = !0, this._hit_area.on(c.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.on(c.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.on(c.EventType.MOUSEDOWN, this._onMouseDown), this._hit_area.on(c.EventType.MOUSEUP, this._onMouseUp))
        }, e.prototype.deactivate = function () {
            this._hit_area.buttonMode = !1, this._hit_area.off(c.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.off(c.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.off(c.EventType.MOUSEDOWN, this._onMouseDown), this._hit_area.off(c.EventType.MOUSEUP, this._onMouseUp)
        }, e.prototype.interactiveApply = function (t) {
            this._hit_area.interactive = t
        }, e.prototype.dispose = function () {
            this.deactivate(), this._hideWaves(), this._bg_on.dispose(), this._cb_onMouseOver = null, this._cb_onMouseOut = null, this._cb_onMouseDown = null, this._cb_onMouseUp = null
        }, e.prototype._showWaves = function () {
            null == this._waves.parent && (this.addChild(this._waves), this._waves.startAnimation())
        }, e.prototype._hideWaves = function () {
            null != this._waves.parent && (this.removeChild(this._waves), this._waves.stopAnimation())
        }, e.prototype._setScale = function (t) {
            this._bg_on.scale.set(t), this._img.scale.set(t), this._img_on.scale.set(t)
        }, e
    }(PIXI.Container)
}