const function608 = function (t, e, i) {
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
    var o = i(8),
        r = i(609),
        s = i(1),
        a = i(0),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new o.AreaBox(.6), e._bg.interactive = !0, e.addChild(e._bg), e._container = new PIXI.Container, e._container.position.set(129, 210), e._container.interactive = !0, e.addChild(e._container);
                var i = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(0));
                i.position.set(0, 0), e._container.addChild(i);
                var n = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(24));
                n.position.set(73, 34), e._container.addChild(n);
                var s = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(13));
                s.position.set(70, 132), e._container.addChild(s), e._flg = a.default.friendlyRequest.flg, e._requestFlg = new u, e._requestFlg.position.set(58, 85), e._container.addChild(e._requestFlg), e._type = a.default.friendlyRequest.type, e._requestType = new c, e._requestType.position.set(58, 133), e._container.addChild(e._requestType), e._closeBtn = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(1)), e._closeBtn.interactive = !0, e._closeBtn.buttonMode = !0, e._closeBtn.position.set(255, 242), e._container.addChild(e._closeBtn);
                var _ = a.default.model.basic.getCNum(),
                    l = e._getShipId(_),
                    h = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(l)),
                    p = e._getShipPos(l);
                return h.position.set(p[0], p[1]), e.addChild(h), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this._closeBtn.off(s.EventType.CLICK), this._bg.off(s.EventType.CLICK), this._requestFlg.dispose(), this._requestType.dispose(), a.default.friendlyRequest.UI = !1, this.removeChildren(), this._bg = null, this._container = null, this._closeBtn = null, this._requestFlg = null, this._requestType = null
            }, e.prototype.start = function (t) {
                var e = this;
                a.default.friendlyRequest.UI = !0, this._closeBtn.once(s.EventType.CLICK, function () {
                    t(e._flg, e._type)
                }), this._bg.once(s.EventType.CLICK, function () {
                    t(e._flg, e._type)
                }), this._requestFlg.start(this._flg, function (t) {
                    e._flg = t, 1 === e._flg ? e._requestType.resume() : e._requestType.disabled()
                });
                var i = 1 !== this._flg;
                this._requestType.start(this._type, i, function (t) {
                    e._type = t
                })
            }, e.prototype._getShipId = function (t) {
                var e = Math.floor(100 * Math.random());
                return t > 3 ? e >= 85 ? 5 : e >= 70 ? 10 : e >= 55 ? 12 : e >= 45 ? 11 : e >= 40 ? 9 : e >= 25 ? 7 : e >= 20 ? 8 : e >= 15 ? 6 : e >= 10 ? 4 : e >= 5 ? 3 : 2 : t > 2 ? e >= 90 ? 11 : e >= 60 ? 9 : e >= 40 ? 7 : e >= 25 ? 8 : e >= 20 ? 6 : e >= 15 ? 4 : e >= 10 ? 3 : 2 : t > 1 ? e >= 75 ? 11 : e >= 40 ? 8 : e >= 30 ? 6 : e >= 20 ? 4 : e >= 10 ? 3 : 2 : e >= 75 ? 6 : e >= 50 ? 4 : e >= 25 ? 3 : 2
            }, e.prototype._getShipPos = function (t) {
                switch (t) {
                    case 2:
                        return [618, 18];
                    case 3:
                        return [678, 48];
                    case 4:
                        return [590, 90];
                    case 6:
                        return [722, 70];
                    case 8:
                        return [598, 140];
                    case 9:
                        return [658, 104];
                    case 7:
                        return [559, 33];
                    case 11:
                        return [498, 75];
                    case 12:
                        return [622, 106];
                    case 10:
                        return [669, 72];
                    case 5:
                        return [597, -25]
                }
            }, e
        }(PIXI.Container);
    e.FriendlyRequest = _;
    var l = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(25));
                return e.addChild(i), e._ball = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(26)), e.addChild(e._ball), i.position.set(Math.round(e._ball.width / 2), 9), e._rightX = i.width, e.interactive = !0, e.buttonMode = !0, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.off(s.EventType.CLICK), this.removeChildren(), this._ball = null
            }, e.prototype.initialize = function (t, e) {
                void 0 === e && (e = !1), this._ball.x = t ? this._rightX : 0, e ? this.disabled() : this.resume()
            }, e.prototype.start = function (t, e) {
                var i = this;
                this.on(s.EventType.CLICK, function () {
                    t(), i.onClick(e)
                })
            }, e.prototype.disabled = function () {
                this.interactive = !1, this._ball.texture = r.PORT_FRIENDLY_REQUEST.getTexture(27)
            }, e.prototype.resume = function () {
                this.interactive = !0, this._ball.texture = r.PORT_FRIENDLY_REQUEST.getTexture(26)
            }, e.prototype.onClick = function (t) {
                var e = this;
                void 0 === t && (t = null);
                var i = 0 === this._ball.x ? this._rightX : 0;
                this.interactive = !1, createjs.Tween.get(this._ball).to({
                    x: i
                }, 200).call(function () {
                    e.interactive = !0, t && t(i)
                })
            }, e
        }(PIXI.Container),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._request = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(14)), e._request.interactive = !0, e._request.buttonMode = !0, e.addChild(e._request), e._requestOn = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(15)), e.addChild(e._requestOn), e._unnecessary = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(16)), e._unnecessary.position.set(318, 0), e._unnecessary.interactive = !0, e._unnecessary.buttonMode = !0, e.addChild(e._unnecessary), e._unnecessaryOn = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(17)), e._unnecessaryOn.position.set(318, 0), e.addChild(e._unnecessaryOn), e._btn = new l, e._btn.position.set(205, 8), e.addChild(e._btn), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this._unnecessary.off(s.EventType.CLICK), this._request.off(s.EventType.CLICK), this._btn.dispose(), this.removeChildren(), this._unnecessary = null, this._unnecessaryOn = null, this._request = null, this._requestOn = null, this._btn = null
            }, e.prototype.start = function (t, e) {
                var i = this;
                this._flg = t, this._updateEmission(this._flg), this._unnecessary.on(s.EventType.CLICK, function () {
                    0 !== i._flg && (i._unnecessary.interactive = !1, i._request.interactive = !1, i._btn.onClick(function () {
                        i._flg = 0, i._updateEmission(i._flg), i._unnecessary.interactive = !0, i._request.interactive = !0, e(i._flg)
                    }))
                }), this._request.on(s.EventType.CLICK, function () {
                    1 !== i._flg && (i._unnecessary.interactive = !1, i._request.interactive = !1, i._btn.onClick(function () {
                        i._flg = 1, i._updateEmission(i._flg), i._unnecessary.interactive = !0, i._request.interactive = !0, e(i._flg)
                    }))
                });
                var n = 1 !== t;
                this._btn.initialize(n), this._btn.start(function () {
                    i._unnecessary.interactive = !1, i._request.interactive = !1
                }, function (t) {
                    i._flg = 0 === t ? 1 : 0, i._updateEmission(i._flg), i._unnecessary.interactive = !0, i._request.interactive = !0, e(i._flg)
                })
            }, e.prototype._updateEmission = function (t) {
                1 === t ? (this._unnecessaryOn.visible = !1, this._requestOn.visible = !0) : (this._unnecessaryOn.visible = !0, this._requestOn.visible = !1)
            }, e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._powerfulInfo = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(22)), e._powerfulInfo.position.set(12, 45), e.addChild(e._powerfulInfo), e._normalInfo = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(23)), e._normalInfo.position.set(330, 45), e.addChild(e._normalInfo), e._powerful = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(18)), e._powerful.interactive = !0, e._powerful.buttonMode = !0, e.addChild(e._powerful), e._powerfulOn = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(19)), e.addChild(e._powerfulOn), e._normal = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(20)), e._normal.position.set(318, 0), e._normal.interactive = !0, e._normal.buttonMode = !0, e.addChild(e._normal), e._normalOn = new PIXI.Sprite(r.PORT_FRIENDLY_REQUEST.getTexture(21)), e._normalOn.position.set(318, 0), e.addChild(e._normalOn), e._btn = new l, e._btn.position.set(205, 8), e.addChild(e._btn), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this._powerful.off(s.EventType.CLICK), this._normal.off(s.EventType.CLICK), this._btn.dispose(), this.removeChildren(), this._powerful = null, this._powerfulOn = null, this._powerfulInfo = null, this._normal = null, this._normalOn = null, this._normalInfo = null, this._btn = null
            }, e.prototype.start = function (t, e, i) {
                var n = this;
                this._type = t, this._updateEmission(this._type), e ? this.disabled() : this.resume(), this._powerful.on(s.EventType.CLICK, function () {
                    1 !== n._type && (n._powerful.interactive = !1, n._normal.interactive = !1, n._btn.onClick(function () {
                        n._type = 1, n._updateEmission(n._type), n._powerful.interactive = !0, n._normal.interactive = !0, i(n._type)
                    }))
                }), this._normal.on(s.EventType.CLICK, function () {
                    0 !== n._type && (n._powerful.interactive = !1, n._normal.interactive = !1, n._btn.onClick(function () {
                        n._type = 0, n._updateEmission(n._type), n._powerful.interactive = !0, n._normal.interactive = !0, i(n._type)
                    }))
                });
                var o = 1 !== t;
                this._btn.initialize(o, e), this._btn.start(function () {
                    n._powerful.interactive = !1, n._normal.interactive = !1
                }, function (t) {
                    n._type = 0 === t ? 1 : 0, n._updateEmission(n._type), n._powerful.interactive = !0, n._normal.interactive = !0, i(n._type)
                })
            }, e.prototype.disabled = function () {
                this._normal.interactive = !1, this._normalOn.visible = !1, this._powerful.interactive = !1, this._powerfulOn.visible = !1, this._btn.disabled()
            }, e.prototype.resume = function () {
                this._normal.interactive = !0, this._normalOn.visible = 1 !== this._type, this._powerful.interactive = !0, this._powerfulOn.visible = 1 === this._type, this._btn.resume()
            }, e.prototype._updateEmission = function (t) {
                1 !== t ? (this._normalOn.visible = !0, this._normalInfo.visible = !0, this._powerfulOn.visible = !1, this._powerfulInfo.visible = !1) : (this._normalOn.visible = !1, this._normalInfo.visible = !1, this._powerfulOn.visible = !0, this._powerfulInfo.visible = !0)
            }, e
        }(PIXI.Container)
}