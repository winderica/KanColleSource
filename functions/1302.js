const function1302 = function (t, e, i) {
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
        r = i(2),
        s = i(1),
        a = i(8),
        _ = i(4),
        l = i(12),
        u = i(13),
        c = i(1303),
        h = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._waitClick = function () {
                    o._click_area.buttonMode = !0, o._gear.visible = !0, o._gear.activate(), o._click_area.once(s.EventType.CLICK, function () {
                        o._hideLayer()
                    })
                }, o._deck_name = i, o._mst_id = n, o._layer = new PIXI.Container, e.addChild(o._layer), o
            }
            return n(e, t), e.prototype._start = function () {
                o.default.sound.bgm.play(5, !1, 0, "fanfare"), this._load()
            }, e.prototype._load = function () {
                var t = this;
                (new u.ShipLoader).add(this._mst_id, !0, "full").load(function () {
                    t._loaded()
                })
            }, e.prototype._loaded = function () {
                var t = this,
                    e = o.default.model.ship_graph.get(this._mst_id).getBattleOffset(!0),
                    i = o.default.resources.getShip(this._mst_id, !0, "full");
                this._chara = new PIXI.Sprite(i), this._chara.alpha = 0, this._chara_base_x = -45 + e.x, this._chara.position.set(this._chara_base_x - 405, -90 + e.y), this._layer.addChild(this._chara), createjs.Tween.get(this._chara).to({
                    x: this._chara_base_x - 45,
                    alpha: .6
                }, 700).call(function () {
                    t._show()
                })
            }, e.prototype._show = function () {
                var t = this,
                    e = o.default.model.ship.getMst(this._mst_id).name;
                this._smokeLayer = new d, this._smokeLayer.initialize(), this._mes_box = new p, this._mes_box.alpha = 0, this._mes_box.position.set(603, 360), this._mes_box.initialize(this._deck_name, e), this._img = new PIXI.Sprite(c.MAP_FLAGSHIP_DAMAGE.getTexture(6)), this._img.alpha = 0, this._img.anchor.set(.5), this._img.position.set(981, 180), this._gear = new y, this._gear.position.set(1125, 618), this._gear.visible = !1, this._gear.initialize(), this._click_area = new a.AreaBox(0), this._layer.addChild(this._smokeLayer), this._layer.addChild(this._mes_box), this._layer.addChild(this._img), this._layer.addChild(this._gear), this._layer.addChild(this._click_area), createjs.Tween.get(this._img).wait(200).call(function () {
                    t._smokeLayer.start(), o.default.sound.voice.play(t._mst_id.toString(), 20)
                }).wait(400).to({
                    alpha: 1
                }, 600).call(function () {
                    t._showText()
                }), createjs.Tween.get(this._mes_box).wait(100).to({
                    alpha: 1
                }, 600), createjs.Tween.get(this._chara).to({
                    x: this._chara_base_x,
                    alpha: 1
                }, 300)
            }, e.prototype._showText = function () {
                this._mes_box.once("complete", this._waitClick), this._mes_box.start()
            }, e.prototype._hideLayer = function () {
                var t = this;
                createjs.Tween.get(this._layer).to({
                    alpha: 0
                }, 200).call(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer && this._layer.parent && this._layer.parent.removeChild(this._layer), this._smokeLayer.stop(), this._mes_box.dispose(), this._gear.dispose(), t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskFlagShipDamaged = h;
    var p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._timer_id = -1, e._anim = function () {
                    if (e._text1.length > 0) {
                        var t = e._text1.charAt(0);
                        e._text1 = e._text1.slice(1), e._line1.text += t
                    } else if (e._text2.length > 0) {
                        var t = e._text2.charAt(0);
                        e._text2 = e._text2.slice(1), e._line2.text += t
                    } else if (e._text3.length > 0) {
                        var t = e._text3.charAt(0);
                        e._text3 = e._text3.slice(1), e._line3.text += t
                    } else clearInterval(e._timer_id), e._timer_id = -1, e.emit("complete")
                }, e._bg = new PIXI.Sprite, e._line1 = new _.TextBox(30, 16777215), e._line1.position.set(33, 78), e._line2 = new _.TextBox(30, 16777215), e._line2.position.set(33, 132), e._line3 = new _.TextBox(20, 16777215), e._line3.position.set(33, 225), e.addChild(e._bg), e.addChild(e._line1), e.addChild(e._line2), e.addChild(e._line3), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._bg.texture = c.MAP_FLAGSHIP_DAMAGE.getTexture(2), this._text1 = "\u300c" + t + "\u300d\u65d7\u8266", this._text2 = "\u300c" + e + "\u300d\u304c\u5927\u7834\u3057\u307e\u3057\u305f\u3002", this._line2.alpha = 0, this._line2.text = this._text2, this._line2.width > 540 && (this._text2 = "\u300c" + e + "\u300d\n\u304c\u5927\u7834\u3057\u307e\u3057\u305f\u3002"), this._line2.alpha = 1, this._line2.text = "", this._text3 = "\u6b8b\u5ff5\u3067\u3059\u304c\u9032\u6483\u306f\u56f0\u96e3\u3067\u3059...\u6bcd\u6e2f\u306b\u5e30\u6295\u3057\u307e\u3059\u3002"
            }, e.prototype.start = function () {
                this._timer_id = setInterval(this._anim, 50)
            }, e.prototype.dispose = function () {
                this._timer_id >= 0 && (clearInterval(this._timer_id), this._timer_id = -1), this.removeChildren(), this._line1.destroy(), this._line2.destroy(), this._line3.destroy()
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._smoke1 = new f, e._smoke1.position.set(276, 180), e._smoke2 = new f, e._smoke2.position.set(450, 336), e._smoke3 = new f, e._smoke3.position.set(219, 558), e.addChild(e._smoke1), e.addChild(e._smoke2), e.addChild(e._smoke3), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._smoke1.initialize(), this._smoke2.initialize(), this._smoke3.initialize()
            }, e.prototype.start = function () {
                this._smoke1.start(), this._smoke2.start(), this._smoke3.start()
            }, e.prototype.stop = function () {
                this._smoke1.stop(), this._smoke2.stop(), this._smoke3.stop()
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._s1 = new l.Sprite, e._s1.anchor.set(.5), e._s2 = new PIXI.Sprite, e._s2.anchor.set(.5), e._s3 = new PIXI.Sprite, e._s3.anchor.set(.5), e.addChild(e._s1), e.addChild(e._s2), e.addChild(e._s3), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._initialize(), this._s1.texture = c.MAP_FLAGSHIP_DAMAGE.getTexture(3), this._s2.texture = c.MAP_FLAGSHIP_DAMAGE.getTexture(4), this._s3.texture = c.MAP_FLAGSHIP_DAMAGE.getTexture(5)
            }, e.prototype.start = function () {
                var t = this;
                if (null == this._t1 && null == this._t2 && null == this._t3) {
                    var e = 1e3 * Math.random();
                    this._t1 = createjs.Tween.get(this._s1).wait(e).to({
                        y: 0,
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 200).to({
                        y: -60,
                        alpha: 0,
                        scaleX: .8,
                        scaleY: .8
                    }, 400), this._t2 = createjs.Tween.get(this._s2).wait(e + 200).to({
                        y: -38,
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 150).to({
                        y: -75,
                        alpha: 0,
                        scaleX: .8,
                        scaleY: .8
                    }, 400), this._t3 = createjs.Tween.get(this._s3).wait(e + 400).to({
                        y: -105,
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 150).to({
                        y: -128,
                        alpha: 0,
                        scaleX: .75,
                        scaleY: .75
                    }, 400).call(function () {
                        t._t1 = null, t._t2 = null, t._t3 = null, t._initialize(), t.start()
                    })
                }
            }, e.prototype.stop = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t1 = null), null != this._t2 && (this._t2.setPaused(!0), this._t2 = null), null != this._t3 && (this._t3.setPaused(!0), this._t3 = null), this._initialize()
            }, e.prototype._initialize = function () {
                this._s1.alpha = 0, this._s1.scale.set(.6), this._s1.position.set(0, 45), this._s2.alpha = 0, this._s2.scale.set(.6), this._s2.position.set(60, -23), this._s3.alpha = 0, this._s3.scale.set(.6), this._s3.position.set(0, -75)
            }, e
        }(PIXI.Container),
        y = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gear = new PIXI.Sprite, e._gear.anchor.set(.5), e._content = new PIXI.Sprite, e._content.anchor.set(.5), e.addChild(e._gear), e.addChild(e._content), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._gear.texture = c.MAP_FLAGSHIP_DAMAGE.getTexture(0), this._content.texture = c.MAP_FLAGSHIP_DAMAGE.getTexture(1)
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this._gear, {
                    loop: !0
                }).to({
                    rotation: 2 * Math.PI
                }, 6e3))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container)
}