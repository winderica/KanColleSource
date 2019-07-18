const function1081 = function (t, e, i) {
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
    var o = i(15),
        r = i(41),
        s = i(3),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._items_ship = [], i._items_slot = [], i._slot_separate = new PIXI.Container, i._slot_separate.position.set(0, 10);
                var n = new PIXI.Sprite;
                n.name = "l1", n.position.set(120, 312), i._slot_separate.addChild(n);
                var o = new PIXI.Sprite;
                o.name = "l2", o.position.set(502, 300), i._slot_separate.addChild(o);
                var s = new PIXI.Sprite;
                s.name = "l3", s.position.set(660, 312), i._slot_separate.addChild(s), i.addChild(i._slot_separate);
                for (var a = 0; a < 10; a++) {
                    var _ = new r.MainItemShip(e);
                    _.x = 120 + a % 5 * 179, _.y = 45 + 288 * Math.floor(a / 5), i._items_ship.push(_);
                    var u = new r.MainItemSlot(e);
                    u.x = 120 + a % 5 * 179, u.y = 60 + 318 * Math.floor(a / 5), i._items_slot.push(u)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._slot_separate.getChildByName("l1").texture = s.ALBUM_MAIN.getTexture(17), this._slot_separate.getChildByName("l2").texture = s.ALBUM_MAIN.getTexture(18), this._slot_separate.getChildByName("l3").texture = s.ALBUM_MAIN.getTexture(17), this._items_ship.forEach(function (t) {
                    t.initialize()
                }), this._items_slot.forEach(function (t) {
                    t.initialize()
                })
            }, e.prototype.update = function (t, e, i) {
                if (this._updateLabels(t, e), 1 == t) this._slot_separate.visible = !1, this._removeSlotItems(), this._updateShipItem(i), this._addShipItem();
                else {
                    if (2 != t) return this._slot_separate.visible = !1, this._removeShipItems(), this._removeSlotItems(), null;
                    this._slot_separate.visible = !0, this._removeShipItems(), this._updateSlotItem(i), this._addSlotItem()
                }
            }, e.prototype.activate = function () {
                if (null != this._items_ship)
                    for (var t = 0, e = this._items_ship; t < e.length; t++) {
                        var i = e[t];
                        null != i.parent && i.activate()
                    }
                if (null != this._items_slot)
                    for (var n = 0, o = this._items_slot; n < o.length; n++) {
                        var i = o[n];
                        null != i.parent && i.activate()
                    }
            }, e.prototype.deactivate = function () {
                if (null != this._items_ship)
                    for (var t = 0, e = this._items_ship; t < e.length; t++) {
                        var i = e[t];
                        i.deactivate()
                    }
                if (null != this._items_slot)
                    for (var n = 0, o = this._items_slot; n < o.length; n++) {
                        var i = o[n];
                        i.deactivate()
                    }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate();
                for (var t = 0; t < this._items_ship.length; t++) this._items_ship[t].dispose(), this._items_ship[t] = null;
                for (var t = 0; t < this._items_slot.length; t++) this._items_slot[t].dispose(), this._items_slot[t] = null;
                this._slot_separate.removeChildren(), this._items_ship = null, this._items_slot = null, this._slot_separate = null
            }, e.prototype._updateLabels = function (t, e) {
                switch (t) {
                    case 1:
                        this._items_ship.forEach(function (t, i) {
                            var n = o.MathUtil.zeroPadding(e + 1 + i, 3);
                            t.updateLabel(n)
                        });
                        break;
                    case 2:
                        this._items_slot.forEach(function (t, i) {
                            var n = o.MathUtil.zeroPadding(e + 1 + i, 3);
                            t.updateLabel(n)
                        })
                }
            }, e.prototype._addShipItem = function () {
                if (null != this._items_ship)
                    for (var t = 0, e = this._items_ship; t < e.length; t++) {
                        var i = e[t];
                        this.addChild(i)
                    }
            }, e.prototype._updateShipItem = function (t) {
                if (null == this._items_ship) return null;
                if (null == t) return null;
                for (var e = t, i = Math.min(this._items_ship.length, e.length), n = 0; n < i; n++) {
                    var o = this._items_ship[n],
                        r = e[n];
                    o.update(r)
                }
            }, e.prototype._removeShipItems = function () {
                if (null != this._items_ship)
                    for (var t = 0, e = this._items_ship; t < e.length; t++) {
                        var i = e[t];
                        null != i.parent && i.parent.removeChild(i)
                    }
            }, e.prototype._addSlotItem = function () {
                if (null != this._items_slot)
                    for (var t = 0, e = this._items_slot; t < e.length; t++) {
                        var i = e[t];
                        this.addChild(i)
                    }
            }, e.prototype._updateSlotItem = function (t) {
                if (null == this._items_slot) return null;
                if (null == t) return null;
                for (var e = t, i = Math.min(this._items_slot.length, e.length), n = 0; n < i; n++) {
                    var o = this._items_slot[n],
                        r = e[n];
                    o.update(r)
                }
            }, e.prototype._removeSlotItems = function () {
                if (null != this._items_slot)
                    for (var t = 0, e = this._items_slot; t < e.length; t++) {
                        var i = e[t];
                        null != i.parent && i.parent.removeChild(i)
                    }
            }, e
        }(PIXI.Container);
    e.MainContainer = a
}