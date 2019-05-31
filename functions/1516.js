const function1516 = function (t, e, i) {
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
    var o = i(5),
        r = i(1517),
        s = i(1520),
        a = i(1522),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._banners_f = new r.BannerSet, e._banners_f.position.set(348, 216), e._info_f = new s.BannerInfoFriendCanvas, e._info_f.position.set(141, 216), e._banners_e = new r.BannerSet, e._banners_e.position.set(614, 216), e._info_e = new a.BannerInfoEnemyCanvas, e._info_e.position.set(867, 216), e.addChild(e._banners_f), e.addChild(e._banners_e), e.addChild(e._info_f), e.addChild(e._info_e), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "banners_f", {
                get: function () {
                    return this._banners_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "info_f", {
                get: function () {
                    return this._info_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "banners_e", {
                get: function () {
                    return this._banners_e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "info_e", {
                get: function () {
                    return this._info_e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._banners_f.dispose(), this._banners_f = null, this._info_f.dispose(), this._info_f = null, this._banners_e.dispose(), this._banners_e = null, this._info_e.dispose(), this._info_e = null
            }, e.prototype.createSlideOutEnemyTweens = function (t, e) {
                var i = this,
                    n = o.default.width - this._banners_e.x;
                return [createjs.Tween.get(this._banners_e).wait(e).to({
                    x: this._banners_e.x + n
                }, t).call(function () {
                    i._banners_e.dispose()
                }), createjs.Tween.get(this._info_e).wait(e).to({
                    x: this._info_e.x + n
                }, t).call(function () {
                    i._info_e.dispose()
                })]
            }, e
        }(PIXI.Container);
    e.LayerBanner = _
}