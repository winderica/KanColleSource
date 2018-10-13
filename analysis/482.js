// called by `0.js`
const function482 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(483),
        o = i(486),
        r = i(487),
        s = i(490),
        a = i(493),
        _ = i(495),
        u = i(497),
        l = i(499),
        c = i(501),
        h = i(502),
        p = i(504),
        d = i(506),
        f = i(510),
        y = i(512),
        v = i(514),
        m = i(515),
        g = i(517),
        b = i(519),
        w = i(521),
        x = i(523),
        I = i(526),
        T = function () {
            function t() {
                // constants
                this._const = new v.ServerConstModelEdit;
                // Admiral information
                this._basic = new o.BasicModelEdit;
                // 褒賞(戦果、プレゼントなど)
                this._incentive = new c.IncentiveModelHolderEdit;
                // news feed (母港の下方の「表示」)
                this._log = new p.LogModelHolder;
                // furniture
                this._furniture = new l.FurnitureModelHolderEdit;
                // furniture's graph?
                this._furniture_graph = new u.FurnitureGraphModelHolder;
                // fleets information
                this._deck = new s.DeckModelHolder;
                // ship types
                this._shiptype = new b.ShipTypeModelHolderEdit;
                // ships (艦娘)
                this._ship = new m.ShipModelHolder;
                // file name of ship's graph and voice
                this._ship_graph = new g.ShipGraphModelHolder;
                // remodel info
                this._ship_upgrade = new w.ShipUpgradeModelHolderEdit;
                // equipments
                this._slot = new x.SlotitemModelHolderEdit;
                // items (including resources)
                this._useItem = new I.UseItemModelHolderEdit;
                // 建造ドック
                this._kdock = new h.KDockModelHolderEdit;
                // 入渠ドック
                this._ndock = new f.NDockModelHolder;
                // map info
                this._map = new d.MapModelHolderEdit;
                // 基地航空隊
                this._airunit = new n.AirUnitModelHolderEdit;
                // bgm info
                this._mst_bgm = new r.BGMMstModelHolderEdit;
                // expedition info
                this._expedition = new _.ExpeditionModelHolderEdit;
                // 課金 items
                this._payitem = new y.PayItemModelHolderEdit;
                // equippable equipments of ships
                this._equip = new a.EquipModelHolder;
            }

            // getters
            Object.defineProperty(t.prototype, "const", {
                get: function () {
                    return this._const
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "basic", {
                get: function () {
                    return this._basic
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "incentive", {
                get: function () {
                    return this._incentive
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "log", {
                get: function () {
                    return this._log
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "furniture_graph", {
                get: function () {
                    return this._furniture_graph
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "furniture", {
                get: function () {
                    return this._furniture
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "deck", {
                get: function () {
                    return this._deck
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "shipType", {
                get: function () {
                    return this._shiptype
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ship", {
                get: function () {
                    return this._ship
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ship_graph", {
                get: function () {
                    return this._ship_graph
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ship_upgrade", {
                get: function () {
                    return this._ship_upgrade
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "slot", {
                get: function () {
                    return this._slot
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "equip", {
                get: function () {
                    return this._equip
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "useItem", {
                get: function () {
                    return this._useItem
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "ndock", {
                get: function () {
                    return this._ndock
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "kdock", {
                get: function () {
                    return this._kdock
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "map", {
                get: function () {
                    return this._map
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "airunit", {
                get: function () {
                    return this._airunit
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "mst_bgm", {
                get: function () {
                    return this._mst_bgm
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "expedition", {
                get: function () {
                    return this._expedition
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "payitem", {
                get: function () {
                    return this._payitem
                }, enumerable: !0, configurable: !0
            });
            return t
        }();
    e.ModelManager = T
}