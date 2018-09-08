const function949 = function (t, e, i) {
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
    var o = i(160), r = i(25), s = i(950), a = i(1), _ = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n.FUEL = 3, n.BAUX = 5, n._fuelNow = 0, n._bauxNow = 0, n._material_key = null, n._onMouseOverBtn = function () {
                var t = n._calcNeedMaterial([n._squadron]);
                n._title.show(t.fuel, t.baux, ""), n._materialShow(t.fuel, t.baux, "")
            }, n._onMouseOutBtn = function () {
                n._title.hide(""), n._materialHide("")
            }, n._onMouseOverBtnAll = function () {
                var t = n._calcNeedMaterial(n._airunit.squadrons);
                n._title.show(t.fuel, t.baux, "all"), n._materialShow(t.fuel, t.baux, "all")
            }, n._onMouseOutBtnAll = function () {
                n._title.hide("all"), n._materialHide("all")
            }, n._onClick = function () {
                if (null != n._cb_onSupply) {
                    n._cb_onPreSupply();
                    var t = n._airunit.area_id, e = n._airunit.id, i = [n._squadron.id];
                    n._cb_onSupply(t, e, i), n.fuelContainer.playSupply(function () {
                    }), n.bauxContainer.playSupply(function () {
                    })
                }
            }, n._onClickAll = function () {
                if (null != n._cb_onSupply) {
                    n._cb_onPreSupply();
                    for (var t = n._airunit.area_id, e = n._airunit.id, i = [], o = 0, r = n._airunit.squadrons; o < r.length; o++) {
                        var s = r[o];
                        1 == s.state && s.count < s.countMax && i.push(s.id)
                    }
                    n._cb_onSupply(t, e, i), n.fuelContainer.playSupply(function () {
                    }), n.bauxContainer.playSupply(function () {
                    })
                }
            }, n._cb_onSupply = e, n._cb_onPreSupply = i, n._bg = new PIXI.Sprite, n.addChild(n._bg), n._title = new s.AirUnitSupplyPanelTitle, n.addChild(n._title), n._btn = new u(n._onMouseOverBtn, n._onMouseOutBtn, n._onClick), n._btn.position.set(32, 438), n._btn_all = new l(n._onMouseOverBtnAll, n._onMouseOutBtnAll, n._onClickAll), n._btn_all.position.set(32, 495), n.interactive = !0, n
        }

        return n(e, t), e.prototype.initialize = function (t, e, i, n) {
            if (this._fuelNow = t, this._bauxNow = e, this._airunit = i, this._squadron = n, this._bg.texture = r.SALLY_AIRUNIT.getTexture(34), this._title.initialize(t, e), this.fuelContainer = new o.FuelContainer, this.fuelContainer.position.set(17, 206), this.addChild(this.fuelContainer), this.bauxContainer = new o.BauxContainer, this.bauxContainer.position.set(158, 206), this.addChild(this.bauxContainer), null == this._squadron) this._btn.initialize(!1), this._btn_all.initialize(!1); else {
                var s = t >= this.FUEL && e >= this.BAUX;
                this._btn.initialize(s), this.addChild(this._btn), this._btn_all.initialize(s), this.addChild(this._btn_all)
            }
        }, e.prototype.activate = function () {
            this._btn.activate(), this._btn_all.activate()
        }, e.prototype.deactivate = function () {
            this._btn.deactivate(), this._btn_all.deactivate()
        }, e.prototype.dispose = function () {
            this._btn.dispose(), this._btn_all.dispose()
        }, e.prototype.autoPlaySupplyAll = function () {
            var t = this, e = this._calcNeedMaterial(this._airunit.squadrons);
            this._title.show(e.fuel, e.baux, "all"), this._fuelNow >= e.fuel && this._bauxNow >= e.baux ? (this._materialShow(e.fuel, e.baux, "all"), createjs.Tween.get(null).wait(1e3).call(function () {
                t._onClickAll()
            })) : createjs.Tween.get(null).wait(1e3).call(function () {
                if (null != t._cb_onSupply) {
                    var e = t._airunit.area_id, i = t._airunit.id, n = [];
                    t._cb_onSupply(e, i, n)
                }
            })
        }, e.prototype.playSupplyAnimation = function (t) {
            this.deactivate(), createjs.Tween.get(null).wait(1500).call(t)
        }, e.prototype._calcNeedMaterial = function (t) {
            for (var e = { fuel: 0, baux: 0 }, i = 0, n = t; i < n.length; i++) {
                var o = n[i], r = o.countMax - o.count;
                e.fuel += r * this.FUEL, e.baux += r * this.BAUX
            }
            return e
        }, e.prototype._materialShow = function (t, e, i) {
            void 0 === i && (i = null), this._material_key = i, this.fuelContainer.update(t), this.bauxContainer.update(e)
        }, e.prototype._materialHide = function (t) {
            void 0 === t && (t = null), null != t && t != this._material_key || (this._material_key = null, this.fuelContainer.update(0), this.bauxContainer.update(0))
        }, e
    }(PIXI.Container);
    e.AirUnitSupplyPanel = _;
    var u = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._onMouseOver = function () {
                o._update(!0), null != o._cb_onMouseOver && o._cb_onMouseOver()
            }, o._onMouseOut = function () {
                o._update(!1), null != o._cb_onMouseOut && o._cb_onMouseOut()
            }, o._onClick = function () {
                null != o._cb_onClick && o._cb_onClick()
            }, o._cb_onMouseOver = e, o._cb_onMouseOut = i, o._cb_onClick = n, o.interactive = !0, o
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._enabled = t, this._update(!1), this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype.activate = function () {
            0 != this._enabled && 1 != this.buttonMode && (this.buttonMode = !0, this.on(a.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(a.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._update = function (t) {
            0 == this._enabled ? this.texture = r.SALLY_AIRUNIT.getTexture(17) : this.texture = 0 == t ? r.SALLY_AIRUNIT.getTexture(16) : r.SALLY_AIRUNIT.getTexture(18)
        }, e
    }(PIXI.Sprite), l = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._onMouseOver = function () {
                o._update(!0), null != o._cb_onMouseOver && o._cb_onMouseOver()
            }, o._onMouseOut = function () {
                o._update(!1), null != o._cb_onMouseOut && o._cb_onMouseOut()
            }, o._onClick = function () {
                null != o._cb_onClick && o._cb_onClick()
            }, o._cb_onMouseOver = e, o._cb_onMouseOut = i, o._cb_onClick = n, o.interactive = !0, o
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._enabled = t, this._update(!1), this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype.activate = function () {
            0 != this._enabled && 1 != this.buttonMode && (this.buttonMode = !0, this.on(a.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(a.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this.deactivate(), this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._update = function (t) {
            0 == this._enabled ? this.texture = r.SALLY_AIRUNIT.getTexture(13) : this.texture = 0 == t ? r.SALLY_AIRUNIT.getTexture(12) : r.SALLY_AIRUNIT.getTexture(14)
        }, e
    }(PIXI.Sprite)
}