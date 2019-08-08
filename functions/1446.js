const function1446 = function (t, e, i) {
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
    var o = i(1447),
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._entered = !1, n._friend = e, n._combined = i, n
            }
            return n(e, t), e.prototype.isEntered = function () {
                return this._entered
            }, e.prototype.getBannerNum = function () {
                return null == this._banners ? 0 : this._banners.length
            }, e.prototype.hasBanner = function () {
                return this.getBannerNum() > 0
            }, e.prototype.initialize = function (t) {
                if (this._banners = [], null != t)
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (null != i) {
                            var n = i.mst_id,
                                r = i.hp_now,
                                s = i.hp_max,
                                a = i.isTaihi(),
                                _ = 0 == i.speed,
                                u = new o.Banner(e, this._friend, this._combined);
                            u.initialize(n, r, s, a, _), this._banners.push(u), this.addChild(u)
                        }
                    }
            }, e.prototype.dispose = function () {
                if (null != this._banners)
                    for (var t = 0, e = this._banners; t < e.length; t++) {
                        var i = e[t];
                        i.dispose()
                    }
            }, e.prototype.getBanner = function (t) {
                return null == this._banners ? null : t >= this._banners.length ? null : this._banners[t]
            }, e.prototype.isContains = function (t) {
                return null != this._banners && this._banners.indexOf(t) >= 0
            }, e.prototype.enter = function () {
                if (1 != this._entered && 0 != this.hasBanner()) {
                    this._entered = !0;
                    for (var t = 0, e = this._banners; t < e.length; t++) {
                        var i = e[t];
                        null != i && (0 == this._combined ? i.enter() : i.enterCombined())
                    }
                }
            }, e.prototype.createEnterTweens = function () {
                var t = [];
                if (1 == this._entered) return t;
                if (0 == this.hasBanner()) return t;
                this._entered = !0;
                for (var e = 0, i = 0, n = this._banners; i < n.length; i++) {
                    var o = n[i];
                    if (null != o) {
                        var r = 0 == this._combined ? o.createEnterTween(e) : o.createEnterTweenCombined(e);
                        null != r && (t.push(r), e += 100)
                    }
                }
                return t
            }, e.prototype.createSakutekiTweens = function () {
                var t = [];
                if (1 == this._entered) return t;
                if (0 == this.hasBanner()) return t;
                this._entered = !0;
                for (var e = 0, i = this._banners; e < i.length; e++) {
                    var n = i[e];
                    if (null != n) {
                        var o = n.createEnterTweenBySakuteki();
                        null != o && t.push(o)
                    }
                }
                return t
            }, e.prototype.createExitTweens = function () {
                var t = [];
                if (0 == this._entered) return t;
                if (this._entered = !1, 0 == this.hasBanner()) return t;
                for (var e = 0, i = 0, n = this._banners; i < n.length; i++) {
                    var o = n[i];
                    if (null != o) {
                        var r = o.createMainDeckExitTween(e);
                        t.push(r), e += 100
                    }
                }
                return t
            }, e.prototype.createExitTweensUpward = function () {
                var t = [];
                if (0 == this._entered) return t;
                if (this._entered = !1, 0 == this.hasBanner()) return t;
                for (var e = 0, i = 0, n = this._banners; i < n.length; i++) {
                    var o = n[i];
                    if (null != o) {
                        var r = o.createSubDeckExitTween(e, !1);
                        t.push(r), e += 100
                    }
                }
                return t
            }, e.prototype.createExitTweensUpDown = function () {
                var t = [];
                if (0 == this._entered) return t;
                if (this._entered = !1, 0 == this.hasBanner()) return t;
                for (var e = [], i = 0; i < this._banners.length; i++) {
                    var n = this._banners[i];
                    null != n && 0 != n.entered && e.push(n)
                }
                for (var o = 0; e.length > 0;) {
                    var r = e.shift(),
                        s = r.createSubDeckExitTween(o, !1);
                    t.push(s), 0 != e.length && (r = e.pop(), s = r.createSubDeckExitTween(o, !0), t.push(s), o += 100)
                }
                return t
            }, e
        }(PIXI.Container);
    e.BannerGroup = r
}