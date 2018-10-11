const function433 = function (t, e, i) {
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
    var o = i(241), r = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._POSITIONS_TANJUU = [null, [[-11, -11]], [[-29, -11], [8, -11]], [[-47, -11], [-11, -11], [26, -11]], [[-63, -11], [-29, -11], [8, -11], [42, -11]], [[-80, -11], [-47, -11], [-11, -11], [26, -11], [59, -11]], [[-98, -11], [-63, -11], [-29, -11], [8, -11], [42, -11], [77, -11]], [[-101, -11], [-71, -11], [-41, -11], [-11, -11], [20, -11], [50, -11], [80, -11]]], i._POSITIONS_FUKUJUU = [null, [[-11, -11]], null, [[-29, -27], [8, -27], [-29, 6]], [[-29, -27], [8, -27], [-29, 6], [8, 6]], [[-47, -27], [-11, -27], [26, -27], [-47, 6], [-11, 6]], [[-47, -27], [-11, -27], [26, -27], [-47, 6], [-11, 6], [26, 6]], [[-65, -27], [-29, -27], [8, -27], [-65, 6], [-29, 6], [8, 6], [44, -11]]], i._POSITIONS_RINKEI = [null, [[-11, -11]], null, null, [[-11, -11], [-46, -11], [8, -44], [8, 23]], [[-11, -11], [26, -11], [-47, -11], [-11, -44], [-11, 23]], [[-29, -11], [8, -11], [42, -11], [-63, -11], [-11, -60], [-11, 39]], [[-11, -11], [51, -11], [-72, -11], [-42, -65], [-42, 44], [21, -65], [21, 44]]], i._POSITIONS_TEIKEI = [null, [[-11, -11]], [[-23, -23], [0, 0]], [[-33, -33], [-11, -11], [12, 12]], [[-44, -44], [-21, -21], [0, 0], [24, 24]], [[-56, -56], [-33, -33], [-11, -11], [12, 12], [35, 35]], [[-66, -66], [-44, -44], [-21, -21], [0, 0], [24, 24], [47, 47]], [[-69, -69], [-50, -50], [-30, -30], [-11, -11], [9, 9], [29, 29], [48, 48]]], i._POSITIONS_TANOU = [null, [[-11, -11]], [[-11, -27], [-11, 6]], [[-11, -43], [-11, -11], [-11, 23]], [[-11, -60], [-11, -27], [-11, 6], [-11, 39]], [[-11, -77], [-11, -44], [-11, -11], [-11, 23], [-11, 56]], [[-11, -93], [-11, -60], [-11, -27], [-11, 6], [-11, 39], [-11, 72]], [[-11, -101], [-11, -71], [-11, -41], [-11, -11], [-11, 20], [-11, 50], [-11, 80]]], i._POSITIONS_KEIKAI = [null, [[-11, -11]], null, null, [[-11, -11], [26, -11], [-47, -41], [-47, 20]], [[-11, -11], [26, -11], [-60, -11], [-41, -41], [-41, 20]], [[-11, -11], [26, -11], [62, -11], [-60, -11], [-41, -41], [-41, 20]], [[-3, -11], [33, -11], [69, -11], [-89, -11], [-53, -11], [-33, -41], [-33, 20]]], i._friend = e, i._points = [], i
        }

        return n(e, t), e.prototype.initialize = function (t, e, i) {
            void 0 === i && (i = -1), this._clearPoints(), i <= 0 && (i = e);
            var n = this._getPositionsList(t);
            if (null != n) {
                var r = n[e];
                if (null != r) {
                    r = n[i];
                    for (var s = 0; s < r.length; s++) {
                        var a = new o.FormationPoint, _ = r[s][0], u = r[s][1];
                        a.position.set(_, u), a.initialize(this._friend), a.visible = !1, this.addChild(a), this._points.push(a)
                    }
                }
            }
        }, e.prototype.show = function (t) {
            void 0 === t && (t = 100);
            for (var e = createjs.Tween.get(null), i = 0, n = this._points; i < n.length; i++) {
                var o = n[i];
                !function (i) {
                    e.wait(t), e.call(function () {
                        i.visible = !0
                    })
                }(o)
            }
        }, e.prototype.dispose = function () {
            this._clearPoints()
        }, e.prototype._getPositionsList = function (t) {
            return 1 == t ? this._POSITIONS_TANJUU : 2 == t ? this._POSITIONS_FUKUJUU : 3 == t ? this._POSITIONS_RINKEI : 4 == t ? this._POSITIONS_TEIKEI : 5 == t ? this._POSITIONS_TANOU : 6 == t ? this._POSITIONS_KEIKAI : null
        }, e.prototype._clearPoints = function () {
            for (var t = 0, e = this._points; t < e.length; t++) {
                var i = e[t];
                this.removeChild(i)
            }
            this._points = []
        }, e
    }(PIXI.Container);
    e.FormationPoints = r
}