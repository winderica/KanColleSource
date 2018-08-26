// the function called by `0.js`
const function476 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: true });
    const n = i(477),
        o = i(480),
        r = i(481),
        s = i(484),
        a = i(487),
        _ = i(489),
        u = i(491),
        l = i(493),
        c = i(495),
        h = i(496),
        p = i(498),
        d = i(500),
        f = i(504),
        y = i(506),
        v = i(508),
        g = i(509),
        m = i(511),
        b = i(513),
        w = i(515),
        x = i(517),
        I = i(520);
    // class represent by IIFE
    const T = function () {
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

        Object.defineProperty(t.prototype, "const", {
            get: function () {
                return this._const
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "basic", {
            get: function () {
                return this._basic
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "incentive", {
            get: function () {
                return this._incentive
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "log", {
            get: function () {
                return this._log
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "furniture_graph", {
            get: function () {
                return this._furniture_graph
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "furniture", {
            get: function () {
                return this._furniture
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "deck", {
            get: function () {
                return this._deck
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "shipType", {
            get: function () {
                return this._shiptype
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "ship", {
            get: function () {
                return this._ship
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "ship_graph", {
            get: function () {
                return this._ship_graph
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "ship_upgrade", {
            get: function () {
                return this._ship_upgrade
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "slot", {
            get: function () {
                return this._slot
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "equip", {
            get: function () {
                return this._equip
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "useItem", {
            get: function () {
                return this._useItem
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "ndock", {
            get: function () {
                return this._ndock
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "kdock", {
            get: function () {
                return this._kdock
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "map", {
            get: function () {
                return this._map
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "airunit", {
            get: function () {
                return this._airunit
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "mst_bgm", {
            get: function () {
                return this._mst_bgm
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "expedition", {
            get: function () {
                return this._expedition
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t.prototype, "payitem", {
            get: function () {
                return this._payitem
            }, enumerable: true, configurable: true
        });
        return t;
    }();
    e.ModelManager = T
}