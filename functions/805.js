const function805 = function (t, e, i) {
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
    var o = i(164),
        r = i(125),
        s = i(86),
        a = i(87),
        _ = i(222),
        u = i(4),
        l = i(21),
        c = i(129),
        h = i(51),
        p = i(89),
        d = i(88),
        f = i(221),
        y = i(1),
        m = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function (t, i) {
                    e.onClick(t, i)
                };
                var i = new PIXI.Sprite(c.REMODEL_POWERUP.getTexture(12)),
                    n = new PIXI.Sprite(c.REMODEL_POWERUP.getTexture(28)),
                    o = new s.PagerView,
                    r = new _.ShipSortButton,
                    a = new Array,
                    u = new PIXI.Container,
                    p = new d.TitleBar;
                p.initialize(l.COMMON_MAIN.getTexture(0), 38), i.interactive = !0, n.position.set(51, 12), o.position.set(39, 521), u.position.set(51, 48), r.position.set(488, 6), e.addChild(i, n, o, r);
                for (var f = 0; f < h.RemodelConst.ITEM_NUM; f++) {
                    var y = new g(f);
                    y.visible = !1, y.onClick = e._onClick, y.x = 51, y.y = 48 + 45 * f, a.push(y), e.addChild(y)
                }
                return e.addChild(p), p.position.set(0, -37), e._pagerView = o, e._shipSortButton = r, e.listItems = a, e.headerKansenSentaku = p, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "shipSortButton", {
                get: function () {
                    return this._shipSortButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pagerView", {
                get: function () {
                    return this._pagerView
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.clear = function () {
                this.listItems.forEach(function (t) {
                    return t.visible = !1
                })
            }, e.prototype.update = function (t, e, i, n) {
                var o = this.listItems[t];
                o.update(e, i, n), o.visible = !0
            }, e.prototype.dispose = function () {
                this._shipSortButton.dispose(), this._pagerView.dispose(), this.headerKansenSentaku.dispose(), this.listItems.forEach(function (t) {
                    t.dispose()
                }), this.onClick = null, this._onClick = null, this._shipSortButton = null, this._pagerView = null, this.headerKansenSentaku = null, this.listItems = null
            }, e
        }(PIXI.Container);
    e.ShipList = m;
    var g = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onMouseOver = function () {
                i.containerTypeAndName.cacheAsBitmap = !1, i.background.alpha = 1, i.textType.style.fill = i.textName.style.fill = i.textLevel.style.fill = 16777215, i.containerTypeAndName.cacheAsBitmap = !0
            }, i._onMouseOut = function () {
                i.containerTypeAndName.cacheAsBitmap = !1, i.background.alpha = 0, i.textType.style.fill = i.textName.style.fill = 5523516, i.textLevel.style.fill = i.mouseoutColor, i.containerTypeAndName.cacheAsBitmap = !0
            }, i._onClick = function () {
                i.onClick(i.index, i.memId)
            };
            var n = Math.floor(22.5) + 1,
                o = new PIXI.Sprite(l.COMMON_MAIN.getTexture(17)),
                s = new PIXI.Container,
                _ = new u.TextBox(18, 5523516),
                c = new u.TextBox(20, 5523516),
                h = new u.TextBox(20, 5523516),
                p = new f.IconCategory,
                d = new f.IconCategory,
                m = new f.IconCategory,
                g = new f.IconCategory,
                v = new a.ShipInDeckFlag,
                b = r.CreateRect.gradientLeftToRight(270, 45, .75, .85);
            return v.scale.set(.8, .8), o.position.x = -33, o.scale.x = 1.2, o.interactive = o.buttonMode = !0, o.alpha = 0, o.on(y.EventType.MOUSEOVER, i._onMouseOver), o.on(y.EventType.MOUSEOUT, i._onMouseOut), o.on(y.EventType.CLICK, i._onClick), _.anchor.y = 0, _.position.y = Math.floor(n - _.height / 2), c.anchor.y = 0, c.position.y = Math.floor(n - c.height / 2) + 0, h.anchor.y = 0, h.position.set(293, Math.floor(n - h.height / 2) + 0), s.position.set(17, 0), p.position.set(311, 0), d.position.set(356, 0), m.position.set(401, 0), g.position.set(446, 0), v.anchor.set(0, .5), v.position.set(-15, n), v.visible = !1, h.anchor.x = 1, s.mask = b, s.addChild(_, c, b), i.addChild(o, s, h, p, d, m, g, v), i.textType = _, i.textName = c, i.textLevel = h, i.iconCategory_0 = p, i.iconCategory_1 = d, i.iconCategory_2 = m, i.iconCategory_3 = g, i.background = o, i.index = e, i.memId = -1, i.shipInDeckFlag = v, i.containerTypeAndName = s, i.maskTextAndName = b, i
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.containerTypeAndName.cacheAsBitmap = !1, this.containerTypeAndName.mask = null, this.containerTypeAndName.removeChildren(), this.iconCategory_0.dispose(), this.iconCategory_1.dispose(), this.iconCategory_2.dispose(), this.iconCategory_3.dispose(), this.background.off(y.EventType.MOUSEOVER), this.background.off(y.EventType.MOUSEOUT), this.background.off(y.EventType.CLICK), this.textType.destroy(), this.textName.destroy(), this.textLevel.destroy(), this.onClick = null, this.memId = null, this.textType = null, this.textName = null, this.textLevel = null, this.iconCategory_0 = null, this.iconCategory_1 = null, this.iconCategory_2 = null, this.iconCategory_3 = null, this.background = null, this.shipInDeckFlag = null, this.maskTextAndName = null, this.containerTypeAndName = null, this.mouseoutColor = null
        }, e.prototype.update = function (t, e, i) {
            this.containerTypeAndName.cacheAsBitmap = !1, this.shipInDeckFlag.visible = !1, i && (this.shipInDeckFlag.update(i), this.shipInDeckFlag.visible = !0), this.textLevel.style.fill = this.mouseoutColor = o.ColorUtil.getLevelColor(t.level), this.memId = t.memID;
            var n = p.RemodelUtil.genPowUpCategories(e);
            this.textLevel.text = t.level.toString(), this.textName.text = t.name, this.textType.text = t.shipTypeName + " ", this.textName.position.x = this.textType.x + this.textType.width, this.iconCategory_0.update(n[0]), this.iconCategory_1.update(n[1]), this.iconCategory_2.update(n[2]), this.iconCategory_3.update(n[3]), this.containerTypeAndName.cacheAsBitmap = !0
        }, e
    }(PIXI.Container)
}