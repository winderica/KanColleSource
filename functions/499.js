const function499 = function (t, e, i) {
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
    var o = function () {
        function t(t) {
            this._a = t
        }
        return Object.defineProperty(t.prototype, "state", {
            get: function () {
                return null != this._a && this._a.length > 0 ? this._a[0] : 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "expedition_id", {
            get: function () {
                return null != this._a && this._a.length > 1 ? this._a[1] : -1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "complete_unixtime", {
            get: function () {
                return null != this._a && this._a.length > 2 ? this._a[2] : -1
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.DeckExpeditionModel = o;
    var r = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return n(e, t), e.prototype.__update__ = function (t) {
            this._a = t
        }, e.prototype.__update_state__ = function (t) {
            for (null == this._a && (this._a = []); this._a.length <= 0;) this._a.push(0);
            this._a[0] = t
        }, e.prototype.__update_id__ = function (t) {
            for (null == this._a && (this._a = []); this._a.length <= 1;) this._a.push(0);
            this._a[1] = t
        }, e.prototype.__update_time__ = function (t) {
            for (null == this._a && (this._a = []); this._a.length <= 2;) this._a.push(0);
            this._a[2] = t
        }, e
    }(o);
    e.DeckExpeditionModelEdit = r
}