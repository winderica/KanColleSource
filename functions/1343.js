const function1343 = function (t, e, i) {
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
    var o = i(4), r = i(60), s = i(69), a = i(23), _ = i(15), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._bg = new PIXI.Sprite, e.addChild(e._bg), e._gauge = new c, e.addChild(e._gauge), e._ship_name = new l(46, 16774898), e.addChild(e._ship_name), e._level = new o.TextBox(32, 16774898), e.addChild(e._level), e._karyoku = new o.TextBox(24, 16774898), e._raisou = new o.TextBox(24, 16774898), e._taiku = new o.TextBox(24, 16774898), e._soukou = new o.TextBox(24, 16774898), e.addChild(e._karyoku), e.addChild(e._raisou), e.addChild(e._taiku), e.addChild(e._soukou), e._ring = new s.RingSmall, e._ring.visible = !1, e.addChild(e._ring), e._slotIcons = [], e
        }

        return n(e, t), e.prototype.initilize = function (t) {
            var e = t.friend, i = t.slots, n = t.isMarriage();
            this._updateBackground(e, i), this._updateHPGauge(e, t.hp_now, t.hp_max), this._updateShipNameText(t.name, e, i, n), 1 == t.friend ? (this._level.position.set(56, 66), this._karyoku.position.set(94, 108), this._raisou.position.set(214, 108), this._taiku.position.set(334, 108), this._soukou.position.set(448, 108)) : (this._level.position.set(131, 66), this._karyoku.position.set(168, 108), this._raisou.position.set(288, 108), this._taiku.position.set(408, 108), this._soukou.position.set(522, 108)), n ? (this._ring.x = 1 == t.friend ? 152 : 233, this._ring.y = 69, this._ring.initialize(), this._ring.activate(), this._ring.visible = !0) : (this._ring.deactivate(), this._ring.visible = !1), this._level.text = t.level.toString(), this._karyoku.text = t.karyoku.toString(), this._raisou.text = t.raisou.toString(), this._taiku.text = t.taiku.toString(), this._soukou.text = t.soukou.toString(), this._updateSlot(e, i)
        }, e.prototype._updateBackground = function (t, e) {
            var i;
            i = e.length >= 5 ? t ? 121 : 119 : t ? 120 : 118, this._bg.texture = _.BATTLE_MAIN.getTexture(i)
        }, e.prototype._updateHPGauge = function (t, e, i) {
            this._gauge.x = t ? 192 : 267, this._gauge.y = 81, this._gauge.initialize(e / i)
        }, e.prototype._updateShipNameText = function (t, e, i, n) {
            this._ship_name.position.set(e ? 15 : 92, 6);
            var o = { text: t, color: n ? 16766947 : 16774898, maskW: i.length >= 5 ? 185 : 230, maskH: 53 };
            this._ship_name.update(o)
        }, e.prototype._updateSlot = function (t, e) {
            for (; this._slotIcons.length > 0;) {
                var i = this._slotIcons.pop();
                null != i.parent && i.parent.removeChild(i)
            }
            if (null != e) {
                var n;
                n = t ? e.length >= 5 ? 203 : 263 : e.length >= 5 ? 282 : 342;
                for (var o = 0; o < e.length; o++) {
                    var r = new h;
                    r.x = n + 60 * o, r.y = 18;
                    var s = e[o];
                    null == s ? r.visible = !1 : r.initialize(s.iconType), this.addChild(r), this._slotIcons.push(r)
                }
            }
        }, e
    }(PIXI.Container);
    e.CutinStatusBox = u;
    var l = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            n._text = new o.TextBox(e, i), n.addChild(n._text);
            var r = new PIXI.Graphics;
            return n.addChild(r), n.mask = r, n
        }

        return n(e, t), e.prototype.update = function (t) {
            if (this.cacheAsBitmap = !1, null != t.text && t.text.length > 0 && (this._text.text = t.text), null != t.color && (this._text.style.fill = t.color), t.maskW > 0 && t.maskH > 0) {
                this.mask.beginFill(0, 0).drawRect(0, 0, t.maskW, t.maskH).endFill()
            }
            this.cacheAsBitmap = !0
        }, e
    }(PIXI.Container);
    e.MaskedText = l;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._GAUGE_WIDTH_ = 300, e._GAUGE_HEIGHT_ = 12, e._bar = new PIXI.Graphics, e.addChild(e._bar);
            var i = new PIXI.Graphics;
            return e._drawShape(i, 0), e.addChild(i), e._bar.mask = i, e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            t = Math.max(t, 0), t = Math.min(t, 1), this._bar.x = -this._GAUGE_WIDTH_ * (1 - t);
            var e = a.MathUtil.getColor(t);
            this._drawShape(this._bar, e)
        }, e.prototype._drawShape = function (t, e) {
            var i = this._GAUGE_HEIGHT_ / 2;
            t.beginFill(e), t.arc(i, i, i, Math.PI / 2, Math.PI / 2 * 3), t.arc(this._GAUGE_WIDTH_ - i, i, i, -Math.PI / 2, Math.PI / 2), t.endFill()
        }, e
    }(PIXI.Container), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._icon = new r.IconWeapon, e.addChild(e._icon), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = _.BATTLE_MAIN.getTexture(56), this._icon.update(t)
        }, e
    }(PIXI.Sprite)
}