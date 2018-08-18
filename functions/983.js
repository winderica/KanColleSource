const function983 = function (t, e, i) {
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
    var o = i(52), r = function (t) {
        function e() {
            var e = t.call(this) || this, i = createjs.Ticker.framerate;
            return e._cloud1 = new s(3, 60 / i * .0035), e._cloud2 = new s(2, 60 / i * .0025), e._cloud3 = new s(0, 60 / i * .005), e._cloud1.anchor.set(.5, .5), e._cloud2.anchor.set(.5, .5), e._cloud3.anchor.set(.5, .5), e.addChild(e._cloud1), e.addChild(e._cloud2), e.addChild(e._cloud3), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._cloud1.texture = o.SALLY_SORTIE.getTexture(27), this._cloud2.texture = o.SALLY_SORTIE.getTexture(28), this._cloud3.texture = o.SALLY_SORTIE.getTexture(29)
        }, e.prototype.activate = function () {
            var t = this;
            if (null == this._t) {
                var e = function (e) {
                    t._cloud1.update(), t._cloud2.update(), t._cloud3.update()
                };
                this._t = createjs.Tween.get(this, { loop: !0, onChange: e })
            }
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container);
    e.MapThumbnailLockedCloud = r;
    var s = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._tmp = 150 * Math.random(), n._offset = e, n._speed = i, n
        }

        return n(e, t), e.prototype.update = function () {
            var t = createjs.Ticker.framerate;
            this.x = 90 * Math.cos(this._tmp + this._offset), this.y = 15 * Math.cos(.9 * this._tmp * (60 / t) + this._offset), this._tmp += this._speed
        }, e
    }(PIXI.Sprite)
}