const function780 = function (t, e, i) {
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
    var o = i(1), r = i(50), s = i(110), a = i(4), _ = i(83), u = i(21), l = i(70), c = i(85), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = new PIXI.Sprite(u.COMMON_MAIN.getTexture(12)),
                n = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(52)),
                o = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(51));
            return e.downArrowAnimationView = new s.DownArrowAnimationView, e.fromSlotItemChangeSummly = new d, e.toSlotItemChangeSummly = new d, e.changeButton = new p, e.headerHenkouKakunin = new c.TitleBar, e.headerHenkouKakunin.initialize(u.COMMON_MAIN.getTexture(3), 26), i.interactive = !0, e.changeButton.onClick = e._onClick, n.position.set(266, 18), e.fromSlotItemChangeSummly.position.set(27, 41), o.position.set(266, 267), e.toSlotItemChangeSummly.position.set(27, 288), e.changeButton.position.set(92, 486), e.downArrowAnimationView.position.set(170, 242), e.headerHenkouKakunin.position.set(0, -39), e.addChild(i, n, e.fromSlotItemChangeSummly, o, e.toSlotItemChangeSummly, e.changeButton, e.downArrowAnimationView, e.headerHenkouKakunin), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.fromSlotItemChangeSummly.dispose(), this.toSlotItemChangeSummly.dispose(), this.downArrowAnimationView.dispose(), this.changeButton.dispose(), this.headerHenkouKakunin.dispose(), this.downArrowAnimationView = null, this.fromSlotItemChangeSummly = null, this.toSlotItemChangeSummly = null, this.changeButton = null, this.onClick = null
        }, e.prototype.update = function (t, e) {
            t ? this.fromSlotItemChangeSummly.update(t) : this.fromSlotItemChangeSummly.clear(), e ? this.toSlotItemChangeSummly.update(e) : this.toSlotItemChangeSummly.clear()
        }, e
    }(PIXI.Container);
    e.ChangeConfirm = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e.texture = e.textureBtnSelectOn
            }, e._onMouseOut = function () {
                e.texture = e.textureBtnSelectOff
            }, e._onClick = function () {
                e.onClick()
            }, e.textureBtnSelectOff = l.REMODEL_MAIN.getTexture(10), e.textureBtnSelectOn = l.REMODEL_MAIN.getTexture(11), e.on(o.EventType.MOUSEOVER, e._onMouseOver), e.on(o.EventType.MOUSEOUT, e._onMouseOut), e.on(o.EventType.CLICK, e._onClick), e.texture = e.textureBtnSelectOff, e.interactive = e.buttonMode = !0, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.off(o.EventType.MOUSEOVER), this.off(o.EventType.MOUSEOUT), this.off(o.EventType.CLICK), this.onClick = null, this.textureBtnSelectOff = null, this.textureBtnSelectOn = null, this.removeChildren()
        }, e
    }(PIXI.Sprite), d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.textureCon2Bg2 = l.REMODEL_MAIN.getTexture(19), e.background = new PIXI.Sprite(e.textureCon2Bg2), e.textSpec = new a.TextBox(19, 5523516), e.textSpec.position.set(17, 42), e.addChild(e.background, e.textSpec), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.textSpec.destroy(), this.textSpec = null, this.textureCon2Bg2 = null, this.background = null
        }, e.prototype.update = function (t) {
            this.background.texture = this.textureCon2Bg2, this.textSpec.text = r.SlotUtil.genSummaryText(t, "+", "\n", !1, 5), new _.TaskLoadSlotResource("remodel", this.background, t.mstID).start()
        }, e.prototype.clear = function () {
            this.textSpec.text = "", this.background.texture = this.textureCon2Bg2
        }, e
    }(PIXI.Container)
}