const function275 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(190), a = i(274), _ = i(276), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function () {
                0 == o.default.scene.now ? o.default.view.portMain.showPortUI(!1) : o.default.scene.change(0)
            }, e._background = new PIXI.Sprite, e.addChild(e._background), e._content = new _.CircleContentWithSwitching, e.addChild(e._content), e._hit_area = new PIXI.Graphics, e._hit_area.beginFill(0, 0), e._hit_area.drawCircle(0, 0, 95), e._hit_area.endFill(), e._hit_area.position.set(68, 60), e.addChild(e._hit_area), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._background.texture = s.PORT_SKIN_2.getTexture(0), this._background.position.set(-46, -55), this._content.initialize(), this._content.position.set(67, 58), this._hit_area.interactive = !0, this._hit_area.buttonMode = !0, this._hit_area.on(r.EventType.CLICK, this._onClick), this._startAnimation()
        }, e.prototype.dispose = function () {
            this._hit_area.interactive = !1, this._hit_area.buttonMode = !1, this._hit_area.off(r.EventType.CLICK, this._onClick), this._content.dispose(), this._stopAnimation(), this._content_tween = null
        }, e.prototype.startMoveAnimation = function (t) {
            this._content.startAnimation(t)
        }, e.prototype._startAnimation = function () {
            null == this._content_tween ? this._content_tween = createjs.Tween.get(this._content, { loop: !0 }).to({ rotation: 2 * Math.PI }, 3e4) : this._content_tween.play(null)
        }, e.prototype._stopAnimation = function () {
            null != this._content_tween && this._content_tween.setPaused(!0)
        }, e
    }(a.CircleContent);
    e.CircleContentSkin2 = u
}