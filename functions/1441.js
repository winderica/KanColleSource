const function1441 = function (t, e, i) {
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
    var o = i(240), r = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._friend = e, i._points = [], i
        }

        return n(e, t), e.prototype.initialize = function (t, e, i) {
            if (this._clearPoints(), e <= 0) return !1;
            var n;
            switch (t) {
                case 11:
                    n = this._get11Points(e);
                    break;
                case 12:
                    n = this._get12Points(e);
                    break;
                case 13:
                    n = this._get13Points(e);
                    break;
                case 14:
                    n = this._get14Points(e)
            }
            if (null == n) return !1;
            for (var r = 0; r < n.length; r++) {
                var s = new o.FormationPoint, a = n[r];
                s.position.set(a.x, a.y), s.initializeForCombinedMain(this._friend, i), s.visible = !1, this.addChild(s), this._points.push(s)
            }
            return !0
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
        }, e.prototype._clearPoints = function () {
            for (var t = 0, e = this._points; t < e.length; t++) {
                var i = e[t];
                this.removeChild(i)
            }
            this._points = []
        }, e.prototype._get11Points = function (t) {
            var e = [];
            return t > 0 && e.push(new PIXI.Point(-24, -20)), t > 1 && e.push(new PIXI.Point(-24, 0)), t > 2 && e.push(new PIXI.Point(-44, -20)), t > 3 && e.push(new PIXI.Point(-44, 0)), t > 4 && e.push(new PIXI.Point(-24, -44)), t > 5 && e.push(new PIXI.Point(-24, 26)), e
        }, e.prototype._get12Points = function (t) {
            var e = [];
            return t > 0 && e.push(new PIXI.Point(-24, -21)), t > 1 && e.push(new PIXI.Point(-24, 0)), t > 2 && e.push(new PIXI.Point(-44, -21)), t > 3 && e.push(new PIXI.Point(-44, 0)), t > 4 && e.push(new PIXI.Point(-63, -21)), t > 5 && e.push(new PIXI.Point(-63, 0)), e
        }, e.prototype._get13Points = function (t) {
            var e = [];
            return t > 0 && e.push(new PIXI.Point(-12, -21)), t > 1 && e.push(new PIXI.Point(-12, 0)), t > 2 && e.push(new PIXI.Point(-32, -21)), t > 3 && e.push(new PIXI.Point(-32, 0)), t > 4 && e.push(new PIXI.Point(11, -21)), t > 5 && e.push(new PIXI.Point(11, 0)), e
        }, e.prototype._get14Points = function (t) {
            var e = [];
            return t > 0 && e.push(new PIXI.Point(-45, -21)), t > 1 && e.push(new PIXI.Point(-45, 0)), t > 2 && e.push(new PIXI.Point(-63, -21)), t > 3 && e.push(new PIXI.Point(-63, 0)), t > 4 && e.push(new PIXI.Point(-9, -12)), t > 5 && e.push(new PIXI.Point(-27, -12)), e
        }, e
    }(PIXI.Container);
    e.FormationPointsCombinedMain = r
}