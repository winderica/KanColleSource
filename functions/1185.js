const function1185 = function (t, e, i) {
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
        r = i(9),
        s = function (t) {
            function e(e, i, n, o, r, s, a) {
                var _ = t.call(this) || this;
                return _._url = "api_req_furniture/change", _._api_floor = e, _._api_wallpaper = i, _._api_window = n, _._api_wallhanging = o, _._api_shelf = r, _._api_desk = s, _._api_season = a, _
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_floor = this._api_floor, this._post_data.api_wallpaper = this._api_wallpaper, this._post_data.api_window = this._api_window, this._post_data.api_wallhanging = this._api_wallhanging, this._post_data.api_shelf = this._api_shelf, this._post_data.api_desk = this._api_desk, -1 != this._api_season && (this._post_data.api_season = this._api_season), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = o.default.model.basic;
                e.updatePortFurnitureMstID(0, this._api_floor), e.updatePortFurnitureMstID(1, this._api_wallpaper), e.updatePortFurnitureMstID(2, this._api_window), e.updatePortFurnitureMstID(3, this._api_wallhanging), e.updatePortFurnitureMstID(4, this._api_shelf), e.updatePortFurnitureMstID(5, this._api_desk), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.FurnitureChangeAPI = s
}