const function1400 = function (t, e, i) {
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
        s = i(18),
        a = i(12),
        _ = i(6),
        u = i(253),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new s.FadeBox(.9, 0), e._chara = new PIXI.Container, e._layer_bg = new c, e._layer_item = new h, e._layer_name = new p, e._layer_center = new d, e._layer_center_name = new f, e._bg.hide(0), e._layer_bg.x = o.default.width / 2, e._layer_item.x = o.default.width / 2, e._layer_name.x = o.default.width / 2, e._layer_center.x = o.default.width / 2, e._layer_center_name.position.set(o.default.width / 2, o.default.height / 2), e.addChild(e._bg), e.addChild(e._chara), e.addChild(e._layer_center), e.addChild(e._layer_bg), e.addChild(e._layer_item), e.addChild(e._layer_name), e.addChild(e._layer_center_name), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_bg", {
                get: function () {
                    return this._layer_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_item", {
                get: function () {
                    return this._layer_item
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_name", {
                get: function () {
                    return this._layer_name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_center", {
                get: function () {
                    return this._layer_center
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_center_name", {
                get: function () {
                    return this._layer_center_name
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                this._layer_bg.initialize(t), this._layer_item.initialize(t, e.getSlot2Texture(), e.getSlot3Texture()), this._layer_name.initialize(t, e.slot_mst_id2, e.slot_mst_id3), this._layer_center.initialize(t, e.getSlot1Texture()), this._layer_center_name.initialize(e.slot_mst_id1)
            }, e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container);
    e.CutinCanvasSpSRD = l;
    var c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg1 = new PIXI.Sprite, e._bg1.scale.x = -1, e._bg1.anchor.set(.5), e._bg1.position.set(-447, -173), e._bg1.alpha = 0, e.addChild(e._bg1), e._bg2 = new PIXI.Sprite, e._bg2.scale.x = -1, e._bg2.anchor.set(.5), e._bg2.position.set(596, 929), e._bg2.alpha = 0, e.addChild(e._bg2), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.scale.x = t ? 1 : -1;
                var e = t ? "battle_telop_mes_ybg3_f" : "battle_telop_mes_ybg3_e";
                this._bg1.texture = PIXI.Texture.fromFrame(e), this._bg2.texture = PIXI.Texture.fromFrame(e)
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg1).wait(t).to({
                    x: 305,
                    y: 63,
                    alpha: 1
                }, 233), createjs.Tween.get(this._bg2).wait(t).to({
                    x: 62,
                    y: 767,
                    alpha: 1
                }, 233)
            }, e
        }(PIXI.Container),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._item2 = new a.Sprite, e._item3 = new a.Sprite, e._item2.anchor.set(.5), e._item3.anchor.set(.5), e._item2.scale.set(1.5), e._item3.scale.set(1.5), e._item2.position.set(300, 845), e._item3.position.set(-174, -101), e._item2.alpha = 0, e._item3.alpha = 0, e.addChild(e._item2), e.addChild(e._item3);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-600, 398), new PIXI.Point(600, 773), new PIXI.Point(-600, 720)]), i.endFill(), i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(600, 0), new PIXI.Point(600, 315), new PIXI.Point(-600, -60)]), i.endFill(), e.addChild(i), e.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this.scale.x = t ? 1 : -1, this._item2.texture = e, this._item3.texture = i
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._item2).wait(t).call(function () {
                    _.SE.play("105")
                }).to({
                    x: -332,
                    y: 636,
                    alpha: 1
                }, 233).call(function () {
                    _.SE.play("109")
                }), createjs.Tween.get(this._item3).wait(t).to({
                    x: 326,
                    y: 54,
                    alpha: 1
                }, 233)
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this._item2).wait(t).to({
                    scaleX: 2,
                    scaleY: 2
                }, 500), createjs.Tween.get(this._item3).wait(t).to({
                    scaleX: 2,
                    scaleY: 2
                }, 500)
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._item2 = new PIXI.Sprite, e._item3 = new PIXI.Sprite, e._item2.scale.set(.76), e._item3.scale.set(.76), e._item2.alpha = 0, e._item3.alpha = 0, e.addChild(e._item2), e.addChild(e._item3), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._item2.anchor.set(t ? 0 : 1, .5), this._item3.anchor.set(t ? 1 : 0, .5), this._item2.position.set(-1028 * (t ? 1 : -1), 548), this._item3.position.set(1028 * (t ? 1 : -1), 173), this._friend = t, this._item2.texture = r.default.resources.getSlotitem(e, "btxt_flat"), this._item3.texture = r.default.resources.getSlotitem(i, "btxt_flat")
            }, e.prototype.show = function (t) {
                var e = this._friend ? 1 : -1;
                createjs.Tween.get(this._item2).wait(t).to({
                    x: -555 * e,
                    alpha: 1
                }, 200), createjs.Tween.get(this._item3).wait(t).to({
                    x: 555 * e,
                    alpha: 1
                }, 200)
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._bg.anchor.set(.5), e._bg.position.set(-986, 620), e._bg.alpha = 0, e.addChild(e._bg), e._item = new a.Sprite, e._item.anchor.set(.5), e._item.position.set(11, 393), e._item.scale.set(1.4), e._item.alpha = 0, e.addChild(e._item);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-600, 353), new PIXI.Point(600, 90), new PIXI.Point(600, 458), new PIXI.Point(-600, 713)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1, this._bg.rotation = Math.PI / 180 * 5.5, this._bg.scale.set(1.16);
                var i = t ? "battle_telop_mes_ybg3_f" : "battle_telop_mes_ybg3_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = e
            }, e.prototype.show = function (t) {
                var e = this;
                createjs.Tween.get(this._bg).wait(t).to({
                    x: 18,
                    y: 399,
                    alpha: 1
                }, 366).wait(200).call(function () {
                    var t = new u.Wave;
                    t.initialize(), t.position.set(0, 360), e.addChild(t), t.play()
                }), createjs.Tween.get(this._item).wait(t + 166).call(function () {
                    _.SE.play("105")
                }).to({
                    scaleX: .8,
                    scaleY: .8,
                    alpha: 1
                }, 500).call(function () {
                    _.SE.play("109")
                })
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this._item).wait(t).to({
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 500)
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.anchor.set(.5), e.scale.set(2.35), e.alpha = 0, e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = r.default.resources.getSlotitem(t, "btxt_flat")
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this).wait(t).to({
                    scaleX: 1.15,
                    scaleY: 1.15,
                    alpha: 1
                }, 200)
            }, e
        }(a.Sprite)
}