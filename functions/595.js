const function595 = function (t, e, i) {
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
    var o = i(0), r = i(6), s = i(596), a = i(1), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._current = null, e._onClickCrane = function () {
                if (31 != e._current) {
                    var t = o.default.model.deck.get(1).getShipModel(0).mstID;
                    182 != t && 187 != t || e._callbackBtnClick(31)
                }
            }, e._callbackBtnClick = function (t) {
                o.default.scene.change(t) && (e._btn_port.buttonMode = !1, e._btn_organize.buttonMode = !1, e._btn_supply.buttonMode = !1, e._btn_remodel.buttonMode = !1, e._btn_repair.buttonMode = !1, e._btn_arsenal.buttonMode = !1, 0 == t ? r.SE.play("245") : r.SE.play("246"))
            }, e._btn_port = new u(0, 7, 8), e._btn_port.position.set(75, 329), e._btn_organize = new u(11, 5, 6), e._btn_organize.y = 194, e._btn_supply = new u(12, 13, 14), e._btn_supply.y = 275, e._btn_remodel = new u(13, 9, 10), e._btn_remodel.y = 356, e._btn_repair = new u(14, 11, 12), e._btn_repair.y = 439, e._btn_arsenal = new u(15, 3, 4), e._btn_arsenal.y = 517, e._hook = new PIXI.Sprite, e._crane = new l, e._crane.y = 591, e
        }

        return n(e, t), Object.defineProperty(e.prototype, "crane", {
            get: function () {
                return this._crane
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(s.PORT_SIDEMENU.getTexture(0));
            t.y = 183;
            var e = new PIXI.Sprite(s.PORT_SIDEMENU.getTexture(1));
            e.y = 209;
            var i = new PIXI.Sprite(s.PORT_SIDEMENU.getTexture(2));
            i.position.set(75, 209), this._btn_port.initialize(this._callbackBtnClick), this._btn_organize.initialize(this._callbackBtnClick), this._btn_supply.initialize(this._callbackBtnClick), this._btn_remodel.initialize(this._callbackBtnClick), this._btn_repair.initialize(this._callbackBtnClick), this._btn_arsenal.initialize(this._callbackBtnClick), this._hook.texture = s.PORT_SIDEMENU.getTexture(26), this._hook.anchor.set(1, .5), this._hook.position.set(90, this._btn_port.y + this._btn_port.height / 2), this._crane.initialize(), this.addChild(this._crane), this.addChild(t), this.addChild(e), this.addChild(this._hook), this.addChild(i), this.addChild(this._btn_organize), this.addChild(this._btn_supply), this.addChild(this._btn_remodel), this.addChild(this._btn_repair), this.addChild(this._btn_arsenal), this.addChild(this._btn_port), this._crane.interactive = this._crane.buttonMode = !0, this._crane.on(a.EventType.CLICK, this._onClickCrane)
        }, e.prototype.dispose = function () {
            this._btn_port.dispose(), this._btn_organize.dispose(), this._btn_supply.dispose(), this._btn_remodel.dispose(), this._btn_repair.dispose(), this._btn_arsenal.dispose(), this._crane.dispose(), this._crane.off(a.EventType.CLICK, this._onClickCrane)
        }, e.prototype.startAnimation = function (t) {
            var e = this;
            if (this._deactiveBtn(this._current), this._btn_port.deactivate(), 11 == t || 12 == t || 13 == t || 14 == t || 15 == t) {
                this.visible = !0;
                var i = this._getButton(t);
                null == this._current ? (this._hook.position.set(84, i.y + i.height / 2), i.activate(), this._updateBtnState(t), this._current = t) : (this._current = t, createjs.Tween.get(this._hook).to({ x: 90 }, 200).to({ y: i.y + i.height / 2 }, 200).to({ x: 78 }, 200).to({ x: 84 }, 100).call(function () {
                    i.activate(), e._updateBtnState(t)
                }))
            } else {
                if (16 != t && 31 != t) return this._current = null, void(this.visible = !1);
                this.visible = !0, null == this._current ? (this._hook.position.set(90, this._btn_port.y + this._btn_port.height / 2), this._updateBtnState(t), this._current = t, 31 == t && this._crane.startAnimation()) : (this._current = t, 31 == t && this._crane.startAnimation(), createjs.Tween.get(this._hook).to({ x: 90 }, 200).to({ y: this._btn_port.y + this._btn_port.height / 2 }, 200).call(function () {
                    e._updateBtnState(t)
                }))
            }
        }, e.prototype._updateBtnState = function (t) {
            this._btn_port.buttonMode = !0, this._btn_organize.buttonMode = 11 != t, this._btn_supply.buttonMode = 12 != t, this._btn_remodel.buttonMode = 13 != t, this._btn_repair.buttonMode = 14 != t, this._btn_arsenal.buttonMode = 15 != t
        }, e.prototype._deactiveBtn = function (t) {
            if (null != t) {
                var e = this._getButton(t);
                null != e && e.deactivate()
            }
        }, e.prototype._getButton = function (t) {
            return 11 == t ? this._btn_organize : 12 == t ? this._btn_supply : 13 == t ? this._btn_remodel : 14 == t ? this._btn_repair : 15 == t ? this._btn_arsenal : null
        }, e
    }(PIXI.Container);
    e.SideMenu = _;
    var u = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._onMouseOn = function () {
                1 == o.buttonMode && (o.texture = s.PORT_SIDEMENU.getTexture(o._texture_no_on))
            }, o._onMouseOut = function () {
                1 == o.buttonMode && (o.texture = s.PORT_SIDEMENU.getTexture(o._texture_no))
            }, o._onClick = function () {
                1 == o.buttonMode && o._click_cb(o._type)
            }, o._type = e, o._texture_no = i, o._texture_no_on = n, o
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._click_cb = t, this.texture = s.PORT_SIDEMENU.getTexture(this._texture_no), this.interactive = !0, this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOn), this.on(a.EventType.MOUSEOUT, this._onMouseOut), this.on(a.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this._click_cb = null, this.interactive = !1, this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOn), this.off(a.EventType.MOUSEOUT, this._onMouseOut), this.off(a.EventType.CLICK, this._onClick)
        }, e.prototype.activate = function () {
            0 != this._type && (this.x = 8), this.texture = s.PORT_SIDEMENU.getTexture(this._texture_no_on)
        }, e.prototype.deactivate = function () {
            0 != this._type && (this.x = 0), this.texture = s.PORT_SIDEMENU.getTexture(this._texture_no)
        }, e
    }(PIXI.Sprite), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._tween = null, e._setTexture = function (t) {
                e._crane.texture = s.PORT_SIDEMENU.getTexture(t)
            }, e
        }

        return n(e, t), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(s.PORT_SIDEMENU.getTexture(25));
            this.addChild(t), this._crane = new PIXI.Sprite(s.PORT_SIDEMENU.getTexture(15)), this.addChild(this._crane)
        }, e.prototype.dispose = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype.startAnimation = function () {
            var t = this;
            null == this._tween && (this._tween = createjs.Tween.get(this).wait(800).call(this._setTexture, [16]).wait(100).call(this._setTexture, [17]).wait(100).call(this._setTexture, [18]).wait(100).call(this._setTexture, [19]).wait(1500).call(this._setTexture, [20]).wait(100).call(this._setTexture, [21]).wait(100).call(this._setTexture, [22]).wait(100).call(this._setTexture, [23]).wait(100).call(this._setTexture, [24]).wait(1e3).call(this._setTexture, [23]).wait(100).call(this._setTexture, [22]).wait(100).call(this._setTexture, [21]).wait(100).call(this._setTexture, [20]).wait(100).call(this._setTexture, [19]).wait(500).call(this._setTexture, [18]).wait(100).call(this._setTexture, [17]).wait(100).call(this._setTexture, [16]).wait(100).call(this._setTexture, [15]).wait(500).call(function () {
                t._tween = null
            }))
        }, e
    }(PIXI.Container)
}