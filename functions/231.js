const function231 = function (t, e, i) {
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
    var o = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._offset = 0, i._offset = e, i._maps = [], i
        }

        return n(e, t), Object.defineProperty(e.prototype, "offset", {
            get: function () {
                return this._offset
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "num", {
            get: function () {
                return this._maps.length
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            for (var e = 0; e < this._maps.length; e++) {
                var i = e + this._offset, n = t.length > i ? t[i] : null;
                this._maps[e].initialize(n)
            }
        }, e.prototype.updateAirUnitEnabled = function (t) {
            for (var e = 0, i = this._maps; e < i.length; e++) {
                i[e].updateAirUnitEnabled(t)
            }
        }, e.prototype.updateGauge = function (t) {
            for (var e = t.mst_id, i = 0, n = this._maps; i < n.length; i++) {
                var o = n[i];
                if (o.mst_id == e) return void o.updateGauge(t)
            }
        }, e.prototype.activate = function () {
            for (var t = 0, e = this._maps; t < e.length; t++) {
                e[t].activate()
            }
        }, e.prototype.deactivate = function () {
            for (var t = 0, e = this._maps; t < e.length; t++) {
                e[t].deactivate()
            }
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._maps; t < e.length; t++) {
                e[t].dispose()
            }
        }, e
    }(PIXI.Container);
    e.LayoutBase = o
}