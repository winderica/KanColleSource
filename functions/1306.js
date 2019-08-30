const function1306 = function (t, e, i) {
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
    var o = i(1307),
        r = i(1309),
        s = i(1311),
        a = i(1314),
        _ = i(1316),
        l = i(1317),
        u = i(1319),
        c = i(15),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new s.MapBackGround, e.addChild(e._bg), e._spotLayer = new a.MapSpotLayer, e.addChild(e._spotLayer), e._ship_layer = new PIXI.Container, e._ship_icon = new o.CompShipIcon, e._enemy_layer = new _.MapEnemyLayer, e._airbaseLayer = new u.AirBaseLayer, e.addChild(e._airbaseLayer), e._ship_layer.addChild(e._ship_icon), e.addChild(e._ship_layer), e.addChild(e._enemy_layer), e._plane_layer = new l.MapPlaneLayer, e.addChild(e._plane_layer), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ship_icon", {
                get: function () {
                    return this._ship_icon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "spotLayer", {
                get: function () {
                    return this._spotLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "airbaseLayer", {
                get: function () {
                    return this._airbaseLayer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "enemy_layer", {
                get: function () {
                    return this._enemy_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "plane_layer", {
                get: function () {
                    return this._plane_layer
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._bg.dispose(), this._spotLayer.dispose(), this._enemy_layer.dispose(), this._plane_layer.dispose()
            }, e.prototype.addSpot = function (t, e, i) {
                var n = i.getSpot(e),
                    o = new r.CompSpot(e, n.offsetDic);
                if (o.position.set(n.x, n.y), null != n.route) {
                    var s = n.route,
                        a = c.MapUtil.toResKey(t),
                        _ = "map" + a + "_" + s.img,
                        l = PIXI.Texture.fromFrame(_);
                    o.setRoute(l, s.x, s.y, s.r)
                }
                var u = n.line;
                if (null != u) {
                    var a = c.MapUtil.toResKey(t),
                        h = void 0;
                    h = null != u.img && u.img.length > 0 ? "map" + a + "_" + u.img : "map" + a + "_route_" + e;
                    var l = PIXI.Texture.fromFrame(h);
                    o.setLine(l, u.x, u.y, u.r)
                }
                this._spotLayer.addSpot(o)
            }, e
        }(PIXI.Container);
    e.MapView = h
}