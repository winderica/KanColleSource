const function1387 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(0), r = i(16), s = i(6), a = i(88), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new r.FadeBox(.9, 0), e._chara = new PIXI.Container, e._item1 = new u, e._item2 = new l, e._item3 = new c, e._name1 = new h, e._name2 = new h, e._name3 = new h, e._bg.hide(0), e.addChild(e._bg), e.addChild(e._chara), e.addChild(e._item3), e.addChild(e._item2), e.addChild(e._item1), e.addChild(e._name1), e.addChild(e._name2), e.addChild(e._name3), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "bg", {
            get: function () {
                return this._bg
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "chara", {
            get: function () {
                return this._chara
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "item1", {
            get: function () {
                return this._item1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "item2", {
            get: function () {
                return this._item2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "item3", {
            get: function () {
                return this._item3
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "name1", {
            get: function () {
                return this._name1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "name2", {
            get: function () {
                return this._name2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "name3", {
            get: function () {
                return this._name3
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e, i, n) {
            this._item1.initialize(t, e), this._item2.initialize(t, i), this._item3.initialize(t, n), this._name1.initialize(t), this._name1.y = 570, this._name2.initialize(t), this._name2.y = 480, this._name3.initialize(t), this._name3.y = 390, this.name1.texture = o.default.resources.getSlotitem(e, "btxt_flat"), this.name2.texture = o.default.resources.getSlotitem(i, "btxt_flat"), this.name3.texture = o.default.resources.getSlotitem(n, "btxt_flat")
        }, e.prototype.dispose = function () {
            this.removeChildren()
        }, e
    }(PIXI.Container);
    e.CutinCanvasSpSSS = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._bg = new PIXI.Sprite, e._bg.scale.x = -1, e._bg.anchor.set(.5), e._bg.alpha = 0, e.addChild(e._bg), e._item = new PIXI.Sprite, e._item.anchor.set(.5), e._item.position.set(60, 15), e._item.scale.set(1.5), e._item.alpha = 0, e.addChild(e._item);
            var i = new PIXI.Graphics;
            return i.beginFill(16711680), i.drawPolygon([new PIXI.Point(-741, -392), new PIXI.Point(749, 75), new PIXI.Point(749, 395), new PIXI.Point(-741, -75)]), i.endFill(), e.addChild(i), e._item.mask = i, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            t ? (this.position.set(750, 674), this._to_pos = new PIXI.Point(565, 615)) : (this.position.set(450, 674), this._to_pos = new PIXI.Point(635, 615), this.scale.x = -1);
            var i = t ? 1 : 0;
            this._bg.texture = a.BATTLE_TELOP_SP.getTexture(i), this._item.texture = o.default.resources.getSlotitem(e, "item_up")
        }, e.prototype.show = function (t) {
            var e = this;
            createjs.Tween.get(this).wait(t).call(function () {
                e._play(e._to_pos.x, e._to_pos.y)
            })
        }, e.prototype._play = function (t, e) {
            s.SE.play("105"), createjs.Tween.get(this).to({
                x: t,
                y: e
            }, 200), createjs.Tween.get(this._bg).to({ alpha: 1 }, 200), createjs.Tween.get(this._item).to({ alpha: 1 }, 133).call(function () {
                s.SE.play("109")
            })
        }, e
    }(PIXI.Container);
    e.ItemBox1 = u;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._bg = new PIXI.Sprite, e._item = new PIXI.Sprite, e._item.position.set(77, -68), e._bg.anchor.set(.5), e._item.anchor.set(.5), e._item.scale.set(1.5), e._bg.alpha = 0, e._item.alpha = 0, e.addChild(e._bg), e.addChild(e._item);
            var i = new PIXI.Graphics;
            return i.beginFill(16711680), i.drawPolygon([new PIXI.Point(-756, 74), new PIXI.Point(749, -395), new PIXI.Point(749, -75), new PIXI.Point(-756, 395)]), i.endFill(), e.addChild(i), e._item.mask = i, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            t ? (this.position.set(300, 674), this._to_pos = new PIXI.Point(750, 492)) : (this.position.set(900, 674), this._to_pos = new PIXI.Point(450, 492), this.scale.x = -1);
            var i = t ? 1 : 0;
            this._bg.texture = a.BATTLE_TELOP_SP.getTexture(i), this._item.texture = o.default.resources.getSlotitem(e, "item_up")
        }, e.prototype.show = function (t) {
            var e = this;
            createjs.Tween.get(this).wait(t).call(function () {
                e._play(e._to_pos.x, e._to_pos.y)
            })
        }, e.prototype._play = function (t, e) {
            s.SE.play("105"), createjs.Tween.get(this).to({
                x: t,
                y: e
            }, 200), createjs.Tween.get(this._bg).to({ alpha: 1 }, 200), createjs.Tween.get(this._item).to({ alpha: 1 }, 133).call(function () {
                s.SE.play("109")
            })
        }, e
    }(PIXI.Container);
    e.ItemBox2 = l;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._bg = new PIXI.Sprite, e._item = new PIXI.Sprite, e._item.position.set(-15, 5), e._bg.anchor.set(.5), e._item.anchor.set(.5), e._item.scale.set(1.5), e._bg.alpha = 0, e._item.alpha = 0, e.addChild(e._bg), e.addChild(e._item);
            var i = new PIXI.Graphics;
            return i.beginFill(16711680), i.drawPolygon([new PIXI.Point(402, -585), new PIXI.Point(867, -585), new PIXI.Point(-354, 537), new PIXI.Point(-813, 537)]), i.endFill(), e.addChild(i), e._item.mask = i, e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            t ? (this.position.set(505, 585), this._to_pos = new PIXI.Point(993, 135)) : (this.position.set(695, 585), this._to_pos = new PIXI.Point(207, 135), this.scale.x = -1);
            var i = t ? 3 : 2;
            this._bg.texture = a.BATTLE_TELOP_SP.getTexture(i), this._item.texture = o.default.resources.getSlotitem(e, "item_up")
        }, e.prototype.show = function (t) {
            var e = this;
            createjs.Tween.get(this).wait(t).call(function () {
                e._play(e._to_pos.x, e._to_pos.y)
            })
        }, e.prototype._play = function (t, e) {
            s.SE.play("105"), createjs.Tween.get(this).to({
                x: t,
                y: e
            }, 200), createjs.Tween.get(this._bg).to({ alpha: 1 }, 200), createjs.Tween.get(this._item).to({ alpha: 1 }, 133).call(function () {
                s.SE.play("109")
            })
        }, e
    }(PIXI.Container);
    e.ItemBox3 = c;
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.scale.set(.76), e.alpha = 0, e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            1 == t ? (this.anchor.set(0, .5), this.position.x = -300) : (this.anchor.set(1, .5), this.position.x = 1500)
        }, e
    }(PIXI.Sprite)
}