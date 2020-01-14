const function1078 = function (t, e, i) {
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
    var o = i(59),
        r = i(4),
        s = i(88),
        a = i(381),
        _ = i(1),
        u = i(0),
        l = i(14),
        c = i(379),
        h = i(382),
        p = i(241),
        d = i(240),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function (t) {
                    var i = t.data,
                        n = u.default.model.basic.member_id,
                        o = l.__create_serial_id__(n, i.global.x, i.global.y);
                    u.default.model.expedition.serial_id = o, e.onClick(e._expedition_mst_id)
                }, e._onOver = function () {
                    e._focusOver()
                }, e._onOut = function () {
                    e._focusOut()
                };
                var i = (new PIXI.Graphics).beginFill(16777215, 0).drawRect(0, 0, 655, 45).endFill(),
                    n = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(95)),
                    a = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 655, 45).endFill(),
                    h = new r.TextBox(18, 4999235, "bold"),
                    p = new r.TextBox(20, 3768020, "bold"),
                    f = new r.TextBox(14, 4999235, "bold"),
                    w = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(69));
                w.position.y = -10, w.scale.set(.75, .75);
                var x = new c.FleetShadow(d.ShadowType.LIST);
                x.scale.set(1, 1), x.position.set(656, 32), a.interactive = !0, a.buttonMode = !0, a.addListener(_.EventType.CLICK, e._onClick), a.addListener(_.EventType.MOUSEOVER, e._onOver), a.addListener(_.EventType.MOUSEOUT, e._onOut);
                var I = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(92));
                I.alpha = 0;
                var T = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(63)),
                    O = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(81)),
                    C = new s.ShipInDeckFlag;
                T.anchor.set(.5, .5), T.position.set(23, .5 * i.height), O.anchor.set(.5, .5), O.position.set(23, .5 * i.height), C.anchor.set(.5, .5), C.position.set(23, .5 * i.height), C.scale.set(.75, .75);
                var P = new r.TextBox(15, 4999235, "bold");
                P.position.set(42, .5 * i.height), P.anchor.set(0, .5);
                var k = new g;
                k.position.set(80, .5 * i.height);
                var S = new v;
                S.position.set(67, 0);
                var M = new r.TextBox(22, 4999235, "bold");
                M.position.set(95, Math.floor(.5 * i.height)), M.anchor.set(0, .5);
                var A = new PIXI.Graphics;
                A.beginFill(16777215, 1), A.drawRect(92, 0, 229, 44), A.endFill(), M.mask = A;
                var E = new PIXI.Sprite;
                E.position.set(294, 0), E.scale.y = .96;
                var j = new m({
                        on: 72,
                        off: 73
                    }),
                    N = new m({
                        on: 74,
                        off: 75
                    }),
                    L = new m({
                        on: 76,
                        off: 77
                    }),
                    B = new m({
                        on: 78,
                        off: 79
                    });
                j.y = N.y = L.y = B.y = 1, j.x = 337, L.x = j.x + j.width + 2, N.x = L.x + L.width + 2, B.x = N.x + N.width + 2;
                var R = new y({
                        on: 82,
                        off: 83
                    }),
                    D = new y({
                        on: 84,
                        off: 85
                    }),
                    U = new y({
                        on: 86,
                        off: 87
                    }),
                    X = new y({
                        on: 88,
                        off: 89
                    });
                R.position.set(431.5, 9), D.position.set(446, 9.5), U.position.set(429.5, 23), X.position.set(447, 23.5), h.position.set(645, .5 * i.height), h.anchor.set(1, .5), p.style.fill = 3768020, p.style.fontSize = 20, p.position.set(478, Math.floor(.5 * i.height) - .5), p.anchor.set(1, .5), f.position.set(p.position.x, Math.floor(.5 * i.height)), f.anchor.set(0, .5);
                var F = new b;
                return F.position.set(524, 7), e.addChild(i), e.addChild(n), e.addChild(I), e.addChild(T, O, C), e.addChild(P, M, A, E, h, p, f, w), e.addChild(S, k), e.addChild(j, N, L, B), e.addChild(R, D, U, X), e.addChild(x), e.addChild(F), e.addChild(a), e._textDispNo = P, e._textTime = h, e._textName = M, e._textNameGradMask = E, e._textDeckNumText = f, e._hitArea = a, e._focus = I, e._textDeckNum = p, e._exampleFleetShadow = x, e._difficulty = k, e._iconDamage = w, e._expeditionStateIcon = F, e._iconDeck = C, e._iconClear = T, e._iconNew = O, e._difficultyBG = S, e._fuel = j, e._steel = L, e._ammo = N, e._bauxite = B, e._repairKit = R, e._devKit = D, e._buildKit = U, e._otherItem = X, e._grayOut = n, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "expedition_mst_id", {
                get: function () {
                    return this._expedition_mst_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "expeditionStateIcon", {
                get: function () {
                    return this._expeditionStateIcon
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._focusOver = function () {
                this._focus.alpha = 1, this._textNameGradMask.texture = o.SALLY_EXPEDITION.getTexture(93)
            }, e.prototype._focusOut = function () {
                this._focus.alpha = 0, this._grayOut.visible ? this._textNameGradMask.texture = o.SALLY_EXPEDITION.getTexture(94) : this._textNameGradMask.texture = o.SALLY_EXPEDITION.getTexture(96)
            }, e.prototype.updateMaster = function (t, e, i, n, o, r, s, a, _, u, l, c, h, d, f, y, m) {
                this._fuel.update(_), this._ammo.update(u), this._steel.update(l), this._bauxite.update(c), this._repairKit.update(d), this._buildKit.update(h), this._devKit.update(f), this._otherItem.update(y), this._exampleFleetShadow.update(s), this._difficulty.update(n), this._textDeckNumText.text = 6 == a ? "\u96bb\u9060\u5f81" : "\u96bb\u4ee5\u4e0a", this._iconDamage.visible = !1, 0 < r && (this._iconDamage.visible = !0), this._textDispNo.text = e, this._textTime.text = p.minuteToFormatHHMM(o), this._textName.text = i, this._textDeckNum.text = "" + a, this._iconDamage.position.x = this._textName.position.x + this._textName.width - 12, this._monthly = m, this._expedition_mst_id = t
            }, e.prototype.updateMember = function (t, e, i, n) {
                this._expeditionStateIcon.update(h.ExpeditionState.NONE), this._expeditionStateIcon.visible = !1, this._iconDeck.visible = !1, this._iconNew.visible = !1, this._iconClear.visible = !1, this._grayOut.visible = !1, this._textNameGradMask.texture = o.SALLY_EXPEDITION.getTexture(96), e ? (this._iconDeck.update([e, 0]), this._expeditionStateIcon.update(h.ExpeditionState.EXPEDITION), this._expeditionStateIcon.visible = !0, this._iconDeck.visible = !0) : 2 == t ? (this._monthly && (this._expeditionStateIcon.update(h.ExpeditionState.COMPLETE_MONTHLY), this._expeditionStateIcon.visible = !0, this._grayOut.visible = !0, this._textNameGradMask.texture = o.SALLY_EXPEDITION.getTexture(94)), this._iconClear.visible = !0) : (0 == t && (this._iconNew.visible = !0), this._monthly && n && (this._expeditionStateIcon.update(h.ExpeditionState.TIME_OVER_MONTHLY), this._expeditionStateIcon.visible = !0, this._grayOut.visible = !0, this._textNameGradMask.texture = o.SALLY_EXPEDITION.getTexture(94))), null != i && this._difficultyBG.update(i)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._hitArea.removeAllListeners(_.EventType.CLICK), this._hitArea.removeAllListeners(_.EventType.MOUSEOVER), this._hitArea.removeAllListeners(_.EventType.MOUSEOUT), this._focus.texture = PIXI.Texture.EMPTY, this._difficulty.dispose(), this._iconDamage.texture = PIXI.Texture.EMPTY, this._iconDeck.dispose(), this._iconClear.texture = PIXI.Texture.EMPTY, this._iconNew.texture = PIXI.Texture.EMPTY, this._fuel.dispose(), this._steel.dispose(), this._ammo.dispose(), this._bauxite.dispose(), this._repairKit.dispose(), this._devKit.dispose(), this._buildKit.dispose(), this._otherItem.dispose(), this._exampleFleetShadow.dispose(), this._grayOut.texture = PIXI.Texture.EMPTY, this.onClick = null, this._textTime = null, this._textName = null, this._textDeckNum = null, this._textDeckNumText = null, this._textNameGradMask = null, this._textDispNo = null, this._hitArea = null, this._focus = null, this._difficulty = null, this._iconDamage = null, this._expeditionStateIcon = null, this._iconDeck = null, this._iconClear = null, this._iconNew = null, this._fuel = null, this._steel = null, this._ammo = null, this._bauxite = null, this._repairKit = null, this._devKit = null, this._buildKit = null, this._otherItem = null, this._exampleFleetShadow = null, this._grayOut = null, this._onClick = null, this._onOver = null, this._onOut = null
            }, e.prototype.genEntryDeckAnimation = function (t) {
                var e = this;
                return a.$_$.Sequence(function () {
                    return a.$_$.Call(function () {
                        e._iconDeck.update([t, 0]), e._iconDeck.alpha = 0, e._iconDeck.scale.set(1.5, 1.5), e._iconDeck.visible = !0, e._iconClear.visible = !1, e._iconNew.visible = !1
                    })
                }, function () {
                    return a.$_$.Parallel(function () {
                        return a.$_$.Value(e._iconDeck, {
                            alpha: 1
                        }, 400)
                    }, function () {
                        return a.$_$.Value(e._iconDeck.scale, {
                            x: .75,
                            y: .75
                        }, 400)
                    })
                }, function () {
                    return a.$_$.Delay(100)
                }, function () {
                    return a.$_$.Call(function () {
                        var t = [1, 0, 0, .5, 0, 1, 0, .5, 0, 0, 1, .5, 0, 0, 0, 1],
                            i = new PIXI.filters.ColorMatrixFilter;
                        i.matrix = t, e._iconDeck.filters = [i]
                    })
                }, function () {
                    return a.$_$.Delay(100)
                }, function () {
                    return a.$_$.Call(function () {
                        e._iconDeck.filters = null
                    })
                })
            }, e
        }(PIXI.Container);
    e.ExpeditionListItem = f;
    var y = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(e.on)),
                    r = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(e.off));
                return r.anchor.set(.5, .5), n.anchor.set(.5, .5), i.addChild(r, n), i._iconOn = n, i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._iconOn.texture = PIXI.Texture.EMPTY, this._iconOn = null
            }, e.prototype.update = function (t) {
                this._iconOn.visible = !1, t && (this._iconOn.visible = !0)
            }, e
        }(PIXI.Container),
        m = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(116));
                n.anchor.set(.5, 0);
                var r = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(e.on));
                r.anchor.set(.5, .5), r.scale.set(.8, .8);
                var s = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(e.off));
                s.anchor.set(.5, .5), s.scale.set(.8, .8), s.position.y = r.position.y = 16;
                var a = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(66));
                a.x = .5 * -a.width, a.y = 26;
                for (var _ = a.x, u = new Array, l = 0; l < 4; l++) {
                    var c = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(65));
                    c.position.x = _, c.position.y = a.y, u.push(c), _ = c.position.x + c.width + 1
                }
                return i.addChild(n), i.addChild(s), i.addChild(r), i.addChild(a), u.forEach(function (t) {
                    i.addChild(t)
                }), i._dots = u, i._iconOn = r, i._triangle = n, i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._dots.forEach(function (t) {
                    return t.texture = PIXI.Texture.EMPTY
                }), this._iconOn.texture = PIXI.Texture.EMPTY, this._triangle.texture = PIXI.Texture.EMPTY, this._dots = null, this._iconOn = null, this._triangle = null
            }, e.prototype.update = function (t) {
                this._iconOn.visible = !1, this._triangle.visible = !1, 0 < t && (this._iconOn.visible = !0, this._triangle.visible = !0);
                for (var e = 0; e < this._dots.length; e++) {
                    var i = this._dots[e];
                    i.visible = !1, e < t && (i.visible = !0)
                }
            }, e
        }(PIXI.Container),
        g = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                return i.anchor.set(.5, .5), e.addChild(i), e._textDiff = i, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._textDiff.texture = PIXI.Texture.EMPTY, this._textDiff = null
            }, e.prototype.update = function (t) {
                var e = this._difficultyToResourceID(t);
                this._textDiff.texture = o.SALLY_EXPEDITION.getTexture(e), this._textDiff.position.set(0, 0), 35 == e && this._textDiff.position.set(2, 0)
            }, e.prototype._difficultyToResourceID = function (t) {
                switch (t) {
                    case 0:
                        throw new Error("UNSUPPORT VALUE");
                    case 1:
                        return 33;
                    case 2:
                        return 32;
                    case 3:
                        return 31;
                    case 4:
                        return 30;
                    case 5:
                        return 29;
                    case 6:
                    case 7:
                    case 8:
                        return 34
                }
                if (9 <= t) return 35
            }, e
        }(PIXI.Container),
        v = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                return e.addChild(i), e._bg = i, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._bg.texture = PIXI.Texture.EMPTY, this._bg = null
            }, e.prototype.update = function (t) {
                switch (this._bg.y = 0, this._bg.texture = PIXI.Texture.EMPTY, t) {
                    case h.ListType.HEADER:
                        this._bg.texture = o.SALLY_EXPEDITION.getTexture(16), this._bg.y = -9;
                        break;
                    case h.ListType.CENTER:
                        this._bg.texture = o.SALLY_EXPEDITION.getTexture(15), this._bg.y = -2;
                        break;
                    case h.ListType.FOOTER:
                        this._bg.texture = o.SALLY_EXPEDITION.getTexture(17), this._bg.y = -1
                }
            }, e
        }(PIXI.Container),
        b = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                return e.addChild(i), e._image = i, e._viewState = h.ExpeditionState.NONE, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "viewState", {
                get: function () {
                    return this._viewState
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.update = function (t) {
                switch (this._image.texture = PIXI.Texture.EMPTY, this._viewState = t, t) {
                    case h.ExpeditionState.EXPEDITION:
                        this._image.texture = o.SALLY_EXPEDITION.getTexture(118);
                        break;
                    case h.ExpeditionState.COMPLETE_MONTHLY:
                        this._image.texture = o.SALLY_EXPEDITION.getTexture(117);
                        break;
                    case h.ExpeditionState.TIME_OVER_MONTHLY:
                        this._image.texture = o.SALLY_EXPEDITION.getTexture(119);
                        break;
                    default:
                        this._viewState = h.ExpeditionState.NONE
                }
            }, e
        }(PIXI.Container)
}