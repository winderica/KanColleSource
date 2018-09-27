const function1173 = function (t, e, i) {
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
    var o = i(11), r = i(3), s = i(3), a = i(3), _ = i(3), u = i(3), l = i(3), c = i(237), h = i(1),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._waitClick = function () {
                    i._layer.buttonMode = !0, i._layer.once(h.EventType.CLICK, i._onClick)
                }, i._onClick = function () {
                    i._layer.buttonMode = !1, i._chara.texture = i._getPosterGirlTexture2(), createjs.Tween.get(i._chara).wait(300).to({ x: 1200 }, 500, createjs.Ease.sineInOut).call(function () {
                        i._layer.removeChild(i._chara), i._endTask()
                    })
                }, i._layer = e, i
            }

            return n(e, t), e.prototype._start = function () {
                var t = this._getPosterGirlTexture1();
                this._chara = new PIXI.Sprite(t), this._chara.position.set(760, 705), this._layer.addChild(this._chara), createjs.Tween.get(this._chara).to({ y: 45 }, 500).call(this._waitClick)
            }, e.prototype._endTask = function () {
                this._layer = null, this._chara = null, t.prototype._endTask.call(this)
            }, e.prototype._getPosterGirlTexture1 = function () {
                return 0 == c.POSTER_GIRL ? r.DUTY_POSTER_GIRL.getTexture(0) : 1 == c.POSTER_GIRL ? s.DUTY_POSTER_GIRL_GYUDON.getTexture(0) : 2 == c.POSTER_GIRL ? a.DUTY_POSTER_GIRL_NEWYEAR.getTexture(0) : 3 == c.POSTER_GIRL ? _.DUTY_POSTER_GIRL_SANMA.getTexture(0) : 4 == c.POSTER_GIRL ? u.DUTY_POSTER_GIRL_SUMMER.getTexture(0) : 5 == c.POSTER_GIRL ? l.DUTY_POSTER_GIRL_XMAS.getTexture(0) : void 0
            }, e.prototype._getPosterGirlTexture2 = function () {
                return 0 == c.POSTER_GIRL ? r.DUTY_POSTER_GIRL.getTexture(1) : 1 == c.POSTER_GIRL ? s.DUTY_POSTER_GIRL_GYUDON.getTexture(1) : 2 == c.POSTER_GIRL ? a.DUTY_POSTER_GIRL_NEWYEAR.getTexture(1) : 3 == c.POSTER_GIRL ? _.DUTY_POSTER_GIRL_SANMA.getTexture(1) : 4 == c.POSTER_GIRL ? u.DUTY_POSTER_GIRL_SUMMER.getTexture(1) : 5 == c.POSTER_GIRL ? l.DUTY_POSTER_GIRL_XMAS.getTexture(1) : void 0
            }, e
        }(o.TaskBase);
    e.TaskPosterGirl = p
}