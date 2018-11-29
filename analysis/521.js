/*
 * called by `482.js`
 * remodel info
 */
const function521 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(0), r = i(522), s = function () {
        function t() {
            // 鈴谷改二、熊野改二
            this._USE_DEVKIT_GROUP_ = [503, 504]
        }

        // required level
        t.prototype.getRequiredLevel = function (t) {
            var e = this._getMst(t);
            return null == e ? 0 : e.remodeling_level
        };
        // id after remodelled
        t.prototype.getNextID = function (t) {
            if (null != this._dic && 1 == this._dic.hasOwnProperty(t.toString())) {
                return this._dic[t].mst_id_after
            }
            var e = this._getMst(t);
            return null == e ? 0 : e.remodeled_mst_id
        };
        // required resources
        t.prototype.getRequires = function (t) {
            var e = this._getMst(t);
            if (null == e || e.remodeled_mst_id <= 0) return {
                ammo: 0,
                steel: 0,
                devkit: 0,
                buildkit: 0,
                blueprint: 0,
                catapult: 0,
                battlereport: 0,
                newhokohesosizai: 0
            };
            var i = e.remodeling_ammo, n = e.remodeling_steel;
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
                    newhokohesosizai: o.newkohohesosizai
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
                newhokohesosizai: 0
            }
        };
        // 開発資材
        t.prototype._getRequiredDevkitNum = function (t, e, i) {
            switch (t) {
                case 214:  // 龍田改
                    return 15;
                case 545:  // Saratoga Mk.II
                case 550:  // Saratoga Mk.II Mod.2
                    return 20;
                case 555:  // 瑞鳳改二
                case 560:  // 瑞鳳改二乙
                    return 5;
                case 312:  // 浜風改
                case 320:  // 磯風改
                case 317:  // 浦風改
                    return 40;
                case 225:  // 陽炎改
                case 226:  // 不知火改
                    return 20;
                case 82:   // 伊勢改
                    return 80;
                case 227:  // 黒潮改
                    return 20;
                case 242:  // 白露改
                    return 15;
                case 213:  // 天龍改
                    return 24;
                case 381:  // 神鷹改
                    return 40;
                default:
                    // 改装設計図が必要 && ( 鈴谷改二 | 熊野改二 ) からの改装ではない
                    return 0 != e && -1 == this._USE_DEVKIT_GROUP_.indexOf(t)
                        ? 0
                        // 改装設計図必要がない || ( 鈴谷改二 | 熊野改二 ) からの改装
                        : i < 4500 // 鋼材 < 4500
                            ? 0
                            : i < 5500 // 鋼材 < 5500 (( 鈴谷改二 | 熊野改二 | 鈴谷航改二 | 熊野航改二 ) からの改装)
                                ? 10
                                : i < 6500 // 鋼材 < 6500
                                    ? 15
                                    : 20
            }
        };
        // 高速建造材
        t.prototype._getRequiredBuildKitNum = function (t) {
            switch (t) {
                case 214:  // 龍田改
                    return 5;
                case 503:  // 鈴谷改二
                case 504:  // 熊野改二
                case 508:  // 鈴谷航改二
                case 509:  // 熊野航改二
                    return 20;
                case 545:  // Saratoga Mk.II
                case 550:  // Saratoga Mk.II Mod.2
                    return 30;
                case 555:  // 瑞鳳改二
                case 560:  // 瑞鳳改二乙
                    return 20;
                case 312:  // 浜風改
                case 320:  // 磯風改
                case 317:  // 浦風改
                    return 10;
                case 213:  // 天龍改
                    return 8;
                default:
                    return 0
            }
        };
        t.prototype._getMst = function (t) {
            return o.default.model.ship.getMst(t)
        };
        return t
    }();
    e.ShipUpgradeModelHolder = s;
    var a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.setData = function (t) {
            if (this._dic = {}, null == t) return null;
            for (var e = 0; e < t.length; e++) {
                var i = t[e], n = new r.ShipUpgradeModel(i), o = n.mst_id_before;
                o <= 0 || null == this._dic[o] && (this._dic[o] = n)
            }
        }, e
    }(s);
    e.ShipUpgradeModelHolderEdit = a
}