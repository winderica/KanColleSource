const function1294 = function (t, e, i) {
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
    var o = i(24),
        r = i(19),
        s = i(1295),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._type = e, i._img = new PIXI.Sprite, i.addChild(i._img), i._numset = new s.NumericalDisplaySet, i.addChild(i._numset), i._numset.visible = !1, i
            }
            return n(e, t), e
        }(o.Container);
    e.LandingBalloonBase = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            1 == this._type ? (this._img.texture = r.MAP_COMMON.getTexture(52), this._img.position.set(-5, -92)) : 2 == this._type ? (this._img.texture = r.MAP_COMMON.getTexture(53), this._img.position.set(-45, -105)) : 3 == this._type && (this._img.texture = r.MAP_COMMON.getTexture(54), this._img.position.set(-86, -92))
        }, e.prototype.update = function (t) {
            this._numset.update(t), 2 == this._type ? (this._numset.x = 8 - Math.round(this._numset.width / 2), this._numset.y = -36, this._numset.visible = !0) : 3 == this._type ? (this._numset.x = -33 - Math.round(this._numset.width / 2), this._numset.y = -23, this._numset.visible = !0) : this._numset.visible = !1
        }, e
    }(a);
    e.LandingBalloonType1 = _;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            1 == this._type ? (this._img.texture = r.MAP_COMMON.getTexture(56), this._img.position.set(0, -45)) : 2 == this._type ? (this._img.texture = r.MAP_COMMON.getTexture(57), this._img.position.set(-29, 0)) : 3 == this._type && (this._img.texture = r.MAP_COMMON.getTexture(58), this._img.position.set(-63, 0))
        }, e.prototype.update = function (t) {
            this._numset.update(t), 2 == this._type ? (this._numset.x = 24 - Math.round(this._numset.width / 2), this._numset.y = 84, this._numset.visible = !0) : 3 == this._type ? (this._numset.x = -12 - Math.round(this._numset.width / 2), this._numset.y = 83, this._numset.visible = !0) : this._numset.visible = !1
        }, e
    }(a);
    e.LandingBalloonType2 = l;
    var u = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            1 == this._type ? (this._img.texture = r.MAP_COMMON.getTexture(60), this._img.position.set(-15, -101)) : 2 == this._type ? (this._img.texture = r.MAP_COMMON.getTexture(61), this._img.position.set(-87, -93)) : 3 == this._type && (this._img.texture = r.MAP_COMMON.getTexture(62), this._img.position.set(-99, -12))
        }, e.prototype.update = function (t) {
            this._numset.update(t), 2 == this._type ? (this._numset.x = -35 - Math.round(this._numset.width / 2), this._numset.y = -23, this._numset.visible = !0) : 3 == this._type ? (this._numset.x = -47 - Math.round(this._numset.width / 2), this._numset.y = 57, this._numset.visible = !0) : this._numset.visible = !1
        }, e
    }(a);
    e.LandingBalloonType3 = u
}