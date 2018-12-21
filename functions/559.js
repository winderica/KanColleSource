const function559 = function (t, e, i) {
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
    var o = i(0), r = i(8), s = i(560), a = i(69), _ = i(583), l = i(587), u = i(596), c = i(597), h = i(600),
        p = i(602), d = i(604), f = i(606), y = i(607), m = i(610), v = i(611), g = i(615), b = i(642), w = i(645),
        x = i(1), I = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._only_furniture = !1, e._onMouseMove = function (t) {
                    1 == e._flagShip_layer.onMouseMove(t.data) ? e._underLayer.buttonMode = !0 : 1 == e.furnitureLayer.onMouseMove(t.data) ? e._underLayer.buttonMode = !0 : e._underLayer.buttonMode = !1
                }, e._onClick = function (t) {
                    e._flagShip_layer.onClick(t.data) || e._furniture_layer.onClick(t.data) || e._only_furniture && e.showPortUI(!0)
                }, e._flagShip_layer = new y.FlagShipLayer, e.addChild(e._flagShip_layer), e._underLayer = new r.AreaBox(0), e.addChild(e._underLayer), e._ringMenu = new v.RingMenuLayer, e.addChild(e._ringMenu), e.addChild(e._contentLayer), e.addChild(e._fadeLayer), e._logBox = new u.LogBox, e.addChild(e._logBox), e._upperBar = new d.UpperBar, e.addChild(e._upperBar), e._frame_layer = new m.FrameLayer, e.addChild(e._frame_layer), e._sideMenu = new h.SideMenu, e.addChild(e._sideMenu), e._tutorial = new p.Tutorial(function () {
                    new a.UpdateTutorialAPI(100).start(), e._tutorial.dispose(), e.removeChild(e._tutorial), e._tutorial = null
                }), e.addChild(e._tutorial), e._clock_layer = new f.ClockLayer, e.addChild(e._clock_layer), e._circle = new _.Circle, e.addChild(e._circle), e.addChild(e._overLayer), e._expedition_alert = new l.ExpeditionAlert, e._expedition_alert.visible = !1, e.addChild(e._expedition_alert), e._option = new c.Option, e.addChild(e._option), e._underLayer.on(x.EventType.MOUSEMOVE, e._onMouseMove), e._underLayer.on(x.EventType.CLICK, e._onClick), e
            }

            return n(e, t), Object.defineProperty(e.prototype, "flagShip", {
                get: function () {
                    return this._flagShip_layer
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "ringMenu", {
                get: function () {
                    return this._ringMenu
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "upperBar", {
                get: function () {
                    return this._upperBar
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "sideMenu", {
                get: function () {
                    return this._sideMenu
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "tutorial", {
                get: function () {
                    return this._tutorial
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "circle", {
                get: function () {
                    return this._circle
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "expedition_alert", {
                get: function () {
                    return this._expedition_alert
                }, enumerable: !0, configurable: !0
            }), e.prototype.initialize = function () {
                this._clock_layer.initialize(), this._option.initialize(), this._logBox.initialize();
                var t = o.default.model.basic.getTutorialProgress();
                t < 100 ? this._tutorial.initialize(t) : (this.removeChild(this._tutorial), this._tutorial = null)
            }, e.prototype.initializeNext = function (e) {
                this._circle.initialize(e), this._frame_layer.initialize(e);
                var i = o.default.model.basic.shipMax, n = o.default.model.basic.slotMax;
                this._upperBar.initialize(e, i, n), t.prototype.initialize.call(this)
            }, e.prototype.update = function (e) {
                t.prototype.update.call(this, e), this._frame_layer.update(e), this._tutorial && (0 == e ? this._tutorial.update(o.default.model.basic.getTutorialProgress()) : this._tutorial.visible = !1), 23 == e || 25 == e ? (this._upperBar.visible = !1, this._circle.visible = !1) : (this._upperBar.visible = !0, this._circle.visible = !0), this._clock_layer.update(e)
            }, e.prototype.activate = function (e, i) {
                t.prototype.activate.call(this, e, i), this._flagShip_layer.activate(), this._flagShip_layer.marriageEff = i, this._flagShip_layer.visible = !0, this._underLayer.interactive = !0, this._ringMenu.activate();
                var n = 182 == e || 187 == e;
                this._ringMenu.setRevampFlg(n), this._ringMenu.visible = !0, this._logBox.visible = !0, this._tutorial && this._tutorial.activate(), this._option.visible = !0
            }, e.prototype.deactivate = function () {
                t.prototype.deactivate.call(this), this._flagShip_layer.visible = !1, this._flagShip_layer.deactivate(), this._underLayer.interactive = !1, this._ringMenu.visible = !1, this._ringMenu.deactivate(), this._logBox.visible = !1, this._logBox.close(0), this._tutorial && this._tutorial.deactivate(), this._expedition_alert.deactive(), this._expedition_alert.visible = !1, this._option.visible = !1
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this._underLayer.off(x.EventType.MOUSEMOVE, this._onMouseMove), this._underLayer.off(x.EventType.CLICK, this._onClick), this._ringMenu.dispose(), this._logBox.dispose(), this._upperBar.dispose(), this._frame_layer.dispose(), this._sideMenu.dispose(), this._tutorial && this._tutorial.dispose(), this._clock_layer.dispose(), this._circle.dispose(), this._expedition_alert.dispose(), this._option.dispose()
            }, e.prototype.showPortUI = function (e) {
                t.prototype.showPortUI.call(this, e), this._only_furniture = !e, this._flagShip_layer.visible = !0, this._ringMenu.visible = e, this._logBox.visible = e, this._upperBar.visible = e, this._frame_layer.visible = e, this._sideMenu.visible = !1, this._tutorial && (this._tutorial.visible = e), this._clock_layer.visible = e, this._circle.visible = e, this._option.visible = e
            }, e.prototype.closeLogBox = function () {
                this._logBox.close()
            }, e.prototype.updateUserInfo = function (t) {
                this._upperBar.updateUserInfo(t)
            }, e.prototype.updateInfo = function () {
                var t = o.default.model.useItem.getMaterialCounts();
                t.shipNum = o.default.model.ship.num, t.shipMax = o.default.model.basic.shipMax, t.slotNum = o.default.model.slot.num, t.slotMax = o.default.model.basic.slotMax, this._upperBar.updateInfo(t)
            }, e.prototype.playCraneAnimation = function () {
                this._sideMenu.crane.startAnimation()
            }, e.prototype.playChangeAnimation = function (t) {
                this._overLayer.removeChildren(), this._circle.startMoveAnimation(t), this.sideMenu.startAnimation(t)
            }, e.prototype.changeSkin = function (t) {
                this._upperBar.changeSkin(t), this._frame_layer.changeSkin(t), this._circle.changeSkin(t)
            }, e.prototype.getPreInitializeTask = function (t) {
                return new g.PreInitializeTask(t)
            }, e.prototype.getInitializeTask = function (t) {
                return new b.InitializeTask(t)
            }, e.prototype.getFinalizeTask = function () {
                return new w.FinalizeTask(this)
            }, e
        }(s.MainView);
    e.PortScene = I
}