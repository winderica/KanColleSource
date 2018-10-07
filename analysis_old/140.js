/*
 * the function called by `17.js`
 * equipment category
 */
const function140 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function () {
        function t() {
        }

        t.FILTERING_CATEGORIES = {
            // 艦上戦闘機 噴式戦闘機
            1: [6, 56],
            // 艦上爆撃機 艦上攻撃機 噴式戦闘爆撃機 噴式攻撃機
            2: [7, 8, 57, 58],
            // 艦上偵察機 水上偵察機 水上爆撃機 オートジャイロ 対潜哨戒機 水上戦闘機 噴式偵察機 艦上偵察機（II）
            3: [9, 10, 11, 25, 26, 45, 59, 94],
            // 小口径主砲 中口径主砲 大口径主砲 大口径主砲（II）
            4: [1, 2, 3, 38],
            // 副砲 対空機銃
            5: [4, 21],
            // 魚雷 特殊潜航艇 潜水艦魚雷
            6: [5, 22, 32],
            // ソナー 爆雷 大型ソナー
            7: [14, 15, 40],
            // 小型電探 大型電探 大型電探（II）
            8: [12, 13, 93],
            // 上陸用舟艇 簡易輸送部材 特型内火艇 輸送機材
            9: [24, 30, 46, 50],
            // 戦闘糧食 補給物資
            10: [43, 44],
            // 大型飛行艇 陸上攻撃機
            11: [41, 47]
        };
        t.SLOTITEM_RARITY_NAMES = [ 'コモン', 'レア', 'ホロ', 'Sホロ', 'SSホロ', 'SSホロ', 'SSホロ+' ];
        return t;
    }();
    e.SlotConst = n
}