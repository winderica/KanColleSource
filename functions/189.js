const function189 = function (t, e, i) {
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
    var o = i(0), r = i(11), s = i(13), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._url = "api_req_furniture/music_list", i._furnitureJukeBoxBGMModel = e, i
        }

        return n(e, t), e.prototype._connect = function () {
            t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._furnitureJukeBoxBGMModel.SetAll(this._raw_data), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.UserFurnitureJukeBoxMusicListAPI = a;
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._url = "api_req_furniture/music_play", i._post_data.api_music_id = e, i
        }

        return n(e, t), e.prototype._connect = function () {
            t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._updateMaterialCount(44, s.ObjUtil.getNumber(this._raw_data, "api_coin")), t.prototype._completedEnd.call(this)
        }, e.prototype._updateMaterialCount = function (t, e) {
            var i = o.default.model.useItem.get(t);
            null != i && i.__setCount__(e)
        }, e
    }(r.APIBase);
    e.UserFurnitureJukeBoxMusicPlayAPI = _;
    var u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._url = "api_req_furniture/set_portbgm", i._post_data.api_music_id = e, i
        }

        return n(e, t), e.prototype._connect = function () {
            t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.UserFurnitureJukeBoxSetPortBGMAPI = u
}