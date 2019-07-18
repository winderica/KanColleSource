const function1036 = function (t, e, i) {
    "use strict";

    function n(t) {
        var e = Math.floor(t / 6e4 / 60),
            i = Math.floor(t / 6e4 % 60),
            n = "";
        return e < 10 && (n += "0"), n += e + ":", i < 10 && (n += "0"), n += "" + i
    }
    var o = this && this.__extends || function () {
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
    var r = i(30),
        s = i(58),
        a = i(370),
        _ = i(87),
        u = i(31),
        l = i(4),
        c = i(1),
        h = i(371),
        p = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(15)),
                    n = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(39));
                n.position.set(8, 36);
                var o = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(40));
                o.position.set(8, 95);
                var a = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(41));
                a.position.set(22, 256);
                var _ = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(42));
                _.position.set(22, 289);
                var u = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(43));
                u.position.set(22, 345);
                var l = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(44));
                l.position.set(8, 379);
                var c = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(95)),
                    h = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(97));
                c.anchor.set(.5, .5), c.position.set(175, 268), h.anchor.set(.5, .5), h.position.set(265, 268), e.addChild(i), e.addChild(n, o, a, _, u, l, c, h);
                var p = new PIXI.Sprite(r.SALLY_COMMON.getTexture(51)),
                    d = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(20));
                return e.addChild(p), p.addChild(d), d.anchor.set(0, .5), d.position.set(40, 20), p.position.set(0, -35), e.addChild(p), e
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ExpeditionEmptyDetail = p;
    var d = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(15)),
                n = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(39)),
                o = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(116)),
                c = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(70)),
                p = new PIXI.Text;
            n.position.set(8, 36), p.style.fill = 4999235, p.position.set(16, 62), o.position.set(225, 8), c.position.set(75, 4);
            var d = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(40));
            d.position.set(8, 95);
            var I = new PIXI.Text;
            I.style.fill = 4999235, I.style.fontSize = 22, I.position.set(18, 121);
            var T = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(41));
            T.position.set(22, 256);
            var O = new f({
                on: 95,
                off: 96
            });
            O.position.set(175, 268), O.update(.3);
            var C = new f({
                on: 97,
                off: 98
            });
            C.position.set(265, 268), C.update(0);
            var P = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(42));
            P.position.set(22, 289);
            var k = new y({
                    on: 95,
                    off: 96
                }),
                S = new y({
                    on: 97,
                    off: 98
                }),
                M = new y({
                    on: 99,
                    off: 100
                }),
                A = new y({
                    on: 101,
                    off: 102
                });
            k.position.set(175, 301), M.position.set(265, 301), S.position.set(175, 326), A.position.set(265, 326);
            var E = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(43));
            E.position.set(22, 345);
            var j = new m({
                    on: 83,
                    off: 84
                }),
                N = new m({
                    on: 85,
                    off: 86
                }),
                L = new m({
                    on: 87,
                    off: 88
                }),
                B = new m({
                    on: 89,
                    off: 90
                });
            j.position.set(173, 358), N.position.set(j.x + j.width + 2, 358), L.position.set(N.x + N.width + 2, 358), B.position.set(L.x + L.width + 2, 358);
            var R = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(71)),
                D = new g,
                U = new v,
                X = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(44));
            X.position.set(8, 379);
            var F = new u.ShipBanner,
                V = new _.ShipInDeckFlag,
                z = new l.TextBox(14, 0),
                G = new l.TextBox(14, 0),
                K = new l.TextBox(12, 0),
                Y = new a.FleetShadow;
            Y.position.set(322, 482), Y.scale.set(.7, .7);
            var H = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(46));
            H.position.set(305, 420), H.anchor.set(.5, .5);
            var W = new b;
            W.position.x = 305, W.position.y = 420;
            var q = new w;
            q.position.x = 305, q.position.y = 420;
            var J = new x;
            J.position.x = 305, J.position.y = 420;
            var Z = new h.ShipShadow;
            Z.anchor.set(.5, 0), Z.position.set(305, 380), V.anchor.set(.5, .5), V.scale.set(.75, .75), V.position.set(25, 483), z.position.set(90, 381), F.position.set(10, 405), G.position.set(44, 467), K.position.set(44, 483), D.position.set(40, 502), U.position.set(80, 502), R.position.set(39, 502), D.onClick = function () {
                return e.onClickStart(e._expedition_mst_id)
            }, U.onClick = function () {
                return e.onClickCancel(e._expedition_mst_id)
            }, e.addChild(i, p, I, o, c), e.addChild(j, N, L, B), e.addChild(O, C), e.addChild(n, d, T, P, E, X), e.addChild(D), e.addChild(U), e.addChild(R), e.addChild(k, M, S, A), e.addChild(F), e.addChild(V), e.addChild(Y), e.addChild(z, G, K), e.addChild(H, J, q, W), e.addChild(Z);
            var $ = new PIXI.Sprite(r.SALLY_COMMON.getTexture(51)),
                Q = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(20));
            return $.addChild(Q), e.addChild($), e.addChild($), Q.anchor.set(0, .5), Q.position.set(40, 20), $.position.set(0, -35), e._textDetail = I, e._textName = p, e._decisionButton = D, e._stopButton = U, e._useAmmo = C, e._useFuel = O, e._rewardFuel = k, e._rewardAmmo = S, e._rewardSteel = M, e._rewardBauxite = A, e._rewardRepairKit = j, e._rewardDevKit = N, e._rewardBuildKit = L, e._rewardOtherItem = B, e._flagShipBanner = F, e._textDeckName = z, e._textFlagShipName = G, e._textFlagShipLevel = K, e._hexClockActive = W, e._hexClockCancel = q, e._hexClockComplete = J, e._iconMonthly = o, e._iconDamage = c, e._iconExpedition = R, e._iconDeck = V, e._deckFleetShadow = Y, e._flagShipShadow = Z, e
        }
        return o(e, t), e.prototype.updateMaster = function (t, e, i, n, o, r, s, a, _, u, l, c, h, p, d, f, y, m) {
            this._textDetail.text = _.replace(/<br>/g, "\n"), this._textName.text = e, this._expedition_mst_id = t, this._useTime = r, this._useFuel.update(s), this._useAmmo.update(a), this._rewardFuel.update(u), this._rewardAmmo.update(l), this._rewardSteel.update(c), this._rewardBauxite.update(h), this._rewardRepairKit.update(d), this._rewardDevKit.update(f), this._rewardBuildKit.update(p), this._rewardOtherItem.update(y), this._iconMonthly.visible = !1, 0 < i && (this._iconMonthly.visible = !0), this._iconDamage.visible = !1, 0 < n && (this._iconDamage.visible = !0), this._cancelable = m
        }, e.prototype.updateMember = function (t, e, i, n, o, r, s) {
            switch (this._flagShipBanner.visible = !1, this._textFlagShipName.visible = !1, this._textFlagShipLevel.visible = !1, this._flagShipShadow.visible = !1, r && (this._flagShipBanner.updateImage(r.mstID, r.isDamaged()), this._flagShipBanner.updateRing(r.isMarriage()), this._textFlagShipName.text = "\u65d7\u8266 [" + r.name + "]", this._textFlagShipLevel.text = "Lv." + r.level, this._flagShipBanner.visible = !0, this._textFlagShipName.visible = !0, this._textFlagShipLevel.visible = !0, this._flagShipShadow.update(r.shipTypeID), this._flagShipShadow.visible = !0), this._textDeckName.visible = !1, o && (this._textDeckName.text = o, this._textDeckName.visible = !0), this._hexClockActive.visible = !1, this._flagShipShadow.visible = !1, this._hexClockCancel.visible = !1, this._hexClockComplete.visible = !1, t) {
                case 0:
                    break;
                case 1:
                    this._hexClockActive.visible = !0, this._flagShipShadow.visible = !0;
                    break;
                case 2:
                    this._hexClockComplete.visible = !0;
                    break;
                case 3:
                    this._hexClockCancel.visible = !0, this._flagShipShadow.visible = !0
            }
            if (e) {
                var a = 60 * this._useTime * 1e3,
                    _ = 1 - (e - Date.now()) / a,
                    u = Math.floor((1 - _) * a);
                this._hexClockActive.visible && this._hexClockActive.update(_, u), this._hexClockCancel.visible && this._hexClockCancel.update(_, u)
            }
            this._decisionButton.setClickable(s), this._decisionButton.visible = !1, this._iconExpedition.visible = !1, this._stopButton.visible = !1;
            var l = e - Date.now();
            switch (t) {
                case 0:
                    this._decisionButton.visible = !0;
                    break;
                case 1:
                    var c = l < 0,
                        h = 0 == c && this._cancelable;
                    this._stopButton.setClickable(h), this._stopButton.visible = !0, this._iconExpedition.visible = !0;
                    break;
                case 2:
                case 3:
                    this._stopButton.setClickable(!1), this._stopButton.visible = !0, this._iconExpedition.visible = !0
            }
            this._iconDeck.visible = !1, n && (this._iconDeck.update([n, 0]), this._iconDeck.visible = !0), this._deckFleetShadow.visible = !1, i && (this._deckFleetShadow.update(i), this._deckFleetShadow.visible = !0), this._completeTime = e, this._deckExpeditionType = t
        }, e.prototype.updateInterface = function (t) {
            var e = 60 * this._useTime * 1e3,
                i = 1 - (this._completeTime - t) / e;
            switch (1 <= i && (i = 1, 1 == this._deckExpeditionType && (this._deckExpeditionType = 2), this._stopButton.setClickable(!1)), this._hexClockActive.visible = !1, this._hexClockCancel.visible = !1, this._hexClockComplete.visible = !1, this._deckExpeditionType) {
                case 0:
                    break;
                case 1:
                    this._hexClockActive.visible = !0;
                    break;
                case 2:
                    this._hexClockComplete.visible = !0;
                    break;
                case 3:
                    this._hexClockCancel.visible = !0
            }
            var n = Math.floor((1 - i) * e);
            this._hexClockActive.visible && this._hexClockActive.update(i, n), this._hexClockCancel.visible && this._hexClockCancel.update(i, n)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._useFuel.dispose(), this._useAmmo.dispose(), this._rewardFuel.dispose(), this._rewardAmmo.dispose(), this._rewardSteel.dispose(), this._rewardBauxite.dispose(), this._rewardRepairKit.dispose(), this._rewardDevKit.dispose(), this._rewardBuildKit.dispose(), this._rewardOtherItem.dispose(), this._flagShipBanner.dispose(), this._hexClockActive.dispose(), this._hexClockCancel.dispose(), this._iconMonthly.texture = PIXI.Texture.EMPTY, this._iconDamage.texture = PIXI.Texture.EMPTY, this._decisionButton.dispose(), this._stopButton.dispose(), this._iconExpedition.texture = PIXI.Texture.EMPTY, this._iconDeck.dispose(), this._deckFleetShadow.dispose(), this._deckFleetShadow = null, this._useFuel = null, this._useAmmo = null, this._rewardFuel = null, this._rewardAmmo = null, this._rewardSteel = null, this._rewardBauxite = null, this._rewardRepairKit = null, this._rewardDevKit = null, this._rewardBuildKit = null, this._rewardOtherItem = null, this._flagShipBanner = null, this._hexClockActive = null, this._hexClockCancel = null, this._iconMonthly = null, this._iconDamage = null, this._decisionButton = null, this._stopButton = null, this._iconExpedition = null, this._iconDeck = null, this.onClickStart = null, this.onClickCancel = null, this._textDetail = null, this._textName = null, this._expedition_mst_id = null, this._textFlagShipName = null, this._textFlagShipLevel = null, this._textDeckName = null
        }, e
    }(PIXI.Container);
    e.ExpeditionDetail = d;
    var f = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(37)),
                    o = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(e.on)),
                    r = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(e.off)),
                    a = new PIXI.Text;
                return o.anchor.set(.5, .5), r.anchor.set(.5, .5), a.style.fill = 4999235, a.anchor.set(.5, .5), n.anchor.set(0, .5), n.position.x = 18, a.style.fontSize = 16, a.position.x = 40, i.addChild(n, r, o, a), i._iconOn = o, i._iconOff = r, i._text = a, i
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._iconOn.texture = PIXI.Texture.EMPTY, this._iconOff.texture = PIXI.Texture.EMPTY, this._text.texture = PIXI.Texture.EMPTY, this._iconOn = null, this._iconOff = null, this._text = null
            }, e.prototype.update = function (t) {
                this._iconOn.visible = !1, 0 < t && (this._iconOn.visible = !0), this._text.text = this._getMaterialText(t)
            }, e.prototype._getMaterialText = function (t) {
                return t <= 0 ? "\u306a\u3057" : t <= .3 ? "\u5c11\u91cf" : "\u666e\u901a"
            }, e
        }(PIXI.Container),
        y = function (t) {
            function e(e) {
                for (var i = t.call(this) || this, n = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(38)), o = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(e.on)), r = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(e.off)), a = new Array, _ = 0; _ < 4; _++) {
                    var u = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(68));
                    u.position.y = -1, u.anchor.set(0, .5), a.push(u)
                }
                o.anchor.set(.5, .5), r.anchor.set(.5, .5), n.anchor.set(0, .5), n.position.x = 7, i._iconOn = o, i._iconOff = r, i._dots = a, i.addChild(n, r, o);
                for (var l = 21, _ = 0; _ < a.length; _++) {
                    var u = a[_];
                    u.position.x = l, l = l + u.width + 3.2, i.addChild(u)
                }
                return i
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._iconOn.texture = PIXI.Texture.EMPTY, this._iconOff.texture = PIXI.Texture.EMPTY, this._dots.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._dots.length = 0, this._iconOn = null, this._iconOff = null, this._dots = null
            }, e.prototype.update = function (t) {
                this._iconOn.visible = !1, 0 < t && (this._iconOn.visible = !0);
                for (var e = 0; e < this._dots.length; e++) {
                    var i = this._dots[e];
                    i.visible = !1, e < t && (i.visible = !0)
                }
            }, e
        }(PIXI.Container),
        m = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(e.on)),
                    o = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(e.off));
                return o.anchor.set(.5, .5), n.anchor.set(.5, .5), i.addChild(o, n), i._iconOn = n, i
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._iconOn.texture = PIXI.Texture.EMPTY, this._iconOn = null
            }, e.prototype.update = function (t) {
                this._iconOn.visible = !1, t && (this._iconOn.visible = !0)
            }, e
        }(PIXI.Container),
        g = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._resourceMap = {
                    on: 18,
                    over: 20,
                    off: 19
                }, e._onClick = function () {
                    e.onClick()
                }, e._onOver = function () {
                    e._over()
                }, e._onOut = function () {
                    e._on()
                };
                var i = r.SALLY_COMMON.getTexture(e._resourceMap.off),
                    n = new PIXI.Sprite(i),
                    o = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 280, 60).endFill();
                return e.addChild(n), e.addChild(o), o.addListener(c.EventType.CLICK, e._onClick), o.addListener(c.EventType.MOUSEOVER, e._onOver), o.addListener(c.EventType.MOUSEOUT, e._onOut), o.buttonMode = o.interactive = !0, e._image = n, e._hitArea = o, e
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._hitArea.removeAllListeners(c.EventType.CLICK), this._hitArea.removeAllListeners(c.EventType.MOUSEOVER), this._hitArea.removeAllListeners(c.EventType.MOUSEOUT), this._image.texture = PIXI.Texture.EMPTY, this.onClick = null, this._hitArea = null, this._image = null
            }, e.prototype.setClickable = function (t) {
                t ? this._on() : this._off(), this._hitArea.visible = t
            }, e.prototype._over = function () {
                this._image.texture = r.SALLY_COMMON.getTexture(this._resourceMap.over)
            }, e.prototype._on = function () {
                this._image.texture = r.SALLY_COMMON.getTexture(this._resourceMap.on)
            }, e.prototype._off = function () {
                this._image.texture = r.SALLY_COMMON.getTexture(this._resourceMap.off)
            }, e
        }(PIXI.Container),
        v = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._resourceMap = {
                    off: 27,
                    on: 26,
                    over: 28
                }, e._onClick = function () {
                    e.onClick()
                }, e._onOver = function () {
                    0 != e._clickable && e._over()
                }, e._onOut = function () {
                    0 != e._clickable && e._on()
                };
                var i = s.SALLY_EXPEDITION.getTexture(e._resourceMap.off),
                    n = new PIXI.Sprite(i),
                    o = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, i.width, i.height).endFill();
                return e.addChild(n), e.addChild(o), o.addListener(c.EventType.CLICK, e._onClick), o.addListener(c.EventType.MOUSEOVER, e._onOver), o.addListener(c.EventType.MOUSEOUT, e._onOut), o.buttonMode = o.interactive = !0, e._image = n, e._hitArea = o, e.setClickable(!1), e
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._hitArea.removeAllListeners(c.EventType.CLICK), this._hitArea.removeAllListeners(c.EventType.MOUSEOVER), this._hitArea.removeAllListeners(c.EventType.MOUSEOUT), this._image.texture = PIXI.Texture.EMPTY, this.onClick = null, this._hitArea = null, this._image = null
            }, e.prototype.setClickable = function (t) {
                t ? this._on() : this._off(), this._hitArea.interactive = t, this._clickable = t
            }, e.prototype._over = function () {
                this._image.texture = s.SALLY_EXPEDITION.getTexture(this._resourceMap.over)
            }, e.prototype._off = function () {
                this._image.texture = s.SALLY_EXPEDITION.getTexture(this._resourceMap.off)
            }, e.prototype._on = function () {
                this._image.texture = s.SALLY_EXPEDITION.getTexture(this._resourceMap.on)
            }, e
        }(PIXI.Container),
        b = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._yellowMap = {
                    1: 58,
                    2: 59,
                    3: 60,
                    4: 61,
                    5: 62,
                    6: 63
                }, e._lightMap = {
                    1: 49,
                    2: 50,
                    3: 51,
                    4: 52,
                    5: 53,
                    6: 54
                };
                for (var i = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(46)), n = new Array, o = 1; o <= 6; o++) {
                    var r = e._yellowMap[o],
                        a = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(r));
                    a.anchor.set(.5, .5), n.push(a)
                }
                for (var _ = new Array, o = 1; o <= 6; o++) {
                    var u = e._lightMap[o],
                        l = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(u));
                    l.anchor.set(.5, .5), _.push(l)
                }
                var c = new PIXI.Sprite,
                    h = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(55)),
                    p = new PIXI.Text;
                p.anchor.set(1, .5), p.position.set(15, -10), p.style.fontSize = 16;
                var d = new PIXI.Text;
                d.anchor.set(.5, 0), d.position.y = 11, d.style.fontSize = 16;
                var f = new PIXI.Text;
                f.anchor.set(.5, 0), f.position.y = 27, f.style.fontSize = 12, i.anchor.set(.5, .5), c.anchor.set(.5, .5), h.anchor.set(.5, .5), e.addChild(i);
                for (var o = 0; o < n.length; o++) {
                    var a = n[o];
                    e.addChild(a)
                }
                for (var o = 0; o < _.length; o++) {
                    var y = _[o];
                    y.position.x = .5, e.addChild(y)
                }
                return e.addChild(p, f, d, h), e._textProgress = p, e._yellows = n, e._lights = _, e._textLast = d, e._textLastSec = f, e
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._yellows.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._lights.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._textProgress = null, this._textLast = null, this._yellows = null, this._lights = null
            }, e.prototype.update = function (t, e) {
                var i = Math.floor(e % 6e4 / 1e3);
                this._updateYellow(1 - i / 60), this._updateGauge(t), this._textProgress.text = Math.floor(100 * t).toString(), this._textLast.text = n(e);
                var o = "";
                i < 10 && (o += "0"), o += i.toString(), this._textLastSec.text = o.toString()
            }, e.prototype._updateYellow = function (t) {
                for (var e = Math.floor(6 * t) + 1, i = 0; i < this._yellows.length; i++) {
                    var n = this._yellows[i];
                    n.visible = !1, i < e && (n.visible = !0)
                }
            }, e.prototype._updateGauge = function (t) {
                for (var e = Math.floor(6 * t) + 1, i = 0; i < this._lights.length; i++) {
                    var n = this._lights[i];
                    n.visible = !1, i < e && (n.visible = !0)
                }
            }, e
        }(PIXI.Container),
        w = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._yellowMap = {
                    1: 58,
                    2: 59,
                    3: 60,
                    4: 61,
                    5: 62,
                    6: 63
                };
                for (var i = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(48)), n = new Array, o = 1; o <= 6; o++) {
                    var r = e._yellowMap[o],
                        a = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(r));
                    a.anchor.set(.5, .5), n.push(a)
                }
                var _ = new PIXI.Sprite,
                    u = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(57)),
                    l = new PIXI.Text;
                l.anchor.set(.5, 0), l.position.y = 11, l.style.fontSize = 16;
                var c = new PIXI.Text;
                c.anchor.set(.5, 0), c.position.y = 27, c.style.fontSize = 12, i.anchor.set(.5, .5), _.anchor.set(.5, .5), u.anchor.set(.5, .5), e.addChild(i);
                for (var o = 0; o < n.length; o++) {
                    var a = n[o];
                    e.addChild(a)
                }
                return e.addChild(c, l, u), e._yellows = n, e._textLast = l, e._textLastSec = c, e
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._yellows.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._textLast = null, this._yellows = null
            }, e.prototype.update = function (t, e) {
                if (1 <= t) this._textLast.text = "", this._textLastSec.text = "";
                else {
                    var i = Math.floor(e % 6e4 / 1e3);
                    this._updateYellow(1 - i / 60), this._textLast.text = n(e);
                    var o = "";
                    i < 10 && (o += "0"), o += i.toString(), this._textLastSec.text = o.toString()
                }
            }, e.prototype._updateYellow = function (t) {
                for (var e = Math.floor(6 * t) + 1, i = 0; i < this._yellows.length; i++) {
                    var n = this._yellows[i];
                    n.visible = !1, i < e && (n.visible = !0)
                }
            }, e
        }(PIXI.Container),
        x = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(47)),
                    n = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(56));
                return i.anchor.set(.5, .5), n.anchor.set(.5, .5), e.addChild(i), e.addChild(n), e
            }
            return o(e, t), e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container)
}