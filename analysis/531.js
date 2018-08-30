/*
 * the function called by `0.js`
 * view
 */
const function531 = function (t, e, i) {
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
    var o = i(0),
        r = i(8),
        s = i(16),
        a = i(272),
        _ = i(532),
        u = i(533),
        // class l extends PIXI.Container
        l = function (t) {
            function e() {
                return t.call(this) || this
            }

            n(e, t);
            // 背景
            Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                }, enumerable: !0, configurable: !0
            });
            // 母港
            Object.defineProperty(e.prototype, "portMain", {
                get: function () {
                    return this._portMain
                }, enumerable: !0, configurable: !0
            });
            // マップ?
            Object.defineProperty(e.prototype, "mapLayer", {
                get: function () {
                    return this._mapLayer
                }, enumerable: !0, configurable: !0
            });
            // ?
            Object.defineProperty(e.prototype, "overLayer", {
                get: function () {
                    return this._overLayer
                }, enumerable: !0, configurable: !0
            });
            // fade area
            Object.defineProperty(e.prototype, "fadeLayer", {
                get: function () {
                    return this._fadeLayer
                }, enumerable: !0, configurable: !0
            });
            // progress bar
            Object.defineProperty(e.prototype, "loading", {
                get: function () {
                    return this._loading
                }, enumerable: !0, configurable: !0
            });
            // prevent click event while loading
            Object.defineProperty(e.prototype, "clickGuard", {
                get: function () {
                    return this._clickGuard.visible
                }, set: function (t) {
                    this._clickGuard.visible = t
                }, enumerable: !0, configurable: !0
            });

            // initialize function
            e.prototype.initialize = function (t) {
                this._bg = new _.Background;
                this._portMain = t;
                this._mapLayer = new u.ContainerScene;
                this._mapLayer.visible = !1;
                this._overLayer = new PIXI.Container;
                this._fadeLayer = new s.FadeBox(1);
                this._fadeLayer.visible = !1;
                this._clickGuard = new r.AreaBox(0);
                this._clickGuard.visible = !1;
                this._loading = new a.LoadingBox;
                this._loading.hide();
                this.addChild(this._bg);
                this.addChild(this._portMain);
                this.addChild(this._mapLayer);
                this.addChild(this._overLayer);
                this.addChild(this._fadeLayer);
                this.addChild(this._clickGuard);
                this.addChild(this._loading)
            };

            // current scene
            e.prototype.getNowScene = function () {
                var t = this._mapLayer.getContent();
                return null != t ? t : (t = this._portMain.getContent(), null != t ? t : this._portMain)
            };
            // 猫
            e.prototype.showError = function (t) {
                void 0 === t && (t = null);
                this._bg.visible = !1;
                this._portMain.visible = !1;
                this._mapLayer.visible = !1;
                this._overLayer.removeChildren();
                this._overLayer.visible = !0;
                createjs.Tween.removeAllTweens();
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
            };
            return e
        }(PIXI.Container);
    e.RootView = l
}