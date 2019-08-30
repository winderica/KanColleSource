const function1445 = function (t, e, i) {
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
    var o = i(50),
        r = i(1446),
        s = i(1450),
        a = i(480),
        _ = i(1460),
        l = i(1461),
        u = i(1464),
        c = i(1469),
        h = i(1470),
        p = i(1471),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._layer_torpedo = new r.LayerTorpedo, e._layer_explosion = new a.LayerExplosion, e._layer_damage = new l.LayerDamage, e._layer_content = new PIXI.Container, e._layer_gauge = new c.LayerGauge, e._shutter = new o.Shutter(38), e._layer_info = new PIXI.Container, e._layer_title = new h.LayerTitle, e._layer_info2 = new p.LayerInfo, e._layer_cutin = new PIXI.Container, e.addChild(e._layer_torpedo), e._bannerGroupLayer = new s.BannerGroupLayer, e.addChild(e._bannerGroupLayer), e.addChild(e._layer_explosion), e.addChild(e._layer_damage), e._bannerInfoLayer = new _.BannerInfoLayer, e.addChild(e._bannerInfoLayer), e.addChild(e._layer_content), e._raderLayer = new u.RaderLayer, e.addChild(e._raderLayer), e.addChild(e._layer_gauge), e.addChild(e._shutter), e.addChild(e._layer_info), e.addChild(e._layer_title), e.addChild(e._layer_info2), e.addChild(e._layer_cutin), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "layer_torpedo", {
                get: function () {
                    return this._layer_torpedo
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bannerGroupLayer", {
                get: function () {
                    return this._bannerGroupLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_explosion", {
                get: function () {
                    return this._layer_explosion
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_damage", {
                get: function () {
                    return this._layer_damage
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bannerInfoLayer", {
                get: function () {
                    return this._bannerInfoLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_content", {
                get: function () {
                    return this._layer_content
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "raderLayer", {
                get: function () {
                    return this._raderLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_gauge", {
                get: function () {
                    return this._layer_gauge
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shutter", {
                get: function () {
                    return this._shutter
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_info", {
                get: function () {
                    return this._layer_info
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_title", {
                get: function () {
                    return this._layer_title
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_info2", {
                get: function () {
                    return this._layer_info2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_cutin", {
                get: function () {
                    return this._layer_cutin
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._bannerGroupLayer.dispose(), this._bannerInfoLayer.dispose()
            }, e
        }(PIXI.Container);
    e.ViewMain = d
}