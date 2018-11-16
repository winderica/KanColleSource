const function767 = function (t, e, i) {
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
    var o = i(3), r = i(0), s = i(4), a = i(30), _ = i(3), u = i(14), l = i(1), c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickListItem = function (t, e) {
                i.onClick(e)
            };
            var n = o.COMMON_MAIN.getTexture(37);
            i.otherShipListItems = new Array;
            for (var r = 0; r < e; r++) {
                var s = new h(r);
                s.y = 45 * r, s.onClick = i._onClickListItem, i.otherShipListItems.push(s);
                var a = new PIXI.Sprite(n);
                a.y = 45 * r + 42, i.addChild(a, s)
            }
            return i.itemCount = e, i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren();
            for (var t = 0; t < this.otherShipListItems.length; t++) this.otherShipListItems[t].dispose(), this.otherShipListItems[t] = null;
            this.otherShipListItems = null, this.onClick = null
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
            }, i.index = e;
            var n = Math.floor(22.5) + 1;
            i.clickArea = new PIXI.Graphics, i.clickArea.beginFill(0, 0), i.clickArea.drawRect(0, 0, 268, 44), i.clickArea.endFill(), i.textContainer = new PIXI.Container, i.textType = new s.TextBox(18, 5523516), i.textName = new s.TextBox(20, 5523516), i.textLevel = new s.TextBox(19, 5523516), i.focus = new PIXI.Sprite(o.COMMON_MAIN.getTexture(17)), i.focus.width = i.clickArea.width, i.focus.height = i.clickArea.height;
            var r = u.CreateRect.gradientLeftToRight(210, 45, .88, .95);
            return i.icon_max = new PIXI.Sprite(_.REMODEL_POWERUP.getTexture(27)), i.textContainer.mask = r, i.textType.anchor.set(0, 0), i.textType.position.set(6, Math.floor(n - i.textType.height / 2)), i.textName.anchor.set(0, 0), i.textName.position.y = Math.floor(n - i.textName.height / 2) + 0, i.textLevel.anchor.set(1, 0), i.textLevel.position.set(263, Math.floor(n - i.textLevel.height / 2)), i.icon_max.position.set(213, 3), i.focus.visible = !1, i.icon_max.visible = !1, i.textContainer.addChild(i.textType, i.textName, r), i.clickArea.on(l.EventType.MOUSEOVER, i._onMouseOver), i.clickArea.on(l.EventType.MOUSEOUT, i._onMouseOut), i.clickArea.on(l.EventType.CLICK, i._onClick), i.clickArea.interactive = i.clickArea.buttonMode = !0, i.addChild(i.clickArea, i.focus, i.textContainer, i.textLevel, i.icon_max), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.clickArea.off(l.EventType.MOUSEOVER), this.clickArea.off(l.EventType.MOUSEOUT), this.clickArea.off(l.EventType.CLICK), this.textContainer.cacheAsBitmap = !1, this.textContainer.removeChildren(), this.textName.destroy(), this.textType.destroy(), this.textLevel.destroy(), this.onClick = null, this.clickArea = null, this.focus = null, this.textContainer = null, this.textName = null, this.textType = null, this.textLevel = null, this.index = null, this.memId = null, this.icon_max = null
        }, e.prototype.update = function (t) {
            this.textContainer.cacheAsBitmap = !1, this.memId = t.memID, this.textName.text = t.name, this.textType.text = t.shipTypeName + " ", this.textName.position.x = this.textType.x + this.textType.width, this.icon_max.visible = !1, this.textLevel.visible = !1, a.ShipUtil.isMaxGradeUp(t, r.default.model.ship.getMst(t.mstID), !1) ? this.icon_max.visible = !0 : (this.textLevel.text = "Lv" + t.level, this.textLevel.visible = !0), this.textContainer.cacheAsBitmap = !0
        }, e
    }(PIXI.Container)
}