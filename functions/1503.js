const function1503 = function (t, e, i) {
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
                var e = t.call(this) || this;
                return e._coin = new PIXI.Sprite, e._coin.anchor.set(.5), e._coin_white = new PIXI.Sprite, e._coin_white.anchor.set(.5), e._coin_white.alpha = 0, e._p1 = new s, e._p1.position.set(-14, -14), e._p2 = new s, e._p2.position.set(14, 14), e.addChild(e._coin), e.addChild(e._coin_white), e.addChild(e._p1), e.addChild(e._p2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._coin.texture = o.BATTLE_RESULT_MAIN.getTexture(13), this._coin_white.texture = o.BATTLE_RESULT_MAIN.getTexture(14), this._p1.initialize(), this._p2.initialize()
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this._coin_white).wait(166).to({
                    alpha: 1
                }, 166).to({
                    alpha: 0
                }, 333), this._t.loop = !0, this._p1.activate(), this._p2.activate())
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null, this._p1.deactivate(), this._p2.deactivate())
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container);
    e.MVPCoin = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._activated = !1, e.scale.y = 0, e._content = new PIXI.Sprite, e._content.anchor.set(.5), e._content.scale.set(.1), e._content.rotation = Math.PI / 4, e.addChild(e._content), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this._content.texture = o.BATTLE_RESULT_MAIN.getTexture(10)
        }, e.prototype.activate = function () {
            1 != this._activated && (this._activated = !0, this._anim())
        }, e.prototype.deactivate = function () {
            this._activated = !1, null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e.prototype._anim = function () {
            var t = this;
            null == this._t && (this._t = createjs.Tween.get(this.scale).call(function () {
                t.rotation = (Math.random() < .5 ? 1 : -1) * Math.PI / 4
            }).wait(200 + 800 * Math.random()).to({
                y: 1
            }, 300, createjs.Ease.cubicOut).to({
                y: 0
            }, 300, createjs.Ease.cubicIn).call(function () {
                t._t = null, t._anim()
            }))
        }, e
    }(PIXI.Container)
}