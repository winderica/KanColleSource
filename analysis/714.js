const function714 = function (t, e, i) {
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
    var o = i(11), r = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._url = "api_req_hensei/preset_register", o.deckId = e, o.presetNo = i, o.name = n, o
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._connect = function () {
            this._post_data.api_deck_id = this.deckId, this._post_data.api_preset_no = this.presetNo, this._post_data.api_name = this.name, this._post_data.api_name_id = "", t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._result = this._raw_data, t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.PresetRegisterAPI = r
}