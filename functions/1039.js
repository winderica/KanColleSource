const function1039 = function (t, e, i) {
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
    var o = i(58),
        r = i(4),
        s = i(87),
        a = i(372),
        _ = i(1),
        u = i(0),
        l = i(15),
        c = i(370),
        h = function (t) {
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
                    n = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(94)),
                    a = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 655, 45).endFill(),
                    h = new r.TextBox(18, 4999235),
                    g = new r.TextBox(20, 3768020),
                    v = new r.TextBox(14, 4999235),
                    b = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(70));
                b.position.y = -10, b.scale.set(.75, .75);
                var w = new c.FleetShadow;
                w.scale.set(.5, .5), w.position.set(640, 36), a.interactive = !0, a.buttonMode = !0, a.addListener(_.EventType.CLICK, e._onClick), a.addListener(_.EventType.MOUSEOVER, e._onOver), a.addListener(_.EventType.MOUSEOUT, e._onOut);
                var x = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(93));
                x.alpha = 0;
                var I = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(64)),
                    T = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(82)),
                    O = new s.ShipInDeckFlag;
                I.anchor.set(.5, .5), I.position.set(23, .5 * i.height), T.anchor.set(.5, .5), T.position.set(23, .5 * i.height), O.anchor.set(.5, .5), O.position.set(23, .5 * i.height), O.scale.set(.75, .75);
                var C = new r.TextBox(12, 4999235);
                C.position.set(43, .5 * i.height), C.anchor.set(0, .5);
                var P = new f;
                P.position.set(80, .5 * i.height);
                var k = new y;
                k.position.set(67, 0);
                var S = new r.TextBox(16, 4999235);
                S.position.set(95, Math.floor(.5 * i.height)), S.anchor.set(0, .5);
                var M = new d({
                        on: 73,
                        off: 74
                    }),
                    A = new d({
                        on: 75,
                        off: 76
                    }),
                    E = new d({
                        on: 77,
                        off: 78
                    }),
                    j = new d({
                        on: 79,
                        off: 80
                    });
                M.y = A.y = E.y = j.y = 4, M.x = 337, E.x = M.x + M.width + 2, A.x = E.x + E.width + 2, j.x = A.x + A.width + 2;
                var N = new p({
                        on: 83,
                        off: 84
                    }),
                    L = new p({
                        on: 85,
                        off: 86
                    }),
                    B = new p({
                        on: 87,
                        off: 88
                    }),
                    R = new p({
                        on: 89,
                        off: 90
                    });
                N.position.set(428, 12), L.position.set(448, 12), B.position.set(428, 32), R.position.set(448, 32), N.scale.set(.8, .8), L.scale.set(.8, .8), B.scale.set(.8, .8), R.scale.set(.8, .8), h.position.set(645, .5 * i.height), h.anchor.set(1, .5), h.style.fontStyle = "", g.style.fill = 3768020, g.style.fontSize = 20, g.position.set(475, Math.floor(.5 * i.height)), g.anchor.set(1, .5), v.position.set(g.position.x, Math.floor(.5 * i.height)), v.anchor.set(0, .5);
                var D = new m;
                return D.position.set(524, 10), e.addChild(i), e.addChild(n), e.addChild(x), e.addChild(I, T, O), e.addChild(C, S, h, g, v, b), e.addChild(k, P), e.addChild(M, A, E, j), e.addChild(N, L, B, R), e.addChild(w), e.addChild(D), e.addChild(a), e._textDispNo = C, e._textTime = h, e._textName = S, e._textDeckNumText = v, e._hitArea = a, e._focus = x, e._textDeckNum = g, e._exampleFleetShadow = w, e._difficulty = P, e._iconDamage = b, e._expeditionStateIcon = D, e._iconDeck = O, e._iconClear = I, e._iconNew = T, e._difficultyBG = k, e._fuel = M, e._steel = E, e._ammo = A, e._bauxite = j, e._repairKit = N, e._devKit = L, e._buildKit = B, e._otherItem = R, e._grayOut = n, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "expedition_mst_id", {
                get: function () {
                    return this._expedition_mst_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._focusOver = function () {
                this._focus.alpha = 1
            }, e.prototype._focusOut = function () {
                this._focus.alpha = 0
            }, e.prototype.updateMaster = function (t, e, i, n, o, r, s, a, _, u, l, c, h, p, d, f, y) {
                this._expedition_mst_id = t, this._textName.text = i, this._iconDamage.visible = !1, 0 < r && (this._iconDamage.visible = !0), this._fuel.update(_), this._ammo.update(u), this._steel.update(l), this._bauxite.update(c), this._repairKit.update(p), this._buildKit.update(h), this._devKit.update(d), this._otherItem.update(f), this._textTime.text = this._timeToFormat(o), this._iconDamage.position.x = this._textName.position.x + this._textName.width - 12, this._textDispNo.text = e, this._textDeckNum.text = "" + a, this._textDeckNumText.text = 6 == a ? "\u96bb\u9060\u5f81" : "\u96bb\u4ee5\u4e0a", this._exampleFleetShadow.update(s), this._difficulty.update(n), this._monthly = y
            }, e.prototype.updateMember = function (t, e, i) {
                this._expeditionStateIcon.visible = !1, this._iconDeck.visible = !1, this._iconNew.visible = !1, this._iconClear.visible = !1, e ? (this._iconDeck.update([e, 0]), this._expeditionStateIcon.update(m.EXPEDITION), this._expeditionStateIcon.visible = !0, this._iconDeck.visible = !0) : 2 == t ? (this._monthly && (this._expeditionStateIcon.update(m.COMPLETE_MONTHLY), this._expeditionStateIcon.visible = !0), this._iconClear.visible = !0) : 0 == t && (this._iconNew.visible = !0), null != i && this._difficultyBG.update(i), this._grayOut.visible = !1, this._monthly && 2 == t && (this._grayOut.visible = !0)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._hitArea.removeAllListeners(_.EventType.CLICK), this._hitArea.removeAllListeners(_.EventType.MOUSEOVER), this._hitArea.removeAllListeners(_.EventType.MOUSEOUT), this._focus.texture = PIXI.Texture.EMPTY, this._difficulty.dispose(), this._iconDamage.texture = PIXI.Texture.EMPTY, this._iconDeck.dispose(), this._iconClear.texture = PIXI.Texture.EMPTY, this._iconNew.texture = PIXI.Texture.EMPTY, this._fuel.dispose(), this._steel.dispose(), this._ammo.dispose(), this._bauxite.dispose(), this._repairKit.dispose(), this._devKit.dispose(), this._buildKit.dispose(), this._otherItem.dispose(), this.onClick = null, this._textTime = null, this._textName = null, this._textDeckNum = null, this._textDeckNumText = null, this._textDispNo = null, this._hitArea = null, this._focus = null, this._difficulty = null, this._iconDamage = null, this._expeditionStateIcon = null, this._iconDeck = null, this._iconClear = null, this._iconNew = null, this._fuel = null, this._steel = null, this._ammo = null, this._bauxite = null, this._repairKit = null, this._devKit = null, this._buildKit = null, this._otherItem = null
            }, e.prototype.genEntryDeckAnimation = function (t) {
                var e = this;
                return this._iconDeck.update([t, 0]), this._iconDeck.alpha = 0, this._iconDeck.scale.set(1.5, 1.5), this._iconDeck.visible = !0, this._iconClear.visible = !1, this._iconNew.visible = !1, a.$_$.Sequence(function () {
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
            }, e.prototype._timeToFormat = function (t) {
                var e = Math.floor(t / 60),
                    i = Math.floor(t % 60),
                    n = "";
                return 0 < e && (n = e + ":", i < 10 && (n += "0")), n += "" + i
            }, e
        }(PIXI.Container);
    e.ExpeditionListItem = h;
    var p = function (t) {
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
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(0)),
                    r = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(e.on)),
                    s = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(e.off));
                n.anchor.set(.5, 0), s.anchor.set(.5, .5), r.anchor.set(.5, .5), s.scale.set(.8, .8), r.scale.set(.8, .8), s.position.y = r.position.y = 20;
                var a = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(67));
                a.x = .5 * -a.width, a.y = 31;
                for (var _ = a.x, u = new Array, l = 0; l < 4; l++) {
                    var c = new PIXI.Sprite(o.SALLY_EXPEDITION.getTexture(66));
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
        f = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                return i.anchor.set(.5, .5), e.addChild(i), e._textDiff = i, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._textDiff.texture = PIXI.Texture.EMPTY, this._textDiff = null
            }, e.prototype.update = function (t) {
                var e = this._difficultyToResourceID(t);
                this._textDiff.texture = o.SALLY_EXPEDITION.getTexture(e), this._textDiff.position.set(0, 0), 36 == e && this._textDiff.position.set(2, 0)
            }, e.prototype._difficultyToResourceID = function (t) {
                switch (t) {
                    case 0:
                        throw new Error("UNSUPPORT VALUE");
                    case 1:
                        return 34;
                    case 2:
                        return 33;
                    case 3:
                        return 32;
                    case 4:
                        return 31;
                    case 5:
                        return 30;
                    case 6:
                    case 7:
                    case 8:
                        return 35
                }
                if (9 <= t) return 36
            }, e
        }(PIXI.Container),
        y = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                return e.addChild(i), e._bg = i, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this._bg.texture = PIXI.Texture.EMPTY, this._bg = null
            }, e.prototype.update = function (t) {
                switch (this._bg.y = 0, t) {
                    case 0:
                        this._bg.texture = o.SALLY_EXPEDITION.getTexture(17), this._bg.y = -9;
                        break;
                    case 1:
                        this._bg.texture = o.SALLY_EXPEDITION.getTexture(16), this._bg.y = -2;
                        break;
                    case 2:
                        this._bg.texture = o.SALLY_EXPEDITION.getTexture(18), this._bg.y = -1
                }
            }, e
        }(PIXI.Container),
        m = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                return e.addChild(i), e._image = i, e
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (this._image.texture = PIXI.Texture.EMPTY, t) {
                    case e.EXPEDITION:
                        this._image.texture = o.SALLY_EXPEDITION.getTexture(115);
                        break;
                    case e.COMPLETE_MONTHLY:
                        this._image.texture = o.SALLY_EXPEDITION.getTexture(114)
                }
            }, e.EXPEDITION = 0, e.COMPLETE_MONTHLY = 1, e
        }(PIXI.Container)
}