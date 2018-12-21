const function189 = function (t, e, i) {
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
    var o = i(5), r = i(9), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._PETAL_NUM = 20, e._NowPlaying = !1, e._petals = new Array, e
        }

        return n(e, t), e.prototype.startAnimation = function (t, e) {
            if (void 0 === t && (t = null), void 0 === e && (e = this._PETAL_NUM), !this._NowPlaying) {
                this._NowPlaying = !0;
                for (var i = 0; i < e; i++) this._petals[i] = new a(t), this.addChild(this._petals[i])
            }
        }, e.prototype.stopAnimation = function (t) {
            if (void 0 === t && (t = this._PETAL_NUM), this._NowPlaying) {
                for (var e = 0; e < t; e++) this._petals[e] instanceof a && (this._petals[e].switchFlag(!1), this.removeChild(this._petals[e]));
                this._NowPlaying = !1
            }
        }, e
    }(PIXI.Container);
    e.Sakura = s;
    var a = function (t) {
        function e(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i._swt = !0, i._area = null == e ? new PIXI.Rectangle(0, 0, o.default.width, o.default.height) : e, i.anchor.set(.5, .5), i._createTween(), i
        }

        return n(e, t), e.prototype._createTween = function () {
            var t = this;
            if (this._swt) {
                for (var e = this._area.x, i = this._area.y; e <= this._area.x + this._area.width && i <= this._area.y + this._area.height;) e = this._area.x + .8 * this._area.width + this._randomInt(600), i = this._area.y + .2 * this._area.height - this._randomInt(600);
                var n = 5 + this._randomInt(5),
                    s = -5 - this._randomInt(n * this._area.width / this._area.height - 5), a = e, _ = i,
                    l = this._randomInt(960) - o.default.height;
                l = l * Math.PI / 180;
                for (var u = 0; a > -60 && _ < 780;) a += s, _ += n, u++;
                this.x = e, this.y = i;
                var c = [149, 150, 151, 152, 153][this._randomInt(5)];
                this.texture = r.COMMON_MISC.getTexture(c), createjs.Tween.get(this).to({
                    x: a,
                    y: _,
                    rotation: l
                }, u / 30 * 1e3).call(function () {
                    t._createTween()
                })
            }
        }, e.prototype.switchFlag = function (t) {
            this._swt = t
        }, e.prototype._randomInt = function (t) {
            return Math.floor(Math.random() * t)
        }, e
    }(PIXI.Sprite)
}