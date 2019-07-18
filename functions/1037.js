const function1037 = function (t, e, i) {
    "use strict";

    function n(t) {
        switch (t) {
            case 1:
                return o.DE;
            case 2:
                return o.DD;
            case 3:
            case 4:
                return o.CL;
            case 5:
            case 6:
                return o.CA;
            case 7:
                return o.CV_CVL;
            case 8:
            case 9:
                return o.BB_BC;
            case 10:
                return o.BBV;
            case 11:
                return o.CV_CVL;
            case 12:
                return o.BB_BC;
            case 13:
            case 14:
                return o.SS;
            case 15:
            case 16:
            case 17:
                return o.AV_AO_AS;
            case 18:
                return o.CV_CVL;
            case 19:
            case 20:
                return o.AV_AO_AS;
            case 21:
                return o.CLT;
            case 22:
                return o.AV_AO_AS
        }
        throw new Error("UNSUPPORT_TYPE")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o;
    ! function (t) {
        t[t.BB_BC = 0] = "BB_BC", t[t.CV_CVL = 1] = "CV_CVL", t[t.CA = 2] = "CA", t[t.CL = 3] = "CL", t[t.DD = 4] = "DD", t[t.DE = 5] = "DE", t[t.SS = 6] = "SS", t[t.AV_AO_AS = 7] = "AV_AO_AS", t[t.BBV = 8] = "BBV", t[t.CLT = 9] = "CLT"
    }(o = e.ShipCategory || (e.ShipCategory = {})), e.shipTypeIdToCategory = n
}