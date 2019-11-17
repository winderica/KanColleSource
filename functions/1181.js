const function1181 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = i(8),
        a = i(1),
        _ = i(242),
        l = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._onClose = function () {
                    o._bg.buttonMode = !1, o._bg.off(a.EventType.CLICK, o._onClose), null != o._t && (o._t.setPaused(!0), o._t = null), createjs.Tween.get(o._chara).to({
                        y: 450,
                        alpha: 0
                    }, 300).call(function () {
                        o._layer.removeChild(o._bg), o._layer.removeChild(o._chara), o._endTask()
                    })
                }, o._layer = e, o._page_no = i, o._count = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._bg = new s.AreaBox(0, 0, 1200, 720), this._layer.addChild(this._bg);
                var e = PIXI.Sprite.fromFrame(_.POSTER_KEY_1),
                    i = _.getPosterOffsetWelcome();
                null != i && (e.x = i.x, e.y = i.y), this._chara = new PIXI.Sprite, this._chara.addChild(e), this._chara.position.set(1200, 0), this._layer.addChild(this._chara), 0 == this._page_no ? this._count <= 1 && o.default.sound.voice.playAtRandom("9999", [311, 312], [60, 40]) : o.default.sound.voice.play("9999", 315), this._bg.interactive = !0, this._bg.buttonMode = !0, this._bg.once(a.EventType.CLICK, this._onClose), this._t = createjs.Tween.get(this._chara).to({
                    x: 660
                }, 300).call(function () {
                    t._t = null
                })
            }, e
        }(r.TaskBase);
    e.TaskWelcomeCutin = l
}