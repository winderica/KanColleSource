const function845 = function (t, e, i) {
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
    var o = i(3),
        r = i(3),
        s = i(222),
        a = i(4),
        _ = i(34),
        l = i(22),
        u = i(113),
        c = i(1),
        h = i(14),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._state = !1, e._onClick = function () {
                    e._state = e.hiSpeedToggle.state, e.onClick()
                };
                var i = new PIXI.Sprite(r.COMMON_MAIN.getTexture(12)),
                    n = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(12)),
                    l = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(46)),
                    c = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(45)),
                    p = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(43)),
                    y = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(44)),
                    m = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(42)),
                    v = new d,
                    g = new f,
                    b = new s.RepairHpGaugeView,
                    w = new _.ShipBanner,
                    x = new a.TextBox(26, 5523516),
                    I = new a.TextBox(19, 5523516),
                    T = new a.TextBox(24, 5523516),
                    O = new a.TextBox(24, 5523516),
                    P = new a.TextBox(15, 12467003),
                    C = new a.TextBox(24, 5523516),
                    k = new u.DownArrowAnimationView,
                    M = new u.DisableDownArrowAnimationView,
                    S = new PIXI.Container,
                    A = new PIXI.Sprite(o.COMMON_MAIN.getTexture(64));
                A.position.set(0, -34);
                var j = new PIXI.Sprite(o.COMMON_MAIN.getTexture(1));
                j.anchor.y = .5, j.position.set(22, 20), A.addChild(j), S.addChild(A), g.onClick = e._onClick, n.position.set(31, 31), l.position.set(15, 226), c.position.set(15, 280), p.position.set(15, 336), y.position.set(15, 390), v.position.set(178, 275), x.position.set(304, 42), m.position.set(229, 49), I.position.set(301, 151), T.position.set(318, 333), O.position.set(318, 389), P.position.set(40, 447), g.position.set(40, 477), b.position.set(61, 177), C.position.set(318, 225), w.position.set(60, 85), k.position.set(156, 441), M.position.set(156, 441), I.anchor.x = 1, x.anchor.x = 1;
                var E = new PIXI.Container,
                    N = new a.TextBox(30, 5523516);
                E.position.set(57, 37);
                var L = h.CreateRect.gradientLeftToRight(170, 42, .5, .98);
                return E.mask = L, E.addChild(N, L), T.anchor.x = 1, O.anchor.x = 1, C.anchor.x = 1, i.interactive = !0, e.addChild(i, n, l, c, p, y, P, g, m, E, x, I, b, v, T, O, C, S, w, M, k), e.textName = N, e.textLevel = x, e.textHp = I, e.textSteel = T, e.textFuel = O, e.textAlert = P, e.hiSpeedToggle = v, e.startButton = g, e.textRequire = C, e.shipBanner = w, e.downArrowAnimationView = k, e.disableDownArrowAnimationView = M, e.hpGaugeView = b, e.headerContainer = S, e.containerName = E, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "state", {
                get: function () {
                    return this._state
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.update = function (t, e, i, n, o, r) {
                this.containerName.cacheAsBitmap = !1, this.textName.text = t.name, this.textLevel.text = t.level.toString(), this.textHp.text = t.hpNow + "/" + t.hpMax, this.textSteel.text = t.getRepairSteel().toString(), this.textFuel.text = t.getRepairFuel().toString(), this.textRequire.text = l.MathUtil.timeToString(t.getRepairTime()), this.shipBanner.update(t, n), this.hpGaugeView.update(t.hpNow, t.hpMax), this.textAlert.visible = !1;
                var s = r;
                this.hiSpeedToggle.update(s);
                var a = t.hpNow < t.hpMax;
                this.disableDownArrowAnimationView.visible = !1, this.downArrowAnimationView.visible = !1;
                var _ = i && e && 0 == n && a && 0 == o;
                _ ? this.downArrowAnimationView.visible = !0 : 0 == (i && e) ? (this.textAlert.text = "\u4fee\u5fa9\u306b\u5fc5\u8981\u306a\u8cc7\u6750\u304c\u8db3\u308a\u307e\u305b\u3093\uff01", this.textAlert.visible = !0) : this.disableDownArrowAnimationView.visible = !0, this.startButton.update(_), this.containerName.cacheAsBitmap = !0
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.containerName.cacheAsBitmap = !1, this.containerName.mask = null, this.containerName.removeChildren(), this.hiSpeedToggle.dispose(), this.startButton.dispose(), this.shipBanner.dispose(), this.downArrowAnimationView.dispose(), this.hpGaugeView.dispose(), this.textName.destroy(), this.textLevel.destroy(), this.textHp.destroy(), this.textSteel.destroy(), this.textFuel.destroy(), this.textAlert.destroy(), this.textRequire.destroy(), this.onClick = null, this.textName = null, this.textLevel = null, this.textHp = null, this.textRequire = null, this.textSteel = null, this.textFuel = null, this.textAlert = null, this.hiSpeedToggle = null, this.startButton = null, this.shipBanner = null, this.downArrowAnimationView = null, this.hpGaugeView = null, this.containerName = null
            }, e
        }(PIXI.Container);
    e.RepairShipConfigView = p;
    var d = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._state = !1, e.animationParams = {
                    progress: 0
                }, e._onClick = function () {
                    null != e.tween && e.tween.setPaused(!0), e.tween = null;
                    var t = 0;
                    switch (e._state) {
                        case !1:
                            e._state = !0, t = 0;
                            break;
                        case !0:
                            e._state = !1, t = 1
                    }
                    var i = createjs.Tween.get(e.animationParams);
                    i.to({
                        progress: t
                    }, 300).on("change", function () {
                        .5 < e.animationParams.progress ? e.background_on.visible = !1 : e.background_on.visible = !0, e.toggle.x = 3 + 103 * e.animationParams.progress
                    }), i.play(null), e.tween = i
                };
                var i = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(39)),
                    n = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(40)),
                    r = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(41));
                return n.addListener(c.EventType.CLICK, e._onClick), i.position.set(106, 0), e.addChild(n, r, i), e.background_off = n, e.background_on = r, e.toggle = i, e.update(!0), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "state", {
                get: function () {
                    return this._state
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.update = function (t) {
                null != this.tween && this.tween.setPaused(!0), this.tween = null, this._state = !1, this.toggle.position.set(106, 0), this.background_off.interactive = this.background_off.buttonMode = !!t, this.background_on.visible = !1, this.animationParams.progress = 1
            }, e.prototype.dispose = function () {
                null != this.tween && this.tween.setPaused(!0), this.removeChild(this.background_off), this.removeChild(this.background_on), this.removeChild(this.toggle), this.background_off = null, this.background_on = null, this.toggle = null, this.tween = null
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onMouseOver = function () {
                    e.texture = o.REPAIR_MAIN.getTexture(8)
                }, e._onMouseOut = function () {
                    e.texture = o.REPAIR_MAIN.getTexture(7)
                }, e._onClick = function () {
                    e.onClick()
                }, e.addListener(c.EventType.MOUSEOVER, e._onMouseOver), e.addListener(c.EventType.MOUSEOUT, e._onMouseOut), e.addListener(c.EventType.CLICK, e._onClick), e.texture = o.REPAIR_MAIN.getTexture(6), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this.interactive = this.buttonMode = !1, t ? (this.interactive = this.buttonMode = !0, this.texture = o.REPAIR_MAIN.getTexture(7)) : this.texture = o.REPAIR_MAIN.getTexture(6)
            }, e.prototype.dispose = function () {
                this.onClick = null, this.removeListener(c.EventType.MOUSEOVER, this._onMouseOver), this.removeListener(c.EventType.MOUSEOUT, this._onMouseOut), this.removeListener(c.EventType.CLICK, this._onClick)
            }, e
        }(PIXI.Sprite)
}