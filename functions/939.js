const function939 = function (t, e, i) {
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
    var o = i(9),
        r = i(940),
        s = function (t) {
            function e(e, i, n, o) {
                void 0 === o && (o = !1);
                var s = t.call(this) || this;
                return s._url = "api_req_map/start", s._map = e, s._deck_id = i, s._serial_id = n, s._debug = o, s._model = new r.SortieModelEdit, s
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_maparea_id = this._map.area_id, this._post_data.api_mapinfo_no = this._map.map_no, this._post_data.api_deck_id = this._deck_id, this._post_data.api_serial_cid = this._serial_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._model.__init__(this._map, this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIMapStart = s
}