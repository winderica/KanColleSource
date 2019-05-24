const function753 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.DURATION = 1 / 30 * 1e3, e.MOVE_ROTATION = Math.PI / 180 * 20.4, e.MOVE_X = 36;
                var i = new PIXI.Sprite(o.COMMON_MISC.getTexture(19)),
                    n = new PIXI.Sprite(o.COMMON_MISC.getTexture(19)),
                    r = new PIXI.Sprite(o.COMMON_MISC.getTexture(12));
                i.pivot.set(i.width, i.height), i.rotation = Math.PI / 180 * 180, n.x = i.width, r.y = 3, e._shutterWidth = i.width;
                var s = new PIXI.Graphics;
                s.beginFill(10798649, .5), s.drawRect(0, 0, 201.45, 180), s.pivot.set(s.width, 0), s.position.set(i.width + 3, -77);
                var a = new PIXI.Graphics;
                return a.beginFill(5978566, .5), a.drawRect(0, 0, 201.45, 180), a.pivot.set(0, 0), a.position.set(n.width, -77), i.mask = s, n.mask = a, e.addChild(i, n, s, a, r), e._leftFloor = i, e._rightFloor = n, e._leftFloorMask = s, e._rightFloorMask = a, e
            }
            return n(e, t), e.prototype.__stop__ = function () {
                createjs.Tween.removeTweens(this._leftFloorMask), createjs.Tween.removeTweens(this._rightFloorMask)
            }, e.prototype.open = function (t) {
                this.__stop__();
                var e = 9 * this.DURATION,
                    i = 0,
                    n = function () {
                        2 === ++i && t()
                    };
                createjs.Tween.get(this._leftFloorMask).to({
                    rotation: this.MOVE_ROTATION,
                    x: this._shutterWidth - this.MOVE_X
                }, e).call(n), createjs.Tween.get(this._rightFloorMask).to({
                    rotation: -this.MOVE_ROTATION,
                    x: this._shutterWidth + this.MOVE_X
                }, e).call(n)
            }, e.prototype.close = function (t) {
                this.__stop__();
                var e = 9 * this.DURATION,
                    i = 0,
                    n = function () {
                        2 === ++i && t()
                    };
                createjs.Tween.get(this._leftFloorMask).to({
                    rotation: 0,
                    x: this._shutterWidth
                }, e).call(n), createjs.Tween.get(this._rightFloorMask).to({
                    rotation: 0,
                    x: this._shutterWidth
                }, e).call(n)
            }, e.prototype.dispose = function () {
                this.__stop__(), this._leftFloor.texture = PIXI.Texture.EMPTY, this._rightFloor.texture = PIXI.Texture.EMPTY, this._leftFloor.mask = null, this._rightFloor.mask = null, this._leftFloorMask.clear(), this._rightFloorMask.clear(), this._leftFloor = null, this._rightFloor = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.SupplyFloor = r
}