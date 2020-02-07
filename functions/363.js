const function363 = function (t, e, i) {
    "use strict";

    function n(t) {
        return 0 == t ? [r.EquipType._47_RIKUJO_KOUGEKIKI] : 1 == t ? [r.EquipType._48_KYOKUCHI_SENTOUKI] : 2 == t ? [r.EquipType._06_KANJO_SENTOUKI, r.EquipType._56_FUNSHIKI_SENTOUKI] : 3 == t ? [r.EquipType._07_KANJO_BAKUGEKIKI, r.EquipType._08_KANJO_KOUGEKIKI, r.EquipType._57_FUNSHIKI_BAKUGEKIKI, r.EquipType._58_FUNSHIKI_KOUGEKIKI] : 4 == t ? [r.EquipType._09_KANJO_TEISATSUKI, r.EquipType._10_SUIJO_TEISATSUKI, r.EquipType._11_SUIJO_BAKUGEKIKI, r.EquipType._41_OGATA_HIKOUTEI, r.EquipType._45_SUIJO_SENTOUKI, r.EquipType._49_RIKUJO_TEISATSUKI, r.EquipType._59_FUNSHIKI_TEISATSUKI, r.EquipType._94_KANJO_TEISATSUKI] : []
    }

    function o(t) {
        return [r.EquipType._09_KANJO_TEISATSUKI, r.EquipType._10_SUIJO_TEISATSUKI, r.EquipType._41_OGATA_HIKOUTEI, r.EquipType._49_RIKUJO_TEISATSUKI, r.EquipType._59_FUNSHIKI_TEISATSUKI, r.EquipType._94_KANJO_TEISATSUKI].indexOf(t) >= 0 ? 4 : 18
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(38);
    e.getEquipTypes = n, e.getKadouCount = o
}