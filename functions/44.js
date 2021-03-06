const function44 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(38),
        o = function () {
            function t() {}
            return t.getPlaneType = function (e) {
                return 1 == e ? t._PLANE_TYPE_.concat(n.EquipType._41_OGATA_HIKOUTEI) : t._PLANE_TYPE_
            }, t.getJetPlaneType = function () {
                return [n.EquipType._56_FUNSHIKI_SENTOUKI, n.EquipType._57_FUNSHIKI_BAKUGEKIKI, n.EquipType._58_FUNSHIKI_KOUGEKIKI]
            }, t.getAirUnitPlaneType = function () {
                return t._PLANE_TYPE_.concat(n.EquipType._09_KANJO_TEISATSUKI, n.EquipType._10_SUIJO_TEISATSUKI, n.EquipType._41_OGATA_HIKOUTEI, n.EquipType._47_RIKUJO_KOUGEKIKI, n.EquipType._48_KYOKUCHI_SENTOUKI, n.EquipType._49_RIKUJO_TEISATSUKI, n.EquipType._59_FUNSHIKI_TEISATSUKI)
            }, t.getJetAirUnitPlaneType = function () {
                return this.getJetPlaneType().concat(n.EquipType._59_FUNSHIKI_TEISATSUKI)
            }, t.getEnemyPlaneGraphicsType = function (t) {
                var e = {
                    517: 2,
                    518: 3,
                    520: 2,
                    521: 3,
                    524: 2,
                    525: 3,
                    526: 3,
                    544: 3,
                    546: 3,
                    547: 4,
                    548: 5,
                    549: 6,
                    554: 5,
                    555: 5,
                    556: 4,
                    557: 5,
                    558: 6,
                    561: 7,
                    562: 8,
                    564: 6,
                    566: 4,
                    571: 9,
                    572: 10,
                    573: 11,
                    574: 12,
                    575: 12,
                    581: 13,
                    582: 14,
                    583: 15,
                    586: 12,
                    594: 16,
                    595: 16,
                    597: 17,
                    598: 17
                };
                return 1 == e.hasOwnProperty(t.toString()) ? e[t] : 1
            }, t.PLANE = [5, 7, 15, 16, 33, 36, 40, 43, 44], t.SAKUTEKI = [n.EquipType._09_KANJO_TEISATSUKI, n.EquipType._10_SUIJO_TEISATSUKI, n.EquipType._11_SUIJO_BAKUGEKIKI, n.EquipType._41_OGATA_HIKOUTEI, n.EquipType._59_FUNSHIKI_TEISATSUKI, n.EquipType._94_KANJO_TEISATSUKI], t._PLANE_TYPE_ = [n.EquipType._06_KANJO_SENTOUKI, n.EquipType._07_KANJO_BAKUGEKIKI, n.EquipType._08_KANJO_KOUGEKIKI, n.EquipType._11_SUIJO_BAKUGEKIKI, n.EquipType._25_AUTOGYRO, n.EquipType._26_TAISEN_SHOKAIKI, n.EquipType._45_SUIJO_SENTOUKI, n.EquipType._56_FUNSHIKI_SENTOUKI, n.EquipType._57_FUNSHIKI_BAKUGEKIKI, n.EquipType._58_FUNSHIKI_KOUGEKIKI], t.ATTACKABLE_TYPE = [n.EquipType._06_KANJO_SENTOUKI, n.EquipType._45_SUIJO_SENTOUKI, n.EquipType._56_FUNSHIKI_SENTOUKI], t.SAKUTEKI_SPSCALE_MSTID = {
                138: .44
            }, t.SAKUTEKI_SPSCALE_ETYPE = {
                41: .4
            }, t.OFFSET = {
                16: {
                    sx: -1
                },
                17: {
                    sx: -1
                },
                18: {
                    y: 18,
                    r: 10
                },
                19: {
                    y: 15,
                    r: 30,
                    sx: -1
                },
                20: {
                    r: 30
                },
                21: {
                    r: 10,
                    sx: -1
                },
                22: {
                    sx: -1
                },
                23: {
                    y: 11,
                    r: 31,
                    sx: -1
                },
                25: {
                    sx: -1
                },
                26: {
                    sx: -1
                },
                52: {
                    y: 18,
                    r: 10
                },
                53: {
                    sx: -1
                },
                54: {
                    sx: -1
                },
                56: {
                    r: 15,
                    sx: -1
                },
                59: {
                    sx: -1
                },
                60: {
                    r: -35,
                    sx: -1
                },
                61: {
                    sx: -1
                },
                62: {
                    sx: -1
                },
                64: {
                    r: 70,
                    sx: -1
                },
                70: {
                    r: -10,
                    sx: -1
                },
                79: {
                    r: 30,
                    sx: -1
                },
                80: {
                    y: 45,
                    r: -60,
                    sx: -1
                },
                81: {
                    y: 45,
                    r: -60,
                    sx: -1
                },
                82: {
                    r: -7
                },
                83: {
                    r: -20
                },
                93: {
                    r: -5,
                    sx: -1
                },
                94: {
                    r: -10,
                    sx: -1
                },
                96: {
                    r: 20
                },
                97: {
                    r: 30,
                    sx: -1
                },
                98: {
                    y: 45
                },
                99: {
                    r: 20
                },
                100: {
                    r: -10,
                    sx: -1
                },
                102: {
                    r: 24
                },
                109: {
                    r: -10
                },
                110: {
                    r: 21
                },
                111: {
                    r: -20
                },
                113: {
                    r: -10
                },
                115: {
                    r: 10,
                    sx: -1
                },
                118: {
                    sx: -1
                },
                138: {
                    r: 18,
                    sx: -1
                },
                143: {
                    r: 30
                },
                144: {
                    r: -20,
                    sx: -1
                },
                148: {
                    r: 5,
                    sx: -1
                },
                151: {
                    r: 20,
                    sx: -1
                },
                158: {
                    r: 30
                },
                159: {
                    r: -15
                },
                168: {
                    r: 12
                },
                169: {
                    r: 15
                },
                170: {
                    r: 15
                },
                175: {
                    r: -20,
                    sx: -1
                },
                176: {
                    r: 34
                },
                177: {
                    r: 34
                },
                178: {
                    r: 12
                },
                180: {
                    r: 20,
                    sx: -1
                },
                184: {
                    r: 30,
                    sx: -1
                },
                185: {
                    r: 35
                },
                186: {
                    r: 20
                },
                188: {
                    sx: -1
                },
                189: {
                    sx: -1
                },
                194: {
                    r: 18,
                    sx: -1
                },
                195: {
                    r: 15,
                    sx: -1
                },
                196: {
                    y: 8,
                    r: 6,
                    sx: -1
                },
                199: {
                    y: 15,
                    r: 15,
                    sx: -1
                },
                200: {
                    r: 30,
                    sx: -1
                },
                205: {
                    y: 8
                },
                207: {
                    r: 30,
                    sx: -1
                },
                208: {
                    sx: -1
                },
                212: {
                    sx: -1
                },
                218: {
                    r: -5
                },
                219: {
                    y: -8,
                    r: 30,
                    sx: -1
                },
                221: {
                    r: -14
                },
                224: {
                    r: 30
                },
                228: {
                    r: 30,
                    sx: -1
                },
                233: {
                    r: 22
                },
                237: {
                    r: -10
                },
                238: {
                    r: 15
                },
                239: {
                    r: 15
                },
                242: {
                    r: 18
                },
                243: {
                    r: 18
                },
                244: {
                    r: 18
                },
                248: {
                    y: 23,
                    r: 12
                },
                249: {
                    r: -15,
                    sx: -1
                },
                250: {
                    y: 26,
                    r: 12
                },
                251: {
                    y: 26,
                    r: 12
                },
                252: {
                    y: 26,
                    r: 12
                },
                253: {
                    y: 26,
                    r: 12
                },
                269: {
                    r: 30
                },
                270: {
                    r: 35
                },
                271: {
                    r: -15,
                    sx: -1
                },
                302: {
                    r: 5
                },
                304: {
                    r: 8
                },
                305: {
                    r: 10,
                    sx: -1
                },
                306: {
                    y: -5,
                    r: 10,
                    sx: -1
                },
                316: {
                    r: -25,
                    sx: -1
                },
                319: {
                    r: 12
                },
                320: {
                    r: 12
                },
                322: {
                    r: 50
                },
                323: {
                    r: 50
                },
                324: {
                    r: 7
                },
                325: {
                    r: 7
                },
                333: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                334: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                335: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                336: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                337: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                338: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                339: {
                    y: 20,
                    r: 10,
                    sx: -1
                },
                342: {
                    y: 18,
                    r: 10
                },
                343: {
                    y: 18,
                    r: 10
                },
                344: {
                    y: 18,
                    r: 10
                },
                345: {
                    y: 18,
                    r: 10
                },
                353: {
                    y: 25,
                    r: 5
                },
                354: {
                    y: 30,
                    r: 18
                }
            }, t
        }();
    e.PlaneConst = o
}