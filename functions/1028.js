const function1028 = function (t, e, i) {
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
        r = i(4),
        s = i(29),
        a = i(38),
        _ = i(368),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._activated = !1, i._target_id = -1, i._onClick = function () {
                    null != i._decision_cb && i._decision_cb(i._target_id)
                }, i._decision_cb = e, i
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Graphics;
                t.lineStyle(1, 13421772), t.moveTo(21, 228), t.lineTo(336, 228), t.moveTo(21, 498), t.lineTo(336, 498), this.addChild(t);
                var e = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(45));
                e.position.set(28, 433), this.addChild(e);
                var i = new PIXI.Sprite(s.SALLY_COMMON.getTexture(29));
                i.position.set(187, 430), this.addChild(i), this._fuel = new r.TextBox(21, 4999235), this._fuel.anchor.set(1, 0), this._fuel.position.set(262, 432), this.addChild(this._fuel);
                var n = new PIXI.Sprite(s.SALLY_COMMON.getTexture(30));
                n.position.set(270, 430), this.addChild(n), this._ammo = new r.TextBox(21, 4999235), this._ammo.anchor.set(1, 0), this._ammo.position.set(346, 432), this.addChild(this._ammo);
                var o = new PIXI.Sprite(s.SALLY_COMMON.getTexture(46));
                o.position.set(28, 508), this.addChild(o), this._item1 = new PIXI.Sprite, this._item1.position.set(25, 546), this.addChild(this._item1), this._item1_count = new r.TextBox(22, 4999235), this._item1_count.position.set(100, 570), this.addChild(this._item1_count), this._item2 = new PIXI.Sprite, this._item2.position.set(189, 546), this.addChild(this._item2), this._item2_count = new r.TextBox(22, 4999235), this._item2_count.position.set(265, 570), this.addChild(this._item2_count), this._btn = new _.BtnDicision, this._btn.initialize(), this._btn.position.set(45, 637), this._btn.on("dicision", this._onClick), this._btn.visible = !1, this.addChild(this._btn)
            }, e.prototype.update = function (t) {
                if (null == t) this._target_id = -1, this._fuel.text = "", this._ammo.text = "", this._item1.visible = !1, this._item1_count.text = "", this._item2.visible = !1, this._item2_count.text = "", this._btn.visible = !1, this._deactivate();
                else {
                    this._target_id = t.mstID, this._fuel.text = this._getMaterialText(t.fuel), this._ammo.text = this._getMaterialText(t.ammo);
                    var e = t.item1_id,
                        i = t.item1_count;
                    e > 0 && i > 0 ? (this._item1.texture = o.default.resources.getUseitem(e, 0), this._item1.visible = !0, this._item1_count.text = i > 0 ? "\xd7" + i : "") : (this._item1.visible = !1, this._item1_count.text = "");
                    var n = t.item2_id,
                        r = t.item2_count;
                    n > 0 && r > 0 ? (this._item2.texture = o.default.resources.getUseitem(n, 0), this._item2.visible = !0, this._item2_count.text = r > 0 ? "\xd7" + r : "") : (this._item2.visible = !1, this._item2_count.text = ""), this._btn.visible = !0, this._activate()
                }
            }, e.prototype.dispose = function () {
                this._deactivate(), this.removeChildren(), this._decision_cb = null, this._fuel.destroy(), this._ammo.destroy(), this._item1_count.destroy(), this._item2_count.destroy(), this._btn.off("dicision", this._onClick)
            }, e.prototype._activate = function () {
                0 == this._activated && (this._btn.activate(), this._activated = !0)
            }, e.prototype._deactivate = function () {
                this._btn.deactivate(), this._activated = !1
            }, e.prototype._getMaterialText = function (t) {
                return t <= 0 ? "\u306a\u3057" : t <= .3 ? "\u5c11\u91cf" : "\u666e\u901a"
            }, e
        }(PIXI.Container);
    e.PanelDetailNoExpe = l
}