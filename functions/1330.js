const function1330 = function (t, e, i) {
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
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._container = new o.Container, e._img_container = new PIXI.Container, e._img = new PIXI.Sprite, e._img_container.addChild(e._img), e._container.addChild(e._img_container), e.addChild(e._container), e._container.scale.y = 0, e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                void 0 === i && (i = null), 0 == e ? this._initializeCurveBalloon(t) : this._initializeStraightBalloon(t), this._setPoint(t, e, i)
            }, e.prototype.open = function (t) {
                void 0 === t && (t = null), this._startTween();
                var e = createjs.Tween.get(this._container);
                e.wait(500), e.to({
                    scaleY: 1
                }, 300, createjs.Ease.backOut), null != t && e.call(t)
            }, e.prototype.close = function (t) {
                var e = this;
                void 0 === t && (t = null);
                var i = createjs.Tween.get(this._container);
                i.wait(500), i.to({
                    scaleY: 0
                }, 300, createjs.Ease.backIn), i.call(function () {
                    e._stopTween()
                }), null != t && i.call(t)
            }, e.prototype._startTween = function () {
                null == this._t && (this._t = createjs.Tween.get(this._img_container, {
                    loop: !0
                }).to({
                    x: 0,
                    y: 0
                }, 0).to({
                    x: 0,
                    y: -9
                }, 700, createjs.Ease.sineIn).to({
                    x: 0,
                    y: 0
                }, 700, createjs.Ease.sineOut))
            }, e.prototype._stopTween = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype._initializeCurveBalloon = function (t) {
                1 == t ? (this._img.texture = r.MAP_COMMON.getTexture(18), this._img.position.set(0, -92)) : 2 == t ? (this._img.texture = r.MAP_COMMON.getTexture(20), this._img.position.set(0, -54)) : 3 == t ? (this._img.texture = r.MAP_COMMON.getTexture(22), this._img.position.set(3, -6)) : 5 == t && (this._img.texture = r.MAP_COMMON.getTexture(23), this._img.position.set(-69, -3))
            }, e.prototype._initializeStraightBalloon = function (t) {
                0 == t ? (this._img.texture = r.MAP_COMMON.getTexture(19), this._img.position.set(-44, -105)) : 1 == t ? (this._img.texture = r.MAP_COMMON.getTexture(21), this._img.position.set(0, -92)) : 2 == t && (this._img.texture = r.MAP_COMMON.getTexture(24), this._img.position.set(9, -45))
            }, e.prototype._setPoint = function (t, e, i) {
                void 0 === i && (i = null), null == i && (i = new PIXI.Point, 0 == e ? 0 == t || (1 == t ? i.set(21, -21) : 2 == t ? i.set(36, -2) : 3 == t ? i.set(27, 5) : 4 == t || 5 == t && i.set(-38, 0)) : 0 == t ? i.set(-5, -38) : 1 == t ? i.set(-14, -33) : 2 == t && i.set(39, -17)), this._container.x = i.x, this._container.y = i.y
            }, e
        }(PIXI.Container);
    e.BranchBalloon = s
}