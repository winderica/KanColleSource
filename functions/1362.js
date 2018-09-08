const function1362 = function (t, e, i) {
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
    var o = i(461), r = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this, e, i) || this;
            return r._model = n, r._bannerGroup = o, r
        }

        return n(e, t), e.prototype._getShips_f = function () {
            return this._model.ships
        }, e.prototype._getShips_e = function () {
            return this._scene.data.model.deck_e.ships
        }, e.prototype._getFlareBanner_f = function () {
            var t = this._model.getFlareIndex_f();
            return this._bannerGroup.getBanner(t)
        }, e.prototype._getFlareBanner_e = function () {
            var t = this._model.getFlareIndex_e();
            return this._scene.view.bannerGroupLayer.getBanner(!1, t)
        }, e
    }(o.PhaseLightingBase);
    e.PhaseAllyLighting = r
}