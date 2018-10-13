const function612 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(33), a = i(279), _ = i(125), u = i(126), l = i(102), c = i(197), h = i(14),
        p = i(198), d = i(638), f = i(285), y = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._pre_scene = e, i
            }

            return n(e, t), e.prototype._start = function () {
                for (var t = Object.keys(PIXI.utils.TextureCache), e = t.filter(function (t) {
                    return /^resources\/ship\/.+/.test(t)
                }), i = 0, n = e; i < n.length; i++) {
                    var o = n[i], r = PIXI.utils.TextureCache[o];
                    r && r.destroy(!0), delete PIXI.utils.TextureCache[o]
                }
                for (var s = t.filter(function (t) {
                    return /^resources\/slot\/.+/.test(t)
                }), a = 0, _ = s; a < _.length; a++) {
                    var o = _[a], r = PIXI.utils.TextureCache[o];
                    r && r.destroy(!0), delete PIXI.utils.TextureCache[o]
                }
                for (var u = t.filter(function (t) {
                    return /^resources\/map\/\d{3}\/\d{2}_.+/.test(t)
                }), l = 0, c = u; l < c.length; l++) {
                    var o = c[l], r = PIXI.utils.TextureCache[o];
                    r && r.destroy(!0), delete PIXI.utils.TextureCache[o]
                }
                for (var u = t.filter(function (t) {
                    return /^map\d{5}_.+/.test(t)
                }), h = 0, p = u; h < p.length; h++) {
                    var o = p[h], r = PIXI.utils.TextureCache[o];
                    r && r.destroy(!0), delete PIXI.utils.TextureCache[o]
                }
                this._connectAPI()
            }, e.prototype._connectAPI = function () {
                var t = this, e = new s.APIConnector;
                e.add(new a.PortAPI), 33 == this._pre_scene ? (e.add(new _.UserSlotItemAPI), e.add(new u.UnsetSlotAPI), e.add(new l.UseItemAPI)) : 32 == this._pre_scene && e.add(new _.UserSlotItemAPI), e.start(function () {
                    t._loadPortResources()
                })
            }, e.prototype._loadPortResources = function () {
                var t = this, e = o.default.model.basic.getUISkinID();
                new d.TaskLoadResources(e).start(function () {
                    t._loadFurnitureResources()
                })
            }, e.prototype._loadFurnitureResources = function () {
                var t = this, e = new c.FurnitureLoadTask(!0);
                e.floor_id = o.default.model.basic.getPortFurnitureMstID(0), e.wall_id = o.default.model.basic.getPortFurnitureMstID(1), e.window_id = o.default.model.basic.getPortFurnitureMstID(2), e.object_id = o.default.model.basic.getPortFurnitureMstID(3), e.desk_id = o.default.model.basic.getPortFurnitureMstID(5), e.chest_id = o.default.model.basic.getPortFurnitureMstID(4), e.start(function () {
                    var e = o.default.view.portMain;
                    0 == e.isInitialized() && e.initialize(), t._loadFlagShipResource()
                })
            }, e.prototype._loadFlagShipResource = function () {
                var t = this, e = o.default.model.deck.get(1).getShipModel(0);
                if (null != e) {
                    var i = e.mstID, n = e.isDamaged();
                    if (1 == o.default.resources.isLoadedShip(i, n, "full")) {
                        var r = e.tired;
                        o.default.view.portMain.flagShip.initialize(i, n, r), this._preInitPortView(e)
                    } else {
                        var s = new h.ShipLoader;
                        s.add(i, n, "full"), s.load(function () {
                            var r = e.tired;
                            o.default.view.portMain.flagShip.initialize(i, n, r), t._preInitPortView(e)
                        })
                    }
                } else this._preInitPortView(e)
            }, e.prototype._preInitPortView = function (t) {
                var e = o.default.view.portMain;
                if (0 == e.isInitialized()) {
                    var i = o.default.model.basic.getUISkinID();
                    e.initializeNext(i)
                } else e.showPortUI(!0);
                this._initPortView(e, t)
            }, e.prototype._initPortView = function (t, e) {
                var i = e.isMarriage();
                t.activate(e.mstID, i), o.default.view.portMain.updateUserInfo({
                    userName: o.default.model.basic.nickName,
                    userLevel: o.default.model.basic.level,
                    userRank: "[" + o.default.model.basic.rankName + "]",
                    fleetNum: o.default.model.deck.num
                }), o.default.view.portMain.updateInfo(), this._showExpeditionResult()
            }, e.prototype._showExpeditionResult = function () {
                var t = this;
                (new f.TaskExpeditionAlertUpdate).start(function () {
                    t._loginBonus()
                })
            }, e.prototype._loginBonus = function () {
                if (1 == o.default.model.incentive.hasIncentive()) {
                    var t = o.default.view.overLayer, e = o.default.model.incentive.getRewards();
                    new p.TaskReward(t, e).start(), o.default.model.incentive.clearData()
                }
                this._endTask()
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = y
}