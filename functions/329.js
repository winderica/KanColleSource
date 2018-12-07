const function329 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function () {
        function t() {
            this.memShipIds = []
        }

        return t.prototype.getMemShipIds = function () {
            return this.memShipIds
        }, t.prototype.containts = function (t) {
            return -1 != this.memShipIds.indexOf(t)
        }, t.prototype.push = function (t) {
            this.memShipIds.push(t)
        }, t.prototype.remove = function (t) {
            var e = this.memShipIds.indexOf(t);
            this.memShipIds.splice(e, 1)
        }, t.prototype.clear = function () {
            this.memShipIds = []
        }, t
    }();
    e.SupplyEditor = n
}