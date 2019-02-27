const function614 = function (t, e, i) {
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
        s = i(105),
        a = i(154),
        _ = i(1),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._down_flg = !1, e._onMouseOver = function () {
                    e._off.visible = !1, e._on.visible = !0, e._on.activate(), null == e._waves.parent && (e.addChild(e._waves), e._waves.startAnimation()), e._showDescription(), e._down_flg = !1
                }, e._onMouseOut = function () {
                    e._off.visible = !0, e._on.visible = !1, e._on.deactivate(), null != e._waves.parent && (e.removeChild(e._waves), e._waves.stopAnimation()), e._on.scale.set(1, 1), e._hideDescription(), e._down_flg = !1
                }, e._onMouseDown = function () {
                    e._off.visible = !1, e._on.visible = !0, e._on.deactivate(), null != e._waves.parent && (e.removeChild(e._waves), e._waves.stopAnimation()), e._on.scale.set(.9, .9), e._hideDescription(), e._down_flg = !0
                }, e._onMouseUp = function () {
                    e._off.visible = !1, e._on.visible = !0, e._on.activate(), null == e._waves.parent && (e.addChild(e._waves), e._waves.startAnimation()), e._on.scale.set(1, 1), e._showDescription(), 1 == e._down_flg && 1 == o.default.scene.change(16) && r.SE.play("246"), e._down_flg = !1
                }, e._off = new u, e.addChild(e._off), e._on = new c, e._on.visible = !1, e.addChild(e._on), e._hit_area = new PIXI.Graphics, e._hit_area.beginFill(0, 0), e._hit_area.drawCircle(0, 0, 102), e._hit_area.endFill(), e.addChild(e._hit_area), e._hit_area.interactive = !0, e._waves = new a.RingMenuWaves, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._off.initialize(), this._on.initialize(), this._waves.initialize()
            }, e.prototype.activate = function () {
                1 != this._hit_area.buttonMode && (this._hit_area.buttonMode = !0, this._hit_area.on(_.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.on(_.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.on(_.EventType.MOUSEDOWN, this._onMouseDown), this._hit_area.on(_.EventType.MOUSEUP, this._onMouseUp))
            }, e.prototype.deactivate = function () {
                this._hit_area.buttonMode = !1, this._hit_area.off(_.EventType.MOUSEOVER, this._onMouseOver), this._hit_area.off(_.EventType.MOUSEOUT, this._onMouseOut), this._hit_area.off(_.EventType.MOUSEDOWN, this._onMouseDown), this._hit_area.off(_.EventType.MOUSEUP, this._onMouseUp), this._onMouseOut()
            }, e.prototype.dispose = function () {
                this.deactivate(), this._on.dispose(), this._hideDescription()
            }, e.prototype._showDescription = function () {
                var t = this;
                null == this._description && (this._description = new PIXI.Sprite(s.PORT_RINGMENU.getTexture(13))), null == this._description.parent && (this._description.position.set(5, -23), this._description.alpha = 0, this.addChild(this._description), this._description_tween = createjs.Tween.get(this._description).wait(400).to({
                    x: 35,
                    alpha: 1
                }, 100).call(function () {
                    t._description_tween = null
                }))
            }, e.prototype._hideDescription = function () {
                null != this._description_tween && (this._description_tween.setPaused(!0), this._description_tween = null), null != this._description && null != this._description.parent && this.removeChild(this._description)
            }, e
        }(PIXI.Container);
    e.RingMenuBtnSally = l;
    var u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._left = new PIXI.Sprite, e._left.position.set(-125, 2), e.addChild(e._left), e._right = new PIXI.Sprite, e._right.position.set(-50, 2), e.addChild(e._right), e._gear = new PIXI.Sprite, e._gear.position.set(-102, -101), e.addChild(e._gear), e._ship = new PIXI.Sprite, e._ship.position.set(-102, -86), e.addChild(e._ship), e._text = new PIXI.Sprite, e._text.position.set(-69, -18), e.addChild(e._text), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._left.texture = s.PORT_RINGMENU.getTexture(4), this._right.texture = s.PORT_RINGMENU.getTexture(3), this._gear.texture = s.PORT_RINGMENU.getTexture(0), this._ship.texture = s.PORT_RINGMENU.getTexture(2), this._text.texture = s.PORT_RINGMENU.getTexture(1)
            }, e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gear = new h, e.addChild(e._gear), e._right = new p, e.addChild(e._right), e._left = new d, e.addChild(e._left), e._bg = new PIXI.Sprite, e.addChild(e._bg), e._ship = new f, e.addChild(e._ship), e._text = new PIXI.Sprite, e.addChild(e._text), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._gear.initialize(), this._right.initialize(), this._left.initialize(), this._bg.texture = s.PORT_RINGMENU.getTexture(23), this._bg.x = Math.round(-this._bg.width / 2), this._bg.y = Math.round(-this._bg.height / 2), this._ship.initialize(), this._text.texture = s.PORT_RINGMENU.getTexture(28), this._text.position.set(-68, -18)
            }, e.prototype.activate = function () {
                this._gear.activate(), this._right.activate(), this._left.activate(), this._ship.activate()
            }, e.prototype.deactivate = function () {
                this._gear.deactivate(), this._right.deactivate(), this._left.deactivate(), this._ship.deactivate()
            }, e.prototype.dispose = function () {
                this._gear.dispose(), this._right.dispose(), this._left.dispose(), this._ship.dispose()
            }, e
        }(PIXI.Container),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = s.PORT_RINGMENU.getTexture(24), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    rotation: 2 * Math.PI
                }, 24e3), this._t.setPaused(!0)
            }, e.prototype.activate = function () {
                this._t.setPaused(!1)
            }, e.prototype.deactivate = function () {
                this._t.setPaused(!0)
            }, e.prototype.dispose = function () {
                this._t.setPaused(!0), this._t = null, this.rotation = 0
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = s.PORT_RINGMENU.getTexture(26), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this.position.set(38, 45), this.rotation = 0
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    rotation: Math.PI / 36
                }, 700).to({
                    x: 62,
                    y: 48
                }, 800).to({
                    x: 66,
                    y: 42,
                    rotation: 0
                }, 500).to({
                    x: 62,
                    y: 38,
                    rotation: -Math.PI / 60
                }, 400).to({
                    x: 38,
                    y: 45,
                    rotation: 0
                }, 1600))
            }, e.prototype.deactivate = function () {
                this.position.set(38, 45), this.rotation = 0, null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = s.PORT_RINGMENU.getTexture(25), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this.position.set(-38, 45), this.rotation = 0
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    rotation: -Math.PI / 36
                }, 500).to({
                    x: -59,
                    y: 48
                }, 800).to({
                    x: -63,
                    y: 45,
                    rotation: 0
                }, 500).to({
                    x: -60,
                    y: 42,
                    rotation: Math.PI / 60
                }, 400).to({
                    x: -38,
                    y: 45,
                    rotation: 0
                }, 1800))
            }, e.prototype.deactivate = function () {
                this.position.set(-38, 45), this.rotation = 0, null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = s.PORT_RINGMENU.getTexture(27), this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this.position.set(6, -38), this.rotation = 0
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    rotation: Math.PI / 60
                }, 1e3).to({
                    rotation: 0
                }, 1e3).to({
                    rotation: -Math.PI / 60
                }, 1e3).to({
                    rotation: 0
                }, 1e3))
            }, e.prototype.deactivate = function () {
                this.position.set(6, -38), this.rotation = 0, null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container)
}