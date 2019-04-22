const function1289 = function (t, e, i) {
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
    var o = i(151),
        r = i(51),
        s = i(430),
        a = i(1290),
        _ = i(1291),
        l = i(1303),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new o.MapBG, e._shutter = new r.Shutter, e._map = new _.MapView, e._upper = new a.CompUpperBar, e._gauge_layer = new l.GaugeLayer, e._chara_layer = new PIXI.Sprite, e._universal_layer = new PIXI.Container, e._message_box = new s.CompMessageBox, e._top_layer = new PIXI.Container, e.addChild(e._bg), e.addChild(e._shutter), e.addChild(e._map), e.addChild(e._upper), e.addChild(e._gauge_layer), e.addChild(e._chara_layer), e.addChild(e._universal_layer), e.addChild(e._message_box), e.addChild(e._top_layer), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shutter", {
                get: function () {
                    return this._shutter
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "map", {
                get: function () {
                    return this._map
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "upper", {
                get: function () {
                    return this._upper
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "gauge_layer", {
                get: function () {
                    return this._gauge_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara_layer", {
                get: function () {
                    return this._chara_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "universal_layer", {
                get: function () {
                    return this._universal_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message_box", {
                get: function () {
                    return this._message_box
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "top_layer", {
                get: function () {
                    return this._top_layer
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this.shutter.initializeLight(), this._upper.initialize(), this._message_box.initialize()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._bg.dispose(), this._map.dispose(), this._upper.dispose(), this._gauge_layer.dispose(), this._message_box.dispose(), this._message_box = null
            }, e.prototype.frontOfGaugeLayer = function () {
                this.addChild(this._gauge_layer), this.addChild(this._top_layer)
            }, e
        }(PIXI.Container);
    e.ViewMain = u
}