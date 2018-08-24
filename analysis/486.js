/*
 * the function called by `261.js`
 * deck - expedition
 */
const function486 = function (t, e, i) {
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
    var o = function () {
        // `t`: 遠征状況	[0]={0=未出撃, 1=遠征中, 2=遠征帰投, 3=強制帰投中}, [1]=遠征先ID, [2]=帰投時間, [3]=0
        function t(t) {
            this._a = t
        }

        Object.defineProperty(t.prototype, "state", {
            get: function () {
                return null != this._a && this._a.length > 0 ? this._a[0] : 0
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "expedition_id", {
            get: function () {
                return null != this._a && this._a.length > 1 ? this._a[1] : -1
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "complete_unixtime", {
            get: function () {
                return null != this._a && this._a.length > 2 ? this._a[2] : -1
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.DeckExpeditionModel = o;
    // class r extends o
    var r = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        n(e, t);
        e.prototype.__update__ = function (t) {
            this._a = t
        };
        e.prototype.__update_state__ = function (t) {
            for (null == this._a && (this._a = []); this._a.length <= 0;) this._a.push(0);
            this._a[0] = t
        };
        e.prototype.__update_id__ = function (t) {
            for (null == this._a && (this._a = []); this._a.length <= 1;) this._a.push(0);
            this._a[1] = t
        };
        e.prototype.__update_time__ = function (t) {
            for (null == this._a && (this._a = []); this._a.length <= 2;) this._a.push(0);
            this._a[2] = t
        };
        return e
    }(o);
    e.DeckExpeditionModelEdit = r
}