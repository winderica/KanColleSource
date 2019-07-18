const function1306 = function (t, e, i) {
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
    var o = i(1307),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._dic = {}, e
            }
            return n(e, t), e.prototype.show = function (t, e, i, n) {
                null == t && (t = "");
                var o = t.toString();
                if (1 == this._dic.hasOwnProperty(o)) {
                    var r = this._dic[t];
                    r.hide(function () {
                        r.dispose()
                    })
                }
                var a = new s(o, e, this, i);
                this._dic[t] = a, a.show(n)
            }, e.prototype.hide = function (t, e) {
                if (void 0 === e && (e = null), null == t && (t = ""), 1 == this._dic.hasOwnProperty(t)) {
                    var i = this._dic[t];
                    delete this._dic[t], i.hide(function () {
                        i.dispose(), null != e && e()
                    })
                }
            }, e.prototype.hideAll = function (t) {
                void 0 === t && (t = null);
                var e = [];
                for (var i in this._dic) e.push(this._dic[i]);
                if (0 == e.length) null != t && t();
                else {
                    var n = e[0];
                    n.hide(function () {
                        n.dispose(), null != t && t()
                    });
                    for (var o = 1; o < e.length; o++) ! function (t) {
                        var i = e[t];
                        i.hide(function () {
                            i.dispose()
                        })
                    }(o)
                }
            }, e.prototype.dispose = function () {
                for (var t in this._dic) {
                    this._dic[t].dispose()
                }
                this._dic = null
            }, e
        }(PIXI.Container);
    e.MapPlaneLayer = r;
    var s = function () {
        function t(t, e, i, n) {
            void 0 === n && (n = 0), this._key = t, this._data = e, this._layer = i, this._time = n
        }
        return Object.defineProperty(t.prototype, "key", {
            get: function () {
                return this._key
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.show = function (t) {
            if (null == this._data) return void t();
            this._plane = new o.MapPlane, this._plane.alpha = 0, this._plane.initialize(this._data.type), this._data.from.x < this._data.to.x && (this._plane.scale.x = -1), this._plane.x = this._data.from.x, this._plane.y = this._data.from.y, this._layer.addChild(this._plane), this._plane.activate();
            var e = this._time;
            if (e <= 0) {
                var i = this._data.to.x - this._data.from.x;
                i = Math.pow(i, 2);
                var n = this._data.to.y - this._data.from.y;
                n = Math.pow(n, 2);
                e = Math.sqrt(i + n) / 40
            }
            var r = createjs.Tween.get(this._plane).to({
                    alpha: 1
                }, 500),
                s = createjs.Tween.get(this._plane).to({
                    x: this._data.to.x,
                    y: this._data.to.y
                }, e, createjs.Ease.sineInOut);
            null != t && (500 > e ? r.call(function () {
                t()
            }) : s.call(function () {
                t()
            })), this._tweens = [r, s]
        }, t.prototype.hide = function (t) {
            var e = this;
            if (void 0 === t && (t = null), this._stopTweens(), null == this._plane) return void(null != t && t());
            var i = createjs.Tween.get(this._plane).to({
                alpha: 0
            }, 200).call(function () {
                null != e._plane.parent && e._plane.parent.removeChild(e._plane), e._plane.deactivate(), e._plane = null, null != t && t()
            });
            this._tweens = [i]
        }, t.prototype.dispose = function () {
            this._stopTweens(), null != this._plane && (null != this._plane.parent && this._plane.parent.removeChild(this._plane), this._plane.deactivate(), this._plane = null), this._data = null, this._layer = null
        }, t.prototype._stopTweens = function () {
            if (null != this._tweens) {
                for (var t = 0, e = this._tweens; t < e.length; t++) {
                    e[t].setPaused(!0)
                }
                this._tweens = null
            }
        }, t
    }()
}