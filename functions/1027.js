const function1027 = function (t, e, i) {
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
        s = i(111),
        a = i(37),
        _ = i(9),
        u = i(53),
        l = i(229),
        c = i(358),
        h = i(230),
        p = i(362),
        d = i(1028),
        f = i(369),
        y = i(1029),
        m = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._selected_deck_id = 1, i._onChangeDeck = function (t) {
                    i.update(t)
                }, i._bg = new PIXI.Sprite, i.addChild(i._bg), i._ship_container = new PIXI.Container, i._ship_container.position.set(270, 160), i.addChild(i._ship_container), i._ships = [], i._btn_close = new f.CloseBtn(e), i._btn_close.position.set(1108, 27), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "selected_deck_id", {
                get: function () {
                    return this._selected_deck_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                this._bg.texture = u.SALLY_PRACTICE.getTexture(35);
                var a = new PIXI.Sprite(u.SALLY_PRACTICE.getTexture(29));
                a.position.set(40, 57), this._bg.addChild(a), a = new PIXI.Sprite(u.SALLY_PRACTICE.getTexture(33)), a.position.set(102, 64), this._bg.addChild(a);
                for (var f = 0; f < 6; f++) {
                    var m = new c.CompBannerAndLack;
                    m.initialize(), m.position.set(0, 76 * f), this._ship_container.addChild(m), this._ships.push(m)
                }
                if (this._deck_selection = new h.CompDeckBtns(this._onChangeDeck), this._deck_selection.initialize(t), this._btn_back = new d.BackBtn(n), this._btn_back.initialize(), this._btn = new y.StartPracticeBtn(i), this._btn.initialize(), this._rader = new p.Rader, this._rader.initialize(), this._arrow = new l.CompArrow2, this._arrow.initialize(), this._err_message = new r.TextBox(16, 16724736), this._deck_selection.position.set(270, 120), this._btn_back.position.set(306, 615), this._btn.position.set(558, 615), this._rader.position.set(556, 138), this._arrow.position.set(823, 616), this._err_message.anchor.set(.5, 0), this._err_message.position.set(750, 576), this.addChild(this._deck_selection), this.addChild(this._rader), this.addChild(this._arrow), this.addChild(this._btn_back), this.addChild(this._btn), this.addChild(this._err_message), o.default.model.deck.exist3rdUnit) {
                    var g = new PIXI.Sprite(_.COMMON_MISC.getTexture(183));
                    g.position.set(346, 98), this.addChild(g)
                }
                1 == e && (this._deck_combined_frame = new s.CombinedView, this._deck_combined_frame.position.set(263, 110), this._deck_combined_frame.adjustFramePosition(0, 1), this.addChild(this._deck_combined_frame)), this._btn_close.initialize(), this.addChild(this._btn_close)
            }, e.prototype.update = function (t) {
                if (this._selected_deck_id != t) {
                    var e = o.default.model.deck.get(t);
                    null != e && (this._selected_deck_id = t, this._update(e))
                }
            }, e.prototype._update = function (t) {
                a.TaskLoadShipResource.abortBy(this._ship_container), this._deck_selection.setSelected(t.mstID);
                for (var e = t.getShipListAll(), i = t.getShipList(), n = 0; n < this._ships.length; n++) {
                    var o = i[n];
                    this._ships[n].update(o, !1)
                }
                this._rader.update(e), this._checkCondition(t, e)
            }, e.prototype.activate = function () {
                this._arrow.activate(), this._btn_back.activate(), this._btn.activate(), null != this._deck_combined_frame && this._deck_combined_frame.activate();
                var t = this._selected_deck_id;
                this._selected_deck_id = 0, this.update(t), this._btn_close.activate()
            }, e.prototype.deactivate = function () {
                a.TaskLoadShipResource.abortBy(this._ship_container), this._arrow.deactivate(), this._btn.deactivate(), this._btn_back.deactivate(), this._rader.update(null), null != this._deck_combined_frame && this._deck_combined_frame.deactivate(), this._btn_close.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._deck_selection.dispose(), null != this._deck_combined_frame && this._deck_combined_frame.dispose();
                for (var t = 0, e = this._ships; t < e.length; t++) {
                    e[t].dispose()
                }
                this._rader.dispose(), this._arrow.dispose(), this._btn.dispose(), this._btn_back.dispose(), this._btn_close.dispose(), this._err_message.destroy()
            }, e.prototype._checkCondition = function (t, e) {
                var i = t.getCount();
                if (0 == i) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "");
                if (i > 6) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "\u904a\u6483\u90e8\u968a \u7b2c\u4e09\u90e8\u968a\u3067\u306f\u51fa\u6483\u3067\u304d\u307e\u305b\u3093\u3002");
                for (var n = o.default.model.ndock.getShipMemIDs(), r = !1, s = !1, a = !0, _ = 0, u = e; _ < u.length; _++) {
                    var l = u[_];
                    null != l && (-1 != n.indexOf(l.memID) && (r = !0), (l.fuelNow <= 0 || l.ammoNow <= 0) && (s = !0), (l.fuelNow < l.fuelMax || l.ammoNow < l.ammoMax) && (a = !1))
                }
                if (this._arrow.update(a), t.isCombined_Main() || t.isCombined_Sub()) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "\u9023\u5408\u8266\u968a\u3067\u306f\u51fa\u6483\u3067\u304d\u307e\u305b\u3093\u3002");
                if (null != t.expedition) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "");
                if (1 == r) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "\u8266\u968a\u5185\u306b\u5165\u6e20\u4e2d\u306e\u8266\u304c\u3042\u308a\u307e\u3059\uff01");
                if (1 == s) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "\u71c3\u6599\u30fb\u5f3e\u85ac\u306e\u88dc\u7d66\u4e0d\u8db3\u3067\u3059\uff01");
                var c = e[0].getDamageType();
                if (25 == c || 0 == c) return this._arrow.enabled = !1, this._btn.setEnabled(!1), void(this._err_message.text = "\u65d7\u8266\u304c\u5927\u7834\u3057\u3066\u304a\u308a\u3001\u51fa\u6483\u3067\u304d\u307e\u305b\u3093\u3002");
                this._arrow.enabled = !0, this._btn.setEnabled(!0), this._err_message.text = ""
            }, e
        }(PIXI.Container);
    e.PanelDeckSelect = m
}