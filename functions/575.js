const function575 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(189), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._coin = o.default.model.useItem.getCount(44), i._furnitureJukeBoxBGMLineModel = e, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn_kagu", {
            get: function () {
                return this._btn_kagu
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "btn_back3", {
            get: function () {
                return this._btn_back3
            }, enumerable: !0, configurable: !0
        }), e.prototype.init = function () {
            this._pop_jukeboxbg2 = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(18)), this._pop_jukeboxbg2.position.set(301, 232), this.addChild(this._pop_jukeboxbg2), 1 == this._furnitureJukeBoxBGMLineModel.api_bgm_flag && (this._jukebox_icon_bgm = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(10)), this._jukebox_icon_bgm.position.set(469, 305), this.addChild(this._jukebox_icon_bgm)), this._bgm_name = new r.TextBox(17, 4473924), this._bgm_name.position.set(658, 301), this._bgm_name.text = this._furnitureJukeBoxBGMLineModel.api_name + "", this.addChild(this._bgm_name), this._bgm_coin_price = new r.TextBox(17, 4473924), this._bgm_coin_price.position.set(746, 340), this._bgm_coin_price.anchor.set(1, 0), this._bgm_coin_price.text = this._furnitureJukeBoxBGMLineModel.api_use_coin + "", this.addChild(this._bgm_coin_price), this._bgm_coin_now = new r.TextBox(17, 4473924), this._bgm_coin_now.position.set(746, 379), this._bgm_coin_now.anchor.set(1, 0), this._bgm_coin_now.text = this._coin + "", this.addChild(this._bgm_coin_now), this._coin < this._furnitureJukeBoxBGMLineModel.api_use_coin ? (this._bgm_coin_now.style.fill = 14483456, this._btn_kagu = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(3)), this._btn_kagu.interactive = !1) : (this._arrow_mini = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(0)), this._arrow_mini.position.set(751, 385), this.addChild(this._arrow_mini), this._bgm_coin_after = new r.TextBox(17, 4473924), this._bgm_coin_after.position.set(836, 379), this._bgm_coin_after.anchor.set(1, 0), this._bgm_coin_after.text = this._coin - this._furnitureJukeBoxBGMLineModel.api_use_coin + "", this.addChild(this._bgm_coin_after), this._btn_kagu = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(2)), this._btn_kagu.interactive = this._btn_kagu.buttonMode = !0), this._btn_kagu.position.set(370, 412), this.addChild(this._btn_kagu), this._btn_back3 = new PIXI.Sprite(s.JUKEBOX_COMMON.getTexture(1)), this._btn_back3.interactive = this._btn_back3.buttonMode = !0, this._btn_back3.position.set(689, 412), this.addChild(this._btn_back3)
        }, e.prototype.discard = function () {
            this.removeChildren(0, this.children.length)
        }, e
    }(PIXI.Container);
    e.JukeBoxConfirm = a
}