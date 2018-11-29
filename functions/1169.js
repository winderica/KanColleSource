const function1169 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = i(1), a = function (t) {
        function e(e, i, n) {
            var r = t.call(this) || this;
            return r._onMouseOver = function () {
                null != r._cb_onMouseOver && null != r._model && 3 == r._model.status && r._cb_onMouseOver(r)
            }, r._onMouseOut = function () {
                null != r._cb_onMouseOut && null != r._model && 3 == r._model.status && r._cb_onMouseOut(r)
            }, r._onClick = function () {
                null != r._cb_onClick && r._cb_onClick(r._model)
            }, r._cb_onClick = e, r._cb_onMouseOver = i, r._cb_onMouseOut = n, r._icon = new _, r._icon.position.set(9, 7), r.addChild(r._icon), r._title = new o.TextBox(21, 4999235), r._title.position.set(105, 2), r.addChild(r._title), r._description = new o.TextBox(15, 4999235), r._description.position.set(105, 27), r.addChild(r._description), r._bonus = new PIXI.Sprite, r._bonus.position.set(115, 70), r.addChild(r._bonus), r._mat = new u, r._mat.position.set(234, 66), r.addChild(r._mat), r._progress = new l, r._progress.position.set(715, 69), r.addChild(r._progress), r._type = new c, r._type.position.set(70, 54), r.addChild(r._type), r._status = new h, r._status.position.set(849, 0), r.addChild(r._status), r.interactive = !0, r
        }

        return n(e, t), Object.defineProperty(e.prototype, "model", {
            get: function () {
                return this._model
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = r.DUTY_COMMON.getTexture(4), this._bonus.texture = r.DUTY_COMMON.getTexture(20), this._mat.initialize()
        }, e.prototype.update = function (t) {
            this._model = t, null == t ? (this.visible = !1, this._deactivate()) : (this._icon.update(t.category), this._title.text = t.title, this._description.text = t.description.replace(/<br>/g, "\n"), this._bonus.visible = t.hasBonus(), this._mat.update(t.fuel, t.ammo, t.steel, t.baux), this._progress.update(t.progress), this._type.update(t.type), this._status.update(t.status), this.visible = !0, this._activate())
        }, e.prototype.dispose = function () {
            this._model = null, this._deactivate(), this.removeChildren(), this._title.destroy(), this._description.destroy(), this._mat.dispose(), this._status.dispose(), this._cb_onClick = null, this._cb_onMouseOver = null, this._cb_onMouseOut = null
        }, e.prototype._activate = function () {
            1 != this.buttonMode && (this.buttonMode = !0, this.on(s.EventType.MOUSEOVER, this._onMouseOver), this.on(s.EventType.MOUSEOUT, this._onMouseOut), this.on(s.EventType.CLICK, this._onClick))
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(s.EventType.MOUSEOVER, this._onMouseOver), this.off(s.EventType.MOUSEOUT, this._onMouseOut), this.off(s.EventType.CLICK, this._onClick)
        }, e
    }(PIXI.Sprite);
    e.ListItem = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            var e;
            if (1 == t) e = 46; else if (2 == t) e = 41; else if (3 == t) e = 42; else if (4 == t) e = 43; else if (5 == t) e = 44; else if (6 == t) e = 47; else if (7 == t) e = 45; else if (8 == t) e = 41; else {
                if (9 != t) return void (this.texture = PIXI.Texture.EMPTY);
                e = 48
            }
            this.texture = r.DUTY_COMMON.getTexture(e)
        }, e
    }(PIXI.Sprite), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._fuel = new o.TextBox(19, 4999235), e._fuel.position.set(29, 0), e._ammo = new o.TextBox(19, 4999235), e._ammo.position.set(115, 0), e._steel = new o.TextBox(19, 4999235), e._steel.position.set(198, 0), e._baux = new o.TextBox(19, 4999235), e._baux.position.set(278, 0), e
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = r.DUTY_COMMON.getTexture(10), e = new PIXI.Sprite(t);
            e.position.set(0, 1), this.addChild(e), t = r.DUTY_COMMON.getTexture(11), e = new PIXI.Sprite(t), e.position.set(82, 3), this.addChild(e), t = r.DUTY_COMMON.getTexture(12), e = new PIXI.Sprite(t), e.position.set(165, 1), this.addChild(e), t = r.DUTY_COMMON.getTexture(13), e = new PIXI.Sprite(t), e.position.set(247, 1), this.addChild(e), this.addChild(this._fuel), this.addChild(this._ammo), this.addChild(this._steel), this.addChild(this._baux)
        }, e.prototype.update = function (t, e, i, n) {
            this._fuel.text = t.toString(), this._ammo.text = e.toString(), this._steel.text = i.toString(), this._baux.text = n.toString()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._fuel.destroy(), this._ammo.destroy(), this._steel.destroy(), this._baux.destroy()
        }, e
    }(PIXI.Container), l = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            2 == t ? (this.texture = r.DUTY_COMMON.getTexture(15), this.visible = !0) : 1 == t ? (this.texture = r.DUTY_COMMON.getTexture(14), this.visible = !0) : this.visible = !1
        }, e
    }(PIXI.Sprite), c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = 1 == t ? r.DUTY_COMMON.getTexture(18) : 2 == t ? r.DUTY_COMMON.getTexture(26) : 3 == t ? r.DUTY_COMMON.getTexture(21) : 4 == t ? r.DUTY_COMMON.getTexture(22) : 5 == t ? r.DUTY_COMMON.getTexture(23) : PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._over = null, e._img = new PIXI.Sprite, e._img.position.set(10, 28), e.addChild(e._img), e._over = new PIXI.Sprite, e._over.position.set(1, 19), e._over.visible = !1, e.addChild(e._over), e
        }

        return n(e, t), e.prototype.update = function (t) {
            3 == t ? (this._img.texture = r.DUTY_COMMON.getTexture(16), this._over.texture = r.DUTY_COMMON.getTexture(17), this._over.visible = !0, this._startAnimation()) : 2 == t ? (this._img.texture = r.DUTY_COMMON.getTexture(68), this._over.visible = !1, this._stopAnimation()) : (this._img.texture = PIXI.Texture.EMPTY, this._over.visible = !1, this._stopAnimation())
        }, e.prototype.dispose = function () {
            this._stopAnimation()
        }, e.prototype._startAnimation = function () {
            null == this._t && (this._over.alpha = 0, this._t = createjs.Tween.get(this._over, { loop: !0 }).to({ alpha: 1 }, 1700).to({ alpha: 0 }, 1700))
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Container)
}