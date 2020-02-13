const function1076 = function (t, e, i) {
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
    var o = i(31),
        r = i(59),
        s = i(380),
        a = i(88),
        _ = i(30),
        u = i(4),
        l = i(1),
        c = i(238),
        h = i(239),
        p = i(381),
        d = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(14)),
                    n = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(38));
                n.position.set(8, 36);
                var l = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(120));
                l.position.set(225, 8);
                var h = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(69));
                h.position.set(75, 4);
                var p = new u.TextBox(27, 4999235, "bold");
                p.position.set(16, 60);
                var d = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(39));
                d.position.set(8, 95);
                var f = new u.TextBox(21, 4999235, "bold");
                f.position.set(18, 119);
                var I = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(40));
                I.position.set(22, 256);
                var T = new y({
                    on: 97,
                    off: 98
                });
                T.position.set(175, 268);
                var O = new y({
                    on: 99,
                    off: 100
                });
                O.position.set(265, 268);
                var C = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(41));
                C.position.set(22, 289);
                var P = new m({
                    on: 97,
                    off: 98
                });
                P.position.set(175, 301);
                var k = new m({
                    on: 99,
                    off: 100
                });
                k.position.set(175, 326);
                var S = new m({
                    on: 101,
                    off: 102
                });
                S.position.set(265, 301);
                var M = new m({
                    on: 103,
                    off: 104
                });
                M.position.set(265, 326);
                var A = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(42));
                A.position.set(22, 345);
                var E = new PIXI.Sprite;
                E.anchor.set(.5, .5);
                var j = new u.TextBox(18, 4999235, "bold");
                j.position.set(186, 349);
                var N = new PIXI.Sprite;
                N.anchor.set(.5, .5);
                var L = new u.TextBox(18, 4999235, "bold");
                L.position.set(244, 349);
                var B = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(70)),
                    R = new g,
                    D = new v,
                    U = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(43));
                U.position.set(8, 379);
                var X = new _.ShipBanner;
                X.position.set(10, 405);
                var F = new a.ShipInDeckFlag;
                F.anchor.set(.5, .5), F.scale.set(.75, .75), F.position.set(25, 483);
                var V = new u.TextBox(14, 0);
                V.position.set(86, 382);
                var G = new u.TextBox(14, 0);
                G.position.set(39, 467);
                var z = new u.TextBox(14, 0);
                z.position.set(39, 483);
                var K = new s.FleetShadow(c.ShadowType.DETAIL);
                K.position.set(332, 486), K.scale.set(1, 1);
                var Y = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(45));
                Y.position.set(305, 420), Y.anchor.set(.5, .5);
                var H = new b;
                H.position.x = 305, H.position.y = 420;
                var W = new w;
                W.position.x = 305, W.position.y = 420;
                var q = new x;
                q.position.x = 305, q.position.y = 420;
                var J = new c.ShipShadow;
                J.anchor.set(.5, 0), J.position.set(305, 380), R.position.set(40, 502), D.position.set(80, 502), B.position.set(39, 502);
                var Z = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(19));
                Z.anchor.set(0, .5), Z.position.set(40, 20);
                var $ = new PIXI.Sprite(o.SALLY_COMMON.getTexture(51));
                return $.position.set(0, -35), $.addChild(Z), R.onClick = function () {
                    return e.onClickStart(e._expedition_mst_id)
                }, D.onClick = function () {
                    return e.onClickCancel(e._expedition_mst_id)
                }, e.addChild(i), e.addChild(n, p, l, h), e.addChild(d, f), e.addChild(I, T, O), e.addChild(C, P, S, k, M), e.addChild(A, E, j, N, L), e.addChild(U, V, G, z, X, F), e.addChild(K, D, B, R), e.addChild(Y, q, W, H, J), e.addChild($), e._textExpeditionDetail = f, e._textExpeditionName = p, e._decisionButton = R, e._stopButton = D, e._useAmmo = O, e._useFuel = T, e._rewardFuel = P, e._rewardAmmo = k, e._rewardSteel = S, e._rewardBauxite = M, e._rewardItem1Icon = E, e._rewardItem1Text = j, e._rewardItem2Icon = N, e._rewardItem2Text = L, e._flagShipBanner = X, e._textDeckName = V, e._textFlagShipName = G, e._textFlagShipLevel = z, e._hexClockActive = H, e._hexClockCancel = W, e._hexClockComplete = q, e._iconMonthly = l, e._iconDamage = h, e._iconTower = B, e._iconDeck = F, e._deckFleetShadow = K, e._flagShipShadow = J, e
            }
            return n(e, t), e.prototype._itemIdToTextureId = function (t) {
                switch (t) {
                    case 0:
                        return -1;
                    case 1:
                        return 0;
                    case 2:
                        return 2;
                    case 3:
                        return 1;
                    case 59:
                        return 4;
                    default:
                        return 3
                }
            }, e.prototype.updateMaster = function (t, e, i, n, o, r, s, a, _, u, l, c, h, d, f, y, m) {
                if (this._useFuel.update(r), this._useAmmo.update(s), this._rewardFuel.update(_), this._rewardAmmo.update(u), this._rewardSteel.update(l), this._rewardBauxite.update(c), 0 == d) this._rewardItem1Icon.visible = !1, this._rewardItem1Text.visible = !1;
                else {
                    this._rewardItem1Icon.visible = !0, this._rewardItem1Text.visible = !0;
                    var g = this._itemIdToTextureId(h); - 1 == g ? (this._rewardItem1Icon.position.set(175, 359.5), this._rewardItem1Icon.texture = PIXI.Texture.EMPTY) : 4 == g ? (this._rewardItem1Icon.position.set(175, 358), this._rewardItem1Icon.texture = p.SALLY_EXPEDITION_DETAIL.getTexture(g)) : (this._rewardItem1Icon.position.set(175, 359.5), this._rewardItem1Icon.texture = p.SALLY_EXPEDITION_DETAIL.getTexture(g)), this._rewardItem1Text.text = "\xd7" + d
                }
                if (0 == y) this._rewardItem2Icon.visible = !1, this._rewardItem2Text.visible = !1;
                else {
                    this._rewardItem2Icon.visible = !0, this._rewardItem2Text.visible = !0;
                    var g = this._itemIdToTextureId(f); - 1 == g ? (this._rewardItem2Icon.position.set(233, 359.5), this._rewardItem2Icon.texture = PIXI.Texture.EMPTY) : 4 == g ? (this._rewardItem2Icon.position.set(233, 358), this._rewardItem2Icon.texture = p.SALLY_EXPEDITION_DETAIL.getTexture(g)) : (this._rewardItem2Icon.position.set(233, 359.5), this._rewardItem2Icon.texture = p.SALLY_EXPEDITION_DETAIL.getTexture(g)), this._rewardItem2Text.text = "\xd7" + y
                }
                this._iconMonthly.visible = !1, 0 < i && (this._iconMonthly.visible = !0), this._iconDamage.visible = !1, 0 < n && (this._iconDamage.visible = !0), this._textExpeditionDetail.text = a.replace(/<br>/g, "\n"), this._textExpeditionName.text = e, this._cancelable = m, this._expedition_mst_id = t, this._useTime = o
            }, e.prototype.updateMember = function (t, e, i, n, o, r, s) {
                switch (this._flagShipBanner.visible = !1, this._textFlagShipName.visible = !1, this._textFlagShipLevel.visible = !1, this._flagShipShadow.visible = !1, r && (this._flagShipBanner.updateImage(r.mstID, r.isDamaged()), this._flagShipBanner.updateRing(r.isMarriage()), this._textFlagShipName.text = "\u65d7\u8266 [" + r.name + "]", this._textFlagShipLevel.text = "Lv." + r.level, this._flagShipBanner.visible = !0, this._textFlagShipName.visible = !0, this._textFlagShipLevel.visible = !0, this._flagShipShadow.update(r.shipTypeID, c.ShadowType.DETAIL), this._flagShipShadow.visible = !0), this._textDeckName.visible = !1, o && (this._textDeckName.text = o, this._textDeckName.visible = !0), this._hexClockActive.visible = !1, this._flagShipShadow.visible = !1, this._hexClockCancel.visible = !1, this._hexClockComplete.visible = !1, t) {
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
                this._decisionButton.setClickable(s), this._decisionButton.visible = !1, this._iconTower.visible = !1, this._stopButton.visible = !1;
                var l = e - Date.now();
                switch (t) {
                    case 0:
                        this._decisionButton.visible = !0;
                        break;
                    case 1:
                        var h = l < 0,
                            p = 0 == h && this._cancelable;
                        this._stopButton.setClickable(p), this._stopButton.visible = !0, this._iconTower.visible = !0;
                        break;
                    case 2:
                    case 3:
                        this._stopButton.setClickable(!1), this._stopButton.visible = !0, this._iconTower.visible = !0
                }
                this._iconDeck.visible = !1, n && (this._iconDeck.update([n, 0]), this._iconDeck.visible = !0), this._deckFleetShadow.visible = !1, i && (this._deckFleetShadow.update(i), this._deckFleetShadow.visible = !0), this._completeTime = e, this._deckExpeditionType = t
            }, e.prototype.updateInterface = function (t) {
                var e = 60 * this._useTime * 1e3,
                    i = 1 - (this._completeTime - t) / e;
                switch (i < 0 && (i = 0), 1 <= i && (i = 1, 1 == this._deckExpeditionType && (this._deckExpeditionType = 2), this._stopButton.setClickable(!1)), this._hexClockActive.visible = !1, this._hexClockCancel.visible = !1, this._hexClockComplete.visible = !1, this._deckExpeditionType) {
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
                this.removeChildren(), this._useFuel.dispose(), this._useAmmo.dispose(), this._rewardFuel.dispose(), this._rewardAmmo.dispose(), this._rewardSteel.dispose(), this._rewardBauxite.dispose(), this._flagShipBanner.dispose(), this._hexClockActive.dispose(), this._hexClockCancel.dispose(), this._iconMonthly.texture = PIXI.Texture.EMPTY, this._iconDamage.texture = PIXI.Texture.EMPTY, this._decisionButton.dispose(), this._stopButton.dispose(), this._iconTower.texture = PIXI.Texture.EMPTY, this._iconDeck.dispose(), this._deckFleetShadow.dispose(), this._deckFleetShadow = null, this._useFuel = null, this._useAmmo = null, this._rewardFuel = null, this._rewardAmmo = null, this._rewardSteel = null, this._rewardBauxite = null, this._rewardItem1Icon = null, this._rewardItem1Text = null, this._rewardItem2Icon = null, this._rewardItem2Text = null, this._flagShipBanner = null, this._hexClockActive = null, this._hexClockCancel = null, this._iconMonthly = null, this._iconDamage = null, this._decisionButton = null, this._stopButton = null, this._iconTower = null, this._iconDeck = null, this.onClickStart = null, this.onClickCancel = null, this._textExpeditionDetail = null, this._textExpeditionName = null, this._expedition_mst_id = null, this._textFlagShipName = null, this._textFlagShipLevel = null, this._textDeckName = null
            }, e
        }(PIXI.Container);
    e.ExpeditionDetail = d;
    var f = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(14)),
                n = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(38));
            n.position.set(8, 36);
            var s = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(39));
            s.position.set(8, 95);
            var a = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(40));
            a.position.set(22, 256);
            var _ = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(41));
            _.position.set(22, 289);
            var u = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(42));
            u.position.set(22, 345);
            var l = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(43));
            l.position.set(8, 379);
            var c = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(97)),
                h = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(99));
            c.anchor.set(.5, .5), c.position.set(175, 268), h.anchor.set(.5, .5), h.position.set(265, 268), e.addChild(i), e.addChild(n, s, a, _, u, l, c, h);
            var p = new PIXI.Sprite(o.SALLY_COMMON.getTexture(51)),
                d = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(19));
            return e.addChild(p), p.addChild(d), d.anchor.set(0, .5), d.position.set(40, 20), p.position.set(0, -35), e.addChild(p), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ExpeditionEmptyDetail = f;
    var y = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(36)),
                    o = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(e.on)),
                    s = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(e.off)),
                    a = new u.TextBox(16, 4999235, "bold");
                return o.anchor.set(.5, .5), s.anchor.set(.5, .5), a.anchor.set(.5, .5), n.anchor.set(0, .5), n.position.x = 18, a.position.set(40, .5), i.addChild(n, s, o, a), i._iconOn = o, i._iconOff = s, i._text = a, i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._iconOn.texture = PIXI.Texture.EMPTY, this._iconOff.texture = PIXI.Texture.EMPTY, this._text.texture = PIXI.Texture.EMPTY, this._iconOn = null, this._iconOff = null, this._text = null
            }, e.prototype.update = function (t) {
                this._iconOn.visible = !1, 0 < t && (this._iconOn.visible = !0), this._text.text = h.useMaterialToString(t)
            }, e
        }(PIXI.Container),
        m = function (t) {
            function e(e) {
                for (var i = t.call(this) || this, n = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(37)), o = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(e.on)), s = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(e.off)), a = new Array, _ = 0; _ < 4; _++) {
                    var u = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(67));
                    u.position.y = -1, u.anchor.set(0, .5), a.push(u)
                }
                o.anchor.set(.5, .5), s.anchor.set(.5, .5), n.anchor.set(0, .5), n.position.x = 7, i._iconOn = o, i._iconOff = s, i._dots = a, i.addChild(n, s, o);
                for (var l = 21, _ = 0; _ < a.length; _++) {
                    var u = a[_];
                    u.position.x = l, l = l + u.width + 3.2, i.addChild(u)
                }
                return i
            }
            return n(e, t), e.prototype.dispose = function () {
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
                var i = o.SALLY_COMMON.getTexture(e._resourceMap.off),
                    n = new PIXI.Sprite(i),
                    r = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 280, 60).endFill();
                return e.addChild(n), e.addChild(r), r.addListener(l.EventType.CLICK, e._onClick), r.addListener(l.EventType.MOUSEOVER, e._onOver), r.addListener(l.EventType.MOUSEOUT, e._onOut), r.buttonMode = r.interactive = !0, e._image = n, e._hitArea = r, e
            }
            return n(e, t), e.prototype.setClickable = function (t) {
                t ? this._on() : this._off(), this._hitArea.visible = t
            }, e.prototype._over = function () {
                this._image.texture = o.SALLY_COMMON.getTexture(this._resourceMap.over)
            }, e.prototype._on = function () {
                this._image.texture = o.SALLY_COMMON.getTexture(this._resourceMap.on)
            }, e.prototype._off = function () {
                this._image.texture = o.SALLY_COMMON.getTexture(this._resourceMap.off)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._hitArea.removeAllListeners(l.EventType.CLICK), this._hitArea.removeAllListeners(l.EventType.MOUSEOVER), this._hitArea.removeAllListeners(l.EventType.MOUSEOUT), this._image.texture = PIXI.Texture.EMPTY, this._hitArea = null, this._image = null, this.onClick = this._onClick = null, this._onOver = null, this._onOut = null
            }, e
        }(PIXI.Container),
        v = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._resourceMap = {
                    off: 26,
                    on: 25,
                    over: 27
                }, e._onClick = function () {
                    e.onClick()
                }, e._onOver = function () {
                    0 != e._clickable && e._over()
                }, e._onOut = function () {
                    0 != e._clickable && e._on()
                };
                var i = r.SALLY_EXPEDITION.getTexture(e._resourceMap.off),
                    n = new PIXI.Sprite(i),
                    o = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, i.width, i.height).endFill();
                return e.addChild(n), e.addChild(o), o.addListener(l.EventType.CLICK, e._onClick), o.addListener(l.EventType.MOUSEOVER, e._onOver), o.addListener(l.EventType.MOUSEOUT, e._onOut), o.buttonMode = o.interactive = !0, e._image = n, e._hitArea = o, e.setClickable(!1), e
            }
            return n(e, t), e.prototype.setClickable = function (t) {
                t ? this._on() : this._off(), this._hitArea.interactive = t, this._clickable = t
            }, e.prototype._over = function () {
                this._image.texture = r.SALLY_EXPEDITION.getTexture(this._resourceMap.over)
            }, e.prototype._off = function () {
                this._image.texture = r.SALLY_EXPEDITION.getTexture(this._resourceMap.off)
            }, e.prototype._on = function () {
                this._image.texture = r.SALLY_EXPEDITION.getTexture(this._resourceMap.on)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._hitArea.removeAllListeners(l.EventType.CLICK), this._hitArea.removeAllListeners(l.EventType.MOUSEOVER), this._hitArea.removeAllListeners(l.EventType.MOUSEOUT), this._image.texture = PIXI.Texture.EMPTY, this.onClick = this._onClick = null, this._onOver = null, this._onOut = null, this._hitArea = null, this._image = null
            }, e
        }(PIXI.Container),
        b = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._yellowMap = {
                    1: 57,
                    2: 58,
                    3: 59,
                    4: 60,
                    5: 61,
                    6: 62
                }, e._lightMap = {
                    1: 48,
                    2: 49,
                    3: 50,
                    4: 51,
                    5: 52,
                    6: 53
                };
                for (var i = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(45)), n = new Array, o = 1; o <= 6; o++) {
                    var s = e._yellowMap[o],
                        a = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(s));
                    a.anchor.set(.5, .5), n.push(a)
                }
                for (var _ = new Array, o = 1; o <= 6; o++) {
                    var u = e._lightMap[o],
                        l = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(u));
                    l.anchor.set(.5, .5), _.push(l)
                }
                var c = new PIXI.Sprite,
                    h = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(54)),
                    p = new PIXI.Text;
                p.anchor.set(1, .5), p.position.set(22, -11), p.style.fontSize = 22;
                var d = new PIXI.Text;
                d.anchor.set(.5, 0), d.position.y = 7, d.style.fontSize = 20;
                var f = new PIXI.Text;
                f.anchor.set(.5, 0), f.position.y = 27, f.style.fontSize = 17, i.anchor.set(.5, .5), c.anchor.set(.5, .5), h.anchor.set(.5, .5), e.addChild(i);
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
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._yellows.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._lights.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._textProgress = null, this._textLast = null, this._yellows = null, this._lights = null
            }, e.prototype.update = function (t, e) {
                var i = Math.floor(e % 6e4 / 1e3);
                this._updateYellow(1 - i / 60), this._updateGauge(t), this._textProgress.text = Math.floor(100 * t).toString(), this._textLast.text = h.millisecondToFormatHHMM(e);
                var n = "";
                i < 10 && (n += "0"), n += i.toString(), this._textLastSec.text = n.toString()
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
                    1: 57,
                    2: 58,
                    3: 59,
                    4: 60,
                    5: 61,
                    6: 62
                };
                for (var i = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(47)), n = new Array, o = 1; o <= 6; o++) {
                    var s = e._yellowMap[o],
                        a = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(s));
                    a.anchor.set(.5, .5), n.push(a)
                }
                var _ = new PIXI.Sprite,
                    u = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(56)),
                    l = new PIXI.Text;
                l.anchor.set(.5, 0), l.position.y = 7, l.style.fontSize = 20;
                var c = new PIXI.Text;
                c.anchor.set(.5, 0), c.position.y = 27, c.style.fontSize = 17, i.anchor.set(.5, .5), _.anchor.set(.5, .5), u.anchor.set(.5, .5), e.addChild(i);
                for (var o = 0; o < n.length; o++) {
                    var a = n[o];
                    e.addChild(a)
                }
                return e.addChild(c, l, u), e._yellows = n, e._textLast = l, e._textLastSec = c, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._yellows.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._textLast = null, this._yellows = null
            }, e.prototype.update = function (t, e) {
                if (1 <= t) this._textLast.text = "", this._textLastSec.text = "";
                else {
                    var i = Math.floor(e % 6e4 / 1e3);
                    this._updateYellow(1 - i / 60), this._textLast.text = h.millisecondToFormatHHMM(e);
                    var n = "";
                    i < 10 && (n += "0"), n += i.toString(), this._textLastSec.text = n.toString()
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
                    i = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(46)),
                    n = new PIXI.Sprite(r.SALLY_EXPEDITION.getTexture(55));
                return i.anchor.set(.5, .5), n.anchor.set(.5, .5), e.addChild(i), e.addChild(n), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container)
}