const function759 = function (t, e, i) {
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
    var o = i(3), r = i(213), s = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(43)),
                n = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(44));
            return i.position.set(275, -3), n.position.set(0, 0), e.select_bg_crane01 = i, e.select_bg_crane02 = n, e.addChild(i, n), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.select_bg_crane01.texture = PIXI.Texture.EMPTY, this.select_bg_crane02.texture = PIXI.Texture.EMPTY, this.select_bg_crane01 = null, this.select_bg_crane02 = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.OtherShipFrame = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(43)),
                n = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(44)),
                s = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(46)),
                a = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(21));
            i.position.set(275, -3), n.position.set(0, 0);
            var _ = [62, 143, 224, 305, 386, 467];
            e.addChild(a, s);
            for (var u = 0; u < _.length; u++) {
                var l = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(45));
                l.position.set(9, _[u]), e.addChild(l)
            }
            e.addChild(i, n);
            for (var c = new Array, h = 0; h < _.length; h++) {
                var p = new r.DeckIndexEmblem;
                p.position.set(-15, _[h] + 30), c.push(p), e.addChild(p)
            }
            return e.focus_card = a, e.crane = s, e.indexEmblems = c, e
        }

        return n(e, t), e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.crane);
            for (var t = 0; t < this.indexEmblems.length; t++) this.indexEmblems[t].dispose(), this.indexEmblems[t] = null;
            this.indexEmblems = null, this.focus_card = null, this.crane = null, this.removeChildren()
        }, e.prototype.focus = function (t) {
            var e = this.getFocusPoint(t);
            this.focus_card.position.set(e[0], e[1]), this.focus_card.visible = !0
        }, e.prototype.updateEmblems = function (t, e) {
            var i = this.indexEmblems[t];
            i.visible = !0, i.update(e)
        }, e.prototype.hideEmblem = function (t) {
            this.indexEmblems[t].visible = !1
        }, e.prototype.moveCrane = function (t) {
            createjs.Tween.removeTweens(this.crane);
            var e = this.getFocusPoint(t);
            createjs.Tween.get(this.crane).to({ x: 278 }, 300, createjs.Ease.cubicIn).to({ y: e[1] - 8 }).to({ x: e[0] + 23 }, 500, createjs.Ease.cubicOut).play(null)
        }, e.prototype.insertCrane = function () {
            createjs.Tween.removeTweens(this.crane);
            var t = this.getFocusPoint(0);
            this.crane.x = 278, this.crane.y = t[1] - 8, createjs.Tween.get(this.crane).to({ x: t[0] + 23 }, 500, createjs.Ease.cubicOut).play(null)
        }, e.prototype.hideCraneImmidiate = function () {
            createjs.Tween.removeTweens(this.crane), this.crane.x = 278
        }, e.prototype.moveCraneImmidiate = function (t) {
            var e = this.getFocusPoint(t);
            createjs.Tween.removeTweens(this.crane), this.crane.x = e[0] + 23, this.crane.y = e[1] - 8
        }, e.prototype.deFocus = function () {
            this.focus_card.visible = !1
        }, e.prototype.getFocusPoint = function (t) {
            switch (t) {
                case 0:
                    return [27, 76];
                case 1:
                    return [27, 157];
                case 2:
                    return [27, 238];
                case 3:
                    return [27, 319];
                case 4:
                    return [27, 400];
                case 5:
                    return [27, 481]
            }
            return [0, 0]
        }, e
    }(PIXI.Container);
    e.DeckCraneFrame = a
}