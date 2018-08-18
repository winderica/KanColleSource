const function760 = function (t, e, i) {
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
    var o = i(3), r = i(0), s = i(4), a = i(31), _ = i(3), u = i(13), l = i(1), c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickListItem = function (t, e) {
                i.onClick(e)
            };
            for (var n = o.COMMON_MAIN.getTexture(35), r = new Array, s = 0; s < e; s++) {
                var a = new h(s);
                a.y = (a.height + 3) * s, a.onClick = i._onClickListItem, r.push(a);
                var _ = new PIXI.Sprite(n);
                _.position.set(0, a.y + a.height), i.addChild(_, a)
            }
            return i.otherShipListItems = r, i.itemCount = e, i
        }

        return n(e, t), e.prototype.dispose = function () {
            for (var t = 0; t < this.otherShipListItems.length; t++) this.otherShipListItems[t].dispose(), this.otherShipListItems[t] = null;
            this.otherShipListItems = null, this.onClick = this._onClickListItem = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            for (var e = 0; e < this.itemCount; e++) {
                var i = this.otherShipListItems[e];
                if (i.visible = !1, e < t.length) {
                    var n = t[e];
                    i.update(n), i.visible = !0
                }
            }
        }, e
    }(PIXI.Container);
    e.OtherShipList = c;
    var h = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i.index, i.memId)
            }, i._onMouseOver = function () {
                i.textContainer.cacheAsBitmap = !1, i.focus.visible = !0, i.textName.style.fill = i.textLevel.style.fill = i.textType.style.fill = 16777215, i.textContainer.cacheAsBitmap = !0
            }, i._onMouseOut = function () {
                i.textContainer.cacheAsBitmap = !1, i.focus.visible = !1, i.textName.style.fill = i.textLevel.style.fill = i.textType.style.fill = 5523516, i.textContainer.cacheAsBitmap = !0
            };
            var n = Math.floor(22.5) + 1, r = new PIXI.Graphics;
            r.beginFill(0, 0), r.drawRect(0, 0, 300, 42), r.endFill();
            var a = new PIXI.Container, c = new s.TextBox(18, 5523516), h = new s.TextBox(20, 5523516),
                p = new s.TextBox(19, 5523516), d = new PIXI.Sprite(o.COMMON_MAIN.getTexture(15)),
                f = u.CreateRect.gradientLeftToRight(210, 45, .88, .95),
                y = new PIXI.Sprite(_.REMODEL_POWERUP.getTexture(27));
            return a.mask = f, c.anchor.set(0, 0), c.position.set(6, Math.floor(n - c.height / 2)), h.anchor.set(0, 0), h.position.y = Math.floor(n - h.height / 2) + 0, p.anchor.set(1, 0), p.position.set(263, Math.floor(n - p.height / 2)), y.position.set(213, 3), d.visible = !1, y.visible = !1, a.addChild(c, h, f), r.addListener(l.EventType.MOUSEOVER, i._onMouseOver), r.addListener(l.EventType.MOUSEOUT, i._onMouseOut), r.addListener(l.EventType.CLICK, i._onClick), r.interactive = r.buttonMode = !0, i.addChild(r, d, a, p, y), i.textName = h, i.textType = c, i.textLevel = p, i.index = e, i.clickArea = r, i.focus = d, i.textContainer = a, i.icon_max = y, i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.clickArea.removeAllListeners(l.EventType.MOUSEOVER), this.clickArea.removeAllListeners(l.EventType.MOUSEOUT), this.clickArea.removeAllListeners(l.EventType.CLICK), this.textName.text = "", this.textType.text = "", this.textLevel.text = "", this._onMouseOver = this._onMouseOut = this._onClick = null, this.onClick = null, this.clickArea = null, this.focus = null, this.textContainer = null, this.textName = null, this.textType = null, this.textLevel = null, this.index = null, this.memId = null, this.icon_max = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.textContainer.cacheAsBitmap = !1, this.memId = t.memID, this.textName.text = t.name, this.textType.text = t.shipTypeName + " ", this.textName.position.x = this.textType.x + this.textType.width, this.icon_max.visible = !1, this.textLevel.visible = !1, a.ShipUtil.isMaxGradeUp(t, r.default.model.ship.getMst(t.mstID), !1) ? this.icon_max.visible = !0 : (this.textLevel.text = "Lv" + t.level, this.textLevel.visible = !0), this.textContainer.cacheAsBitmap = !0
        }, e
    }(PIXI.Container)
}