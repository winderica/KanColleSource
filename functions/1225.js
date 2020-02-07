const function1225 = function (t, e, i) {
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
    var o = i(4),
        r = i(30),
        s = i(120),
        a = i(121),
        _ = i(121),
        u = i(121),
        l = i(121),
        c = i(121),
        h = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._list = new p(n), o._list.position.set(216, 165), o.addChild(o._list), o._tab = new _.TabContainer(e), o._tab.position.set(9, 184), o.addChild(o._tab), o._back_btn = new r.BackBtn, o._back_btn.position.set(2, 652), o.addChild(o._back_btn), o._minichara = new c.MiniChara, o._minichara.position.set(36, 498), o.addChild(o._minichara), o._header = new d, o._header.position.set(0, 105), o.addChild(o._header), o._pager = new u.Pager(i), o._pager.position.set(369, 681), o.addChild(o._pager), o
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._list.initialize(), this._tab.initialize(), this._back_btn.initialize(e), this._minichara.initialize(), this._header.initialize(t), this._pager.initialize()
            }, e.prototype.activate = function () {
                this._tab.activate(), this._back_btn.activate(), this._minichara.activate()
            }, e.prototype.deactivate = function () {
                this._tab.deactivate(), this._back_btn.deactivate(), this._minichara.deactivate()
            }, e.prototype.update = function (t) {
                this._list.update(t), this._tab.update(t.selected_type), this._pager.update(t.selected_page_no, t.page_max)
            }, e.prototype.dispose = function () {
                this._list.dispose(), this._tab.dispose(), this._back_btn.dispose(), this._minichara.dispose(), this._header.dispose(), this._pager.dispose()
            }, e
        }(PIXI.Container);
    e.DutyMainView = h;
    var p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onMouseOver = function (t) {
                    0 != t.model.alert && i._alert_later.showAlert(t)
                }, i._onMouseOut = function (t) {
                    i._alert_later.hideAlert(t)
                }, i._items = [];
                for (var n = 0; n < 5; n++) {
                    var o = new a.ListItem(e, i._onMouseOver, i._onMouseOut);
                    o.y = 102 * n, i.addChild(o), i._items.push(o)
                }
                return i._message = new PIXI.Sprite, i._message.position.set(285, 221), i._message.visible = !1, i.addChild(i._message), i._alert_later = new l.AlertLayer, i.addChild(i._alert_later), i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.update = function (t) {
                for (var e = 0; e < this._items.length; e++) {
                    var i = this._items[e],
                        n = e < t.models.length ? t.models[e] : null;
                    i.update(n)
                }
                t.models.length > 0 ? this._message.visible = !1 : (9 == t.selected_type ? this._message.texture = s.DUTY_MAIN.getTexture(52) : this._message.texture = s.DUTY_MAIN.getTexture(51), this._message.visible = !0)
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._items; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gear = new PIXI.Sprite, e._gear.position.set(186, 7), e.addChild(e._gear), e._title = new PIXI.Sprite, e._title.position.set(222, 6), e.addChild(e._title), e._message1 = new o.TextBox(21, 16777215), e._message1.y = 8, e.addChild(e._message1), e._message2 = new o.TextBox(21, 4565413), e._message2.y = 8, e.addChild(e._message2), e._message3 = new o.TextBox(21, 16777215), e._message3.y = 8, e.addChild(e._message3), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = s.DUTY_MAIN.getTexture(48), this._gear.texture = s.DUTY_MAIN.getTexture(49), this._title.texture = s.DUTY_MAIN.getTexture(50), this._message1.text = "\u73fe\u5728\u767a\u751f\u4e2d\u306e\u4efb\u52d9\u4e00\u89a7\u3067\u3059\u3002\u540c\u6642\u306b", this._message2.text = t.toString(), this._message3.text = "\u500b\u307e\u3067\u9042\u884c\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002", this._message3.x = 1200 - this._message3.width, this._message2.x = this._message3.x - this._message2.width, this._message1.x = this._message2.x - this._message1.width
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._message1.destroy(), this._message2.destroy(), this._message3.destroy()
            }, e
        }(PIXI.Sprite)
}