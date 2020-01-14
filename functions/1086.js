const function1086 = function (t, e, i) {
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
    var o = i(38),
        r = i(59),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._icons = [];
                for (var i = 0; i < 4; i++) {
                    var n = new PIXI.Sprite;
                    n.x = [0, 0, 49, 49][i], n.y = [0, -15, 0, -15][i], e.addChild(n), e._icons.push(n)
                }
                return e
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0; t < this._icons.length; t++) {
                    this._icons[t].visible = !1
                }
            }, e.prototype.update = function (t) {
                var e = [];
                if (null != t) {
                    var i = t.getSlotitems();
                    i = i.concat(t.getSlotitemEx());
                    for (var n = 0, r = i; n < r.length; n++) {
                        var s = r[n];
                        if (null != s) {
                            var a = s.equipType;
                            if (a == o.EquipType._24_JOURIKUYOU_SHUTEI) {
                                355 != s.mstID && e.push(s)
                            } else a == o.EquipType._46_TOKUGATA_UCHIBITEI && e.push(s)
                        }
                    }
                }
                this._update(e)
            }, e.prototype._update = function (t) {
                for (var e = 0; e < this._icons.length; e++) {
                    var i = this._icons[e];
                    if (e >= t.length) i.visible = !1;
                    else {
                        var n = t[e].equipType;
                        n == o.EquipType._24_JOURIKUYOU_SHUTEI ? i.texture = r.SALLY_EXPEDITION.getTexture(64) : n == o.EquipType._46_TOKUGATA_UCHIBITEI && (i.texture = r.SALLY_EXPEDITION.getTexture(80)), i.visible = !0
                    }
                }
            }, e
        }(PIXI.Container);
    e.CompSupportBoatCount = s
}