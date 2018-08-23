const function762 = function (t, e, i) {
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
    var o = i(9), r = i(3), s = i(3), a = i(4), _ = i(81), u = i(110), l = i(317), c = i(763), h = i(764),
        p = i(766), d = i(767), f = i(768), y = i(769), v = i(770), g = i(771), m = i(84), b = i(13),
        w = function (t) {
            function e() {
                var e = t.call(this) || this, i = new m.TitleBar;
                i.initialize(s.COMMON_MAIN.getTexture(1), 35);
                var n = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12)), r = new a.TextBox(28, 5523516),
                    w = new a.TextBox(15, 5523516), x = new _.StarRateView, I = new u.HpGaugeView,
                    T = new PIXI.Sprite(o.COMMON_MISC.getTexture(180)),
                    O = new PIXI.Sprite(s.COMMON_MAIN.getTexture(28)), P = new l.ShipCard(!1, !1),
                    C = new c.ShipParameter, k = new h.SlotItemSlotBox, M = new p.KaizoButton,
                    S = new d.KindaikaButton, A = new f.ExtraSlotItemSlot, j = new y.DetachAllButton,
                    E = new v.ExtensionButton, L = new g.MarriageButton, N = new PIXI.Container;
                N.position.set(42, 20);
                var B = new a.TextBox(27, 5523516), R = b.CreateRect.gradientLeftToRight(210, 45, .88, .91);
                return N.mask = R, N.addChild(B, R), i.position.set(0, -39), j.position.set(6, 101), k.position.set(57, 101), M.position.set(546, 483), S.position.set(372, 483), A.position.set(636, 311), T.position.set(238, 30), I.position.set(44, 72), w.position.set(152, 68), x.position.set(228, 72), O.position.set(323, 20), P.position.set(369, 26), E.position.set(369, 301), C.position.set(51, 351), L.position.set(212, 6), e.addChild(n, P, I, w, x, C, k, M, S, j, A, E, O, L, T, r, i, N), e.background = n, e._shipCard = P, e.textName = B, e.maskTextName = R, e.textLevel = r, e.remodelMaxMedal = O, e.starRateView = x, e.textHp = w, e.hpGaugeView = I, e.textImageLv = T, e._shipParameter = C, e._slotItemSlotBox = k, e._kaizoButton = M, e._kindaikaButton = S, e._extraSlotItemSlot = A, e._detachAllButton = j, e._extensionButton = E, e._marriageButton = L, e.headerKansenStatus = i, e.containerName = N, e
            }

            return n(e, t), Object.defineProperty(e.prototype, "slotItemSlotBox", {
                get: function () {
                    return this._slotItemSlotBox
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "kaizoButton", {
                get: function () {
                    return this._kaizoButton
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "kindaikaButton", {
                get: function () {
                    return this._kindaikaButton
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shipCard", {
                get: function () {
                    return this._shipCard
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "extraSlotItemSlot", {
                get: function () {
                    return this._extraSlotItemSlot
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "detachAllButton", {
                get: function () {
                    return this._detachAllButton
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shipParameter", {
                get: function () {
                    return this._shipParameter
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "extensionButton", {
                get: function () {
                    return this._extensionButton
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "marriageButton", {
                get: function () {
                    return this._marriageButton
                }, enumerable: !0, configurable: !0
            }), e.prototype.update = function (t, e, i, n, o, r) {
                this.containerName.cacheAsBitmap = !1, this.textName.text = t, this.containerName.cacheAsBitmap = !0, this.textHp.text = i + "/" + n, this.hpGaugeView.update(i, n), this.starRateView.update(o), this._updateRemodelMax_(r), this._updateLevel_(e)
            }, e.prototype._updateRemodelMax_ = function (t) {
                this.remodelMaxMedal.visible = !1, t && (this.remodelMaxMedal.visible = !0)
            }, e.prototype._updateLevel_ = function (t) {
                this.textLevel.position.set(324, 24), this.textLevel.anchor.x = 1, this.textLevel.text = "" + t, 99 == t && (this.textLevel.anchor.x = 0, this.textLevel.position.x = this.textImageLv.x + 9 + this.textImageLv.width)
            }, e.prototype.dispose = function () {
                this.background.texture = PIXI.Texture.EMPTY, this._shipCard.dispose(), this.textName.text = "", this.textName.mask = null, this.maskTextName.texture = PIXI.Texture.EMPTY, this.textLevel.text = "", this.remodelMaxMedal.texture = PIXI.Texture.EMPTY, this.starRateView.dispose(), this.textHp.text = "", this.hpGaugeView.dispose(), this.textImageLv.texture = PIXI.Texture.EMPTY, this._shipParameter.dispose(), this._slotItemSlotBox.dispose(), this._kaizoButton.dispose(), this._kindaikaButton.dispose(), this._extraSlotItemSlot.dispose(), this._detachAllButton.dispose(), this._extensionButton.dispose(), this._marriageButton.dispose(), this.headerKansenStatus.dispose(), this.containerName.removeChildren(), this.headerKansenStatus = null, this.background = null, this._shipCard = null, this.textName = null, this.maskTextName = null, this.textLevel = null, this.remodelMaxMedal = null, this.starRateView = null, this.textHp = null, this.hpGaugeView = null, this.textImageLv = null, this._shipParameter = null, this._slotItemSlotBox = null, this._kaizoButton = null, this._kindaikaButton = null, this._extraSlotItemSlot = null, this._detachAllButton = null, this._extensionButton = null, this._marriageButton = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ShipDetail = w;
    var x = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12)),
                n = new PIXI.Sprite(r.REMODEL_MAIN.getTexture(53));
            return n.position.set(210, 258), e.addChild(i, n), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ShipDetailEmpty = x
}