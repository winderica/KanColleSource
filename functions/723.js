const function723 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(14), o = i(0), r = i(724), s = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "maxNum", {
            get: function () {
                return this.api_max_num
            }, enumerable: !0, configurable: !0
        }), t.prototype.setData = function (t) {
            var e = n.ObjUtil.getObject(t, "api_deck", {}), i = t.api_max_num;
            this.api_max_num = i, this.api_deck = e
        }, t.prototype.updateData = function (t) {
            var e = n.ObjUtil.getNumber(t, "api_preset_no");
            this.api_deck[e.toString()] = t
        }, t.prototype.getPresetDeckData = function (t) {
            if (t > this.maxNum) return null;
            var e = t.toString(), i = this.api_deck[e];
            return new r.PresetModel(t, i)
        }, t.prototype.getPresetDeckDataList = function () {
            for (var t = new Array, e = 1; e <= this.maxNum; e++) {
                var i = this.getPresetDeckData(e);
                i.getRealShipCount() > 0 && t.push(i)
            }
            return t
        }, t.prototype.__updateByPresetExpanded__ = function (t) {
            if (this.maxNum + 1 != t) return void o.default.view.showError("Invalid preset_expand.");
            this.api_deck[t.toString()] = null, this.api_max_num = t
        }, t.prototype.__deletePresetDeckData__ = function (t) {
            delete this.api_deck[t.toString()], this.api_deck[t.toString()] = null
        }, t
    }();
    e.PresetListModel = s
}