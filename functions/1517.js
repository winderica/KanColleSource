const function1517 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(17),
        a = i(55),
        _ = i(2),
        l = i(8),
        u = i(59),
        c = i(206),
        h = i(24),
        p = i(6),
        d = i(10),
        f = i(36),
        y = i(1518),
        m = i(486),
        g = i(1),
        v = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._voice_played = !1, n._next_map_ids = i, n._canvas = new PIXI.Container, e.addChild(n._canvas), n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                createjs.Tween.get(null).wait(1e3).call(function () {
                    t._showTelopBG()
                })
            }, e.prototype._showTelopBG = function () {
                var t = this;
                this._telop_bg = new PIXI.Sprite(d.COMMON_MISC.getTexture(120)), this._telop_bg.y = o.default.height / 2 - Math.round(this._telop_bg.height / 2), this._telop_bg.alpha = 0, this._canvas.addChild(this._telop_bg);
                var e = new PIXI.Sprite(f.BATTLE_RESULT_MAIN.getTexture(24));
                e.y = o.default.height / 2 - Math.round(e.height / 2), this._canvas.addChild(e), createjs.Tween.get(this._telop_bg).to({
                    alpha: 1
                }, 500), createjs.Tween.get(e).to({
                    alpha: 0
                }, 500).wait(200).call(function () {
                    t._canvas.removeChild(e), t._showMapIcon()
                })
            }, e.prototype._showMapIcon = function () {
                var t = this;
                if (null != this._next_map_ids && 0 != this._next_map_ids.length) {
                    var e = this._next_map_ids.shift();
                    this._map_icon = new b, this._map_icon.scale.set(1.58), this._map_icon.alpha = 0, this._map_icon.position.set(o.default.width / 2, o.default.height / 2), this._canvas.addChild(this._map_icon), this._message = new w, this._message.update(e), this._message.alpha = 0, this._message.position.set(o.default.width / 2, 581), this._canvas.addChild(this._message);
                    var i = a.MapUtil.toAreaID(e),
                        n = a.MapUtil.toMapNo(e);
                    this._map_icon.load(i, n, function () {
                        createjs.Tween.get(t._map_icon).to({
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        }, 300), createjs.Tween.get(t._message).to({
                            alpha: 1
                        }, 300).call(function () {
                            t._showParticle(e)
                        })
                    })
                }
            }, e.prototype._showParticle = function (t) {
                var e = this;
                if (this._particles = new m.ParticleLayer, this._particles.addParticle(222, -110), this._particles.addParticle(245, -87), this._particles.addParticle(200, -87), this._particles.addParticle(-200, 20), this._particles.addParticle(-245, 20), this._particles.addParticle(-177, 42), this._particles.addParticle(-222, 42), this._particles.addParticle(-155, 65), this._particles.addParticle(-200, 65), this._particles.addParticle(-245, 65), this._particles.addParticle(-132, 87), this._particles.addParticle(-177, 87), this._particles.addParticle(-222, 87), this._particles.addParticle(-200, 110), this._particles.position.set(o.default.width / 2, o.default.height / 2), this._canvas.addChild(this._particles), this._particles.startAnimation(), p.SE.play("243"), 1 == a.MapUtil.toMapNo(t)) {
                    var i = a.MapUtil.toAreaID(t);
                    this._area_icon = new y.AreaIcon, this._area_icon.initialize(i), this._area_icon.x = o.default.width / 2 + this._area_icon.width / 2, this._area_icon.scale.set(1.33), this._map_icon.addChild(this._area_icon), createjs.Tween.get(this._area_icon).wait(200).to({
                        x: 0
                    }, 400).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 400).wait(100).call(function () {
                        e._hide(t)
                    })
                } else createjs.Tween.get(null).wait(1100).call(function () {
                    e._hide(t)
                })
            }, e.prototype._hide = function (t) {
                var e = this;
                a.MapUtil.toAreaID(t) == s.EVENT_AREA_ID && 0 == this._voice_played && (r.default.sound.voice.play("9999", 426), this._voice_played = !0), null != this._next_map_ids && this._next_map_ids.length > 0 ? (createjs.Tween.get(this._map_icon).wait(800).to({
                    x: -525
                }, 300), createjs.Tween.get(this._message).wait(800).to({
                    alpha: 0
                }, 300), createjs.Tween.get(this._particles).wait(800).to({
                    alpha: 0
                }, 300).call(function () {
                    e._particles.stopAnimation(), e._canvas.removeChild(e._map_icon), e._canvas.removeChild(e._message), e._canvas.removeChild(e._particles)
                }).wait(1e3).call(function () {
                    e._showMapIcon()
                })) : this._hideLast()
            }, e.prototype._hideLast = function () {
                var t = this,
                    e = new l.AreaBox(0);
                e.buttonMode = !0;
                var i = new u.GearBtnNext;
                i.position.set(1137, 654), i.initialize(), i.activate(), e.addChild(i), this._canvas.addChild(e), e.once(g.EventType.CLICK, function () {
                    t._canvas.removeChild(e), createjs.Tween.get(t._canvas).to({
                        alpha: 0
                    }, 400).call(function () {
                        t._particles.stopAnimation(), i.deactivate(), t._canvas.parent.removeChild(t._canvas), t._endTask()
                    })
                })
            }, e
        }(_.TaskBase);
    e.TaskMapOpen = v;
    var b = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._image = new c.MapThumbnailImage, e.addChild(e._image), e
            }
            return n(e, t), e.prototype.load = function (t, e, i) {
                var n = this;
                this._image.setImage(t, e, function () {
                    n._image.x = -Math.round(n._image.width / 2), n._image.y = -Math.round(n._image.height / 2), null != i && i()
                })
            }, e
        }(h.Container),
        w = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._image = new PIXI.Sprite, e.addChild(e._image), e
            }
            return n(e, t), e.prototype.update = function (t) {
                var e = a.MapUtil.toMapNo(t);
                this._image.texture = 1 == e ? f.BATTLE_RESULT_MAIN.getTexture(80) : f.BATTLE_RESULT_MAIN.getTexture(79), this._image.x = -Math.round(this._image.width / 2), this._image.y = -Math.round(this._image.height / 2)
            }, e
        }(PIXI.Container)
}