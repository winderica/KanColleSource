const function1235 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "offset", {
            get: function () {
                return this._o.hasOwnProperty("x") || this._o.hasOwnProperty("y") ? new PIXI.Point(n.ObjUtil.getNumber(this._o, "x"), n.ObjUtil.getNumber(this._o, "y")) : null
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "type", {
            get: function () {
                switch (n.ObjUtil.getString(this._o, "type")) {
                    case"R":
                        return 2;
                    case"L":
                        return 6;
                    case"T":
                        return 0;
                    case"B":
                        return 4;
                    case"RT":
                    case"TR":
                        return 1;
                    case"RB":
                    case"BR":
                        return 3;
                    case"LT":
                    case"TL":
                        return 7;
                    case"LB":
                    case"BL":
                        return 5
                }
                return 1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "beak", {
            get: function () {
                switch (n.ObjUtil.getString(this._o, "beak")) {
                    case"s":
                    case"straight":
                        return 1
                }
                return 0
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.BranchBalloonData = o
}