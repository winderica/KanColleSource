const function514 = function (t, e, i) {
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
    var o = i(7), r = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "state", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_state", -1)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "shipMemID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_ship_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "completeTime", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_complete_time")
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.NDockModel = r;
    var s = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.prototype.__updateState__ = function (t) {
            this._o.api_state = t
        }, e.prototype.__updateShipId__ = function (t) {
            this._o.api_ship_id = t
        }, e.prototype.__updateCompleteTime__ = function (t) {
            this._o.api_complete_time = t
        }, e
    }(r);
    e.NDockModelEdit = s
}