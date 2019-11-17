const function145 = function (t, e, i) {
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
        function e(e) {
            var i = t.call(this) || this;
            return i._air_raid = !1, i._air_raid = e, i._planes_f = new Array, i._planes_e = new Array, i._now_animation = new Array, i
        }
        return n(e, t), Object.defineProperty(e.prototype, "planes_f", {
            get: function () {
                return this._planes_f
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "planes_e", {
            get: function () {
                return this._planes_e
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addPlanes_f = function (t) {
            for (var e = t.concat().sort(function (t, e) {
                    return t.y < e.y ? -1 : t.y > e.y ? 1 : 0
                }), i = 0, n = e; i < n.length; i++) {
                var o = n[i];
                this.addChild(o), this._planes_f.push(o)
            }
        }, e.prototype.addPlanes_e = function (t) {
            for (var e = t.concat().sort(function (t, e) {
                    return t.y < e.y ? -1 : t.y > e.y ? 1 : 0
                }), i = 0, n = e; i < n.length; i++) {
                var o = n[i];
                this.addChild(o), this._planes_e.push(o)
            }
        }, e.prototype.play = function (t) {
            var e = this;
            if (0 == this._planes_f.length && 0 == this._planes_e.length) return void t();
            for (var i = this, n = 0, o = this._planes_f; n < o.length; n++) {
                var r = o[n];
                ! function (n) {
                    var o = new PIXI.Point(1500, n.y - 555);
                    1 == i._air_raid && (o.x += -570, o.y += -450), n.play(o, 3700), i._now_animation.push(n), n.once("complete", function () {
                        var i = e._now_animation.indexOf(n);
                        e._now_animation.splice(i, 1), 0 == e._now_animation.length && t()
                    })
                }(r)
            }
            for (var s = this, a = 0, _ = this._planes_e; a < _.length; a++) {
                var r = _[a];
                ! function (i) {
                    var n = new PIXI.Point(-173, i.y - 1005);
                    i.play(n, 3700), s._now_animation.push(i), i.once("complete", function () {
                        var n = e._now_animation.indexOf(i);
                        e._now_animation.splice(n, 1), 0 == e._now_animation.length && t()
                    })
                }(r)
            }
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._planes_f; t < e.length; t++) {
                var i = e[t];
                i.dispose()
            }
            this._planes_f = null;
            for (var n = 0, o = this._planes_e; n < o.length; n++) {
                var i = o[n];
                i.dispose()
            }
            this._planes_e = null
        }, e
    }(PIXI.Container);
    e.AirWarCanvas = o
}