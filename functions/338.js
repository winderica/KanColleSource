const function338 = function (t, e, i) {
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
        r = i(8),
        s = i(60),
        a = i(13),
        _ = i(814),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._clickGuard = new r.AreaBox(0), i._background = new s.RarityBG, i._ship = new PIXI.Sprite, i._elements = new l(e), i._white = new r.AreaBox(1, 16777215), i
            }
            return n(e, t), e.prototype.preload = function (t, e, i, n) {
                var r = this,
                    s = new a.ShipLoader;
                s.add(t, e, "full"), s.load(function () {
                    r._ship.texture = o.default.resources.getShip(t, e, "full"), e ? (r._ship.x = i.x + 228, r._ship.y = i.y - 27) : (r._ship.x = i.x + 213, r._ship.y = i.y - 62), r._background.initiailzeForShip(3, function () {
                        null != n && n()
                    })
                })
            }, e.prototype.play = function (t, e) {
                this._cb_onPreComplete = t, this._cb_onComplete = e, this.addChild(this._clickGuard), this._background.visible = !1, this.addChild(this._background), this._ship.visible = !1, this.addChild(this._ship), this._01_whiteInOut()
            }, e.prototype._01_whiteInOut = function () {
                var t = this;
                this._white.alpha = 0, this.addChild(this._white), createjs.Tween.get(this._white).to({
                    alpha: 1
                }, 500).call(function () {
                    t._background.visible = !0, t._ship.visible = !0
                }).to({
                    alpha: 0
                }, 500).call(function () {
                    t.removeChild(t._white), t._02_animElements()
                })
            }, e.prototype._02_animElements = function () {
                var t = this;
                this.addChild(this._elements), this._elements.play(function () {
                    t.removeChild(t._elements), null != t._cb_onPreComplete && t._cb_onPreComplete(), t._03_link()
                })
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._cb_onPreComplete = null, this._cb_onComplete = null, this._clickGuard = null, this._background.dispose(), this._background = null, this._ship = null, this._elements.dispose(), this._elements = null, this._white = null
            }, e
        }(PIXI.Container);
    e.PowerUpAnimation = u;
    var l = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.PROGRESS_WEIGHT = 50, i.ALLROT = 4, i.animation = {
                progress: 0
            }, i._onUpdate = function () {
                for (var t = i.animation.progress, e = i._positions, n = 2 + t * i.PROGRESS_WEIGHT * .05, o = 0; o < i._elements.length; o++) {
                    var r = i._elements[o];
                    if (r.alpha = 0, o < e.length) {
                        var s = 1;
                        t > .5 && (s = 1 - (t - .5) / .5);
                        var a = e[o][0] - 600,
                            _ = e[o][1] - 360,
                            u = Math.sqrt(a * a + _ * _),
                            l = Math.atan2(_, a);
                        l += i.ALLROT * Math.PI / 180 * (t * i.PROGRESS_WEIGHT), u -= n * (t * i.PROGRESS_WEIGHT);
                        var c = u * Math.cos(l) + 600,
                            h = u * Math.sin(l) + 360;
                        r.x = c, r.y = h, r.alpha = s
                    }
                }
            }, i._elements = [];
            for (var n = 0; n < e; n++) {
                var o = new _.PowerElement;
                o.renderable = !1, o.updateRotationTable(), i._elements.push(o)
            }
            return i._positions = i._getPowerElementOffset(e), i
        }
        return n(e, t), e.prototype.play = function (t) {
            for (var e = this, i = 0, n = this._elements; i < n.length; i++) {
                var o = n[i];
                o.renderable = !0, o.alpha = 0, this.addChild(o)
            }
            this.animation.progress = 0, this._onUpdate();
            var r = createjs.Tween.get(this.animation, {
                onChange: this._onUpdate
            }).to({
                progress: 1
            }, 1600).call(function () {
                r.removeAllEventListeners("change"), createjs.Tween.removeTweens(r.target), e.animation.progress = 1, e._onUpdate();
                for (var i = 0, n = e._elements; i < n.length; i++) {
                    var o = n[i];
                    o.renderable = !1, e.removeChild(o)
                }
                t()
            })
        }, e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.animation);
            for (var t = 0, e = this._elements; t < e.length; t++) {
                e[t].dispose()
            }
            this._elements = null
        }, e.prototype._getPowerElementOffset = function (t) {
            switch (t) {
                case 1:
                    return [
                        [293, 353]
                    ];
                case 2:
                    return [
                        [176, 192],
                        [1092, 621]
                    ];
                case 3:
                    return [
                        [176, 192],
                        [1092, 362],
                        [311, 648]
                    ];
                case 4:
                    return [
                        [114, 86],
                        [1092, 173],
                        [311, 648],
                        [1022, 585]
                    ];
                case 5:
                    return [
                        [71, 248],
                        [1092, 191],
                        [420, 69],
                        [1022, 585],
                        [171, 632]
                    ]
            }
            return []
        }, e
    }(PIXI.Container)
}