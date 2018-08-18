const function1092 = function (t, e, i) {
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
    var o = i(1), r = i(393), s = i(394), a = i(395), _ = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._selected = !1, n._activated = !1, n._onClick = function () {
                null != n._cb_onClick && n._cb_onClick(n._target)
            }, n._onMouseOver = function () {
                n._update(!0)
            }, n._onMouseOut = function () {
                n._update(!1)
            }, n._target = e, n._cb_onClick = i, n.interactive = !0, n._base = new PIXI.Sprite, n.addChild(n._base), n._over = new PIXI.Sprite, n.addChild(n._over), n._light = new u, n.addChild(n._light), n
        }

        return n(e, t), Object.defineProperty(e.prototype, "target", {
            get: function () {
                return this._target
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "selected", {
            set: function (t) {
                this._selected != t && (this._selected = t, 0 == this._selected && 1 == this._activated ? this._activate() : this._deactivate(), this._update(!1))
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this._deactivate(), 0 == this._selected && 1 == this._activated && this.activate(), this._base.texture = this._getTexture(t), this._over.texture = this._getTextureOn(t), this._light.initialize(this._getTextureOn(t)), 201 == t ? (this._over.y = -3, this._light.y = -3) : (this._over.y = 0, this._light.y = 0), this._update(!1)
        }, e.prototype.activate = function () {
            this._activated = !0, 1 != this.buttonMode && 1 != this._selected && this._activate()
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onClick = null
        }, e.prototype._activate = function () {
            this.buttonMode = !0, this.on(o.EventType.MOUSEOVER, this._onMouseOver), this.on(o.EventType.MOUSEOUT, this._onMouseOut), this.on(o.EventType.CLICK, this._onClick)
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(o.EventType.MOUSEOVER, this._onMouseOver), this.off(o.EventType.MOUSEOUT, this._onMouseOut), this.off(o.EventType.CLICK, this._onClick)
        }, e.prototype._update = function (t) {
            0 == t || 1 == this._selected ? (this._base.visible = !0, this._over.visible = !1) : (this._base.visible = !1, this._over.visible = !0), 1 == this._selected ? this._light.activate() : this._light.deactivate()
        }, e.prototype._getTexture = function (t) {
            if (101 == t || 102 == t) {
                if (0 == this._target) return r.ITEM_MENU_1.getTexture(0);
                if (1 == this._target) return r.ITEM_MENU_1.getTexture(2);
                if (2 == this._target) return r.ITEM_MENU_1.getTexture(4)
            } else if (201 == t) {
                if (0 == this._target) return s.ITEM_MENU_2.getTexture(0);
                if (1 == this._target) return s.ITEM_MENU_2.getTexture(2);
                if (2 == this._target) return s.ITEM_MENU_2.getTexture(4)
            } else if (301 == t) {
                if (0 == this._target) return a.ITEM_MENU_3.getTexture(0);
                if (1 == this._target) return a.ITEM_MENU_3.getTexture(2);
                if (2 == this._target) return a.ITEM_MENU_3.getTexture(4)
            } else if (311 == t) {
                if (0 == this._target) return a.ITEM_MENU_3.getTexture(6);
                if (1 == this._target) return a.ITEM_MENU_3.getTexture(8);
                if (2 == this._target) return a.ITEM_MENU_3.getTexture(10)
            }
            return PIXI.Texture.EMPTY
        }, e.prototype._getTextureOn = function (t) {
            if (101 == t || 102 == t) {
                if (0 == this._target) return r.ITEM_MENU_1.getTexture(1);
                if (1 == this._target) return r.ITEM_MENU_1.getTexture(3);
                if (2 == this._target) return r.ITEM_MENU_1.getTexture(5)
            } else if (201 == t) {
                if (0 == this._target) return s.ITEM_MENU_2.getTexture(1);
                if (1 == this._target) return s.ITEM_MENU_2.getTexture(3);
                if (2 == this._target) return s.ITEM_MENU_2.getTexture(5)
            } else if (301 == t) {
                if (0 == this._target) return a.ITEM_MENU_3.getTexture(1);
                if (1 == this._target) return a.ITEM_MENU_3.getTexture(3);
                if (2 == this._target) return a.ITEM_MENU_3.getTexture(5)
            } else if (311 == t) {
                if (0 == this._target) return a.ITEM_MENU_3.getTexture(7);
                if (1 == this._target) return a.ITEM_MENU_3.getTexture(9);
                if (2 == this._target) return a.ITEM_MENU_3.getTexture(11)
            }
            return PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite);
    e.TabBtn = _;
    var u = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = t, this.visible = !1
        }, e.prototype.activate = function () {
            this.alpha = 0, this.visible = !0, this._tween = createjs.Tween.get(this, { loop: !0 }).to({ alpha: 1 }, 3e3).to({ alpha: 0 }, 3e3)
        }, e.prototype.deactivate = function () {
            this.visible = !1, null != this._tween && this._tween.setPaused(!0), this._tween = null
        }, e.prototype.dispose = function () {
            this.deactivate()
        }, e
    }(PIXI.Sprite)
}