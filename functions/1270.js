const function1270 = function (t, e, i) {
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
    var o = i(5), r = i(60), s = i(18), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._container = new PIXI.Container, e.addChild(e._container), e._bg = new r.CenteringSprite, e._bg.scale.x = 1.2, e._container.addChild(e._bg), e._txt = new r.CenteringSprite, e._container.addChild(e._txt), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            switch (t) {
                case 1:
                    this._bg.texture = s.MAP_COMMON.getTexture(101), this._txt.texture = s.MAP_COMMON.getTexture(112);
                    break;
                case 2:
                    this._bg.texture = s.MAP_COMMON.getTexture(104), this._txt.texture = s.MAP_COMMON.getTexture(114);
                    break;
                case 3:
                    this._bg.texture = s.MAP_COMMON.getTexture(101), this._txt.texture = s.MAP_COMMON.getTexture(113);
                    break;
                case 4:
                    this._bg.texture = s.MAP_COMMON.getTexture(102), this._txt.texture = s.MAP_COMMON.getTexture(115)
            }
            this._container.y = -o.default.height / 2 - this._container.height
        }, e.prototype.playAnimation = function (t) {
            createjs.Tween.get(this._container).to({ y: 0 }, 600, createjs.Ease.sineOut).wait(1e3).to({ y: o.default.height / 2 + this.height }, 600, createjs.Ease.sineIn).call(t)
        }, e
    }(PIXI.Container);
    e.AirRaidResultTelop = a
}