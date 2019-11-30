const function257 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(20),
        a = i(12),
        _ = i(8),
        l = i(13),
        u = i(23),
        c = i(6),
        h = i(1359),
        p = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                if (o.ship_mstid = e, o.ship_damaged = i, o.slot_mstids = [0, 0, 0], null != n)
                    for (var r = 0; r < n.length && !(r >= o.slot_mstids.length); r++) o.slot_mstids[r] = n[r];
                return o.slotName1 = new d, o.slotName2 = new d, o.slotName3 = new d, o
            }
            return n(e, t), e.prototype.preload = function (t) {
                this.loadShipImage(t)
            }, e.prototype.loadShipImage = function (t) {
                var e = this,
                    i = new l.ShipLoader;
                i.add(this.ship_mstid, this.ship_damaged, "full"), i.load(function () {
                    e.loadSlotTextImage(t)
                })
            }, e.prototype.loadSlotTextImage = function (t) {
                for (var e = new u.SlotLoader, i = 0, n = this.slot_mstids; i < n.length; i++) {
                    var o = n[i];
                    o > 0 && e.add(o, "btxt_flat")
                }
                e.load(function () {
                    t()
                })
            }, e.prototype.init = function () {
                this.bg = new f(h.BATTLE_CUTIN_ANTI_AIR.getTexture(4)), this.bg.initialize(), this.bg.alpha = 0, this.addChild(this.bg);
                var t = r.default.resources.getShip(this.ship_mstid, this.ship_damaged, "full"),
                    e = r.default.model.ship_graph.get(this.ship_mstid).getBattleOffset(this.ship_damaged);
                this.ship = new PIXI.Sprite(t), this.ship.position.set(e.x - 118 - 450, e.y - 140), this.ship.alpha = 0, this.addChild(this.ship), this.slot_mstids[2] > 0 && (this.slotName3.position.set(0, 330), this.slotName3.init(r.default.resources.getSlotitem(this.slot_mstids[2], "btxt_flat")), this.addChild(this.slotName3)), this.slot_mstids[1] > 0 && (this.slotName2.position.set(0, 450), this.slotName2.init(r.default.resources.getSlotitem(this.slot_mstids[1], "btxt_flat")), this.addChild(this.slotName2)), this.slot_mstids[0] > 0 && (this.slotName1.position.set(0, 570), this.slotName1.init(r.default.resources.getSlotitem(this.slot_mstids[0], "btxt_flat")), this.addChild(this.slotName1));
                var i = [5, 6, 7, 8, 9];
                this.text = [];
                for (var n = 0; n < 5; n++) {
                    var o = h.BATTLE_CUTIN_ANTI_AIR.getTexture(i[n]),
                        s = new a.Sprite(o);
                    s.position.set(375 + 120 * n, 300), s.anchor.set(.5), s.alpha = 0, s.scale.set(2.2), this.text.push(s), this.addChild(this.text[n])
                }
                this.text_f = [];
                for (var n = 0; n < 5; n++) {
                    var o = h.BATTLE_CUTIN_ANTI_AIR.getTexture(i[n]),
                        s = new a.Sprite(o);
                    s.position.set(375 + 120 * n, 300), s.anchor.set(.5), s.alpha = 0, this.text_f.push(s), this.addChild(this.text_f[n])
                }
                this.white = new _.AreaBox(1, 16777215), this.white.alpha = 0, this.addChild(this.white)
            }, e.prototype.play = function (t) {
                this._createTask().start(t)
            }, e.prototype._createTask = function () {
                var t, e = this,
                    i = new s.TweenTask;
                t = createjs.Tween.get(this.bg).call(function () {
                    e.bg.activate()
                }).to({
                    alpha: 1
                }, 500).wait(2e3).to({
                    alpha: 0
                }, 500).call(function () {
                    e.bg.deactivate()
                }), t.ignoreGlobalPause = !0, i.addTween(t);
                for (var n = 0; n < this.text.length; n++) t = createjs.Tween.get(this.text[n]).wait(400 + 100 * n).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 400).call(function () {
                    c.SE.play("118")
                }).wait(250).to({
                    alpha: 0,
                    scaleX: 2.2,
                    scaleY: 2.2
                }, 400), t.ignoreGlobalPause = !0, i.addTween(t);
                for (var n = 0; n < this.text_f.length; n++) t = createjs.Tween.get(this.text_f[n]).wait(800 + 100 * n).to({
                    alpha: 1
                }, 1).to({
                    alpha: 0,
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 200), t.ignoreGlobalPause = !0, i.addTween(t);
                var o = r.default.model.ship_graph.get(this.ship_mstid).getBattleOffset(this.ship_damaged);
                if (t = createjs.Tween.get(this.ship).wait(700).to({
                        x: o.x - 118,
                        y: o.y - 140,
                        alpha: 1
                    }, 400).call(function () {
                        r.default.sound.voice.playAtRandom(e.ship_mstid.toString(), [15, 17], [50, 50])
                    }).wait(400).call(c.SE.play, ["116"]).wait(100).call(c.SE.play, ["102"]).wait(300).to({
                        x: o.x - 118 + 210,
                        alpha: 0
                    }, 400), t.ignoreGlobalPause = !0, i.addTween(t), this.slot_mstids[0] > 0) {
                    i.addTweens(this.slotName1.createTweens(1150));
                    var a = this._createExplosion(753, 593, -30);
                    this.addChild(a), i.addTweens(a.createTweens(1300))
                }
                if (this.slot_mstids[1] > 0) {
                    i.addTweens(this.slotName2.createTweens(1200));
                    var a = this._createExplosion(753, 488, -50);
                    this.addChild(a), i.addTweens(a.createTweens(1400))
                }
                if (this.slot_mstids[2] > 0) {
                    i.addTweens(this.slotName3.createTweens(1250));
                    var a = this._createExplosion(753, 383, -70);
                    this.addChild(a), i.addTweens(a.createTweens(1500))
                }
                return t = createjs.Tween.get(this.white).wait(1300).to({
                    alpha: 1
                }, 0).to({
                    alpha: 0
                }, 100).to({
                    alpha: 1
                }, 0).to({
                    alpha: 0
                }, 100).to({
                    alpha: 1
                }, 0).to({
                    alpha: 0
                }, 100), t.ignoreGlobalPause = !0, i.addTween(t), i
            }, e.prototype._createExplosion = function (t, e, i) {
                var n = new m;
                return n.initialize(), n.x = t, n.y = e, n.rotation = i / 180 * Math.PI, n
            }, e
        }(PIXI.Container);
    e.CutinAntiAircraft = p;
    var d = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.init = function (t) {
                this.name_txt = new PIXI.Sprite(t), this.name_txt.position.set(1180, 50), this.name_txt.anchor.set(1, .5), this.name_txt.scale.set(.8), this.name_txt.alpha = 0, this.line = new PIXI.Sprite(h.BATTLE_CUTIN_ANTI_AIR.getTexture(1)), this.line.position.set(1200, 0), this.addChild(this.line), this.addChild(this.name_txt)
            }, e.prototype.createTweens = function (t) {
                var e, i = [];
                return e = createjs.Tween.get(this.line).wait(t).to({
                    x: 0
                }, 200).to({
                    alpha: 0
                }, 200), e.ignoreGlobalPause = !0, i.push(e), e = createjs.Tween.get(this.name_txt).wait(t + 200).to({
                    alpha: 1
                }, 50).wait(500).to({
                    alpha: 0
                }, 200), e.ignoreGlobalPause = !0, i.push(e), i
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                i._clouds = [];
                for (var n = 0; n < 3; n++) {
                    var o = new y;
                    i.addChild(o), i._clouds.push(o)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._clouds; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._clouds; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._clouds; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e
        }(PIXI.Sprite),
        y = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.alpha = 0, e.x = Math.random() * (o.default.width - 100) + 50, e.y = Math.random() * (o.default.height - 100) + 50, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.anchor.set(.5), this.texture = h.BATTLE_CUTIN_ANTI_AIR.getTexture(0)
            }, e.prototype.activate = function () {
                if (null == this._aTween) {
                    var t = 1e3 * Math.random() + 500;
                    this._aTween = createjs.Tween.get(this, {
                        loop: !0
                    }).to({
                        alpha: 1
                    }, t).to({
                        alpha: 1
                    }, t)
                }
                if (null == this._rTween) {
                    var e = (Math.random() > .5 ? 1 : -1) * Math.PI * 2,
                        t = 2400 * Math.random() + 2400;
                    this._rTween = createjs.Tween.get(this, {
                        loop: !0
                    }).to({
                        rotation: e
                    }, t)
                }
            }, e.prototype.deactivate = function () {
                null != this._aTween && (this._aTween.setPaused(!0), this._aTween = null), null != this._rTween && (this._rTween.setPaused(!0), this._rTween = null)
            }, e
        }(PIXI.Sprite),
        m = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img1 = new a.Sprite, e._img1.anchor.set(.45, .85), e._img1.scale.set(0), e.addChild(e._img1), e._img2 = new a.Sprite, e._img2.anchor.set(.45, .85), e._img2.alpha = 0, e.addChild(e._img2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img1.texture = h.BATTLE_CUTIN_ANTI_AIR.getTexture(2), this._img2.texture = h.BATTLE_CUTIN_ANTI_AIR.getTexture(3)
            }, e.prototype.createTweens = function (t) {
                var e = [],
                    i = createjs.Tween.get(this._img1).wait(t).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 400).to({
                        scaleX: 1.15,
                        scaleY: 1.15,
                        alpha: 0
                    }, 300);
                return i.ignoreGlobalPause = !0, e.push(i), i = createjs.Tween.get(this._img2).wait(t + 400).to({
                    alpha: 1
                }, 200).to({
                    scaleX: 1.3,
                    scaleY: 1.3,
                    alpha: 0
                }, 500), i.ignoreGlobalPause = !0, e.push(i), e
            }, e
        }(PIXI.Container)
}