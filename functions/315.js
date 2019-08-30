const function315 = function (t, e, i) {
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
        s = i(685),
        a = i(70),
        _ = i(37),
        l = i(10),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n.kira = !1;
                var o = new PIXI.Sprite,
                    r = new PIXI.Sprite,
                    _ = new PIXI.Sprite,
                    l = new c,
                    u = new s.CardKirakira,
                    h = new a.RingLarge;
                return h.initialize(), h.activate(), h.position.set(263, 383), _.position.set(200, 342), n.addChild(o, r, _), l.position.x = 165, i && n.addChild(l), e && (n.addChild(u), u.visible = !1, u.play()), n.addChild(h), n.shipCard = o, n.burned = r, n.state = _, n.tired = l, n.cardKirakira = u, n.kira = e, n.ring = h, n
            }
            return n(e, t), e.prototype.dispose = function () {
                this.shipCard.texture = PIXI.Texture.EMPTY, this.burned.texture = PIXI.Texture.EMPTY, this.state.texture = PIXI.Texture.EMPTY, this.tired.dispose(), this.cardKirakira.dispose(), this.ring.dispose(), this.ring = null, this.cardKirakira = null, this.shipCard = null, this.burned = null, this.state = null, this.tired = null, this.tired = null, this.removeChildren()
            }, e.prototype.update = function (t, e) {
                this.__updateTexture__(t.mstID, t.isDamaged());
                var i = t.isRepair();
                if (this.ring.visible = !1, t.isMarriage() && (this.ring.visible = !0), i) this.__updateState__(5);
                else if (e) this.__updateState__(4);
                else {
                    var n = r.ShipUtil.getDamageType(t.hpNow, t.hpMax);
                    switch (n) {
                        case 75:
                            this.__updateState__(1);
                            break;
                        case 50:
                            this.__updateState__(2);
                            break;
                        case 25:
                            this.__updateState__(3);
                            break;
                        default:
                            this.__updateState__(0)
                    }
                }
                this.__updateTired__(t.tired)
            }, e.prototype.__updateTexture__ = function (t, e) {
                _.TaskLoadShipResource.abortBy(this.shipCard), 1 == o.default.resources.isLoadedShip(t, e, "card") ? this.shipCard.texture = o.default.resources.getShip(t, e, "card") : (this.shipCard.texture = PIXI.Texture.EMPTY, new _.TaskLoadShipResource("card", this.shipCard, t, e).start())
            }, e.prototype.__updateState__ = function (t) {
                switch (t) {
                    case 0:
                        this.state.texture = PIXI.Texture.EMPTY;
                        break;
                    case 1:
                        this.state.texture = l.COMMON_MISC.getTexture(93);
                        break;
                    case 2:
                        this.state.texture = l.COMMON_MISC.getTexture(90);
                        break;
                    case 3:
                        this.state.texture = l.COMMON_MISC.getTexture(95);
                        break;
                    case 4:
                        this.state.texture = l.COMMON_MISC.getTexture(91);
                        break;
                    case 5:
                        this.state.texture = l.COMMON_MISC.getTexture(94)
                }
            }, e.prototype.__updateTired__ = function (t) {
                this.tired.updateTired(t), this.cardKirakira.visible = !1, t >= 50 && this.kira && (this.cardKirakira.visible = !0)
            }, e
        }(PIXI.Container);
    e.ShipCard = u;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = new PIXI.Sprite,
                n = new PIXI.Sprite;
            return n.position.set(152, 212), e.bg = i, e.face = n, e
        }
        return n(e, t), e.prototype.updateTired = function (t) {
            this.removeChildren(), this.bg.texture = PIXI.Texture.EMPTY, this.face.texture = PIXI.Texture.EMPTY, t < 20 ? (this.bg.texture = l.COMMON_MISC.getTexture(34), this.face.texture = l.COMMON_MISC.getTexture(113)) : t < 30 && (this.bg.texture = l.COMMON_MISC.getTexture(33), this.face.texture = l.COMMON_MISC.getTexture(112)), this.addChild(this.bg, this.face)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this.bg.texture = PIXI.Texture.EMPTY, this.face.texture = PIXI.Texture.EMPTY, this.bg = null, this.face = null
        }, e
    }(PIXI.Container)
}