const function1303 = function (t, e, i) {
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
    var o = i(1304),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._spots = {}, e._flags = {}, e
            }
            return n(e, t), e.prototype.addSpot = function (t) {
                this._spots[t.no] = t, this.addChild(t)
            }, e.prototype.addFlag = function (t, e, i) {
                var n = new o.LandingFlag;
                n.x = e, n.y = i, n.initialize(), this.addChild(n), this._flags[t] = n
            }, e.prototype.getAllSpots = function () {
                var t = [];
                for (var e in this._spots) {
                    var i = this._spots[e];
                    t.push(i)
                }
                return t
            }, e.prototype.getSpot = function (t) {
                var e = t.toString();
                return 1 == this._spots.hasOwnProperty(e) ? this._spots[t] : null
            }, e.prototype.getFlag = function (t) {
                var e = t.toString();
                return 1 == this._flags.hasOwnProperty(e) ? this._flags[t] : null
            }, e.prototype.dispose = function () {
                this.removeChildren();
                for (var t in this._spots) {
                    this._spots[t].dispose()
                }
                this._spots = null
            }, e
        }(PIXI.Container);
    e.MapSpotLayer = r
}