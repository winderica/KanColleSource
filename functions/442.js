const function442 = function (t, e, i) {
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
    var o = i(140),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.play = function (t) {
                for (var e = this, i = this, n = 0, o = this._planes_f; n < o.length; n++) {
                    var r = o[n];
                    ! function (n) {
                        var o = new PIXI.Point(1373, n.y - 405);
                        1 == i._air_raid && (o.x += -570, o.y += -450), n.playForJet(o, 1850), i._now_animation.push(n), n.once("complete", function () {
                            var i = e._now_animation.indexOf(n);
                            e._now_animation.splice(i, 1), 0 == e._now_animation.length && t()
                        })
                    }(r)
                }
                for (var s = this, a = 0, _ = this._planes_e; a < _.length; a++) {
                    var r = _[a];
                    ! function (i) {
                        var n = new PIXI.Point(-173, i.y - 855);
                        i.playForJet(n, 1850), s._now_animation.push(i), i.once("complete", function () {
                            var n = e._now_animation.indexOf(i);
                            e._now_animation.splice(n, 1), 0 == e._now_animation.length && t()
                        })
                    }(r)
                }
            }, e
        }(o.AirWarCanvas);
    e.AirWarJetCanvas = r
}