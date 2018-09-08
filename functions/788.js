const function788 = function (t, e, i) {
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
    var o = i(21), r = i(335), s = i(789), a = i(790), _ = i(791), u = i(793), l = i(794), c = i(795),
        h = function (t) {
            function e() {
                var e = t.call(this) || this, i = new a.PowerUpHeader,
                    n = new PIXI.Sprite(o.COMMON_MAIN.getTexture(12));
                n.interactive = !0;
                var h = new PIXI.Container, p = new PIXI.Graphics, d = new PIXI.Sprite;
                h.position.set(-1, -1), h.mask = p, h.addChild(d, p);
                var f = new r.CancelButton, y = new _.ShipInfoBox, v = new s.KaryokuBeforeAfterConfirm,
                    g = new s.RaisouBeforeAfterConfirm, m = new s.SoukouBeforeAfterConfirm,
                    b = new s.TaikuBeforeAfterConfirm, w = new c.ShipParameterChecker, x = new l.TargetShipBox,
                    I = new u.StartButton;
                return p.beginFill(0, 0), p.moveTo(0, 30), p.lineTo(30, 0), p.lineTo(1050, 0), p.lineTo(1050, 569), p.lineTo(29, 569), p.lineTo(0, 537), p.lineTo(0, 30), p.endFill(), p.renderable = !1, f.width = 198, f.height = 56, f.position.set(543, 498), I.position.set(755, 483), x.position.set(534, 11), y.position.set(11, 334), i.position.set(0, -41), w.position.set(255, 343), e.addChild(n, h, y, f, I, v, g, m, b, w, i, x), e._shipFull = d, e._shipInfoBox = y, e._karyokuBeforeAfterConfirm = v, e._raisouBeforeAfterConfirm = g, e._soukouBeforeAfterConfirm = m, e._taikuBeforeAfterConfirm = b, e._shipParameterChecker = w, e._targetShipBox = x, e._startButton = I, e._cancelButton = f, e.headerKindaika = i, e._containerShipFull = h, e
            }

            return n(e, t), Object.defineProperty(e.prototype, "shipFull", {
                get: function () {
                    return this._shipFull
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "containerShipFull", {
                get: function () {
                    return this._containerShipFull
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shipInfoBox", {
                get: function () {
                    return this._shipInfoBox
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "karyokuBeforeAfterConfirm", {
                get: function () {
                    return this._karyokuBeforeAfterConfirm
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "raisouBeforeAfterConfirm", {
                get: function () {
                    return this._raisouBeforeAfterConfirm
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "soukouBeforeAfterConfirm", {
                get: function () {
                    return this._soukouBeforeAfterConfirm
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "taikuBeforeAfterConfirm", {
                get: function () {
                    return this._taikuBeforeAfterConfirm
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "shipParameterChecker", {
                get: function () {
                    return this._shipParameterChecker
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "targetShipBox", {
                get: function () {
                    return this._targetShipBox
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "startButton", {
                get: function () {
                    return this._startButton
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "cancelButton", {
                get: function () {
                    return this._cancelButton
                }, enumerable: !0, configurable: !0
            }), e.prototype.SetPos_karyokuBeforeAfterConfirm = function (t) {
                this._karyokuBeforeAfterConfirm.position.set(252, 26 - (t ? 3 : 0))
            }, e.prototype.SetPos_raisouBeforeAfterConfirm = function (t) {
                this._raisouBeforeAfterConfirm.position.set(252, 100 - (t ? 3 : 0))
            }, e.prototype.SetPos_taikuBeforeAfterConfirm = function (t) {
                this._taikuBeforeAfterConfirm.position.set(252, 170 - (t ? 3 : 0))
            }, e.prototype.SetPos_soukouBeforeAfterConfirm = function (t) {
                this._soukouBeforeAfterConfirm.position.set(252, 242 - (t ? 3 : 0))
            }, e.prototype.dispose = function () {
                this.headerKindaika.dispose(), this.headerKindaika = null, this._shipFull = null, this._containerShipFull.removeChildren(), this._containerShipFull.mask = null, this._containerShipFull = null, this._shipInfoBox.dispose(), this._shipInfoBox = null, this._karyokuBeforeAfterConfirm.dispose(), this._karyokuBeforeAfterConfirm = null, this._raisouBeforeAfterConfirm.dispose(), this._raisouBeforeAfterConfirm = null, this._soukouBeforeAfterConfirm.dispose(), this._soukouBeforeAfterConfirm = null, this._taikuBeforeAfterConfirm.dispose(), this._taikuBeforeAfterConfirm = null, this._shipParameterChecker.dispose(), this._shipParameterChecker = null, this._targetShipBox.onClickEmpty = null, this._targetShipBox.onClickSlotIn = null, this._targetShipBox.dispose(), this._targetShipBox = null, this._startButton.dispose(), this._startButton = null, this._cancelButton.dispose(), this._cancelButton = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.PowerUpEdit = h
}