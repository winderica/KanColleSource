const function273 = function (t, e, i) {
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
    var o = i(13),
        r = i(51),
        s = i(146),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new s.MapBG, e.addChild(e._bg), e._content = new PIXI.Container, e._shutter2 = new r.Shutter, e.addChild(e._content), e.addChild(e._shutter2), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "content", {
                get: function () {
                    return this._content
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shutter2", {
                get: function () {
                    return this._shutter2
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this._shutter2.initializeDark()
            }, e.prototype.dispose = function () {
                o.UIImageLoader.clearMemoryCache("battle")
            }, e.prototype.start = function () {}, e
        }(PIXI.Container);
    e.BattleSceneBase = a
}