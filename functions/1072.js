const function1072 = function (t, e, i) {
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
    var o = i(4), r = i(13), s = i(3), a = i(39), _ = i(39), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._bg = new PIXI.Sprite, i.addChild(i._bg), i._labels = [], i._items_ship = [], i._items_slot = [];
            for (var n = 0; n < 10; n++) {
                var r = new o.TextBox(28, 4999235);
                r.x = 156 + n % 5 * 180, r.y = 44 + 287 * Math.floor(n / 5), r.text = "000", i.addChild(r), i._labels.push(r);
                var s = new a.MainItemShip(e);
                s.x = 120 + n % 5 * 179, s.y = 78 + 288 * Math.floor(n / 5), i._items_ship.push(s);
                var u = new _.MainItemSlot(e);
                u.x = 120 + n % 5 * 179, u.y = 93 + 318 * Math.floor(n / 5), i._items_slot.push(u)
            }
            return i
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            if (this._updateLabels(t, e), 1 == t) this._removeSlotItems(), this._bg.texture = s.ALBUM_MAIN.getTexture(17), this._updateShipItem(i), this._addShipItem(); else {
                if (2 != t) return this._removeShipItems(), this._removeSlotItems(), this._bg.texture = PIXI.Texture.EMPTY, null;
                this._removeShipItems(), this._bg.texture = s.ALBUM_MAIN.getTexture(40), this._updateSlotItem(i), this._addSlotItem()
            }
        }, e.prototype.activate = function () {
            if (null != this._items_ship) for (var t = 0, e = this._items_ship; t < e.length; t++) {
                var i = e[t];
                null != i.parent && i.activate()
            }
            if (null != this._items_slot) for (var n = 0, o = this._items_slot; n < o.length; n++) {
                var i = o[n];
                null != i.parent && i.activate()
            }
        }, e.prototype.deactivate = function () {
            if (null != this._items_ship) for (var t = 0, e = this._items_ship; t < e.length; t++) {
                var i = e[t];
                i.deactivate()
            }
            if (null != this._items_slot) for (var n = 0, o = this._items_slot; n < o.length; n++) {
                var i = o[n];
                i.deactivate()
            }
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e.prototype._updateLabels = function (t, e) {
            for (var i = 0; i < this._labels.length; i++) {
                var n = this._labels[i], o = r.MathUtil.zeroPadding(e + 1 + i, 3);
                1 == t ? (n.x = 156 + i % 5 * 178, n.y = 44 + 287 * Math.floor(i / 5), n.text = o) : 2 == t ? (n.x = 153 + i % 5 * 178, n.y = 57 + 318 * Math.floor(i / 5), n.text = o) : n.text = ""
            }
        }, e.prototype._addShipItem = function () {
            if (null != this._items_ship) for (var t = 0, e = this._items_ship; t < e.length; t++) {
                var i = e[t];
                this.addChild(i)
            }
        }, e.prototype._updateShipItem = function (t) {
            if (null == this._items_ship) return null;
            if (null == t) return null;
            for (var e = t, i = Math.min(this._items_ship.length, e.length), n = 0; n < i; n++) {
                var o = this._items_ship[n], r = e[n];
                o.update(r)
            }
        }, e.prototype._removeShipItems = function () {
            if (null != this._items_ship) for (var t = 0, e = this._items_ship; t < e.length; t++) {
                var i = e[t];
                null != i.parent && i.parent.removeChild(i)
            }
        }, e.prototype._addSlotItem = function () {
            if (null != this._items_slot) for (var t = 0, e = this._items_slot; t < e.length; t++) {
                var i = e[t];
                this.addChild(i)
            }
        }, e.prototype._updateSlotItem = function (t) {
            if (null == this._items_slot) return null;
            if (null == t) return null;
            for (var e = t, i = Math.min(this._items_slot.length, e.length), n = 0; n < i; n++) {
                var o = this._items_slot[n], r = e[n];
                o.update(r)
            }
        }, e.prototype._removeSlotItems = function () {
            if (null != this._items_slot) for (var t = 0, e = this._items_slot; t < e.length; t++) {
                var i = e[t];
                null != i.parent && i.parent.removeChild(i)
            }
        }, e
    }(PIXI.Container);
    e.MainContainer = u
}