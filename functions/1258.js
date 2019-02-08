const function1258 = function (t, e, i) {
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
    var o = i(1259),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._count = 0, e._boxes = [], e
            }
            return n(e, t), Object.defineProperty(e.prototype, "count", {
                get: function () {
                    return this._count
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i) {
                this._count = 0;
                for (var n = [11, 12, 13, 14], r = 0; r < n.length; r++) {
                    var s = new o.FormationBoxCombined,
                        a = [626, 873, 626, 873][r],
                        _ = [96, 96, 302, 302][r];
                    s.position.set(a, _);
                    var l = n[r];
                    s.initialize(t, l, e, i), 1 == s.enabled && this._count++, this.addChild(s), this._boxes.push(s)
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._boxes; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._boxes; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._boxes; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e
        }(PIXI.Container);
    e.FormationBoxContainerCombined = r
}