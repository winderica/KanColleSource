const function643 = function (t, e, i) {
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
    var o = i(104), r = i(307), s = i(105), a = i(1), _ = function (t) {
        function e(e, i, n) {
            var r = t.call(this) || this;
            return r._ImageManager = e, r._ev = i, r._shipId = n, r._charaPosition = {}, r._onNext = function () {
                r._messageBox.btn.interactive = !1, r._ev.emit("tutorial-next-scene")
            }, r._charaPosition[o.CHARA.FUBUKI] = { x: 208, y: -22 }, r._charaPosition[o.CHARA.MURAKUMO] = {
                x: -20,
                y: -112
            }, r._charaPosition[o.CHARA.SAZANAMI] = {
                x: 206,
                y: -22
            }, r._charaPosition[o.CHARA.INADUMA] = { x: 309, y: 14 }, r._charaPosition[o.CHARA.SAMIDARE] = {
                x: 232,
                y: 42
            }, r.alpha = 0, r
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = this._charaPosition[this._shipId], e = new PIXI.Container,
                i = new PIXI.Sprite(this._ImageManager.use(o.CHARA_PREFIX + "_" + this._shipId + "_" + o.CHARA_SUFFIX.FULL));
            i.position.set(t.x, t.y), e.addChild(i), this._messageBox = new r.MessageBoxView(this._ImageManager, this._ev), this._messageBox.message.text = "", this._messageBox.btn.on(a.EventType.CLICK, this._onNext), this.addChild(e, this._messageBox), this._ev.emit("tutorial-scene-start")
        }, e.prototype.start = function () {
            var t = this;
            this.alpha = 1, this._messageBox.start(), this._messageBox.btn.interactive = !0, this._messageBox.btn.buttonMode = !0, this._messageBox.flashText("\u63d0\u7763\u3001\u304a\u75b2\u308c\u3055\u307e\u3067\u3057\u305f\uff01\n\u305d\u308d\u305d\u308d\u3001\u79c1\u305f\u3061\u306e\u300c\u6bcd\u6e2f\u300d\u306b\u3044\u304d\u307e\u3057\u3087\u3046\uff01"), this._ev.emit("tutorial-play-voice", "tutorial", "034", function () {
                t._ev.emit("tutorial-play-voice", "tutorial", "035")
            })
        }, e.prototype.dispose = function () {
            this._messageBox.btn.off(a.EventType.CLICK, this._onNext), this.alpha = 0, this._ev.emit("tutorial-remove-scene")
        }, e
    }(s.SceneBase);
    e.SceneFinal = _
}