const function1323 = function (t, e, i) {
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
    var o = i(2),
        r = i(19),
        s = i(16),
        a = [{
            x: 0,
            y: 0,
            delay: 0
        }, {
            x: 0,
            y: -23,
            delay: 60
        }, {
            x: -45,
            y: 15,
            delay: 60
        }, {
            x: 45,
            y: 15,
            delay: 60
        }, {
            x: 0,
            y: 30,
            delay: 120
        }, {
            x: -75,
            y: -38,
            delay: 120
        }, {
            x: 75,
            y: -38,
            delay: 120
        }, {
            x: 0,
            y: -53,
            delay: 180
        }, {
            x: -98,
            y: 45,
            delay: 180
        }, {
            x: 98,
            y: 45,
            delay: 180
        }],
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._layer = e, n._pos = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._container = new PIXI.Container, this._container.x = this._pos.x, this._container.y = this._pos.y, this._layer.addChild(this._container);
                for (var e = new r.TweenTask, i = 0, n = a; i < n.length; i++) {
                    var o = n[i];
                    ! function (i) {
                        var n = new l;
                        n.Initialize(), n.x = i.x + 24 * Math.random() - 12, n.y = i.y + 6 * Math.random() - 3, n.x -= 18, n.y -= 18, n.alpha = 0;
                        var o = .6 * Math.random(),
                            r = createjs.Tween.get(n);
                        r.wait(i.delay), r.call(function () {
                            n.activate(), t._container.addChild(n)
                        }), r.to({
                            alpha: 1
                        }, 100), r.wait(.2 + Math.random() * o), r.to({
                            alpha: 0
                        }, 100), r.wait(100), r.to({
                            alpha: 1
                        }, 100), r.wait(.2 + Math.random() * (.6 - o)), r.to({
                            alpha: 0
                        }, 200), r.call(function () {
                            t._container.removeChild(n), n.deactivate()
                        }), e.addTween(r)
                    }(o)
                }
                e.start(function () {
                    t._layer.removeChild(t._container), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._pos = null, this._container = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskBannerParticle = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._update = function (t) {
                e._img.texture = 1 == t ? s.BATTLE_MAIN.getTexture(62) : s.BATTLE_MAIN.getTexture(63), e._img.x = e._img.width / 2, e._img.y = e._img.height / 2
            }, e._img = new PIXI.Sprite, e.addChild(e._img), e
        }
        return n(e, t), e.prototype.Initialize = function () {
            this._update(!0)
        }, e.prototype.activate = function () {
            null == this._t && (this._update(!0), this._t = createjs.Tween.get(null, {
                loop: !0
            }).wait(300).call(this._update, [!1]).wait(300).call(this._update, [!0]))
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container)
}