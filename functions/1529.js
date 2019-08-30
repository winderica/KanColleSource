const function1529 = function (t, e, i) {
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
    var o = i(36),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.show = function () {
                this.hide(), this._current = new s, this._current.y = 17, this._current.alpha = 0, this._current.activate(), this.addChild(this._current), createjs.Tween.get(this._current).to({
                    alpha: 1
                }, 800)
            }, e.prototype.hide = function () {
                var t = this;
                if (null != this._current) {
                    var e = this._current;
                    this._current = null, createjs.Tween.get(e).to({
                        alpha: 0
                    }, 600).call(function () {
                        e.deactivate(), t.removeChild(e)
                    })
                }
            }, e.prototype.dispose = function () {
                this.hide()
            }, e
        }(PIXI.Container);
    e.LayerTitle = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite(o.BATTLE_RESULT_MAIN.getTexture(65)), e._gear = new PIXI.Sprite(o.BATTLE_RESULT_MAIN.getTexture(66)), e._gear.anchor.set(.5), e._gear.position.set(32, 45), e._text = new PIXI.Sprite(o.BATTLE_RESULT_MAIN.getTexture(67)), e._text.position.set(60, 23), e.addChild(e._bg), e.addChild(e._gear), e.addChild(e._text), e
        }
        return n(e, t), e.prototype.activate = function () {
            null == this._t && (this._t = createjs.Tween.get(this._gear, {
                loop: !0
            }).to({
                rotation: 2 * Math.PI
            }, 6e3))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container)
}