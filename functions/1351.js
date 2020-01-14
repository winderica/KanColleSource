const function1351 = function (t, e, i) {
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
    var o = i(63),
        r = i(1352),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._no = e, n._offsets = i, n._point = new r.SpotPointImage, n.addChild(n._point), n
            }
            return n(e, t), Object.defineProperty(e.prototype, "no", {
                get: function () {
                    return this._no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "route", {
                get: function () {
                    return this._route
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "point", {
                get: function () {
                    return this._point
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.isAddedSpot = function () {
                return null != this._route
            }, e.prototype.showLine = function () {
                null != this._line && (this._line.visible = !0)
            }, e.prototype.hideLine = function () {
                null != this._line && (this._line.visible = !1)
            }, e.prototype.setColor = function (t) {
                this._point.update(t), this._offsets.hasOwnProperty(t.toString()) ? (this._point.x = this._offsets[t].x, this._point.y = this._offsets[t].y) : (this._point.x = 0, this._point.y = 0)
            }, e.prototype.getColor = function () {
                return this._point.color
            }, e.prototype.setRoute = function (t, e, i, n) {
                null != this._route && (this.removeChild(this._route), this._route = null);
                var r = new o.CenteringSprite(t);
                r.x = e + Math.round(r.width / 2), r.y = i + Math.round(r.height / 2), r.rotation = n / 180 * Math.PI, this.addChildAt(r, 0), this._route = r
            }, e.prototype.setLine = function (t, e, i, n) {
                null != this._line && (this.removeChild(this._line), this._line = null);
                var o = new PIXI.Sprite(t);
                o.x = e, o.y = i, o.rotation = n / 180 * Math.PI, o.visible = !1, this.addChild(o), this._line = o
            }, e.prototype.dispose = function () {
                this._point.dispose()
            }, e
        }(PIXI.Container);
    e.CompSpot = s
}