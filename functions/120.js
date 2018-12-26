const function120 = function (t, e, i) {
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
        r = i(2),
        s = i(16),
        a = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._layer = e, r._a_banner = i, r._d_banner = n, r._type = o, r
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new _;
                e.initialize(this._type);
                var i = this._a_banner.getGlobalPos(),
                    n = this._d_banner.getGlobalPos();
                e.x = i.x, e.y = i.y - 15, e.alpha = 0, 1 == this._a_banner.friend ? (e.x += o.BannerSize.W / 3 * 2, e.rotation -= Math.PI / 180 * 10) : (e.x -= o.BannerSize.W / 3 * 2, e.rotation += Math.PI / 180 * 10, e.scale.x = -1);
                var r = new PIXI.Point;
                r.x = 600, r.y = i.y + (n.y - i.y) / 2, this._layer.addChild(e), createjs.Tween.get(e).to({
                    y: i.y,
                    alpha: 1,
                    rotation: 0
                }, 1e3, createjs.Ease.bounceOut).to({
                    x: r.x,
                    y: r.y
                }, 1e3, createjs.Ease.sineIn), createjs.Tween.get(e.img).wait(1800).to({
                    alpha: 0
                }, 200).call(function () {
                    t._layer.removeChild(e), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._a_banner = null, this._d_banner = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskDaihatsuEff = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e.addChild(e._img), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "img", {
            get: function () {
                return this._img
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function (t) {
            switch (t) {
                case 1:
                    this._img.texture = s.BATTLE_MAIN.getTexture(143), this._img.position.set(-45, -21);
                    break;
                case 2:
                    this._img.texture = s.BATTLE_MAIN.getTexture(142), this._img.position.set(-53, -24);
                    break;
                case 3:
                    this._img.texture = s.BATTLE_MAIN.getTexture(140), this._img.position.set(-45, -21);
                    break;
                case 4:
                    this._img.texture = s.BATTLE_MAIN.getTexture(141), this._img.position.set(-35, -24);
                    break;
                case 5:
                    this._img.texture = s.BATTLE_MAIN.getTexture(144), this._img.position.set(-45, -26);
                    break;
                default:
                    this._img.texture = PIXI.Texture.EMPTY
            }
        }, e
    }(PIXI.Container)
}