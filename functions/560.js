const function560 = function (t, e, i) {
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
    var o = i(47), r = i(18), s = i(561), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._initialized = !1, e._furniture_layer = new s.FurnitureView, e.addChild(e._furniture_layer), e._contentLayer = new PIXI.Container, e.addChild(e._contentLayer), e._fadeLayer = new r.FadeBox(1), e._fadeLayer.hide(), e._fadeLayer.visible = !1, e.addChild(e._fadeLayer), e._overLayer = new PIXI.Graphics, e.addChild(e._overLayer), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "furnitureLayer", {
            get: function () {
                return this._furniture_layer
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fadeLayer", {
            get: function () {
                return this._fadeLayer
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "overLayer", {
            get: function () {
                return this._overLayer
            }, enumerable: !0, configurable: !0
        }), e.prototype.isInitialized = function () {
            return this._initialized
        }, e.prototype.initialize = function () {
            1 != this._initialized && (this._initialized = !0, this.showPortUI(!0))
        }, e.prototype.update = function (t) {
            this._furniture_layer.visible = 0 == t || 25 == t
        }, e.prototype.activate = function (t, e) {
            this._furniture_layer.activate()
        }, e.prototype.deactivate = function () {
            this._furniture_layer.deactivate()
        }, e.prototype.dispose = function () {
        }, e.prototype.showPortUI = function (t) {
            this._overLayer.visible = !0
        }, e.prototype.getContent = function () {
            return this._contentLayer.children.length > 0 ? this._contentLayer.getChildAt(0) : null
        }, e.prototype.setContent = function (t) {
            this._contentLayer.removeChildren(), null != t && this._contentLayer.addChild(t)
        }, e
    }(o.SceneBase);
    e.MainView = a
}