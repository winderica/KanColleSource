const function825 = function (t, e, i) {
    "use strict";

    function n(t, e) {
        return t > 0 && 0 === e ? "\u672c\u6539\u88c5\u3067\u306f\u300c\u958b\u767a\u8cc7\u6750\u300d\u3092" + t + "\u500b\n\u4f7f\u7528\u3057\u307e\u3059\u3002" : t > 0 && e > 0 ? "\u672c\u6539\u88c5\u3067\u306f\u300c\u9ad8\u901f\u5efa\u9020\u6750\u300d\u3092\n" + e + "\u500b\u3001\u300c\u958b\u767a\u8cc7\u6750\u300d\u3092" + t + "\u500b\n\u4f7f\u7528\u3057\u307e\u3059\u3002" : ""
    }
    var o = this && this.__extends || function () {
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
    var r = i(4),
        s = i(3),
        a = function (t) {
            function e() {
                return t.call(this) || this
            }
            return o(e, t), e.prototype.showMessageOneItem = function (t, e, i, n) {
                if (this.hideAll(), i > 0 || n > 0) {
                    var o = new h;
                    o.update(t, e, i, n), this._current = o
                } else {
                    var o = new _;
                    o.update(t, e, i, n), this._current = o
                }
                this.addChild(this._current)
            }, e.prototype.showMessageTwoItems = function (t, e, i, n, o, r) {
                this.hideAll();
                var s = new l;
                s.update(t, e, i, n, o, r), this.addChild(s), this._current = s
            }, e.prototype.showMessageThreeItems = function (t, e, i, n, o, r, s, a) {
                this.hideAll();
                var _ = new u;
                _.update(t, e, i, n, o, r, s, a), this.addChild(_), this._current = _
            }, e.prototype.showMessageFourItems = function (t, e, i, n, o, r, s, a, _, l) {
                this.hideAll();
                var u = new c;
                u.update(t, e, i, n, o, r, s, a, _, l), this.addChild(u), this._current = u
            }, e.prototype.showMessageKits = function (t, e) {
                this.hideAll();
                var i = new p;
                i.update(t, e), this.addChild(i), this._current = i
            }, e.prototype.showAlertLackOfItem = function (t, e) {
                this.hideAll();
                var i = new d;
                i.update(t, e), this.addChild(i), this._current = i
            }, e.prototype.hideAll = function () {
                null != this._current && (null != this._current.parent && this._current.parent.removeChild(this._current), this._current.dispose(), this._current = null)
            }, e.prototype.dispose = function () {
                this.hideAll(), this.removeChildren()
            }, e
        }(PIXI.Container);
    e.KaizoRequireItemPanel = a;
    var _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon = new PIXI.Sprite, e._icon.position.set(87, 0), e.addChild(e._icon), e._message = new r.TextBox(18, 1644567), e._message.position.set(0, 95), e.addChild(e._message), e
            }
            return o(e, t), e.prototype.update = function (t, e, i, n) {
                switch (this._icon.texture = s.COMMON_ITEMICONS.getTextureFromMstID(t), t) {
                    case 58:
                        this._message.text = "\u3053\u306e\u6539\u88c5\u3067\u306f\u300c\u6539\u88c5\u8a2d\u8a08\u56f3\u300d\u3092\n" + e + "\u679a\u4f7f\u7528\u3057\u307e\u3059\u3002";
                        break;
                    case 78:
                        this._message.text = "\u3053\u306e\u6539\u88c5\u3067\u306f\u300c\u6226\u95d8\u8a73\u5831\u300d" + e + "\u90e8\u304c\n\u5fc5\u8981\u3067\u3059\u3002";
                        break;
                    default:
                        this._message.text = ""
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message.destroy(), this._icon = null, this._message = null
            }, e
        }(PIXI.Container),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon1 = new PIXI.Sprite, e._icon1.position.set(30, 0), e.addChild(e._icon1), e._icon2 = new PIXI.Sprite, e._icon2.position.set(153, 0), e.addChild(e._icon2), e._message = new r.TextBox(17, 1644567), e._message.position.set(3, 81), e.addChild(e._message), e._message2 = new r.TextBox(17, 1644567), e._message2.position.set(0, 150), e.addChild(e._message2), e
            }
            return o(e, t), e.prototype.update = function (t, e, i, o, r, a) {
                switch (this._icon1.texture = s.COMMON_ITEMICONS.getTextureFromMstID(t), this._icon2.texture = s.COMMON_ITEMICONS.getTextureFromMstID(i), i) {
                    case 65:
                        this._message.text = "\u672c\u6539\u88c5\u306f\uff62\u8a66\u88fd\u7532\u677f\u30ab\u30bf\u30d1\u30eb\u30c8\uff63\u3068\n\uff62\u6539\u88c5\u8a2d\u8a08\u56f3\uff63" + e + "\u679a\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002";
                        break;
                    case 78:
                        this._message.text = "\u672c\u6539\u88c5\u306f\uff62\u6226\u95d8\u8a73\u5831\uff63" + o + "\u90e8\u3068\n\uff62\u6539\u88c5\u8a2d\u8a08\u56f3\uff63" + e + "\u679a\u304c\u5fc5\u8981\u3067\u3059\u3002";
                        break;
                    default:
                        this._message.text = ""
                }
                this._message2.text = n(r, a)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message.destroy(), this._message2.destroy(), this._icon1 = null, this._icon2 = null, this._message = null, this._message2 = null
            }, e
        }(PIXI.Container),
        u = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = 3;
                return e._icon1 = new PIXI.Sprite, e._icon1.position.set(i, 0), e.addChild(e._icon1), i += 85, e._icon2 = new PIXI.Sprite, e._icon2.position.set(i, 0), e.addChild(e._icon2), i += 85, e._icon3 = new PIXI.Sprite, e._icon3.position.set(i, 0), e.addChild(e._icon3), e._message = new r.TextBox(17, 1644567), e._message.position.set(3, 81), e.addChild(e._message), e._message2 = new r.TextBox(17, 1644567), e._message2.position.set(3, 155), e.addChild(e._message2), e
            }
            return o(e, t), e.prototype.update = function (t, e, i, o, r, a, _, l) {
                this._icon1.texture = s.COMMON_ITEMICONS.getTextureFromMstID(t), this._icon2.texture = s.COMMON_ITEMICONS.getTextureFromMstID(i), this._icon3.texture = s.COMMON_ITEMICONS.getTextureFromMstID(r);
                var u = "\u672c\u6539\u88c5\u306b\u306f";
                switch (t) {
                    case 78:
                        u += "\uff62\u6226\u95d8\u8a73\u5831\uff63" + e + "\u90e8\u3068\n";
                        break;
                    case 58:
                        u += "\uff62\u6539\u88c5\u8a2d\u8a08\u56f3\uff63" + e + "\u679a\u3068\n";
                        break;
                    default:
                        u += ""
                }
                switch (i) {
                    case 75:
                        u += "\uff62\u65b0\u578b\u7832\u7195\u5175\u88c5\u8cc7\u6750\uff63" + o + "\u3064\u3068\n";
                        break;
                    case 65:
                        u += "\uff62\u8a66\u88fd\u7532\u677f\u30ab\u30bf\u30d1\u30eb\u30c8\uff63\u3068\n";
                        break;
                    default:
                        u += ""
                }
                switch (r) {
                    case 58:
                        u += "\uff62\u6539\u88c5\u8a2d\u8a08\u56f3\uff63" + a + "\u679a";
                        break;
                    case 78:
                        u += "\uff62\u6226\u95d8\u8a73\u5831\uff63" + a + "\u90e8";
                        break;
                    default:
                        u += ""
                }
                this._message.text = u + "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._message2.text = n(_, l)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message.destroy(), this._message2.destroy(), this._icon1 = null, this._icon2 = null, this._icon3 = null, this._message = null, this._message2 = null
            }, e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = 5;
                return e._icon1 = new PIXI.Sprite, e._icon1.width = 60, e._icon1.height = 60, e._icon1.position.set(i, 8), e.addChild(e._icon1), i += 65, e._icon2 = new PIXI.Sprite, e._icon2.width = 60, e._icon2.height = 60, e._icon2.position.set(i, 8), e.addChild(e._icon2), i += 65, e._icon3 = new PIXI.Sprite, e._icon3.width = 60, e._icon3.height = 60, e._icon3.position.set(i, 8), e.addChild(e._icon3), i += 65, e._icon4 = new PIXI.Sprite, e._icon4.width = 60, e._icon4.height = 60, e._icon4.position.set(i, 8), e.addChild(e._icon4), e._message1 = new r.TextBox(17, 1644567), e._message1.position.set(2, 74), e.addChild(e._message1), e._message2 = new r.TextBox(17, 1644567), e._message2.position.set(2, 153), e.addChild(e._message2), e
            }
            return o(e, t), e.prototype.update = function (t, e, i, o, r, a, _, l, u, c) {
                this._icon1.texture = s.COMMON_ITEMICONS.getTextureFromMstID(t), this._icon2.texture = s.COMMON_ITEMICONS.getTextureFromMstID(i), this._icon3.texture = s.COMMON_ITEMICONS.getTextureFromMstID(r), this._icon4.texture = s.COMMON_ITEMICONS.getTextureFromMstID(_);
                var h = "\u672c\u6539\u88c5\u306b\u306f";
                switch (t) {
                    case 58:
                        h += "\uff62\u6539\u88c5\u8a2d\u8a08\u56f3\uff63" + e + "\u679a\u3068\n";
                        break;
                    default:
                        h += ""
                }
                switch (i) {
                    case 65:
                        h += "\uff62\u8a66\u88fd\u7532\u677f\u30ab\u30bf\u30d1\u30eb\u30c8\uff63";
                        break;
                    default:
                        h += ""
                }
                switch (r) {
                    case 78:
                        h += "\uff62\u6226\u95d8\u8a73\u5831\uff63\n";
                        break;
                    default:
                        h += ""
                }
                switch (_) {
                    case 77:
                        h += "\uff62\u65b0\u578b\u822a\u7a7a\u5175\u88c5\u8cc7\u6750" + (l > 1 ? "x" + l : "") + "\uff63";
                        break;
                    default:
                        h += ""
                }
                this._message1.text = h + "\u304c\u5fc5\u8981\u3067\u3059\u3002", this._message2.text = n(u, c)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._icon1 = null, this._icon2 = null, this._icon3 = null, this._icon4 = null, this._message1 = null, this._message2 = null
            }, e
        }(PIXI.Container),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon = new PIXI.Sprite, e._icon.position.set(0, 0), e.addChild(e._icon), e._message1 = new r.TextBox(18, 1644567), e._message1.position.set(77, 11), e.addChild(e._message1), e._message2 = new r.TextBox(18, 1644567), e._message2.position.set(0, 105), e.addChild(e._message2), e
            }
            return o(e, t), e.prototype.update = function (t, e, i, o) {
                switch (this._icon.texture = s.COMMON_ITEMICONS.getTextureFromMstID(t), t) {
                    case 58:
                        this._message1.text = "\u672c\u6539\u88c5\u306f\u300c\u6539\u88c5\u8a2d\u8a08\u56f3\u300d\n" + e + "\u679a\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002";
                        break;
                    case 78:
                        this._message1.text = "\u672c\u6539\u88c5\u306f\u300c\u6226\u95d8\u8a73\u5831\u300d\n" + e + "\u90e8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002";
                        break;
                    default:
                        this._message1.text = ""
                }
                this._message2.text = n(i, o)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._icon = null, this._message1 = null, this._message2 = null
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._message = new r.TextBox(18, 1644567), e._message.position.set(0, 0), e.addChild(e._message), e
            }
            return o(e, t), e.prototype.update = function (t, e) {
                this._message.text = t > 0 ? e > 0 ? "\u672c\u6539\u88c5\u3067\u306f\u300c\u9ad8\u901f\u5efa\u9020\u6750\u300d\u3092\n" + e + "\u500b\u3001\u300c\u958b\u767a\u8cc7\u6750\u300d\u3092" + t + "\u500b\n\u4f7f\u7528\u3057\u307e\u3059\u3002" : "\u3053\u306e\u6539\u88c5\u3067\u306f\u300c\u958b\u767a\u8cc7\u6750\u300d\u3092\n" + t + "\u500b\u4f7f\u7528\u3057\u307e\u3059\u3002" : e > 0 ? "\u3053\u306e\u6539\u88c5\u3067\u306f\u300c\u9ad8\u901f\u5efa\u9020\u6750\u300d\u3092\n" + e + "\u500b\u4f7f\u7528\u3057\u307e\u3059\u3002" : ""
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message.destroy(), this._message = null
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon = new PIXI.Sprite, e._icon.position.set(87, 0), e.addChild(e._icon), e._message1 = new r.TextBox(18, 1644567), e._message1.position.set(0, 81), e.addChild(e._message1), e._message2 = new r.TextBox(18, 1644567), e._message2.position.set(0, 81), e.addChild(e._message2), e._message3 = new r.TextBox(18, 1644567), e.addChild(e._message3), e
            }
            return o(e, t), e.prototype.update = function (t, e) {
                if (this._icon.texture = s.COMMON_ITEMICONS.getTextureFromMstID(t), 58 == t) this._message1.style.fontSize = 15, this._message1.style.fill = 1644567, this._message2.style.fontSize = 15, this._message2.style.fill = 16724736, this._message3.style.fontSize = 15, this._message3.style.fill = 1644567, this._message1.text = "\u300c\u6539\u88c5\u8a2d\u8a08\u56f3\u300d\u304c", this._message2.text = "\u8db3\u308a\u307e\u305b\u3093\u3002", this._message2.position.set(this._message1.width, 81), this._message3.text = "\u3053\u306e\u6539\u88c5\u3067\u306f\u300c\u6539\u88c5\u8a2d\u8a08\u56f3\u300d\u304c" + e + "\u679a\n\u5fc5\u8981\u3067\u3059\u3002\u52f2\u7ae0\u30924\u500b\u96c6\u3081\u308b\u3068\u3001\n\u30a2\u30a4\u30c6\u30e0\u753b\u9762\u3067\u300c\u6539\u88c5\u8a2d\u8a08\u56f3\u300d\u3068\n\u4ea4\u63db\u3067\u304d\u307e\u3059\u3002", this._message3.y = this._message1.y + this._message1.height;
                else {
                    switch (this._message1.style.fontSize = 18, this._message1.style.fill = 39270, this._message2.style.fontSize = 18, this._message2.style.fill = 1644567, t) {
                        case 65:
                            this._message1.text = "\uff62\u8a66\u88fd\u7532\u677f\u30ab\u30bf\u30d1\u30eb\u30c8\uff63";
                            break;
                        case 78:
                            this._message1.text = "\uff62\u6226\u95d8\u8a73\u5831\uff63";
                            break;
                        case 75:
                            this._message1.text = "\uff62\u65b0\u578b\u7832\u7195\u5175\u88c5\u8cc7\u6750\uff63";
                            break;
                        case 77:
                            this._message1.text = "\uff62\u65b0\u578b\u822a\u7a7a\u5175\u88c5\u8cc7\u6750\uff63";
                            break;
                        default:
                            this._message1.text = ""
                    }
                    this._message1.position.set(11, 83), this._message2.text = "\n\u672c\u6539\u88c5\u306b\u306f\u4e0a\u8a18\u30a2\u30a4\u30c6\u30e0\u304c\n\u5fc5\u8981\u3067\u3059\u3002", this._message2.position.set(11, 83), this._message3.text = ""
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._message3.destroy(), this._message1 = null, this._message2 = null, this._message3 = null, this._icon = null
            }, e
        }(PIXI.Container)
}