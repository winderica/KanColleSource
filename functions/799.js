const function799 = function (t, e, i) {
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
    var o = i(21),
        r = i(337),
        s = i(800),
        a = i(801),
        _ = i(802),
        l = i(804),
        u = i(805),
        c = i(806),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.headerKindaika = new a.PowerUpHeader;
                var i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(12));
                i.interactive = !0, e._containerShipFull = new PIXI.Container;
                var n = new PIXI.Graphics;
                return e._shipFull = new PIXI.Sprite, e._containerShipFull.position.set(-1, -1), e._containerShipFull.mask = n, e._containerShipFull.addChild(e._shipFull, n), e._cancelButton = new r.CancelButton, e._shipInfoBox = new _.ShipInfoBox, e._karyokuBeforeAfterConfirm = new s.KaryokuBeforeAfterConfirm, e._raisouBeforeAfterConfirm = new s.RaisouBeforeAfterConfirm, e._soukouBeforeAfterConfirm = new s.SoukouBeforeAfterConfirm, e._taikuBeforeAfterConfirm = new s.TaikuBeforeAfterConfirm, e._shipParameterChecker = new c.ShipParameterChecker, e._targetShipBox = new u.TargetShipBox, e._startButton = new l.StartButton, n.beginFill(0, 0), n.moveTo(0, 30), n.lineTo(30, 0), n.lineTo(1050, 0), n.lineTo(1050, 569), n.lineTo(29, 569), n.lineTo(0, 537), n.lineTo(0, 30), n.endFill(), n.renderable = !1, e._cancelButton.width = 198, e._cancelButton.height = 56, e._cancelButton.position.set(543, 498), e._startButton.position.set(755, 483), e._targetShipBox.position.set(534, 11), e._shipInfoBox.position.set(11, 334), e.headerKindaika.position.set(0, -41), e._shipParameterChecker.position.set(255, 343), e.addChild(i, e._containerShipFull, e._shipInfoBox, e._cancelButton, e._startButton, e._karyokuBeforeAfterConfirm, e._raisouBeforeAfterConfirm, e._soukouBeforeAfterConfirm, e._taikuBeforeAfterConfirm, e._shipParameterChecker, e.headerKindaika, e._targetShipBox), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "shipFull", {
                get: function () {
                    return this._shipFull
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "containerShipFull", {
                get: function () {
                    return this._containerShipFull
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipInfoBox", {
                get: function () {
                    return this._shipInfoBox
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "karyokuBeforeAfterConfirm", {
                get: function () {
                    return this._karyokuBeforeAfterConfirm
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "raisouBeforeAfterConfirm", {
                get: function () {
                    return this._raisouBeforeAfterConfirm
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "soukouBeforeAfterConfirm", {
                get: function () {
                    return this._soukouBeforeAfterConfirm
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "taikuBeforeAfterConfirm", {
                get: function () {
                    return this._taikuBeforeAfterConfirm
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipParameterChecker", {
                get: function () {
                    return this._shipParameterChecker
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "targetShipBox", {
                get: function () {
                    return this._targetShipBox
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "startButton", {
                get: function () {
                    return this._startButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cancelButton", {
                get: function () {
                    return this._cancelButton
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.SetPos_karyokuBeforeAfterConfirm = function (t) {
                this._karyokuBeforeAfterConfirm.position.set(252, 26 - (t ? 3 : 0))
            }, e.prototype.SetPos_raisouBeforeAfterConfirm = function (t) {
                this._raisouBeforeAfterConfirm.position.set(252, 100 - (t ? 3 : 0))
            }, e.prototype.SetPos_taikuBeforeAfterConfirm = function (t) {
                this._taikuBeforeAfterConfirm.position.set(252, 170 - (t ? 3 : 0))
            }, e.prototype.SetPos_soukouBeforeAfterConfirm = function (t) {
                this._soukouBeforeAfterConfirm.position.set(252, 242 - (t ? 3 : 0))
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._containerShipFull.removeChildren(), this._containerShipFull.mask = null, this.headerKindaika.dispose(), this._shipInfoBox.dispose(), this._karyokuBeforeAfterConfirm.dispose(), this._raisouBeforeAfterConfirm.dispose(), this._soukouBeforeAfterConfirm.dispose(), this._taikuBeforeAfterConfirm.dispose(), this._shipParameterChecker.dispose(), this._targetShipBox.dispose(), this._startButton.dispose(), this._cancelButton.dispose(), this.headerKindaika = null, this._shipFull = null, this._containerShipFull = null, this._shipInfoBox = null, this._karyokuBeforeAfterConfirm = null, this._raisouBeforeAfterConfirm = null, this._soukouBeforeAfterConfirm = null, this._taikuBeforeAfterConfirm = null, this._shipParameterChecker = null, this._targetShipBox = null, this._startButton = null, this._cancelButton = null
            }, e
        }(PIXI.Container);
    e.PowerUpEdit = h
}