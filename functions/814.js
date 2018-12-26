const function814 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t(t, e) {
                void 0 === e && (e = null), this._require = t, this._count = null != e ? e : {
                    ammo: n.default.model.useItem.getCount(32),
                    steel: n.default.model.useItem.getCount(33),
                    devkit: n.default.model.useItem.getCount(3),
                    buildkit: n.default.model.useItem.getCount(2),
                    blueprint: n.default.model.useItem.getCount(58),
                    catapult: n.default.model.useItem.getCount(65),
                    battlereport: n.default.model.useItem.getCount(78),
                    newhokohesosizai: n.default.model.useItem.getCount(75)
                }
            }
            return t.prototype.getCount = function (t) {
                return this._get(t, this._count)
            }, t.prototype.getRequire = function (t) {
                return this._get(t, this._require)
            }, t.prototype.validate = function (t) {
                var e = this.getCount(t),
                    i = this.getRequire(t);
                if (e < i) {
                    n.default.model.useItem.get(t);
                    return !1
                }
                return !0
            }, t.prototype.validateAll = function () {
                return this.validate(32) && this.validate(33) && this.validate(3) && this.validate(2) && this.validate(58) && this.validate(65) && this.validate(78) && this.validate(75)
            }, t.prototype._get = function (t, e) {
                switch (t) {
                    case 32:
                        return e.ammo;
                    case 33:
                        return e.steel;
                    case 3:
                        return e.devkit;
                    case 2:
                        return e.buildkit;
                    case 58:
                        return e.blueprint;
                    case 65:
                        return e.catapult;
                    case 78:
                        return e.battlereport;
                    case 75:
                        return e.newhokohesosizai
                }
                return 0
            }, t
        }();
    e.KaizoValidateModel = o
}