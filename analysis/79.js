const function79 = function (t, e, i) {
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
    var o = i(196), r = function (t) {
        function e(e) {
            void 0 === e && (e = 1);
            var i = t.call(this) || this;
            return i._subtype = e, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "subtype", {
            get: function () {
                return this._subtype
            }, enumerable: !0, configurable: !0
        }), e
    }(o.SceneModel);
    e.ItemSceneModel = r
}