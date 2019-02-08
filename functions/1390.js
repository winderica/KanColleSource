const function1390 = function (t, e, i) {
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
        r = i(18),
        s = i(12),
        a = i(6),
        _ = i(16),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new r.FadeBox(.9, 0), e._chara = new PIXI.Container, e._layer_item1 = new u, e._layer_item2 = new c, e._layer_item3 = new h, e._layer_wave = new p, e._layer_names = new d, e._bg.hide(0), e._layer_item1.x = 600, e._layer_item2.x = 600, e._layer_item3.x = 600, e._layer_wave.x = 600, e._layer_names.x = 600, e.addChild(e._bg), e.addChild(e._chara), e.addChild(e._layer_item1), e.addChild(e._layer_item2), e.addChild(e._layer_item3), e.addChild(e._layer_wave), e.addChild(e._layer_names), e
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
            }), e.prototype.initialize = function (t, e, i) {
                this._layer_item1.initialize(t, e), this._layer_item2.initialize(t, i), this._layer_item3.initialize(t, i), this._layer_wave.initialize(t), this._layer_names.initialize(t, e, i)
            }, e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container);
    e.CutinCanvasSpRR = l;
    var u = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._item = new PIXI.Sprite, e._bg.anchor.set(.5), e._item.anchor.set(.5), e._bg.position.set(281, 968), e._item.position.set(335, 777), e._item.scale.set(1.5), e._bg.alpha = 0, e._item.alpha = 0, e._item.rotation = -Math.PI / 180 * 72, e.addChild(e._bg), e.addChild(e._item);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(384, 0), new PIXI.Point(690, 0), new PIXI.Point(498, 720), new PIXI.Point(189, 720)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1;
                var i = t ? "battle_telop_mes_ybg6_f" : "battle_telop_mes_ybg6_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = o.default.resources.getSlotitem(e, "item_up")
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg).wait(t).call(function () {
                    a.SE.play("105")
                }).to({
                    x: 381,
                    y: 585,
                    alpha: 1
                }, 233), createjs.Tween.get(this._item).wait(t).to({
                    x: 414,
                    y: 248,
                    alpha: 1
                }, 233).call(function () {
                    a.SE.play("109")
                })
            }, e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._bg.scale.x = -1, e._bg.anchor.set(.5), e._bg.position.set(30, -11), e._bg.alpha = 0, e.addChild(e._bg), e._item = new PIXI.Sprite, e._item.anchor.set(.5), e._item.position.set(15, -87), e._item.scale.set(1.5), e._item.alpha = 0, e._item.rotation = Math.PI / 180 * 74, e.addChild(e._item);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-120, 0), new PIXI.Point(194, 0), new PIXI.Point(384, 720), new PIXI.Point(75, 720)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1;
                var i = t ? "battle_telop_mes_ybg6_f" : "battle_telop_mes_ybg6_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = o.default.resources.getSlotitem(e, "item_up")
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg).wait(t).call(function () {
                    a.SE.play("105")
                }).to({
                    x: 194,
                    y: 585,
                    alpha: 1
                }, 233), createjs.Tween.get(this._item).wait(t).to({
                    x: 191,
                    y: 386,
                    alpha: 1
                }, 233).call(function () {
                    a.SE.play("109")
                })
            }, e
        }(PIXI.Container),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._bg = new PIXI.Sprite, e._item = new PIXI.Sprite, e._bg.anchor.set(.5), e._item.anchor.set(.5), e._bg.position.set(-386, 1133), e._item.position.set(-315, 714), e._item.scale.set(1.5), e._bg.alpha = 0, e._item.alpha = 0, e._item.rotation = Math.PI / 180 * 105, e.addChild(e._bg), e.addChild(e._item);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-210, 0), new PIXI.Point(98, 0), new PIXI.Point(-98, 720), new PIXI.Point(-413, 720)]), i.endFill(), e.addChild(i), e._item.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this.scale.x = t ? 1 : -1;
                var i = t ? "battle_telop_mes_ybg6_f" : "battle_telop_mes_ybg6_e";
                this._bg.texture = PIXI.Texture.fromFrame(i), this._item.texture = o.default.resources.getSlotitem(e, "item_up")
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._bg).wait(t).call(function () {
                    a.SE.play("105")
                }).to({
                    x: -216,
                    y: 585,
                    alpha: 1
                }, 233), createjs.Tween.get(this._item).wait(t).to({
                    x: -93,
                    y: 161,
                    alpha: 1
                }, 233).call(function () {
                    a.SE.play("109")
                })
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._w1 = new s.Sprite, e._w2 = new s.Sprite, e._w3 = new s.Sprite, e._w1.anchor.set(.5), e._w2.anchor.set(.5), e._w3.anchor.set(.5), e._w1.scale.set(0), e._w2.scale.set(0), e._w3.scale.set(0), e.addChild(e._w1), e.addChild(e._w2), e.addChild(e._w3), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.scale.x = t ? 1 : -1, this._w1.position.set(479, 141), this._w2.position.set(215, 516), this._w3.position.set(-146, 278), this._w1.texture = _.BATTLE_MAIN.getTexture(108), this._w2.texture = _.BATTLE_MAIN.getTexture(108), this._w3.texture = _.BATTLE_MAIN.getTexture(108)
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
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._name1 = new PIXI.Sprite, e._name2 = new PIXI.Sprite, e._name3 = new PIXI.Sprite, e._name1.scale.set(.76), e._name2.scale.set(.76), e._name3.scale.set(.76), e._name1.alpha = 0, e._name2.alpha = 0, e._name3.alpha = 0, e.addChild(e._name1), e.addChild(e._name2), e.addChild(e._name3), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._name1.anchor.set(t ? 1 : 0, .5), this._name2.anchor.set(t ? 1 : 0, .5), this._name3.anchor.set(t ? 1 : 0, .5), this._name1.position.set(t ? 578 : -578, 615), this._name2.position.set(t ? 578 : -578, 480), this._name3.position.set(t ? 578 : -578, 345), this._name1.texture = o.default.resources.getSlotitem(e, "btxt_flat"), this._name2.texture = o.default.resources.getSlotitem(i, "btxt_flat"), this._name3.texture = o.default.resources.getSlotitem(i, "btxt_flat")
            }, e.prototype.show = function (t) {
                createjs.Tween.get(this._name1).wait(t + 866).to({
                    alpha: 1
                }, 233), createjs.Tween.get(this._name2).wait(t + 433).to({
                    alpha: 1
                }, 233), createjs.Tween.get(this._name3).wait(t).to({
                    alpha: 1
                }, 233)
            }, e
        }(PIXI.Container)
}