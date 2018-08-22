const function1436 = function (t, e, i) {
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
    var o = i(15), r = i(138), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._mst_id = -1, i._friend = e, i._plane = new r.Plane, i._plane.scale.set(-.25, .25), i._label = new a, i._label.position.set(-56, 35), i.addChild(i._plane), i.addChild(i._label), i
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._mst_id = t, this._stopShowTween(), this._stopHideTween(), this._label.initialize()
        }, e.prototype.show = function () {
            var t = this;
            null == this._show_tween && (this._mst_id <= 0 || (this._stopHideTween(), this._label.activate(), this._plane.visible = !1, this._plane.initialize(this._mst_id, this._friend), this._plane.activate(), this._show_tween = createjs.Tween.get(this._plane).wait(133).call(function () {
                t._plane.alpha = .5, t._plane.visible = !0
            }).wait(100).call(function () {
                t._plane.visible = !1
            }).wait(500).call(function () {
                t._plane.alpha = .85, t._plane.visible = !0
            }).wait(100).call(function () {
                t._plane.alpha = .6, t._plane.filters = null
            }).to({ alpha: .8 }, 166).call(function () {
                t._show_tween = null
            })))
        }, e.prototype.hide = function () {
            var t = this;
            null == this._hide_tween && (this._stopShowTween(), this._mst_id > 0 && (this._mst_id = -1, this._label.deactivate(), this._hide_tween = createjs.Tween.get(this._plane).to({ alpha: 0 }, 200).call(function () {
                t._plane.deactivate(), t._plane.visible = !1, t._hide_tween = null
            })))
        }, e.prototype._stopShowTween = function () {
            null != this._show_tween && (this._show_tween.setPaused(!0), this._show_tween = null)
        }, e.prototype._stopHideTween = function () {
            null != this._hide_tween && (this._hide_tween.setPaused(!0), this._hide_tween = null)
        }, e
    }(PIXI.Container);
    e.TouchPlane = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.alpha = 0, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.BATTLE_MAIN.getTexture(133)
        }, e.prototype.activate = function () {
            null == this._t && (this._t = createjs.Tween.get(this, { loop: !0 }).to({ alpha: 1 }, 100).wait(700).to({ alpha: 0 }, 100).wait(200))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null, this.alpha = 0)
        }, e
    }(PIXI.Sprite)
}