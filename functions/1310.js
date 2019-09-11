const function1310 = function (t, e, i) {
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
    var o = i(12),
        r = i(6),
        s = i(19),
        a = i(1311),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._direction = 2, e._wave = new a.CompShipWave, e._under = new PIXI.Container, e._ship = new o.Sprite, e._ship.anchor.set(.5, 1), e._over = new PIXI.Container, e.addChild(e._wave), e.addChild(e._under), e.addChild(e._ship), e.addChild(e._over), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "direction", {
                get: function () {
                    return this._direction
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "under", {
                get: function () {
                    return this._under
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ship", {
                get: function () {
                    return this._ship
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                var e;
                e = 1 == t ? 150 : 2 == t ? 151 : 3 == t ? 152 : 149, this._ship.texture = s.MAP_COMMON.getTexture(e)
            }, e.prototype.startWaveWhite = function () {
                this._startWave(49)
            }, e.prototype.startWaveRed = function (t) {
                var e = this;
                this._startWave(48);
                var i = new l;
                i.initialize(), i.alpha = 0, i.scale.set(0), i.y = -51, this._over.addChild(i), createjs.Tween.get(i).to({
                    y: -75,
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1
                }, 200).to({
                    y: -68
                }, 200).to({
                    y: -78,
                    scaleX: 1.3,
                    scaleY: .6
                }, 200).to({
                    y: -59,
                    scaleX: 1,
                    scaleY: 1
                }, 200).to({
                    y: -68
                }, 200).to({
                    alpha: 0
                }, 100).call(function () {
                    e._over.removeChild(i), t()
                })
            }, e.prototype.stopWave = function () {
                this._wave.deactivate()
            }, e.prototype.turn = function (t, e, i) {
                if (void 0 === e && (e = null), void 0 === i && (i = 300), this._direction == t) null != e && e();
                else {
                    this._direction = t;
                    var n = 2 == t ? 1 : -1,
                        o = createjs.Tween.get(this._ship);
                    o.to({
                        scaleX: n
                    }, i), null != e && o.call(e)
                }
            }, e.prototype._startWave = function (t) {
                this._wave.update(t), this._wave.activate(), createjs.Tween.get(this).wait(500).call(function () {
                    r.SE.play("252")
                }).wait(2e3).call(function () {
                    r.SE.play("252")
                })
            }, e
        }(PIXI.Container);
    e.CompShipIcon = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e
        }
        return n(e, t), Object.defineProperty(e.prototype, "scaleX", {
            get: function () {
                return this.scale.x
            },
            set: function (t) {
                this.scale.x = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "scaleY", {
            get: function () {
                return this.scale.y
            },
            set: function (t) {
                this.scale.y = t
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = s.MAP_COMMON.getTexture(100)
        }, e
    }(PIXI.Sprite)
}