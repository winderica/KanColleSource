const function79 = function (t, e, i) {
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
    var o = i(4), r = i(298), s = i(9), a = function (t) {
        function e(e) {
            void 0 === e && (e = !0);
            var i = t.call(this) || this;
            return i._stype_name = new o.TextBox(27, 16777215), i._stype_name.position.set(116.5, 87), i._stype_name.anchor.set(0, 0), i._ship_name = new o.TextBox(45, 16777215), i._ship_name.position.set(116, 135), i._ship_name.anchor.set(0, 0), i._ship_name.style.align = "center", i._text = new o.TextBox(27, 16777215), i._text.position.set(246, 87), i._text.style.breakWords = !0, i._text.style.wordWrap = !0, i._text.style.wordWrapWidth = 792, i.addChild(i._stype_name), i.addChild(i._ship_name), i.addChild(i._text), 1 == e && (i._get_icon = new r.GetIcon, i._get_icon.position.set(1068, 53), i.addChild(i._get_icon)), i
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = s.COMMON_MISC.getTexture(120), this._stype_name.text = "", this._ship_name.text = "", this._text.text = "", this._message = t.replace(/<br\s*>/g, "\n").replace(/\u2019/g, "'"), null != this._get_icon && this._get_icon.initialize()
        }, e.prototype.append = function (t) {
            this._message = t.replace(/<br\s*>/g, "\n").replace(/\u2019/g, "'")
        }, e.prototype.initializeForShip = function (t, e, i) {
            for (this.texture = s.COMMON_MISC.getTexture(120), this._stype_name.text = t, this._ship_name.text = e, this._ship_name.width > 216 && e.length > 10 && (this._ship_name.text = this._ship_name.text.replace(" ", "\n")); this._ship_name.width > 216;) this._ship_name.style.fontSize = this._ship_name.style.fontSize - 1;
            this._stype_name.position.x = 21 + Math.floor(95.5 - this._stype_name.width / 2), this._ship_name.position.x = 8 + Math.floor(108 - this._ship_name.width / 2), this._text.text = "", this._message = i.replace(/<br\s*>/g, "\n").replace(/\u2019/g, "'"), null != this._get_icon && this._get_icon.initialize()
        }, e.prototype.initializeForSlot = function (t, e) {
            this.texture = s.COMMON_MISC.getTexture(120), this._stype_name.text = "", this._ship_name.text = "", this._text.text = "", this._message = t + "\u3092", e > 1 && (this._message += e + "\u500b"), this._message += "\u624b\u306b\u5165\u308c\u307e\u3057\u305f\u3002", null != this._get_icon && this._get_icon.initialize()
        }, e.prototype.initializeForUseitem = function (t, e) {
            this.texture = s.COMMON_MISC.getTexture(120), this._stype_name.text = "", this._ship_name.text = "", this._text.text = "", this._message = t + "\u3092", e > 1 && (this._message += e + "\u500b"), this._message += "\u624b\u306b\u5165\u308c\u307e\u3057\u305f\u3002", null != this._get_icon && this._get_icon.initialize()
        }, e.prototype.initializeForFood = function (t) {
            this.texture = s.COMMON_MISC.getTexture(120), this._stype_name.text = "", this._ship_name.text = "", this._text.text = "", this._message = "\u4e3b\u8a08\u79d1\u5175\u7ad9\u304b\u3089\u5f37\u596a\u3055\u308c\u305f\u300c" + t + "\u300d\u3092\u3001\u7121\u4e8b\u56de\u53ce\u3057\u307e\u3057\u305f\u3002", null != this._get_icon && this._get_icon.initialize()
        }, e.prototype.initializeForFurniture = function (t) {
            this.texture = s.COMMON_MISC.getTexture(120), this._stype_name.text = "", this._ship_name.text = "", this._text.text = "", this._message = t + "\u3092\u624b\u306b\u5165\u308c\u307e\u3057\u305f\u3002", null != this._get_icon && this._get_icon.initialize()
        }, e.prototype.activate = function (t) {
            var e = this;
            void 0 === t && (t = null), null != this._get_icon && this._get_icon.activate(), null == this._t && null != this._message && 0 != this._message.length && (this._t = createjs.Tween.get(null, { loop: !0 }).wait(100).call(function () {
                var i = e._message.substr(0, 1);
                " " == e._text.text ? e._text.text = i : e._text.text += i, e._message = e._message.substr(1), 0 == e._message.length && (e._t.setPaused(!0), e._t = null, null != t && t())
            }))
        }, e.prototype.deactivate = function () {
            null != this._get_icon && this._get_icon.deactivate(), null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e
    }(PIXI.Sprite);
    e.MessageBox = a
}