const function66 = function (t, e, i) {
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
    var o = i(16),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._setPosition = function (t, i) {
                    e._content.position.set(t, i)
                }, e._content = new PIXI.Sprite, e.addChild(e._content), e
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(o.BATTLE_MAIN.getTexture(121));
                this._content.addChild(t), t = new PIXI.Sprite(o.BATTLE_MAIN.getTexture(121)), t.scale.x = -1, t.x = 2 * t.width, this._content.addChild(t), t = new PIXI.Sprite(o.BATTLE_MAIN.getTexture(121)), t.scale.y = -1, t.y = 2 * t.height, this._content.addChild(t), t = new PIXI.Sprite(o.BATTLE_MAIN.getTexture(121)), t.scale.x = -1, t.scale.y = -1, t.x = 2 * t.width, t.y = 2 * t.height, this._content.addChild(t)
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this._content), this._t.loop = !0, this._t.call(this._setPosition, [0, 0]).wait(33), this._t.call(this._setPosition, [2, 5]).wait(33), this._t.call(this._setPosition, [-5, 0]).wait(33), this._t.call(this._setPosition, [3, 8]).wait(33), this._t.call(this._setPosition, [-3, 2]).wait(33), this._t.call(this._setPosition, [6, -2]).wait(33), this._t.call(this._setPosition, [0, 2]).wait(33), this._t.call(this._setPosition, [-3, 2]).wait(33), this._t.call(this._setPosition, [6, 5]).wait(33), this._t.call(this._setPosition, [-5, 9]).wait(33), this._t.call(this._setPosition, [5, 0]).wait(33), this._t.call(this._setPosition, [2, 6]).wait(33), this._t.call(this._setPosition, [0, -5]).wait(33), this._t.call(this._setPosition, [5, 3]).wait(33), this._t.call(this._setPosition, [5, -3]).wait(33), this._t.call(this._setPosition, [0, 2]).wait(33))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Container);
    e.IntensiveLines = r
}