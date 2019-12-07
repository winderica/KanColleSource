const function1081 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(73),
        o = i(73),
        r = function () {
            function t() {
                this._ship_data_flag = [], this._slot_data_flag = [], this._ship = {}, this._slot = {}
            }
            return t.prototype.hasData = function (t, e) {
                return 1 == t ? this._ship_data_flag.indexOf(e) >= 0 : 2 == t && this._slot_data_flag.indexOf(e) >= 0
            }, t.prototype.getData = function (t, e, i) {
                return 1 == t ? this.getShipData(e, i) : 2 == t ? this.getSlotData(e, i) : null
            }, t.prototype.getShipData = function (t, e) {
                for (var i = [], n = 0; n < e; n++) {
                    var o = t + 1 + n;
                    1 == this._ship.hasOwnProperty(o.toString()) ? i.push(this._ship[o]) : i.push(null)
                }
                return i
            }, t.prototype.getSlotData = function (t, e) {
                for (var i = [], n = 0; n < e; n++) {
                    var o = t + 1 + n;
                    1 == this._slot.hasOwnProperty(o.toString()) ? i.push(this._slot[o]) : i.push(null)
                }
                return i
            }, t.prototype.addShipData = function (t, e) {
                this._ship_data_flag.push(t);
                for (var i = 0, o = e; i < o.length; i++) {
                    var r = o[i],
                        s = new n.AlbumShipModel(r);
                    this._ship[s.no] = s
                }
            }, t.prototype.addSlotData = function (t, e) {
                this._slot_data_flag.push(t);
                for (var i = 0, n = e; i < n.length; i++) {
                    var r = n[i],
                        s = new o.AlbumSlotModel(r);
                    this._slot[s.no] = s
                }
            }, t
        }();
    e.AlbumModelManager = r
}