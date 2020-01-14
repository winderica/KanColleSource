const function574 = function (t, e, i) {
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
    var o = i(0),
        r = i(8),
        s = i(18),
        a = i(278),
        _ = i(575),
        u = i(576),
        l = i(14),
        c = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "portMain", {
                get: function () {
                    return this._portMain
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "mapLayer", {
                get: function () {
                    return this._mapLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "overLayer", {
                get: function () {
                    return this._overLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fadeLayer", {
                get: function () {
                    return this._fadeLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "loading", {
                get: function () {
                    return this._loading
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "clickGuard", {
                get: function () {
                    return this._clickGuard.visible
                },
                set: function (t) {
                    this._clickGuard.visible = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                this._bg = new _.Background, this._portMain = t, this._mapLayer = new u.ContainerScene, this._mapLayer.visible = !1, this._overLayer = new PIXI.Container, this._fadeLayer = new s.FadeBox(1), this._fadeLayer.visible = !1, this._clickGuard = new r.AreaBox(0), this._clickGuard.visible = !1, this._loading = new a.LoadingBox, this._loading.hide(), this.addChild(this._bg), this.addChild(this._portMain), this.addChild(this._mapLayer), this.addChild(this._overLayer), this.addChild(this._fadeLayer), this.addChild(this._clickGuard), this.addChild(this._loading)
            }, e.prototype.getNowScene = function () {
                var t = this._mapLayer.getContent();
                return null != t ? t : (t = this._portMain.getContent(), null != t ? t : this._portMain)
            }, e.prototype.showError = function (t) {
                void 0 === t && (t = null), this._bg.visible = !1, this._portMain.visible = !1, this._mapLayer.visible = !1, this._overLayer.removeChildren(), this._overLayer.visible = !0, createjs.Tween.removeAllTweens(), l.EditTextBoxUtil.setVisibility(!1);
                var e = o.default.resources.getUIImage("error");
                if (e == PIXI.Texture.EMPTY) {
                    var i = new r.AreaBox(1);
                    this.addChild(i);
                    var n = PIXI.Sprite.fromImage(o.default.settings.path_root + "img/common/error.png");
                    this.addChild(n)
                } else {
                    var n = new PIXI.Sprite(e);
                    this.addChild(n)
                }
            }, e
        }(PIXI.Container);
    e.RootView = c
}