/*
 * called by `519.js`
 * equippable equipments of ship types (api_start2.api_mst_stype)
 */
const function520 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(13), r = function () {
        function t(t) {
            this._o = t
        }
        /*
         * カテゴリID(艦船のstypeに対応)
         * 1=海防艦	        Escort
         * 2=駆逐艦		    Destroyer
         * 3=軽巡洋艦		Light Cruiser
         * 4=重雷装巡洋艦	    Torpedo Cruiser
         * 5=重巡洋艦		Heavy Cruiser
         * 6=航空巡洋艦	    Aircraft Cruiser
         * 7=軽空母		    Light Aircraft Carrier
         * 8=巡洋戦艦		Battleship		(実データ中では"戦艦"だが混同を防ぐため)
         * 9=戦艦       	  	Battleship
         * 10=航空戦艦  	    Aviation Battleship
         * 11=正規空母      	Aircraft Carrier
         * 12=超弩級戦艦	    Super Dreadnoughts
         * 13=潜水艦	        Submarine
         * 14=潜水空母      	Aircraft Carrying Submarine
         * 15=補給艦	    	(敵のほう)
         * 16=水上機母艦	    Seaplane Carrier
         * 17=揚陸艦		    Amphibious Assault Ship
         * 18=装甲空母		Aircraft Carrier
         * 19=工作艦		    Repair Ship
         * 20=潜水母艦		Submarine Tender
         * 21=練習巡洋艦	    Training Cruiser
         * 22=補給艦		    Fleet Oiler		(味方のほう)
         */
        Object.defineProperty(t.prototype, "id", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 艦種名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        // 建造時のシルエット
        Object.defineProperty(t.prototype, "build_phase_num", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_kcnt", 3)
            }, enumerable: !0, configurable: !0
        });
        // 装備可能な装備カテゴリ
        t.prototype.getEquippableTypes = function () {
            if (null == this._equippqble_types) {
                this._equippqble_types = new Array;
                // 装備可能カテゴリのフラグ (1: できる 0: できない)
                var t = o.ObjUtil.getObject(this._o, "api_equip_type");
                if (null != t) for (var e in t) 1 == t[e] && this._equippqble_types.push(parseInt(e))
            }
            return this._equippqble_types.concat()
        };
        // 装備可能な装備カテゴリ(補強増設スロット)
        t.prototype.getEquippableTypesEx = function () {
            if (null == this._equippqble_types_ex) return new Array;
            var t = this.getEquippableTypes(), e = this._equippqble_types_ex.concat();
            return t.filter(function (t, i, n) {
                return -1 != e.indexOf(t)
            })
        };
        return t
    }();
    e.ShipTypeModel = r;
    var s = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.prototype.__set_equippqble_types_ex__ = function (t) {
            this._equippqble_types_ex = t
        }, e
    }(r);
    e.ShipTypeModelEdit = s
}