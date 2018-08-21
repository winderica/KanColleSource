const function776 = function (t, e, i) {
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
    var o = i(1), r = i(50), s = i(113), a = i(4), _ = i(82), u = i(20), l = i(68), c = i(84), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = new PIXI.Sprite(u.COMMON_MAIN.getTexture(12)),
                n = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(52)),
                o = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(51)), r = new s.DownArrowAnimationView,
                _ = (new PIXI.Sprite, new PIXI.Sprite, new a.TextBox(19, 5523516)), h = new a.TextBox(19, 5523516),
                f = new d, y = new d, v = new p, g = new c.TitleBar;
            return g.initialize(u.COMMON_MAIN.getTexture(3), 26), i.interactive = !0, v.onClick = e._onClick, n.position.set(266, 18), f.position.set(27, 41), o.position.set(266, 267), y.position.set(27, 288), v.position.set(92, 486), r.position.set(170, 242), _.position.set(44, 81), h.position.set(44, 330), g.position.set(0, -39), e.addChild(i, n, f, o, y, v, r, _, h, g), e.downArrowAnimationView = r, e.fromSlotItemChangeSummly = f, e.toSlotItemChangeSummly = y, e.changeButton = v, e.headerHenkouKakunin = g, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.changeButton.onClick = this._onClick = null, this.fromSlotItemChangeSummly.dispose(), this.toSlotItemChangeSummly.dispose(), this.downArrowAnimationView.dispose(), this.changeButton.dispose(), this.headerHenkouKakunin.dispose(), this.downArrowAnimationView = null, this.fromSlotItemChangeSummly = null, this.toSlotItemChangeSummly = null, this.changeButton = null, this.onClick = null, this.removeChildren()
        }, e.prototype.update = function (t, e) {
            t ? this.fromSlotItemChangeSummly.update(t) : this.fromSlotItemChangeSummly.clear(), e ? this.toSlotItemChangeSummly.update(e) : this.toSlotItemChangeSummly.clear()
        }, e
    }(PIXI.Container);
    e.ChangeConfirm = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onMouseOver = function () {
                e.texture = e.textureBtnSelectOn
            }, e._onMouseOut = function () {
                e.texture = e.textureBtnSelectOff
            }, e._onClick = function () {
                e.onClick()
            };
            var i = l.REMODEL_MAIN.getTexture(10), n = l.REMODEL_MAIN.getTexture(11);
            return e.addListener(o.EventType.MOUSEOVER, e._onMouseOver), e.addListener(o.EventType.MOUSEOUT, e._onMouseOut), e.addListener(o.EventType.CLICK, e._onClick), e.textureBtnSelectOff = i, e.textureBtnSelectOn = n, e.texture = i, e.interactive = e.buttonMode = !0, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeAllListeners(o.EventType.MOUSEOVER), this.removeAllListeners(o.EventType.MOUSEOUT), this.removeAllListeners(o.EventType.CLICK), this.interactive = this.buttonMode = !1, this.onClick = this._onClick = null, this._onMouseOut = null, this._onMouseOver = null, this.removeChildren()
        }, e
    }(PIXI.Sprite), d = function (t) {
        function e() {
            var e = t.call(this) || this, i = l.REMODEL_MAIN.getTexture(19), n = new PIXI.Sprite(i),
                o = new a.TextBox(19, 5523516);
            return o.position.set(17, 42), e.addChild(n, o), e.background = n, e.textSpec = o, e.textureCon2Bg2 = i, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.background.texture = PIXI.Texture.EMPTY, this.textSpec.text = "", this.textSpec = null, this.textureCon2Bg2 = null, this.background = null, this.textSpec = null
        }, e.prototype.update = function (t) {
            this.background.texture = this.textureCon2Bg2, this.textSpec.text = r.SlotUtil.genSummaryText(t, "+", "\n", !1, 5), new _.TaskLoadSlotResource("remodel", this.background, t.mstID).start()
        }, e.prototype.clear = function () {
            this.textSpec.text = "", this.background.texture = this.textureCon2Bg2
        }, e
    }(PIXI.Container)
}