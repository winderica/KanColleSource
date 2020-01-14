const function534 = function (t, e, i) {
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
        r = i(535),
        s = function () {
            function t() {
                this._USE_DEVKIT_GROUP_ = [503, 504, 520]
            }
            return t.prototype.getRequiredLevel = function (t) {
                var e = this._getMst(t);
                return null == e ? 0 : e.remodeling_level
            }, t.prototype.getNextID = function (t) {
                if (null != this._dic && 1 == this._dic.hasOwnProperty(t.toString())) {
                    return this._dic[t].mst_id_after
                }
                var e = this._getMst(t);
                return null == e ? 0 : e.remodeled_mst_id
            }, t.prototype.getRequires = function (t) {
                var e = this._getMst(t);
                if (null == e || e.remodeled_mst_id <= 0) return {
                    ammo: 0,
                    steel: 0,
                    devkit: 0,
                    buildkit: 0,
                    blueprint: 0,
                    catapult: 0,
                    battlereport: 0,
                    newhokohesosizai: 0,
                    newkokuhesosizai: 0
                };
                var i = e.remodeling_ammo,
                    n = e.remodeling_steel;
                if (1 == this._dic.hasOwnProperty(t.toString())) {
                    var o = this._dic[t];
                    return {
                        ammo: i,
                        steel: n,
                        blueprint: o.blueprint,
                        catapult: o.catapult,
                        battlereport: o.battlereport,
                        devkit: this._getRequiredDevkitNum(t, o.blueprint, n),
                        buildkit: this._getRequiredBuildKitNum(t),
                        newhokohesosizai: o.newhokohesosizai,
                        newkokuhesosizai: o.newkokuhesosizai
                    }
                }
                return {
                    ammo: i,
                    steel: n,
                    blueprint: 0,
                    catapult: 0,
                    battlereport: 0,
                    devkit: this._getRequiredDevkitNum(t, 0, n),
                    buildkit: this._getRequiredBuildKitNum(t),
                    newhokohesosizai: 0,
                    newkokuhesosizai: 0
                }
            }, t.prototype._getRequiredDevkitNum = function (t, e, i) {
                switch (t) {
                    case 214:
                        return 15;
                    case 545:
                    case 550:
                        return 20;
                    case 555:
                    case 560:
                        return 5;
                    case 312:
                    case 320:
                    case 317:
                        return 40;
                    case 225:
                    case 226:
                        return 20;
                    case 82:
                        return 80;
                    case 88:
                        return 181;
                    case 227:
                        return 20;
                    case 242:
                        return 15;
                    case 213:
                        return 24;
                    case 381:
                        return 40;
                    case 313:
                        return 50;
                    case 562:
                        return 80;
                    case 149:
                        return 300;
                    case 277:
                        return 100;
                    case 594:
                    case 599:
                    case 596:
                        return 80;
                    case 350:
                        return 30;
                    case 520:
                        return 90;
                    case 344:
                        return 30;
                    case 597:
                        return 100;
                    case 293:
                    case 622:
                    case 623:
                    case 624:
                        return 30;
                    default:
                        return 0 != e && -1 == this._USE_DEVKIT_GROUP_.indexOf(t) ? 0 : i < 4500 ? 0 : i < 5500 ? 10 : i < 6500 ? 15 : 20
                }
            }, t.prototype._getRequiredBuildKitNum = function (t) {
                switch (t) {
                    case 214:
                        return 5;
                    case 503:
                    case 504:
                    case 508:
                    case 509:
                        return 20;
                    case 545:
                    case 550:
                        return 30;
                    case 555:
                    case 560:
                        return 20;
                    case 312:
                    case 320:
                    case 317:
                        return 10;
                    case 213:
                        return 8;
                    case 313:
                        return 20;
                    case 562:
                        return 10;
                    case 594:
                    case 599:
                        return 30;
                    case 596:
                    case 520:
                        return 10;
                    case 597:
                        return 20;
                    case 293:
                    case 622:
                    case 623:
                    case 624:
                        return 30;
                    default:
                        return 0
                }
            }, t.prototype._getMst = function (t) {
                return o.default.model.ship.getMst(t)
            }, t
        }();
    e.ShipUpgradeModelHolder = s;
    var a = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.setData = function (t) {
            if (this._dic = {}, null == t) return null;
            for (var e = 0; e < t.length; e++) {
                var i = t[e],
                    n = new r.ShipUpgradeModel(i),
                    o = n.mst_id_before;
                o <= 0 || null == this._dic[o] && (this._dic[o] = n)
            }
        }, e
    }(s);
    e.ShipUpgradeModelHolderEdit = a
}