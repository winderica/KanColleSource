const function1445 = function (t, e, i) {
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
    var o = i(242),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._friend = e, i._points = [], i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                if (this._clearPoints(), e <= 0) return !1;
                var i;
                switch (t) {
                    case 11:
                        i = this._get11Points(e);
                        break;
                    case 12:
                        i = this._get12Points(e);
                        break;
                    case 13:
                        i = this._get13Points(e);
                        break;
                    case 14:
                        i = this._get14Points(e)
                }
                if (null == i) return !1;
                for (var n = 0; n < i.length; n++) {
                    var r = new o.FormationPoint,
                        s = i[n];
                    r.position.set(s.x, s.y), r.initializeForCombinedSub(this._friend), r.visible = !1, this.addChild(r), this._points.push(r)
                }
                return !0
            }, e.prototype.show = function (t) {
                void 0 === t && (t = 100);
                for (var e = createjs.Tween.get(null), i = 0, n = this._points; i < n.length; i++) {
                    var o = n[i];
                    ! function (i) {
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
                return t > 0 && e.push(new PIXI.Point(38, -12)), t > 1 && e.push(new PIXI.Point(23, -35)), t > 2 && e.push(new PIXI.Point(23, 12)), t > 3 && e.push(new PIXI.Point(8, -57)), t > 4 && e.push(new PIXI.Point(8, 35)), t > 5 && e.push(new PIXI.Point(0, -12)), e
            }, e.prototype._get12Points = function (t) {
                var e = [];
                return t > 0 && e.push(new PIXI.Point(44, -12)), t > 1 && e.push(new PIXI.Point(17, -12)), t > 2 && e.push(new PIXI.Point(36, -38)), t > 3 && e.push(new PIXI.Point(36, 15)), t > 4 && e.push(new PIXI.Point(-3, -21)), t > 5 && e.push(new PIXI.Point(-3, 0)), e
            }, e.prototype._get13Points = function (t) {
                var e = [];
                return t > 0 && e.push(new PIXI.Point(36, -12)), t > 1 && e.push(new PIXI.Point(11, -54)), t > 2 && e.push(new PIXI.Point(11, 33)), t > 3 && e.push(new PIXI.Point(-32, -54)), t > 4 && e.push(new PIXI.Point(-32, 33)), t > 5 && e.push(new PIXI.Point(-57, -12)), e
            }, e.prototype._get14Points = function (t) {
                var e = [];
                return t > 0 && e.push(new PIXI.Point(44, -12)), t > 1 && e.push(new PIXI.Point(26, -38)), t > 2 && e.push(new PIXI.Point(26, 15)), t > 3 && e.push(new PIXI.Point(26, -12)), t > 4 && e.push(new PIXI.Point(9, -21)), t > 5 && e.push(new PIXI.Point(9, 0)), e
            }, e
        }(PIXI.Container);
    e.FormationPointsCombinedSub = r
}