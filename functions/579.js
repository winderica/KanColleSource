const function579 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(189), a = i(274), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function () {
                0 == o.default.scene.now ? o.default.view.portMain.showPortUI(!1) : o.default.scene.change(0)
            }, e._circle = new PIXI.Sprite, e.addChild(e._circle), e._content = new u, e.addChild(e._content), e._light = new PIXI.Sprite, e._light.position.set(-23, -32), e._light.alpha = .6, e.addChild(e._light), e._hit_area = new PIXI.Graphics, e._hit_area.beginFill(0, 0), e._hit_area.drawCircle(0, 0, 95), e._hit_area.endFill(), e._hit_area.position.set(68, 60), e.addChild(e._hit_area), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._circle.texture = s.PORT_SKIN_1.getTexture(1), this._circle.position.set(-40, -46), this._content.position.set(63, 58), this._light.texture = s.PORT_SKIN_1.getTexture(8), this._content.initialize(), this._hit_area.interactive = this._hit_area.buttonMode = !0, this._hit_area.on(r.EventType.CLICK, this._onClick), this._startAnimation()
        }, e.prototype.dispose = function () {
            this._hit_area.interactive = this._hit_area.buttonMode = !1, this._hit_area.off(r.EventType.CLICK, this._onClick), this._content.dispose(), this._stopAnimation(), this._content_tween = null, this._light_tween = null
        }, e.prototype.startMoveAnimation = function (t) {
            this._content.startAnimation(t)
        }, e.prototype._startAnimation = function () {
            null == this._content_tween ? this._content_tween = createjs.Tween.get(this._content, { loop: !0 }).to({ rotation: 2 * Math.PI }, 3e4) : this._content_tween.play(null), null == this._light_tween ? this._light_tween = createjs.Tween.get(this._light, { loop: !0 }).to({ alpha: 0 }, 1e3, createjs.Ease.getPowIn(4)).to({ alpha: .6 }, 1e3, createjs.Ease.getPowOut(4)) : this._light_tween.play(null)
        }, e.prototype._stopAnimation = function () {
            null != this._content_tween && this._content_tween.setPaused(!0), null != this._light_tween && this._light_tween.setPaused(!0)
        }, e
    }(a.CircleContent);
    e.CircleContentSkin1 = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._content1 = new PIXI.Sprite, e.addChild(e._content1), e._content2 = new PIXI.Sprite, e.addChild(e._content2), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._content1.texture = this._getTexture(0), this._content2.visible = !0, this.pivot.set(Math.round(this._content1.width / 2), Math.round(this._content1.height / 2))
        }, e.prototype.dispose = function () {
            null != this._tween && this._tween.setPaused(!0), this._tween = null
        }, e.prototype.startAnimation = function (t) {
            var e = this;
            null != this._tween && (this._tween.setPaused(!0), this._tween = null), this._content2.texture = this._content1.texture, this._content2.alpha = 1, this._content2.visible = !0, this._content1.texture = this._getTexture(t), this._tween = createjs.Tween.get(this._content2).to({ alpha: 0 }, 600).call(function () {
                e._content2.visible = !1
            })
        }, e.prototype._getTexture = function (t) {
            return 11 == t ? s.PORT_SKIN_1.getTexture(4) : 12 == t ? s.PORT_SKIN_1.getTexture(5) : 13 == t ? s.PORT_SKIN_1.getTexture(6) : 14 == t ? s.PORT_SKIN_1.getTexture(9) : 15 == t ? s.PORT_SKIN_1.getTexture(7) : 31 == t ? s.PORT_SKIN_1.getTexture(0) : 16 == t ? s.PORT_SKIN_1.getTexture(10) : s.PORT_SKIN_1.getTexture(3)
        }, e
    }(PIXI.Container)
}