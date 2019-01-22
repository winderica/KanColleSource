const function766 = function (t, e, i) {
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
    var o = i(9),
        r = i(3),
        s = i(3),
        a = i(4),
        _ = i(83),
        l = i(110),
        u = i(312),
        c = i(767),
        h = i(768),
        p = i(770),
        d = i(771),
        f = i(772),
        y = i(773),
        m = i(774),
        v = i(775),
        g = i(86),
        b = i(14),
        w = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.headerKansenStatus = new g.TitleBar, e.headerKansenStatus.initialize(s.COMMON_MAIN.getTexture(1), 35), e.background = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12)), e.textLevel = new a.TextBox(28, 5523516), e.textHp = new a.TextBox(15, 5523516), e.starRateView = new _.StarRateView, e.hpGaugeView = new l.HpGaugeView, e.textImageLv = new PIXI.Sprite(o.COMMON_MISC.getTexture(182)), e.remodelMaxMedal = new PIXI.Sprite(s.COMMON_MAIN.getTexture(28)), e._shipCard = new u.ShipCard(!1, !1), e._shipParameter = new c.ShipParameter, e._slotItemSlotBox = new h.SlotItemSlotBox, e._kaizoButton = new p.KaizoButton, e._kindaikaButton = new d.KindaikaButton, e._extraSlotItemSlot = new f.ExtraSlotItemSlot, e._detachAllButton = new y.DetachAllButton, e._extensionButton = new m.ExtensionButton, e._marriageButton = new v.MarriageButton, e.containerName = new PIXI.Container, e.containerName.position.set(42, 20), e.textName = new a.TextBox(27, 5523516), e.maskTextName = b.CreateRect.gradientLeftToRight(210, 45, .88, .91), e.containerName.mask = e.maskTextName, e.containerName.addChild(e.textName, e.maskTextName), e.headerKansenStatus.position.set(0, -39), e._detachAllButton.position.set(6, 101), e._slotItemSlotBox.position.set(57, 101), e._kaizoButton.position.set(546, 483), e._kindaikaButton.position.set(372, 483), e._extraSlotItemSlot.position.set(636, 311), e.textImageLv.position.set(238, 30), e.hpGaugeView.position.set(44, 72), e.textHp.position.set(152, 68), e.starRateView.position.set(228, 72), e.remodelMaxMedal.position.set(323, 20), e._shipCard.position.set(369, 26), e._extensionButton.position.set(369, 301), e._shipParameter.position.set(51, 351), e._marriageButton.position.set(212, 6), e.addChild(e.background, e._shipCard, e.hpGaugeView, e.textHp, e.starRateView, e._shipParameter, e._slotItemSlotBox, e._kaizoButton, e._kindaikaButton, e._detachAllButton, e._extraSlotItemSlot, e._extensionButton, e.remodelMaxMedal, e._marriageButton, e.textImageLv, e.textLevel, e.headerKansenStatus, e.containerName), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "slotItemSlotBox", {
                get: function () {
                    return this._slotItemSlotBox
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kaizoButton", {
                get: function () {
                    return this._kaizoButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kindaikaButton", {
                get: function () {
                    return this._kindaikaButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipCard", {
                get: function () {
                    return this._shipCard
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "extraSlotItemSlot", {
                get: function () {
                    return this._extraSlotItemSlot
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "detachAllButton", {
                get: function () {
                    return this._detachAllButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipParameter", {
                get: function () {
                    return this._shipParameter
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "extensionButton", {
                get: function () {
                    return this._extensionButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "marriageButton", {
                get: function () {
                    return this._marriageButton
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.update = function (t, e, i, n, o, r) {
                this.containerName.cacheAsBitmap = !1, this.textName.text = t, this.containerName.cacheAsBitmap = !0, this.textHp.text = i + "/" + n, this.hpGaugeView.update(i, n), this.starRateView.update(o), this._updateRemodelMax_(r), this._updateLevel_(e)
            }, e.prototype._updateRemodelMax_ = function (t) {
                this.remodelMaxMedal.visible = !1, t && (this.remodelMaxMedal.visible = !0)
            }, e.prototype._updateLevel_ = function (t) {
                this.textLevel.position.set(324, 24), this.textLevel.anchor.x = 1, this.textLevel.text = "" + t, 99 == t && (this.textLevel.anchor.x = 0, this.textLevel.position.x = this.textImageLv.x + 9 + this.textImageLv.width)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._shipCard.dispose(), this.textName.mask = null, this.starRateView.dispose(), this.hpGaugeView.dispose(), this._shipParameter.dispose(), this._slotItemSlotBox.dispose(), this._kaizoButton.dispose(), this._kindaikaButton.dispose(), this._extraSlotItemSlot.dispose(), this._detachAllButton.dispose(), this._extensionButton.dispose(), this._marriageButton.dispose(), this.headerKansenStatus.dispose(), this.containerName.cacheAsBitmap = !1, this.containerName.removeChildren(), this.textLevel.destroy(), this.textHp.destroy(), this.textName.destroy(), this.headerKansenStatus = null, this.background = null, this._shipCard = null, this.textName = null, this.maskTextName = null, this.textLevel = null, this.remodelMaxMedal = null, this.starRateView = null, this.textHp = null, this.hpGaugeView = null, this.textImageLv = null, this._shipParameter = null, this._slotItemSlotBox = null, this._kaizoButton = null, this._kindaikaButton = null, this._extraSlotItemSlot = null, this._detachAllButton = null, this._extensionButton = null, this._marriageButton = null
            }, e
        }(PIXI.Container);
    e.ShipDetail = w;
    var x = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12)),
                n = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(53));
            return n.position.set(210, 258), e.addChild(i, n), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ShipDetailEmpty = x
}