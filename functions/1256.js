const function1256 = function (t, e, i) {
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
    var o = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            n._ropeLength = 0, n._animation_count = 0, n._texture = e, n._points = [];
            var o = e.orig.width;
            n._ropeLength = o / i;
            for (var r = 0; r < i; r++) {
                var s = new PIXI.Point;
                s.x = r * (e.height / (i - 1)), s.y = e.width / 2, n._points.push(s)
            }
            var a = new PIXI.mesh.Rope(e, n._points),
                _ = e.frame,
                u = PIXI.GroupD8.isVertical(2) ? e.frame.height : e.frame.width,
                l = PIXI.GroupD8.isVertical(2) ? e.frame.width : e.frame.height,
                c = new PIXI.Rectangle(_.x, _.y, u, l),
                h = new PIXI.Rectangle(0, 0, u, l),
                p = new PIXI.Texture(e.baseTexture, _, c, h, 2);
            return a = new PIXI.mesh.Rope(p, n._points), a.rotation = Math.PI / 2, a.x = a.height, n.addChild(a), n
        }
        return n(e, t), e.prototype.dispose = function () {
            this.stopAnimation(), this.removeChildren(), this._texture = null, this._points = null, this._ropeLength = null, this._animation_count = null
        }, e.prototype.startAnimation = function () {
            var t = this;
            this._tween = createjs.Tween.get(this), this._tween.loop = !0, this._tween.wait(40).call(function () {
                t._onUpdate()
            })
        }, e.prototype.stopAnimation = function () {
            this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype._onUpdate = function () {
            this._animation_count += .05;
            for (var t = 0; t < this._points.length; t++) {
                this._points[t].y = this._texture.width / 2 + 5 * Math.cos(.3 * t + this._animation_count)
            }
        }, e
    }(PIXI.Container);
    e.MapEnemy = o
}