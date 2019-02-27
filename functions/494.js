const function494 = function (t, e, i) {
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
        function t() {
            this._type = 0
        }
        return Object.defineProperty(t.prototype, "type", {
            get: function () {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deck_id_main", {
            get: function () {
                return 1 == this.isCombined() ? 1 : 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "deck_id_sub", {
            get: function () {
                return 1 == this.isCombined() ? 2 : 0
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.isCombined = function () {
            return 1 == this._type || 2 == this._type || 3 == this._type
        }, t
    }();
    e.DeckCombinedModel = o;
    var r = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.__update__ = function (t) {
            this._type = t
        }, e
    }(o);
    e.DeckCombinedModelEdit = r
}