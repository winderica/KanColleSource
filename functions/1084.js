const function1084 = function (t, e, i) {
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
        r = i(7),
        s = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._url = "api_get_member/picture_book", o._mode = e, o._no = i, o._modelManager = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_type = this._mode, this._post_data.api_no = this._no + 1, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.ObjUtil.getObjectArray(this._raw_data, "api_list");
                null != e && (1 == this._mode ? this._modelManager.addShipData(this._no, e) : this._modelManager.addSlotData(this._no, e)), this._modelManager = null, t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.AlbumAPI = s
}