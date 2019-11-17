const function1534 = function (t, e, i) {
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
        r = i(1535),
        s = i(1536),
        a = i(1539),
        _ = i(1547),
        l = i(1548),
        u = i(1549),
        c = i(1551),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._layer_mvp = new _.LayerMVP, e._layer_mvp.position.set(474, -120), e._layer_bg = new r.LayerBG, e._layer_deck_info = new s.LayerDeckInfo, e._layer_banner = new a.LayerBanner, e._layer_title = new l.LayerTitle, e._map_name = new c.LayerMapName, e._panel_exp = new u.PanelExp, e._panel_exp.position.set(591, 116), e._panel_exp.visible = !1, e._layer_cutin = new PIXI.Container, e._shutter = new o.Shutter, e._shutter.initializeDark(), e._shutter.open(0), e.addChild(e._layer_mvp), e.addChild(e._layer_bg), e.addChild(e._layer_deck_info), e.addChild(e._layer_banner), e.addChild(e._layer_title), e.addChild(e._map_name), e.addChild(e._panel_exp), e.addChild(e._layer_cutin), e.addChild(e._shutter), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "layer_mvp", {
                get: function () {
                    return this._layer_mvp
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_bg", {
                get: function () {
                    return this._layer_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_deck_info", {
                get: function () {
                    return this._layer_deck_info
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_banner", {
                get: function () {
                    return this._layer_banner
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_title", {
                get: function () {
                    return this._layer_title
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "panel_exp", {
                get: function () {
                    return this._panel_exp
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_cutin", {
                get: function () {
                    return this._layer_cutin
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shutter", {
                get: function () {
                    return this._shutter
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_map_name", {
                get: function () {
                    return this._map_name
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._layer_mvp.dispose(), this._layer_mvp = null, this._layer_bg.dispose(), this._layer_bg = null, this._layer_deck_info.dispose(), this._layer_deck_info = null, null != this._layer_banner && (this._layer_banner.dispose(), this._layer_banner = null), null != this._layer_title && (this._layer_title.dispose(), this._layer_title = null), null != this._panel_exp && (this._panel_exp.dispose(), this._panel_exp = null), this._layer_cutin = null, this._shutter = null, this._map_name.dispose(), this._map_name = null
            }, e
        }(PIXI.Container);
    e.ViewMain = h
}