const function1402 = function (t, e, i) {
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
    var o = i(467),
        r = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n(e, t), e.prototype._getShips_f = function () {
                var t = this._scene.data.model.deck_f;
                if (1 == t.isCombined()) {
                    switch (this._record.common.getActiveDeckFriend()) {
                        case 1:
                            return t.ships_main;
                        case 2:
                            return t.ships_sub
                    }
                }
                return t.ships
            }, e.prototype._getShips_e = function () {
                var t = this._scene.data.model.deck_e;
                if (1 == t.isCombined()) {
                    switch (this._record.common.getActiveDeckEnemy()) {
                        case 1:
                            return t.ships_main;
                        case 2:
                            return t.ships_sub
                    }
                }
                return t.ships
            }, e.prototype._getFlareBanner_f = function () {
                var t = this._record.raw.getFlareLightFriend();
                return this._scene.view.bannerGroupLayer.getBanner(!0, t)
            }, e.prototype._getFlareBanner_e = function () {
                var t = this._record.raw.getFlareLightEnemy();
                return this._scene.view.bannerGroupLayer.getBanner(!1, t)
            }, e
        }(o.PhaseLightingBase);
    e.PhaseLighting = r
}