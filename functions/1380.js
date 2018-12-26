const function1380 = function (t, e, i) {
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
        a = i(23),
        _ = i(12),
        l = i(6),
        u = i(16),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new s.FadeBox(.9, 0), e._chara = new PIXI.Container, e._layer_item1 = new h, e._layer_item2 = new p, e._layer_item3 = new d, e._layer_wave = new f, e._layer_names = new y, e._bg.hide(0), e._layer_item1.x = o.default.width / 2, e._layer_item2.x = o.default.width / 2, e._layer_item3.x = o.default.width / 2, e._layer_wave.x = o.default.width / 2, e._layer_names.x = o.default.width / 2, e.addChild(e._bg), e.addChild(e._chara), e.addChild(e._layer_item1), e.addChild(e._layer_item2), e.addChild(e._layer_item3), e.addChild(e._layer_wave), e.addChild(e._layer_names), e
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
            }), Object.defineProperty(e.prototype, "layer_item1", {
                get: function () {
                    return this._layer_item1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_item2", {
                get: function () {
                    return this._layer_item2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_item3", {
                get: function () {
                    return this._layer_item3
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_wave", {
                get: function () {
                    return this._layer_wave
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "layer_names", {
                get: function () {
                    return this._layer_names
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e) {
                this._layer_item1.initialize(t, e.getSlot2Texture()), this._layer_item2.initialize(t, e.getSlot3Texture()), this._layer_item3.initialize(t, e.getSlot1Texture()), this._layer_wave.initialize(t), this._layer_names.initialize(t, e.slot_mst_id2, e.slot_mst_id3, e.slot_mst_id1)
            }, e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container);
    e.CutinCanvasSpRDJ = c;
    var h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._item = new _.Sprite, e._bg.anchor.set(.5), e._item.anchor.set(.5), e._bg.position.set(281, 968), e._item.position.set(333, 774), e._item.scale.set(.9), e._bg.alpha = 0, e._item.alpha = 0, e.addChild(e._bg), e.addChild(e._item);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(384, 0), new PIXI.Point(690, 0), new PIXI.Point(498, 720), new PIXI.Point(189, 720)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1;
                var i = t ? "battle_telop_mes_ybg6_f" : "battle_telop_mes_ybg6_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = e
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg).wait(t).call(function () {
                    l.SE.play("105")
                }).to({
                    x: 381,
                    y: 585,
                    alpha: 1
                }, 233), createjs.Tween.get(this._item).wait(t).to({
                    x: 479,
                    y: 248,
                    alpha: 1
                }, 233).call(function () {
                    l.SE.play("109")
                })
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this._item).wait(t).to({
                    scaleX: 1.15,
                    scaleY: 1.15
                }, 500)
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._bg.scale.x = -1, e._bg.anchor.set(.5), e._bg.position.set(30, -11), e._bg.alpha = 0, e.addChild(e._bg), e._item = new _.Sprite, e._item.anchor.set(.5), e._item.position.set(18, -174), e._item.alpha = 0, e.addChild(e._item);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-120, 0), new PIXI.Point(194, 0), new PIXI.Point(384, 720), new PIXI.Point(75, 720)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1;
                var i = t ? "battle_telop_mes_ybg6_f" : "battle_telop_mes_ybg6_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = e
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg).wait(t).call(function () {
                    l.SE.play("105")
                }).to({
                    x: 194,
                    y: 585,
                    alpha: 1
                }, 233), createjs.Tween.get(this._item).wait(t).to({
                    x: 159,
                    y: 407,
                    alpha: 1
                }, 233).call(function () {
                    l.SE.play("109")
                })
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this._item).wait(t).to({
                    scaleX: 1.15,
                    scaleY: 1.15
                }, 500)
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._canvas = new a.Container, e._item = new PIXI.Sprite, e._bg.anchor.set(.5), e._bg.position.set(-386, 1133), e._canvas.position.set(-267, 908), e._canvas.scale.set(1.35), e._bg.alpha = 0, e._canvas.rotation = Math.PI / 180 * 105, e._canvas.alpha = 0, e.addChild(e._bg), e._canvas.addChild(e._item), e.addChild(e._canvas);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-210, 0), new PIXI.Point(98, 0), new PIXI.Point(-98, 720), new PIXI.Point(-413, 720)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1;
                var i = t ? "battle_telop_mes_ybg6_f" : "battle_telop_mes_ybg6_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = e, this._item.x = -Math.round(this._item.width / 2), this._item.y = -Math.round(this._item.height / 2)
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg).wait(t).call(function () {
                    l.SE.play("105")
                }).to({
                    x: -216,
                    y: 585,
                    alpha: 1
                }, 233), createjs.Tween.get(this._canvas).wait(t).to({
                    x: -105,
                    y: 270,
                    alpha: 1
                }, 233).call(function () {
                    l.SE.play("109")
                })
            }, e.prototype.hide = function (t) {
                createjs.Tween.get(this._canvas).wait(t).to({
                    scaleX: 1.6,
                    scaleY: 1.6
                }, 500)
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._w1 = new _.Sprite, e._w2 = new _.Sprite, e._w3 = new _.Sprite, e._w1.anchor.set(.5), e._w2.anchor.set(.5), e._w3.anchor.set(.5), e._w1.scale.set(0), e._w2.scale.set(0), e._w3.scale.set(0), e.addChild(e._w1), e.addChild(e._w2), e.addChild(e._w3), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.scale.x = t ? 1 : -1, this._w1.position.set(479, 141), this._w2.position.set(215, 516), this._w3.position.set(-146, 278), this._w1.texture = u.BATTLE_MAIN.getTexture(108), this._w2.texture = u.BATTLE_MAIN.getTexture(108), this._w3.texture = u.BATTLE_MAIN.getTexture(108)
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._w1).wait(t).to({
                    scaleX: 2.27,
                    scaleY: 2.27
                }, 200).to({
                    scaleX: 2.65,
                    scaleY: 2.65,
                    alpha: 0
                }, 333), createjs.Tween.get(this._w2).wait(t + 433).to({
                    scaleX: 2.27,
                    scaleY: 2.27
                }, 200).to({
                    scaleX: 2.65,
                    scaleY: 2.65,
                    alpha: 0
                }, 333), createjs.Tween.get(this._w3).wait(t + 866).to({
                    scaleX: 2.27,
                    scaleY: 2.27
                }, 200).to({
                    scaleX: 2.65,
                    scaleY: 2.65,
                    alpha: 0
                }, 333)
            }, e
        }(PIXI.Container),
        y = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._name1 = new PIXI.Sprite, e._name2 = new PIXI.Sprite, e._name3 = new PIXI.Sprite, e._name1.scale.set(.76), e._name2.scale.set(.76), e._name3.scale.set(.76), e._name1.alpha = 0, e._name2.alpha = 0, e._name3.alpha = 0, e.addChild(e._name1), e.addChild(e._name2), e.addChild(e._name3), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n) {
                this._name1.anchor.set(t ? 1 : 0, .5), this._name2.anchor.set(t ? 1 : 0, .5), this._name3.anchor.set(t ? 1 : 0, .5), this._name1.position.set(t ? 578 : -578, 615), this._name2.position.set(t ? 578 : -578, 480), this._name3.position.set(t ? 578 : -578, 345), this._name1.texture = r.default.resources.getSlotitem(e, "btxt_flat"), this._name2.texture = r.default.resources.getSlotitem(i, "btxt_flat"), this._name3.texture = r.default.resources.getSlotitem(n, "btxt_flat")
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._name3).wait(t + 866).to({
                    alpha: 1
                }, 233), createjs.Tween.get(this._name2).wait(t + 433).to({
                    alpha: 1
                }, 233), createjs.Tween.get(this._name1).wait(t).to({
                    alpha: 1
                }, 233)
            }, e
        }(PIXI.Container)
}