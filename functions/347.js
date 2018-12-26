const function347 = function (t, e, i) {
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
    var o = i(9),
        r = i(3),
        s = i(32),
        a = function (t) {
            function e(e, i) {
                void 0 === e && (e = 240), void 0 === i && (i = 60);
                var n = t.call(this) || this;
                n._mokuTextureList = [], n._mokuArea = [], n._mokuTween = [], n._materialTextureList = [], n._materialArea = [], n._materialTween = [];
                var a = new PIXI.Container;
                n._materialTextureList = [o.COMMON_MISC.getTexture(86), o.COMMON_MISC.getTexture(87), o.COMMON_MISC.getTexture(88), o.COMMON_MISC.getTexture(89)];
                for (var _ = 0; _ < 5; _++) {
                    var l = new s.Sprite;
                    l.alpha = 0, a.addChild(l), n._materialArea.push(l)
                }
                var u = new PIXI.Container;
                n._mokuTextureList = [r.ARSENAL_MAIN.getTexture(123), r.ARSENAL_MAIN.getTexture(124)];
                for (var c = 0; c < 20; c++) {
                    var l = new s.Sprite;
                    l.alpha = 0, l.anchor.set(.5, .5), u.addChild(l), n._mokuArea.push(l)
                }
                return n.RANGE = {
                    width: e,
                    height: i
                }, n.addChild(a, u), n
            }
            return n(e, t), e.prototype.play = function (t) {
                void 0 === t && (t = 5), this._stop(), this._mokuAnimation(), this._materialAnimation(t)
            }, e.prototype._stop = function () {
                for (var t = 0, e = this._mokuTween.length; t < e; t++) createjs.Tween.removeTweens(this._mokuTween[t]), this._mokuTween[t] = null;
                for (var i = 0, n = this._materialTween.length; i < n; i++) this._materialTween[i].removeAllEventListeners("change"), createjs.Tween.removeTweens(this._materialTween[i]), this._materialTween[i] = null
            }, e.prototype._mokuAnimation = function () {
                for (var t = 0, e = this._mokuArea.length; t < e; t++) {
                    var i = this._mokuArea[t],
                        n = 2 * Math.random() >> 0;
                    i.texture = this._mokuTextureList[n];
                    var o = .75 * (.4 * Math.random() + .6);
                    i.x = Math.random() * this.RANGE.width, i.y = Math.random() * this.RANGE.height, i.alpha = 0, this._mokuTween[t] = createjs.Tween.get(i, {
                        loop: !0
                    }).wait(100 * t).to({
                        alpha: 0,
                        scaleX: o,
                        scaleY: o
                    }).to({
                        alpha: 1,
                        scaleX: 0,
                        scaleY: 0
                    }, 600, createjs.Ease.linear).play(null)
                }
            }, e.prototype._materialAnimation = function (t) {
                for (var e = this, i = this, n = 0, o = this._materialArea.length; n < o; n++) ! function (n, o) {
                    var r = i._materialArea[n];
                    if (r.alpha = 0, i._materialTween[n] = null, n > t) return "continue";
                    var s = {
                            progress: 0
                        },
                        a = createjs.Tween.get(s, {
                            loop: !0
                        }).wait(1e3 * n).call(function () {
                            var t = 4 * Math.random() >> 0;
                            r.texture = e._materialTextureList[t];
                            var i = 30 / createjs.Ticker.framerate,
                                n = Math.random() * e.RANGE.width,
                                o = Math.random() * e.RANGE.height,
                                _ = 1.999 * Math.random() * Math.PI,
                                l = .4 * Math.random() + .6,
                                u = 8 * l * Math.cos(_),
                                c = 8 * l * Math.sin(_) - 8,
                                h = function () {
                                    r.x += u * i, r.y += c * i, r.alpha = 1 - s.progress, c += .7 * i
                                };
                            r.alpha = 1, r.position.set(n, o), a.addEventListener("change", h)
                        }).to({
                            progress: 1
                        }, 600).call(function () {
                            a.removeAllEventListeners("change")
                        }).play(null);
                    i._materialTween[n] = a
                }(n)
            }, e.prototype.dispose = function () {
                this._stop(), this.removeChildren()
            }, e
        }(PIXI.Container);
    e.DisassemblyAnimation = a
}