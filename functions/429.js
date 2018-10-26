const function429 = function (t, e, i) {
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
    var o = i(1216), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.KEIKAIJIN = !1, e._count = 0, e._boxes = [];
            for (var i = 0; i < (e.KEIKAIJIN ? 6 : 5); i++) {
                var n = new o.FormationBox(!0);
                e.addChild(n), e._boxes.push(n)
            }
            return e
        }

        return n(e, t), Object.defineProperty(e.prototype, "count", {
            get: function () {
                return this._count
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e, i) {
            void 0 === i && (i = -1), i <= 0 && (i = t), this._count = 0;
            for (var n = 0; n < this._boxes.length; n++) {
                var o = this._boxes[n];
                o.initialize(n + 1, t, e, i), 1 == o.enabled && this._count++
            }
            var r, s;
            1 == this.KEIKAIJIN ? 6 == this._count ? (r = [581, 776, 974, 581, 776, 974], s = [92, 92, 92, 330, 330, 330]) : (r = [680, 876, 1073, 581, 776, 974], s = [92, 92, 92, 330, 330, 330]) : (r = [581, 776, 974, 683, 879], s = [92, 92, 92, 330, 330]);
            for (var n = 0; n < this._boxes.length; n++) {
                var o = this._boxes[n], a = r[n], _ = s[n];
                o.position.set(a, _)
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
    e.FormationBoxContainer = r
}