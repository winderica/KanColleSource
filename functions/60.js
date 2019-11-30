const function60 = function (t, e, i) {
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
    var o = i(0),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initiailzeForShip = function (t, e) {
                var i = this._getFilenameForShip(t);
                this._load(i, e)
            }, e.prototype.initiailzeForSlotitem = function (t, e) {
                var i = this._getFilenameForSlotitem(t);
                this._load(i, e)
            }, e.prototype.initiailzeForUseitem = function (t) {
                this._load("c1", t)
            }, e.prototype.dispose = function () {
                this._loader = null
            }, e.prototype.clone = function () {
                var t = new e;
                return t.texture = this.texture, t
            }, e.prototype._getFilenameForShip = function (t) {
                return t <= 1 ? "c1" : 2 == t ? "c2" : 3 == t ? "c3" : 4 == t ? "r1" : 5 == t ? "r2" : 6 == t ? "sr1" : 7 == t ? "sr2" : t >= 8 ? "sr3" : ""
            }, e.prototype._getFilenameForSlotitem = function (t) {
                return t <= 0 ? "item_c1" : 1 == t ? "item_r1" : 2 == t ? "sr1" : 3 == t ? "sr1" : 4 == t ? "sr1" : t >= 5 ? "sr2" : ""
            }, e.prototype._load = function (t, e) {
                var i = this,
                    n = o.default.settings.path_root + "img/common/ship_bg/screen/" + t + ".png";
                if (null != PIXI.utils.TextureCache[n] && (this.texture = PIXI.utils.TextureCache[n], null != e)) return void e();
                this._loader = new PIXI.loaders.Loader, this._loader.add(n), this._loader.load(function (t) {
                    if (i._loader == t) {
                        i._loader = null;
                        var o = t.resources[n];
                        i.texture = o.texture, null != e && e()
                    }
                })
            }, e
        }(PIXI.Sprite);
    e.RarityBG = r
}