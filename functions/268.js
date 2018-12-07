const function268 = function (t, e, i) {
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
    var o = i(5), r = i(8), s = function (t) {
        function e() {
            for (var e = t.call(this, 0, 0, o.default.width, o.default.height) || this, i = 0; i < 20; i++) {
                var n = 4.5 * i;
                e.beginFill(0, .8 * Math.cos(n * Math.PI / 180)), e.drawRect(0, o.default.height - 3 * i, o.default.width, 3), e.endFill()
            }
            return e._arc = PIXI.Sprite.fromImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA1ElEQVQ4jaWUzRGCMBBGv8x4xw60Ay3BDrQDSqEFO4gl2IF0gFagHUQreB5EHcku4PBu7LBvfxKQOgALIAKJnAYouzkZQGUkWzTAaqrkzdWSlH9KUtYRr51Mk7SiOFnSijyuQNEZ35b0iPzKDjMnfg4hXIyihaS18f7dE82d+EbS0YjXfTv6ucFAwesiWsSZpJukpVHlAMwlndvnvTPWp6Oqp6sxJKAYankM3xUAK+yvfYiYDdnK/umscvb1OZnTgCBh/JOCI9xK2hmnWUvahxAe3ZwnVxLPxY8eTuoAAAAASUVORK5CYII="), e._arc.anchor.set(.5, .5), e._arc.x = o.default.width - 23, e._arc.y = o.default.height - 23, e._arc.scale.set(1.5), e._arc.alpha = .8, e.addChild(e._arc), e
        }

        return n(e, t), e.prototype.show = function (t, e) {
            var i = this;
            void 0 === t && (t = 0), void 0 === e && (e = null), this._stopTween(), this._setVisiblity(!0), t <= 0 ? (this.alpha = 1, null != e && e()) : this._tween = createjs.Tween.get(this).to({ alpha: 1 }, t).call(function () {
                i._tween = null, null != e && e()
            })
        }, e.prototype.hide = function (t, e) {
            var i = this;
            void 0 === t && (t = 0), void 0 === e && (e = null), this._stopTween(), t <= 0 ? (this.alpha = 0, this._setVisiblity(!1), null != e && e()) : this._tween = createjs.Tween.get(this).to({ alpha: 0 }, t).call(function () {
                i._setVisiblity(!1), i._tween = null, null != e && e()
            })
        }, e.prototype._setVisiblity = function (t) {
            this.visible = t, 1 == t ? this._startArcTween() : this._stopArcTween()
        }, e.prototype._startArcTween = function () {
            null == this._tween_arc && (this._arc.rotation = 0, this._tween_arc = createjs.Tween.get(this._arc, { loop: !0 }).to({ rotation: 2 * Math.PI }, 1200))
        }, e.prototype._stopArcTween = function () {
            null != this._tween_arc && (this._tween_arc.setPaused(!0), this._tween_arc = null)
        }, e.prototype._stopTween = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e
    }(r.AreaBox);
    e.LoadingBox = s
}