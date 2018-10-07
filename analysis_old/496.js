/*
 * the function called by `476.js`
 * construction(建造)
 */
const function496 = function (t, e, i) {
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
    var o = i(497), r = function () {
        function t() {
            this._dic = {}
        }

        t.prototype.get = function (t) {
            var e = t.toString();
            return 1 == this._dic.hasOwnProperty(e) ? this._dic[e] : null
        };
        t.prototype.getAll = function () {
            var t = new Array;
            for (var e in this._dic) {
                var i = this._dic[e];
                t.push(i)
            }
            t.sort(function (t, e) {
                return t.id < e.id ? -1 : t.id > e.id ? 1 : 0
            });
            return t
        };
        return t
    }();
    e.KDockModelHolder = r;
    // class s extends r
    var s = function (t) {
        function e() {
            return t.call(this) || this
        }

        n(e, t);
        e.prototype.__setData__ = function (t) {
            if (null != t) {
                this._dic = {};
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e], r = new o.KDockModelEdit(n), s = r.id;
                    if (s > 0) {
                        var a = s.toString();
                        this._dic[a] = r
                    }
                }
            }
        };
        return e
    }(r);
    e.KDockModelHolderEdit = s
}