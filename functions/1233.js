const function1233 = function (t, e, i) {
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
    var o = i(11),
        r = i(245),
        s = i(1),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._waitClick = function () {
                    i._layer.buttonMode = !0, i._layer.once(s.EventType.CLICK, i._onClick)
                }, i._onClick = function () {
                    i._layer.buttonMode = !1, i._chara.texture = PIXI.Texture.fromFrame(r.POSTER_KEY_2), createjs.Tween.get(i._chara).wait(300).to({
                        x: 1200
                    }, 500, createjs.Ease.sineInOut).call(function () {
                        i._layer.removeChild(i._chara), i._endTask()
                    })
                }, i._layer = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._chara = PIXI.Sprite.fromFrame(r.POSTER_KEY_1), this._chara.position.set(760, 705), this._layer.addChild(this._chara), createjs.Tween.get(this._chara).to({
                    y: 45
                }, 500).call(this._waitClick)
            }, e.prototype._endTask = function () {
                this._layer = null, this._chara = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskPosterGirl = a
}