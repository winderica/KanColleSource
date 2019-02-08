const function1055 = function (t, e, i) {
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
    var o = i(377),
        r = i(33),
        s = i(1056),
        a = i(1057),
        _ = i(1),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._btn_back = new r.BackBtn, e._btn_back.position.set(0, 653), e._btn_modeInfo = new u, e._btn_modeInfo.position.set(0, 205), e._btn_modeRanking = new u, e._btn_modeRanking.position.set(0, 261), e._isModeChanging = !1, e._disposed = !1, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "btn_back", {
                get: function () {
                    return this._btn_back
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_modeInfo", {
                get: function () {
                    return this._btn_modeInfo
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_modeRanking", {
                get: function () {
                    return this._btn_modeRanking
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "sideMenu_light1", {
                get: function () {
                    return this._sideMenu_light1
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(o.RECORD_MENU.getTexture(0));
                this.addChild(t), this._btn_back.initialize(), this._btn_back.activate(), this._btn_modeInfo.initialize(4, 6), this._btn_modeRanking.initialize(1, 3), this._sideMenu_light1 = new PIXI.Sprite(o.RECORD_MENU.getTexture(5)), this._sideMenu_light1.position.set(this._btn_modeInfo.position.x, this._btn_modeInfo.position.y), this.sideMenu_light_blink(), this._kira = new s.RecordKiraLayer, this._kira.scale.set(1, 1), this._kira.position.set(132, 528), this._kira.initialize(), this._medalist = new a.RecordMiniChara, this._medalist.scale.set(1, 1), this._medalist.position.set(-21, 433), this._medalist.initialize(), this._medalist.activate(), this.addChild(this._btn_back), this.addChild(this._btn_modeInfo), this.addChild(this._btn_modeRanking), this.addChild(this._sideMenu_light1), this.addChild(this._medalist), this.addChild(this._kira)
            }, e.prototype.sideMenu_light_blink = function () {
                var t = this;
                this._t = createjs.Tween.get(this._sideMenu_light1).to({
                    alpha: 0
                }, 1).to({
                    alpha: 1
                }, 2500, createjs.Ease.quadOut).to({
                    alpha: 0
                }, 2499, createjs.Ease.quadIn).call(function () {
                    t._t = null, t._disposed || t.sideMenu_light_blink()
                })
            }, e.prototype.dispose = function () {
                this._disposed = !0, this._medalist.dispose(), this._medalist = null, this._kira.dispose(), this._kira = null, this._btn_back.dispose(), this._btn_modeInfo.dispose(), this._btn_modeRanking.dispose(), this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ViewTop = l;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }
        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(_.EventType.MOUSEOVER, this._onMouseOver), this.on(_.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(_.EventType.MOUSEOVER, this._onMouseOver), this.off(_.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this.texture = o.RECORD_MENU.getTexture(t)
        }, e
    }(PIXI.Sprite)
}