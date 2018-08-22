const function1020 = function (t, e, i) {
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
    var o = i(4), r = (i(263), i(23)), s = i(38), a = i(1021), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._activated = !1, i._expedition_id = -1, i._deck_id = -1, i._remain_time = 0, i._timer_key = -1, i._onClick = function () {
                null != i._cancel_cb && i._cancel_cb(i._expedition_id, i._deck_id)
            }, i._cancel_cb = e, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "deck_name", {
            get: function () {
                return this._deck_name
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            var t = new PIXI.Graphics;
            t.lineStyle(1, 13421772), t.moveTo(21, 228), t.lineTo(336, 228), t.moveTo(21, 439), t.lineTo(336, 439), t.moveTo(21, 498), t.lineTo(336, 498), this.addChild(t);
            var e = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(42));
            e.position.set(28, 579), this.addChild(e), this._deck_name = new o.TextBox(15, 4999235), this._deck_name.position.set(27, 186), this.addChild(this._deck_name), this._time_remaining = new o.TextBox(22, 4999235), this._time_remaining.anchor.set(1, 0), this._time_remaining.position.set(337, 576), this.addChild(this._time_remaining), this._remaining_none = new o.TextBox(19, 4999235), this._remaining_none.text = "\u307e\u3082\u306a\u304f\u5e30\u9084\u3057\u307e\u3059", this._remaining_none.position.set(127, 606), this.addChild(this._remaining_none), this._icon = new PIXI.Sprite(s.SALLY_EXPEDITION.getTexture(35)), this._icon.position.set(31, 627), this.addChild(this._icon), this._btn = new a.BtnCancel(this._onClick), this._btn.initialize(), this._btn.position.set(87, 636), this._btn.visible = !1, this.addChild(this._btn)
        }, e.prototype.update = function (t, e) {
            if (null == t) this._expedition_id = -1, this._deck_id = -1, this._deck_name.text = "", this._time_remaining.text = "", this._remaining_none.visible = !1, this._btn.visible = !1, this._deactivate(); else {
                this._expedition_id = t.mstID, this._deck_id = e.mstID, this._deck_name.text = e.name;
                var i = Date.now(), n = e.expedition.complete_unixtime, o = n - i;
                o = Math.max(o, 0) / 1e3, this._remain_time = o, this._updateRemainTime(), this._btn.visible = !0, 3 == e.expedition.state ? this._btn.enabled = !1 : 0 == t.isCancelable() ? this._btn.enabled = !1 : this._btn.enabled = !(o <= 0), this._activate()
            }
        }, e.prototype._activate = function () {
            var t = this;
            0 == this._activated && (this._activated = !0), this._remain_time > 0 && -1 == this._timer_key && (this._timer_key = setInterval(function () {
                t._remain_time--, t._remain_time <= 0 && (clearInterval(t._timer_key), t._timer_key = -1), t._updateRemainTime()
            }, 1e3)), this._btn.activate()
        }, e.prototype._deactivate = function () {
            this._timer_key > 0 && (clearInterval(this._timer_key), this._timer_key = -1), this._btn.deactivate(), this._activated = !1
        }, e.prototype._updateRemainTime = function () {
            var t = this._remain_time;
            if (t > 0) {
                var e = r.MathUtil.zeroPadding(Math.floor(t) % 60, 2), i = Math.floor(t / 60),
                    n = r.MathUtil.zeroPadding(i % 60, 2), o = r.MathUtil.zeroPadding(Math.floor(i / 60), 2);
                this._time_remaining.text = o + ":" + n + ":" + e, this._time_remaining.visible = !0, this._remaining_none.visible = !1
            } else this._time_remaining.visible = !1, this._remaining_none.visible = !0, this._btn.enabled = !1
        }, e
    }(PIXI.Container);
    e.PanelDetailInExpe = _
}