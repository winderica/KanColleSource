const function450 = function (t, e, i) {
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
    var o = i(65), r = i(6), s = i(136), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._friend = e, i._planes = [], i
        }

        return n(e, t), Object.defineProperty(e.prototype, "friend", {
            get: function () {
                return this._friend
            }, enumerable: !0, configurable: !0
        }), e.prototype.addPlane = function (t, e) {
            if (void 0 === e && (e = null), !(this._planes.length >= 3)) {
                var i = new s.Plane;
                null == e && (e = new PIXI.Point, 0 == this._planes.length ? (e.x = 45, e.y = 18) : 1 == this._planes.length ? (e.x = 18, e.y = -27) : 2 == this._planes.length && (e.x = -36, e.y = 38)), i.initialize(t, this._friend, new PIXI.Point, e), this._planes.push(i);
                for (var n = 0; n < this._planes.length; n++) {
                    var o = this._planes[n];
                    if (i.y < o.y) {
                        var r = this.getChildIndex(o);
                        this.addChildAt(i, r);
                        break
                    }
                    n == this._planes.length - 1 && this.addChild(i)
                }
            }
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._planes; t < e.length; t++) {
                e[t].dispose()
            }
        }, e.prototype.startFluctuations = function () {
            for (var t = 0, e = this._planes; t < e.length; t++) {
                e[t].startFluctuations()
            }
        }, e.prototype.stopFluctuations = function () {
            for (var t = 0, e = this._planes; t < e.length; t++) {
                e[t].stopFluctuations()
            }
        }, e.prototype.fire = function () {
            for (var t = 0, e = this._planes; t < e.length; t++) {
                e[t].fire()
            }
        }, e.prototype.play = function (t, e, i, n, s) {
            var a = this;
            void 0 === e && (e = NaN), void 0 === s && (s = null);
            var _, u = new PIXI.Point(this.x, this.y), l = this._createControllPoints(u, t), c = l.c1, h = l.c2;
            if (0 == isNaN(e)) {
                var p = .99, d = 1 - p,
                    f = Math.pow(d, 3) * u.x + 3 * Math.pow(d, 2) * p * c.x + 3 * d * p * p * h.x + p * p * p * t.x,
                    y = Math.pow(d, 3) * u.y + 3 * Math.pow(d, 2) * p * c.y + 3 * d * p * p * h.y + p * p * p * t.y,
                    v = t.y + (e - t.x) * (t.y - y) / (t.x - f), g = t.x - f, m = (e - t.x) / g,
                    b = i / (100 + m) * 100, w = i / (100 + m) * m;
                this._tween = o.TweenUtil.create3BezierTween(this, u, c, h, t, b), null != n && this._tween.call(n), this._tween.to({
                    x: e,
                    y: v
                }, w), _ = new PIXI.Point(e, v)
            } else this._tween = o.TweenUtil.create3BezierTween(this, u, c, h, t, i), null != n && this._tween.call(n), _ = new PIXI.Point(t.x, t.y);
            return null != s && this._tween.call(s), createjs.Tween.get(null).wait(.7 * i).call(function () {
                r.SE.play("116"), a.fire()
            }), { s: u, c1: c, c2: h, e: t, ex: _ }
        }, e.prototype.debugLine = function (t) {
            var e = new PIXI.Graphics;
            return e.lineStyle(1, 16711680), e.moveTo(t.s.x, t.s.y), e.bezierCurveTo(t.c1.x, t.c1.y, t.c2.x, t.c2.y, t.e.x, t.e.y), e.lineStyle(1, 65280), e.lineTo(t.ex.x, t.ex.y), e
        }, e.prototype._createControllPoints = function (t, e) {
            var i, n, o = t.x <= e.x;
            return 1 == o ? (i = new PIXI.Point(Math.min(t.x, e.x) + (e.x - t.x) / 3, Math.max(e.y, t.y) + 150), n = new PIXI.Point(Math.min(t.x, e.x) + (e.x - t.x) / 3 * 2, Math.max(e.y, t.y) + 150)) : (i = new PIXI.Point(Math.max(t.x, e.x) + (e.x - t.x) / 3, Math.max(e.y, t.y) + 150), n = new PIXI.Point(Math.max(t.x, e.x) + (e.x - t.x) / 3 * 2, Math.max(e.y, t.y) + 150)), {
                c1: i,
                c2: n
            }
        }, e
    }(PIXI.Container);
    e.PlaneTrio = a
}