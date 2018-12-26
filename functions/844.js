const function844 = function (t, e, i) {
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
        r = i(3),
        s = i(9),
        a = i(4),
        _ = i(222),
        l = i(160),
        u = i(14),
        c = i(1),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickListItem = function (t) {
                    e.onClickListItem(t)
                };
                var i = new PIXI.Sprite(r.COMMON_MAIN.getTexture(64));
                i.position.set(0, -39);
                var n = new PIXI.Sprite(r.COMMON_MAIN.getTexture(0));
                n.anchor.y = .5, n.position.set(22, 20), i.addChild(n), e.addChild(i);
                for (var o = new PIXI.Sprite(r.COMMON_MAIN.getTexture(12)), s = new PIXI.Sprite(r.REPAIR_MAIN.getTexture(37)), a = new Array, _ = new PIXI.Container, l = 0; l < 10; l++) {
                    var u = 45 + 46 * l,
                        c = new p;
                    c.onClick = e._onClickListItem, a.push(c);
                    var h = new PIXI.Graphics;
                    h.beginFill(5523516, .5), h.drawRect(0, 0, 630, .5), h.endFill(), c.position.set(0, u), h.position.set(60, u + 45), _.addChild(c, h)
                }
                return s.position.set(58, 12), o.interactive = !0, e.addChild(o, _, s), e.listItems = a, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                for (var i = 0; i < this.listItems.length; i++) {
                    var n = this.listItems[i];
                    if (n.visible = !1, i < t.length) {
                        var r = t[i],
                            s = o.default.model.deck.isInDeck(r.memID),
                            a = !1;
                        if (s) {
                            var _ = s[0];
                            a = null != o.default.model.deck.get(_).expedition
                        }
                        var l = -1 < e.indexOf(r.memID);
                        n.update(r, l, s, a), n.visible = !0
                    }
                }
            }, e.prototype.dispose = function () {
                for (var t = 0; t < this.listItems.length; t++) this.listItems[t].dispose(), this.listItems[t] = null;
                this.onClickListItem = null, this.listItems = null
            }, e
        }(PIXI.Container);
    e.RepairShipChoiceView = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onMouseOver = function () {
                e.typeAndNameContainer.cacheAsBitmap = !1, e.bgFocus.alpha = 1, e.textType.style.fill = e.textName.style.fill = e.textLevel.style.fill = e.textHp.style.fill = 16777215, e.typeAndNameContainer.cacheAsBitmap = !0
            }, e._onMouseOut = function () {
                e.typeAndNameContainer.cacheAsBitmap = !1, e.bgFocus.alpha = 0, e.textLevel.style.fill = e.mouseoutColor, e.textType.style.fill = e.textName.style.fill = e.textHp.style.fill = 5523516, e.typeAndNameContainer.cacheAsBitmap = !0
            }, e._onClick = function () {
                e.onClick(e.memId)
            };
            var i = Math.floor(22.5) + 1,
                n = new PIXI.Sprite,
                o = new PIXI.Sprite(r.COMMON_MAIN.getTexture(17)),
                s = new PIXI.Sprite,
                l = new PIXI.Sprite,
                h = new a.TextBox(18, 5523516),
                p = new a.TextBox(20, 5523516),
                d = new a.TextBox(20, 5523516),
                f = new a.TextBox(13, 5523516),
                y = new PIXI.Container,
                m = new _.RepairHpGaugeView,
                v = new PIXI.Rectangle(0, 0, 697, 45),
                g = u.CreateRect.gradientLeftToRight(260, 45, .88, .95);
            return s.anchor.set(0, .5), s.position.set(31, i), s.scale.set(.8, .8), h.anchor.set(0, 0), h.position.set(0, Math.floor(i - h.height / 2)), d.anchor.set(1, 0), d.position.set(355, Math.floor(i - d.height / 2) + 0), y.position.set(64, 0), m.position.set(367, 17), l.anchor.set(0, .5), l.position.set(547, i), f.anchor.set(0, 0), f.position.set(610, Math.floor(i - f.height / 2)), o.scale.x = 1.3, o.position.set(60, 0), p.anchor.set(0, 0), p.position.y = Math.floor(i - p.height / 2 + 0), o.alpha = 0, s.visible = !1, y.mask = g, e.addListener(c.EventType.MOUSEOVER, e._onMouseOver), e.addListener(c.EventType.MOUSEOUT, e._onMouseOut), e.addListener(c.EventType.CLICK, e._onClick), e.interactive = e.buttonMode = !0, y.addChild(h, p, g), e.addChild(n, o, s, y, d, m, f, l), e.textType = h, e.textLevel = d, e.textName = p, e.textHp = f, e.hpGaugeView = m, e.iconCondition = l, e.bgFocus = o, e.hitArea = v, e.bgCondition = n, e.iconDeck = s, e.typeAndNameContainer = y, e
        }
        return n(e, t), e.prototype.update = function (t, e, i, n) {
            this.typeAndNameContainer.cacheAsBitmap = !1;
            var o = t.getDamageType();
            if (this.iconDeck.visible = !1, this.textLevel.style.fill = this.mouseoutColor = l.ColorUtil.getLevelColor(t.level), i) {
                switch (i[0]) {
                    case 1:
                        0 == i[1] ? this.iconDeck.texture = s.COMMON_MISC.getTexture(71) : this.iconDeck.texture = s.COMMON_MISC.getTexture(74);
                        break;
                    case 2:
                        this.iconDeck.texture = s.COMMON_MISC.getTexture(77);
                        break;
                    case 3:
                        this.iconDeck.texture = s.COMMON_MISC.getTexture(80);
                        break;
                    case 4:
                        this.iconDeck.texture = s.COMMON_MISC.getTexture(83)
                }
                this.iconDeck.visible = !0
            }
            switch (this.bgCondition.visible = !1, this.iconCondition.visible = !1, o) {
                case 75:
                    this.bgCondition.texture = r.REPAIR_MAIN.getTexture(30), this.iconCondition.texture = r.REPAIR_MAIN.getTexture(34), this.bgCondition.visible = !0, this.iconCondition.visible = !0;
                    break;
                case 50:
                    this.bgCondition.texture = r.REPAIR_MAIN.getTexture(29), this.iconCondition.texture = r.REPAIR_MAIN.getTexture(32), this.bgCondition.visible = !0, this.iconCondition.visible = !0;
                    break;
                case 25:
                    this.bgCondition.texture = r.REPAIR_MAIN.getTexture(31), this.iconCondition.texture = r.REPAIR_MAIN.getTexture(36), this.bgCondition.visible = !0, this.iconCondition.visible = !0
            }
            e ? (this.iconCondition.texture = r.REPAIR_MAIN.getTexture(35), this.iconCondition.visible = !0) : n && (this.iconCondition.texture = r.REPAIR_MAIN.getTexture(33), this.iconCondition.visible = !0), this.memId = t.memID, this.textType.text = t.shipTypeName + " ", this.textLevel.text = t.level.toString(), this.textName.text = t.name, this.textHp.text = t.hpNow + "/" + t.hpMax, this.textName.position.x = this.textType.x + this.textType.width, this.hpGaugeView.update(t.hpNow, t.hpMax), this.typeAndNameContainer.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.removeChildren(), this.textType.destroy(), this.textLevel.destroy(), this.textName.destroy(), this.textHp.destroy(), this.hpGaugeView.dispose(), this.typeAndNameContainer.cacheAsBitmap = !1, this.iconCondition.texture = PIXI.Texture.EMPTY, this.bgFocus.texture = PIXI.Texture.EMPTY, this.bgCondition.texture = PIXI.Texture.EMPTY, this.iconDeck.texture = PIXI.Texture.EMPTY, this.onClick = null, this.textType = null, this.textName = null, this.textLevel = null, this.textHp = null, this.hpGaugeView = null, this.iconCondition = null, this.bgFocus = null, this.bgCondition = null, this.iconDeck = null, this.memId = null, this._onMouseOver = this._onMouseOut = this._onClick = null
        }, e
    }(PIXI.Container)
}