const function292 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {}
        return t.getMoveXValue = function (t) {
            switch (t) {
                case 49:
                case 253:
                    return -this._MOVE_DISTANCE_SHORT;
                default:
                    return -this._MOVE_DISTANCE
            }
        }, t._MOVE_DISTANCE = 200, t._MOVE_DISTANCE_SHORT = 150, t
    }();
    e.PortConst = n
}