const function178 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(17),
        o = function () {
            function t() {}
            return t.getAttackVoiceIDs = function (t, e) {
                var i, o = t.data.model.map_info.area_id;
                return i = o == n.EVENT_AREA_ID ? this._getVoiceIDsAtEvent(o, t, e) : this._getVoiceIDs(o, t, e), null != i ? i.a : null
            }, t.getDamagedVoiceIDs = function (t, e) {
                var i, o = t.data.model.map_info.area_id;
                return i = o == n.EVENT_AREA_ID ? this._getVoiceIDsAtEvent(o, t, e) : this._getVoiceIDs(o, t, e), null != i ? i.d : null
            }, t.getSourGrapesVoiceID = function (t, e) {
                if (t.data.model.map_info.area_id != n.EVENT_AREA_ID) return -1;
                if (0 == t.data.model.map_info.isBoss()) return -1;
                var i = (t.data.model.map_info.map_no, e.name);
                return "\u6f5c\u6c34\u65b0\u68f2\u59eb" == i || "\u6f5c\u6c34\u65b0\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == i ? 391173640 : "\u6226\u8266\u4ecf\u68f2\u59eb" == i || "\u6226\u8266\u4ecf\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == i ? 394174540 : "\u8b77\u885b\u72ec\u9084\u59eb" == i ? 423182140 : "\u8b77\u885b\u72ec\u9084\u59eb-\u58ca" == i ? 423182140 : "\u8239\u6e20\u68f2\u59eb" == i ? 424182740 : "\u6b27\u5dde\u68f2\u59eb" == i ? 397175540 : "\u6b27\u5dde\u6c34\u59eb" == i ? 425184040 : -1
            }, t.getLastGaspVoiceID = function (t, e) {
                if (t.data.model.map_info.area_id != n.EVENT_AREA_ID) return -1;
                if (0 == t.data.model.map_info.isBoss()) return -1;
                var i = (t.data.model.map_info.map_no, e.name),
                    o = e.mst_id;
                if ("\u91cd\u5de1\u68f2\u59eb" == i) {
                    if (1659 == o || 1660 == o || 1661 == o) return 33365940;
                    if (1662 == o || 1663 == o || 1664 == o) return 33366240
                }
                return "\u91cd\u5de1\u590f\u59eb" == i ? 35470540 : "\u7a7a\u6bcd\u68f2\u9b3c" == i || "\u7a7a\u6bcd\u590f\u9b3c" == i ? 27305854 : "\u7a7a\u6bcd\u68f2\u59eb" == i || "\u7a7a\u6bcd\u590f\u59eb" == i ? 29405864 : "\u6f5c\u6c34\u590f\u59eb" == i ? 35169340 : "\u6f5c\u6c34\u65b0\u68f2\u59eb" == i || "\u6f5c\u6c34\u65b0\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == i ? 391173641 : "\u6226\u8266\u4ecf\u68f2\u59eb" == i || "\u6226\u8266\u4ecf\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == i ? 394174540 : "\u6226\u8266\u4ecf\u68f2\u59eb-\u58ca" == i || "\u6226\u8266\u4ecf\u68f2\u59eb-\u58ca \u30d0\u30ab\u30f3\u30b9mode" == i ? 394174840 : "\u6226\u8266\u68f2\u59eb" == i || "\u6226\u8266\u68f2\u59eb\u6539" == i || "\u6226\u8266\u590f\u59eb" == i ? 27605574 : "\u6cca\u5730\u6c34\u9b3c" == i || "\u6cca\u5730\u6c34\u9b3c \u30d0\u30ab\u30f3\u30b9mode" == i ? 30506094 : "\u8b77\u885b\u72ec\u9084\u59eb" == i ? 423182440 : "\u8b77\u885b\u72ec\u9084\u59eb-\u58ca" == i ? 423182440 : "\u6e2f\u6e7e\u590f\u59eb" == i || "\u6e2f\u6e7e\u590f\u59eb-\u58ca" == i ? 35369940 : "\u96c6\u7a4d\u5730\u68f2\u59eb" == i || "\u96c6\u7a4d\u5730\u590f\u59eb" == i || "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == i ? 33265340 : "\u96c6\u7a4d\u5730\u68f2\u59eb-\u58ca" == i || "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode-\u58ca" == i ? 33265640 : "\u8239\u6e20\u68f2\u59eb" == i ? 424182740 : "\u8239\u6e20\u68f2\u59eb-\u58ca" == i ? 424183040 : "\u6b27\u5dde\u68f2\u59eb-\u58ca" == i ? 397175840 : "\u6b27\u5dde\u6c34\u59eb" == i ? 425184040 : "\u6b27\u5dde\u6c34\u59eb-\u58ca" == i ? 425184340 : "\u6df1\u6d77\u96e8\u96f2\u59eb" == i ? 431184640 : "\u6df1\u6d77\u96e8\u96f2\u59eb-\u58ca" == i ? 431184940 : "\u5357\u65b9\u68f2\u9b3c" == i ? 432154640 : "\u5357\u65b9\u68f2\u6226\u59eb" == i ? 433154740 : "\u6df1\u6d77\u65e5\u68f2\u59eb" == i ? 433185240 : "\u6df1\u6d77\u65e5\u68f2\u59eb-\u58ca" == i ? 433185540 : "\u5317\u65b9\u68f2\u59b9" == i ? 443186540 : "\u5317\u65b9\u68f2\u59b9-\u58ca" == i ? 443186840 : -1
            }, t._getVoiceIDs = function (t, e, i) {
                var n = e.data.model.map_info.map_no,
                    o = i.mst_id,
                    r = i.name;
                if (3 == t && 5 == n) {
                    if (1587 == o || 1589 == o) return {
                        a: [3505871, 3505872],
                        d: [3505873]
                    };
                    if (1588 == o || 1590 == o) return {
                        a: [3505881, 3505882],
                        d: [3505883]
                    }
                } else if (4 == t && 5 == n) {
                    if (1573 == o) return {
                        a: [4505731],
                        d: [4505732]
                    };
                    if (1613 == o) return {
                        a: [4506131],
                        d: [4505732]
                    }
                } else if (6 == t && 1 == n) {
                    if ("\u7a7a\u6bcd\u68f2\u9b3c" == r) return {
                        a: [6105851, 6105852],
                        d: [6105853]
                    }
                } else if (6 == t && 4 == n) {
                    if ("\u7832\u53f0\u5c0f\u9b3c" == r) return {
                        a: [6466520],
                        d: [6466530]
                    };
                    if ("\u96e2\u5cf6\u68f2\u59eb" == r) return {
                        a: [6466820],
                        d: [6466830]
                    }
                }
            }, t._getVoiceIDsAtEvent = function (t, e, i) {
                var n = (e.data.model.map_info.map_no, i.mst_id),
                    o = i.name,
                    r = 0 == i.index && e.data.model.map_info.isBoss(),
                    s = e.data.isBossDamaged();
                if ("PT\u5c0f\u9b3c\u7fa4" == o) return {
                    a: [32263720],
                    d: [32263730]
                };
                if ("\u7832\u53f0\u5c0f\u9b3c" == o) return {
                    a: [6466520],
                    d: [6466530]
                };
                if ("\u99c6\u9010\u53e4\u59eb" == o) return {
                    a: [34769020],
                    d: [34769030]
                };
                if ("\u99c6\u9010\u68f2\u59eb" == o) return {
                    a: [30505972],
                    d: [30505973]
                };
                if ("\u99c6\u9010\u6c34\u9b3c" == o) return {
                    a: [32564720],
                    d: [32564730]
                };
                if ("\u91cd\u5de1\u68f2\u59eb" == o) {
                    if (1659 == n || 1660 == n || 1661 == n) return {
                        a: [33365920],
                        d: [33365930]
                    };
                    if (1662 == n || 1663 == n || 1664 == n) return {
                        a: [33366220],
                        d: [33366230]
                    }
                }
                if ("\u91cd\u5de1\u590f\u59eb" == o) return {
                    a: [35470520],
                    d: [35470530]
                };
                if ("\u7a7a\u6bcd\u68f2\u9b3c" == o || "\u7a7a\u6bcd\u590f\u9b3c" == o) return {
                    a: [27305852],
                    d: [27305853]
                };
                if ("\u7a7a\u6bcd\u68f2\u59eb" == o || "\u7a7a\u6bcd\u590f\u59eb" == o) return {
                    a: [29405862],
                    d: [29405863]
                };
                if ("\u6f5c\u6c34\u590f\u59eb" == o) return {
                    a: [35169320],
                    d: [35169330]
                };
                if ("\u6f5c\u6c34\u65b0\u68f2\u59eb" == o || "\u6f5c\u6c34\u65b0\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == o) {
                    var a = e.data.model.gauge_now,
                        _ = i.hp_now >= a;
                    return r && _ ? {
                        a: [391173621],
                        d: [391173630]
                    } : {
                        a: [391173620],
                        d: [391173630]
                    }
                }
                return "\u6226\u8266\u4ecf\u68f2\u59eb" == o || "\u6226\u8266\u4ecf\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == o ? {
                    a: [394174520],
                    d: [394174530]
                } : "\u6226\u8266\u4ecf\u68f2\u59eb-\u58ca" == o || "\u6226\u8266\u4ecf\u68f2\u59eb-\u58ca \u30d0\u30ab\u30f3\u30b9mode" == o ? {
                    a: [394174820],
                    d: [394174830]
                } : "\u6226\u8266\u68f2\u59eb" == o || "\u6226\u8266\u68f2\u59eb\u6539" == o || "\u6226\u8266\u590f\u59eb" == o ? {
                    a: [27605572],
                    d: [27605573]
                } : "\u98db\u884c\u5834\u59eb" == o ? {
                    a: [31406312],
                    d: [31406313]
                } : "\u6cca\u5730\u6c34\u9b3c" == o || "\u6cca\u5730\u6c34\u9b3c \u30d0\u30ab\u30f3\u30b9mode" == o ? {
                    a: [30506092],
                    d: [30506093]
                } : "\u8b77\u885b\u72ec\u9084\u59eb" == o ? {
                    a: [423182120],
                    d: [423182130]
                } : "\u8b77\u885b\u72ec\u9084\u59eb-\u58ca" == o ? {
                    a: [423182420],
                    d: [423182430]
                } : "\u6e2f\u6e7e\u590f\u59eb" == o || "\u6e2f\u6e7e\u590f\u59eb-\u58ca" == o ? {
                    a: [35369920],
                    d: [35369930]
                } : "\u96c6\u7a4d\u5730\u68f2\u59eb" == o || "\u96c6\u7a4d\u5730\u590f\u59eb" == o || "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode" == o ? {
                    a: [33265320],
                    d: [33265330]
                } : "\u96c6\u7a4d\u5730\u68f2\u59eb-\u58ca" == o || "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode-\u58ca" == o ? {
                    a: [33265620],
                    d: [33265630]
                } : "\u8239\u6e20\u68f2\u59eb" == o ? {
                    a: [424182720],
                    d: [424182730]
                } : "\u8239\u6e20\u68f2\u59eb-\u58ca" == o ? {
                    a: [424183020],
                    d: [424183030]
                } : "\u6b27\u5dde\u68f2\u59eb" == o ? {
                    a: [397175520],
                    d: [397175530]
                } : "\u6b27\u5dde\u68f2\u59eb-\u58ca" == o ? {
                    a: [397175820],
                    d: [397175830]
                } : "\u6b27\u5dde\u6c34\u59eb" == o ? {
                    a: [425184020],
                    d: [425184030]
                } : "\u6b27\u5dde\u6c34\u59eb-\u58ca" == o ? s ? {
                    a: [425184320],
                    d: [425184331]
                } : {
                    a: [425184320],
                    d: [425184330]
                } : "\u6df1\u6d77\u96e8\u96f2\u59eb" == o ? {
                    a: [431184620],
                    d: [431184630]
                } : "\u6df1\u6d77\u96e8\u96f2\u59eb-\u58ca" == o ? {
                    a: [431184920],
                    d: [431184930]
                } : "\u30ea\u30b3\u30ea\u30b9\u68f2\u59eb" == o ? {
                    a: [34567920],
                    d: [34567930]
                } : "\u5357\u65b9\u68f2\u9b3c" == o ? {
                    a: [432154620],
                    d: [432154630]
                } : "\u5357\u65b9\u68f2\u6226\u59eb" == o ? {
                    a: [433154720],
                    d: [433154730]
                } : "\u6df1\u6d77\u65e5\u68f2\u59eb" == o ? {
                    a: [433185220],
                    d: [433185230]
                } : "\u6df1\u6d77\u65e5\u68f2\u59eb-\u58ca" == o ? {
                    a: [433185520],
                    d: [433185530]
                } : "\u5317\u65b9\u68f2\u59b9" == o ? {
                    a: [443186520],
                    d: [443186530]
                } : "\u5317\u65b9\u68f2\u59b9-\u58ca" == o ? {
                    a: [443186820],
                    d: [443186830]
                } : void 0
            }, t
        }();
    e.EnemyVoiceConst = o
}