/*
 * util
 * plane data
 */
const function45 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function () {
        function t() {
        }

        /*
         * get plane type
         * e: boolean; // contains 大型飛行艇
         */
        t.getPlaneType = function (e) {
            // ([2]：カテゴリ) 大型飛行艇
            return 1 == e ? t._PLANE_TYPE_.concat(41) : t._PLANE_TYPE_
        };
        // get jet plane type
        t.getJetPlaneType = function () {
            // ([2]：カテゴリ) 噴式戦闘機 噴式戦闘爆撃機 噴式攻撃機
            return [56, 57, 58]
        };
        // get LBAS type
        t.getAirUnitPlaneType = function () {
            // ([2]：カテゴリ) 艦上偵察機 水上偵察機 大型飛行艇 陸上攻撃機 局地戦闘機 噴式偵察機
            return t._PLANE_TYPE_.concat(9, 10, 41, 47, 48, 59)
        };
        // get jet LBAS type
        t.getJetAirUnitPlaneType = function () {
            // ([2]：カテゴリ) 噴式偵察機
            return this.getJetPlaneType().concat(59)
        };
        /*
         * enemy plane type to graph
         * 1: green
         * 2: orange
         * 3: blue
         * 4: cat (F6F hellcat)
         * 5: cat with knife (SB2C Helldiver)
         * 6: cat with torpedo (TBF Avenger)
         * 7: green puff (B-24 Liberator)
         * 8: green puff with eye open
         * 9: 5 with orange shadow
         * 10: 4 with orange shadow
         * 11: white puff with purple eyes
         * 12: hawk (Gannet?)
         * 13: black puff with blue eye
         * 14: black puff with blue eyes and mouth open
         * 15: black puff with blue eye, tongue out and torpedo
         */
        t.getEnemyPlaneGraphicsType = function (t) {
            var e = {
                517: 2,  // 深海棲艦攻 Mark.II
                518: 3,  // 深海棲艦攻 Mark.III
                520: 2,  // 深海棲艦戦 Mark.II
                521: 3,  // 深海棲艦戦 Mark.III
                524: 2,  // 深海棲艦爆 Mark.II
                525: 3,  // 深海棲艦偵察機
                526: 3,  // 飛び魚偵察機
                544: 3,  // ??? 深海爆雷投射機 Mk.II ??? (74EO author @andanteyk: ※522: 飛び魚艦戦の設定ミス？)
                546: 3,  // 飛び魚艦爆
                547: 4,  // 深海猫艦戦
                548: 5,  // 深海地獄艦爆
                549: 6,  // 深海復讐艦攻
                554: 5,  // 深海水上攻撃機
                555: 5,  // 深海水上攻撃機改
                556: 4,  // 深海猫艦戦改
                557: 5,  // 深海地獄艦爆改
                558: 6,  // 深海復讐艦攻改
                561: 7,  // 深海解放陸爆
                562: 8,  // 深海解放陸爆Ace
                564: 6,  // 深海水上偵察観測機
                566: 4,  // 深海猫艦戦(爆装)
                571: 9,  // 深海水母小鬼機
                572: 10,  // 深海熊猫艦戦
                573: 11,  // 深海潜水下駄履き
                574: 12,  // 深海攻撃哨戒鷹
                575: 12,  // 深海攻撃哨戒鷹改
                581: 13,  // 夜猫深海艦戦
                582: 14,  // 夜深海艦爆
                583: 15,  // 夜復讐深海艦攻
                586: 12   // 深海攻撃哨戒鷹改二
            };
            return 1 == e.hasOwnProperty(t.toString()) ? e[t] : 1
        };
        // ([1]：図鑑表示) 艦上機 偵察機 オートジャイロ 対潜哨戒機 大型飛行艇 多用途水上機/水上戦闘機 噴式戦闘爆撃機 多用途水上機/水上爆撃機
        t.PLANE = [5, 7, 15, 16, 33, 36, 40, 43];
        // ([2]：カテゴリ) 艦上偵察機 水上偵察機 水上爆撃機 大型飛行艇 噴式偵察機 艦上偵察機(II)
        t.SAKUTEKI = [9, 10, 11, 41, 59, 94];
        // ([2]：カテゴリ) 艦上戦闘機 艦上爆撃機 艦上攻撃機 水上爆撃機 オートジャイロ 対潜哨戒機 水上戦闘機 噴式戦闘機 噴式戦闘爆撃機 噴式攻撃機
        t._PLANE_TYPE_ = [6, 7, 8, 11, 25, 26, 45, 56, 57, 58];
        // ([2]：カテゴリ) 艦上戦闘機 水上戦闘機 噴式戦闘機
        t.ATTACKABLE_TYPE = [6, 45, 56];
        // 二式大艇
        t.SAKUTEKI_SPSCALE_MSTID = { 138: .44 };
        // 大型飛行艇
        t.SAKUTEKI_SPSCALE_ETYPE = { 41: .4 };
        /*
         * `sx`: if the direction of plane's figure is left, `sx` is -1
         * `y`: ???
         * `r`: ???
         */
        t.OFFSET = {
            16: { sx: -1 },
            17: { sx: -1 },
            18: { sx: -1 },
            19: { y: 15, r: 30, sx: -1 },
            20: { r: 30 },
            21: { r: 10, sx: -1 },
            22: { sx: -1 },
            23: { y: 11, r: 31, sx: -1 },
            25: { sx: -1 },
            26: { sx: -1 },
            52: { sx: -1 },
            53: { sx: -1 },
            54: { sx: -1 },
            56: { r: 15, sx: -1 },
            59: { sx: -1 },
            60: { r: -35, sx: -1 },
            61: { sx: -1 },
            62: { sx: -1 },
            64: { r: 70, sx: -1 },
            70: { r: -10, sx: -1 },
            79: { r: 30, sx: -1 },
            80: { y: 45, r: -60, sx: -1 },
            81: { y: 45, r: -60, sx: -1 },
            82: { sx: -1 },
            83: { r: -20 },
            93: { r: -5, sx: -1 },
            94: { r: -10, sx: -1 },
            96: { r: 20 },
            97: { r: 30, sx: -1 },
            98: { y: 45 },
            99: { r: 20 },
            100: { r: -10, sx: -1 },
            102: { r: 24 },
            109: { r: -10 },
            110: { r: 21 },
            111: { r: -20 },
            113: { r: -10 },
            115: { r: 10, sx: -1 },
            118: { sx: -1 },
            138: { r: 18, sx: -1 },
            143: { r: 30 },
            144: { r: -20, sx: -1 },
            148: { r: 5, sx: -1 },
            151: { r: 20, sx: -1 },
            158: { r: 30 },
            159: { r: -15 },
            168: { r: 12 },
            169: { r: 15 },
            170: { r: 15 },
            175: { r: -20, sx: -1 },
            176: { r: 34 },
            177: { r: 34 },
            178: { r: 12 },
            180: { r: 20, sx: -1 },
            184: { r: 30, sx: -1 },
            185: { r: 35 },
            186: { r: 20 },
            188: { sx: -1 },
            189: { sx: -1 },
            194: { r: 18, sx: -1 },
            195: { r: 15, sx: -1 },
            196: { y: 8, r: 6, sx: -1 },
            199: { y: 15, r: 15, sx: -1 },
            200: { r: 30, sx: -1 },
            205: { y: 8 },
            207: { r: 30, sx: -1 },
            208: { sx: -1 },
            212: { sx: -1 },
            218: { r: -5 },
            219: { y: -8, r: 30, sx: -1 },
            221: { r: -14 },
            224: { r: 30 },
            228: { r: 30, sx: -1 },
            233: { r: 22 },
            237: { r: -10 },
            238: { r: 15 },
            239: { r: 15 },
            242: { r: 18 },
            243: { r: 18 },
            244: { r: 18 },
            248: { y: 23, r: 12 },
            249: { r: -15, sx: -1 },
            250: { y: 26, r: 12 },
            251: { y: 26, r: 12 },
            252: { y: 26, r: 12 },
            253: { y: 26, r: 12 },
            269: { r: 30 },
            270: { r: 35 },
            271: { r: -15, sx: -1 },
            302: { r: 5 },
            304: { r: 8 },
            305: { r: 10, sx: -1 },
            306: { y: -5, r: 10, sx: -1 }
        };
        return t
    }();
    e.PlaneConst = n
}