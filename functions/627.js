const function627 = function (t, e, i) {
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
    var o = i(10),
        r = i(8),
        s = i(30),
        a = i(30),
        _ = i(310),
        l = i(205),
        u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._initBG = function () {
                var t = this;
                this._bg = new s.RarityBG, this._bg.initiailzeForUseitem(function () {
                    t._animation()
                })
            }, e.prototype._createItemTobe = function (t, e) {
                var i = o.COMMON_MISC.getTexture(49),
                    n = new l.CenteringSprite(i);
                return n.position.set(600, 240), n.alpha = 0, n.scale.set(.7), n
            }, e.prototype._change = function () {
                var e = this;
                t.prototype._change.call(this);
                var i = new PIXI.Sprite(o.COMMON_MISC.getTexture(68));
                i.x = -i.width / 2, i.y = -i.height / 2;
                var n = new a.Container;
                n.addChild(i), n.alpha = 0, n.x = 600, n.y = 360, this._layer.addChild(n), createjs.Tween.get(n).wait(650).to({
                    scaleX: 3.3,
                    scaleY: 3.3,
                    alpha: 1
                }, 350).to({
                    scaleX: 5,
                    scaleY: 5
                }, 300).wait(600).to({
                    alpha: 0
                }, 300).call(function () {
                    e._layer.removeChild(n)
                });
                var s = new r.AreaBox(1, 16777215);
                s.alpha = 0, this._layer.addChild(s), createjs.Tween.get(s).wait(650).wait(200).to({
                    alpha: 1
                }, 500).wait(600).to({
                    alpha: 0
                }, 300).call(function () {
                    e._layer.removeChild(s)
                })
            }, e
        }(_.ModelChangeTask);
    e.AirunitBaseOpenTask = u
}