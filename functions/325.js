const function325 = function (t, e, i) {
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
    var o = i(0),
        r = i(28),
        s = i(215),
        a = i(112),
        _ = i(70),
        l = i(83),
        u = i(4),
        c = i(287),
        h = i(197),
        p = i(37),
        d = i(21),
        f = i(10),
        y = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite,
                    n = new PIXI.Sprite,
                    o = new PIXI.Sprite,
                    r = new PIXI.Sprite,
                    p = new h.BannerSmoke,
                    f = new c.BannerKirakira,
                    y = new a.HpGaugeView,
                    m = new l.StarRateView,
                    g = new u.TextBox(27, 16777215),
                    v = new u.TextBox(30, 16777215),
                    b = new s.DeckIndexEmblem,
                    w = new PIXI.Sprite(d.COMMON_MAIN.getTexture(18)),
                    x = new _.RingSmall;
                o.x = 12, o.y = 6, x.initialize(), x.activate(), x.position.set(215, 33), y.position.set(14, 42), m.position.set(122, 39), v.anchor.x = 1, b.position.set(15, 18), w.position.set(251, 6), v.position.set(212, 2);
                var I = new PIXI.Graphics;
                I.beginFill(0, 0), I.drawRect(0, 0, 105, 36), I.endFill();
                var T = new PIXI.Container;
                T.position.set(9, 5), T.mask = I, T.addChild(g, I), w.addChild(T, v, y, m), p.visible = !1;
                var O = new PIXI.Container;
                return O.width = 240, O.height = 60, O.addChild(p, f), e.addChild(i, o, n, O, w, r, b, x), e.shipBanner = i, e.burned = n, e.state = o, e.tired = r, e.smoke = p, e.textLevel = v, e.textName = g, e.starRateView = m, e.hpGaugeView = y, e.kirakira = f, e.ring = x, e.hitArea = new PIXI.Rectangle(0, 0, 240, 60), e.containerName = T, e.containerEffect = O, e.deckIndexEmblem = b, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.containerName.cacheAsBitmap = !1, this.containerName.removeChildren(), this.containerEffect.removeChildren(), this.hpGaugeView.dispose(), this.starRateView.dispose(), this.smoke.dispose(), this.kirakira.dispose(), this.ring.dispose(), this.textLevel.destroy(), this.textName.destroy(), this.containerName.mask = null, this.containerName = null, this.containerEffect = null, this.shipBanner = null, this.hpGaugeView = null, this.starRateView = null, this.deckIndexEmblem = null, this.textLevel = null, this.textName = null, this.burned = null, this.state = null, this.tired = null, this.smoke = null, this.kirakira = null, this.ring = null, this.removeChildren()
            }, e.prototype._updateName_ = function (t, e) {
                this.containerName.cacheAsBitmap = !1, this.textName.text = t;
                var i = 16777215;
                e && (i = 16766947), this.textName.style.fill = i, this.containerName.cacheAsBitmap = !0
            }, e.prototype._updateRing_ = function (t) {
                this.ring.visible = !1, t && (this.ring.visible = !0)
            }, e.prototype.update = function (t, e, i) {
                var n = e.isRepair(),
                    o = r.ShipUtil.getDamageType(e.hpNow, e.hpMax),
                    s = e.isMarriage();
                this.hpGaugeView.update(e.hpNow, e.hpMax), this.starRateView.update(e.starNum), this.textLevel.text = e.level.toString(), this._updateTexture_(e.mstID, e.isDamaged()), this._updateName_(e.name, s), this._updateRing_(s), this._updateStatus_(n, i, o), this._updateBurned_(o), this._updateTired_(e.tired), this.deckIndexEmblem.update(t)
            }, e.prototype._updateStatus_ = function (t, e, i) {
                if (this.smoke.stop(), t) this.updateState(5);
                else if (e) this.updateState(4);
                else switch (this.smoke.play(i), i) {
                    case 75:
                        this.updateState(1);
                        break;
                    case 50:
                        this.updateState(2);
                        break;
                    case 25:
                        this.updateState(3);
                        break;
                    default:
                        this.updateState(0)
                }
            }, e.prototype._updateTexture_ = function (t, e) {
                p.TaskLoadShipResource.abortBy(this.shipBanner), 1 == o.default.resources.isLoadedShip(t, e, "supply_character") ? this.shipBanner.texture = o.default.resources.getShip(t, e, "supply_character") : (this.shipBanner.texture = PIXI.Texture.EMPTY, new p.TaskLoadShipResource("supply_character", this.shipBanner, t, e).start())
            }, e.prototype._updateBurned_ = function (t) {
                switch (t) {
                    case 75:
                        this.burned.texture = f.COMMON_MISC.getTexture(97);
                        break;
                    case 50:
                        this.burned.texture = f.COMMON_MISC.getTexture(96);
                        break;
                    case 25:
                        this.burned.texture = f.COMMON_MISC.getTexture(98);
                        break;
                    default:
                        this.burned.texture = PIXI.Texture.EMPTY
                }
            }, e.prototype.updateState = function (t) {
                switch (t) {
                    case 0:
                        this.state.texture = PIXI.Texture.EMPTY;
                        break;
                    case 1:
                        this.state.texture = f.COMMON_MISC.getTexture(105);
                        break;
                    case 2:
                        this.state.texture = f.COMMON_MISC.getTexture(99);
                        break;
                    case 3:
                        this.state.texture = f.COMMON_MISC.getTexture(109);
                        break;
                    case 4:
                        this.state.texture = f.COMMON_MISC.getTexture(100);
                        break;
                    case 5:
                        this.state.texture = f.COMMON_MISC.getTexture(108)
                }
            }, e.prototype._updateTired_ = function (t) {
                if (this.tired.removeChildren(), t < 20) {
                    var e = new PIXI.Sprite(f.COMMON_MISC.getTexture(36)),
                        i = new PIXI.Sprite(f.COMMON_MISC.getTexture(113));
                    i.x = Math.floor(e.width - i.width / 2), i.y = Math.floor(e.height / 2 - i.height / 2), e.x = 240 - e.texture.width + 11, e.y = 5, e.addChild(i), this.tired.addChild(e)
                } else if (t < 30) {
                    var e = new PIXI.Sprite(f.COMMON_MISC.getTexture(35)),
                        i = new PIXI.Sprite(f.COMMON_MISC.getTexture(112));
                    i.x = Math.floor(e.width - i.width / 2), i.y = Math.floor(e.height / 2 - i.height / 2), e.x = 240 - e.texture.width + 11, e.y = 5, e.addChild(i), this.tired.addChild(e)
                }
                t >= 50 ? this.kirakira.play() : this.kirakira.stop()
            }, e
        }(PIXI.Container);
    e.LongShipBanner = y
}