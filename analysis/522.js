/*
 * the function called by `0.js`
 * resources
 */
const function522 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(17),
        o = i(75),
        r = i(14),
        s = i(24),
        a = i(21),
        _ = i(65),
        u = i(523),
        l = i(9),
        c = i(269),
        h = function () {
            function t() {
                this._gauge = new u.GaugeRManager
            }

            // gauge
            Object.defineProperty(t.prototype, "gauge", {
                get: function () {
                    return this._gauge
                }, enumerable: !0, configurable: !0
            });
            // UI graph
            t.prototype.getUIImage = function (t, e) {
                var i;
                if (void 0 === e) i = t; else {
                    var n = t, o = e;
                    i = a.UIImageLoader.getPath(n, o)
                }
                return PIXI.utils.TextureCache[i] ? PIXI.utils.TextureCache[i] : PIXI.Texture.EMPTY
            };
            // has ship graph been loaded
            t.prototype.isLoadedShip = function (t, e, i) {
                var n = r.ShipLoader.getPath(t, e, i);
                return PIXI.utils.TextureCache[n]
            };
            // ship graph
            t.prototype.getShip = function (t, e, i) {
                var n, o = r.ShipLoader.getPath(t, e, i);
                return n = PIXI.utils.TextureCache[o] ? PIXI.utils.TextureCache[o] : PIXI.Texture.EMPTY, "banner" == i && n == PIXI.Texture.EMPTY && (n = l.COMMON_MISC.getTexture(2)), n
            };
            // equipment graph
            t.prototype.getSlotitem = function (t, e) {
                "item_up" == e && (1 == n.ITEMUP_REPLACE.hasOwnProperty(t.toString()) ? t = n.ITEMUP_REPLACE[t] : t > 500 && (t -= 500));
                var i = s.SlotLoader.getPath(t, e);
                return PIXI.utils.TextureCache[i] ? PIXI.utils.TextureCache[i] : PIXI.Texture.EMPTY
            };
            // item graph
            t.prototype.getUseitem = function (t, e) {
                if (0 == e) return c.COMMON_ITEMICONS.getTextureFromMstID(t);
                var i = _.UseitemLoader.getPath(t, e);
                return PIXI.utils.TextureCache[i] ? PIXI.utils.TextureCache[i] : PIXI.Texture.EMPTY
            };
            // furniture graph
            t.prototype.getFurniture = function (t, e) {
                var i = o.FurnitureLoader.getPath(t, e);
                return PIXI.utils.TextureCache[i] ? PIXI.utils.TextureCache[i] : PIXI.Texture.EMPTY
            };
            return t
        }();
    e.ResourceManager = h
}