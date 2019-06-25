const function606 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(80),
        r = i(7),
        s = i(4),
        a = i(193),
        _ = i(194),
        u = i(195),
        l = i(196),
        c = i(287),
        h = i(607),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gear = new c.Gear, e.addChild(e._gear), e._bg = new d, e.addChild(e._bg), e._username = new s.TextBox(19, 16774898), e._username.position.set(175, 12), e.addChild(e._username), e._userlevel = new s.TextBox(21, 16774898), e.addChild(e._userlevel), e._userrank = new s.TextBox(18, 16774898), e.addChild(e._userrank), e._fleetnum = new s.TextBox(21, 16774898), e._fleetnum.position.set(837, 13), e.addChild(e._fleetnum), e._shipnum = new y(21, 16774898), e._shipnum.anchor.x = 1, e.addChild(e._shipnum), e._slotnum = new m(21, 16774898), e._slotnum.anchor.x = 1, e.addChild(e._slotnum), e._fuel = new s.TextBox(19, 16774898), e._fuel.anchor.x = 1, e._fuel.position.set(1092, 50), e.addChild(e._fuel), e._ammo = new s.TextBox(19, 16774898), e._ammo.anchor.x = 1, e._ammo.position.set(1092, 78), e.addChild(e._ammo), e._steel = new s.TextBox(19, 16774898), e._steel.anchor.x = 1, e._steel.position.set(1197, 50), e.addChild(e._steel), e._baux = new s.TextBox(19, 16774898), e._baux.anchor.x = 1, e._baux.position.set(1197, 78), e.addChild(e._baux), e._repairKit = new s.TextBox(21, 16774898), e._repairKit.anchor.x = 1, e.addChild(e._repairKit), e._devKit = new s.TextBox(21, 16774898), e._devKit.anchor.x = 1, e.addChild(e._devKit), e._revKit = new s.TextBox(21, 16774898), e._revKit.anchor.x = 1, e.addChild(e._revKit), e._btn_record = new h.UpperBtn(21, null), e._btn_record.position.set(180, 45), e.addChild(e._btn_record), e._btn_friend = new h.UpperBtn(22, null), e._btn_friend.position.set(300, 45), e.addChild(e._btn_friend), e._btn_album = new h.UpperBtn(23, null), e._btn_album.position.set(420, 45), e.addChild(e._btn_album), e._btn_item = new h.UpperBtn(24, null), e._btn_item.position.set(540, 45), e.addChild(e._btn_item), e._btn_interior = new h.UpperBtn(25, null), e._btn_interior.position.set(660, 45), e.addChild(e._btn_interior), e._btn_duty = new h.UpperBtn(26, null), e._btn_duty.position.set(780, 45), e.addChild(e._btn_duty), e._btn_shop = new h.UpperBtn(24, new o.ItemSceneModel), e._btn_shop.position.set(898, 43), e.addChild(e._btn_shop), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "username", {
                set: function (t) {
                    this._username.text = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "userLevel", {
                set: function (t) {
                    this._userlevel.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "userRank", {
                set: function (t) {
                    this._userrank.text = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fleetNum", {
                set: function (t) {
                    this._fleetnum.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipNum", {
                set: function (t) {
                    this._shipnum.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotNum", {
                set: function (t) {
                    this._slotnum.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fuel", {
                set: function (t) {
                    this._fuel.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ammo", {
                set: function (t) {
                    this._ammo.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "steel", {
                set: function (t) {
                    this._steel.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "baux", {
                set: function (t) {
                    this._baux.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "repairKit", {
                set: function (t) {
                    this._repairKit.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "devKit", {
                set: function (t) {
                    this._devKit.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "revKit", {
                set: function (t) {
                    this._revKit.text = Math.floor(t).toString()
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.changeSkin = function (t) {
                this._bg.changeSkin(t), 101 == t ? (this._userlevel.position.set(600, 13), this._userrank.position.set(651, 14), this._fleetnum.visible = !0, this._shipnum.position.set(999, 13), this._slotnum.visible = !1, this._repairKit.position.set(1094, 14), this._devKit.position.set(1194, 14), this._revKit.visible = !1) : 311 == t ? (this._userlevel.position.set(477, 13), this._userrank.position.set(528, 14), this._fleetnum.visible = !1, this._shipnum.position.set(720, 13), this._slotnum.visible = !0, this._slotnum.position.set(890, 13), this._repairKit.position.set(987, 14), this._devKit.position.set(1098, 14), this._revKit.visible = !0, this._revKit.position.set(1194, 14)) : (this._userlevel.position.set(551, 13), this._userrank.position.set(602, 14), this._fleetnum.visible = !1, this._shipnum.position.set(780, 13), this._slotnum.visible = !0, this._slotnum.position.set(887, 13), this._repairKit.position.set(987, 14), this._devKit.position.set(1098, 14), this._revKit.visible = !0, this._revKit.position.set(1194, 14)), 101 == t || 102 == t ? (this._gear.position.set(68, 60), this._btn_friend.position.set(300, 42)) : 201 == t ? (this._gear.position.set(66, 58), this._btn_friend.position.set(300, 45)) : 301 != t && 311 != t || (this._gear.position.set(67, 60), this._btn_friend.position.set(300, 45));
                var e = PIXI.Texture.EMPTY;
                101 == t || 102 == t ? (e = a.PORT_SKIN_1.getTexture(2), this._btn_record.initialize(a.PORT_SKIN_1.getTexture(37), a.PORT_SKIN_1.getTexture(38), null), this._btn_friend.initialize(a.PORT_SKIN_1.getTexture(42), a.PORT_SKIN_1.getTexture(43), null), this._btn_album.initialize(a.PORT_SKIN_1.getTexture(44), a.PORT_SKIN_1.getTexture(45), null), this._btn_item.initialize(a.PORT_SKIN_1.getTexture(30), a.PORT_SKIN_1.getTexture(31), null), this._btn_interior.initialize(a.PORT_SKIN_1.getTexture(32), a.PORT_SKIN_1.getTexture(33), null), this._btn_duty.initialize(a.PORT_SKIN_1.getTexture(34), a.PORT_SKIN_1.getTexture(35), a.PORT_SKIN_1.getTexture(36)), this._btn_shop.initialize(a.PORT_SKIN_1.getTexture(22), a.PORT_SKIN_1.getTexture(23), null)) : 201 == t ? (e = _.PORT_SKIN_2.getTexture(1), this._btn_record.initialize(_.PORT_SKIN_2.getTexture(26), _.PORT_SKIN_2.getTexture(27), null), this._btn_friend.initialize(_.PORT_SKIN_2.getTexture(31), _.PORT_SKIN_2.getTexture(32), null), this._btn_album.initialize(_.PORT_SKIN_2.getTexture(33), _.PORT_SKIN_2.getTexture(34), null), this._btn_item.initialize(_.PORT_SKIN_2.getTexture(19), _.PORT_SKIN_2.getTexture(20), null), this._btn_interior.initialize(_.PORT_SKIN_2.getTexture(21), _.PORT_SKIN_2.getTexture(22), null), this._btn_duty.initialize(_.PORT_SKIN_2.getTexture(23), _.PORT_SKIN_2.getTexture(24), _.PORT_SKIN_2.getTexture(25)), this._btn_shop.initialize(_.PORT_SKIN_2.getTexture(14), _.PORT_SKIN_2.getTexture(15), null)) : 301 == t ? (e = u.PORT_SKIN_3.getTexture(1), this._btn_record.initialize(u.PORT_SKIN_3.getTexture(26), u.PORT_SKIN_3.getTexture(27), null), this._btn_friend.initialize(u.PORT_SKIN_3.getTexture(31), u.PORT_SKIN_3.getTexture(32), null), this._btn_album.initialize(u.PORT_SKIN_3.getTexture(33), u.PORT_SKIN_3.getTexture(34), null), this._btn_item.initialize(u.PORT_SKIN_3.getTexture(19), u.PORT_SKIN_3.getTexture(20), null), this._btn_interior.initialize(u.PORT_SKIN_3.getTexture(21), u.PORT_SKIN_3.getTexture(22), null), this._btn_duty.initialize(u.PORT_SKIN_3.getTexture(23), u.PORT_SKIN_3.getTexture(24), u.PORT_SKIN_3.getTexture(25)), this._btn_shop.initialize(u.PORT_SKIN_3.getTexture(14), u.PORT_SKIN_3.getTexture(15), null)) : 311 == t && (e = l.PORT_SKIN_3K.getTexture(3), this._btn_record.initialize(l.PORT_SKIN_3K.getTexture(42), l.PORT_SKIN_3K.getTexture(43), null), this._btn_friend.initialize(l.PORT_SKIN_3K.getTexture(45), l.PORT_SKIN_3K.getTexture(47), null), this._btn_album.initialize(l.PORT_SKIN_3K.getTexture(49), l.PORT_SKIN_3K.getTexture(50), null), this._btn_item.initialize(l.PORT_SKIN_3K.getTexture(35), l.PORT_SKIN_3K.getTexture(36), null), this._btn_interior.initialize(l.PORT_SKIN_3K.getTexture(37), l.PORT_SKIN_3K.getTexture(38), null), this._btn_duty.initialize(l.PORT_SKIN_3K.getTexture(39), l.PORT_SKIN_3K.getTexture(40), l.PORT_SKIN_3K.getTexture(41)), this._btn_shop.initialize(l.PORT_SKIN_3K.getTexture(30), l.PORT_SKIN_3K.getTexture(31), null)), 301 == t || 311 == t ? (this._username.style.fill = 4999235, this._userlevel.style.fill = 4999235, this._userrank.style.fill = 4999235, this._fuel.style.fill = 4999235, this._ammo.style.fill = 4999235, this._steel.style.fill = 4999235, this._baux.style.fill = 4999235, this._repairKit.style.fill = 4999235, this._devKit.style.fill = 4999235, this._revKit.style.fill = 4999235, this._shipnum.updateDefaultColor(4999235), this._slotnum.updateDefaultColor(4999235)) : (this._username.style.fill = 16774898, this._userlevel.style.fill = 16774898, this._userrank.style.fill = 16774898, this._fuel.style.fill = 16774898, this._ammo.style.fill = 16774898, this._steel.style.fill = 16774898, this._baux.style.fill = 16774898, this._repairKit.style.fill = 16774898, this._devKit.style.fill = 16774898, this._revKit.style.fill = 16774898, this._shipnum.updateDefaultColor(16774898), this._slotnum.updateDefaultColor(16774898)), this._gear.setUp(e)
            }, e.prototype.initialize = function (t, e, i) {
                this.changeSkin(t), this._shipnum.updateMaxValue(e), this._slotnum.updateMaxValue(i), this._gear.activate()
            }, e.prototype.updateUserInfo = function (t) {
                t.hasOwnProperty("userName") && (this._username.text = t.userName), t.hasOwnProperty("userLevel") && (this._userlevel.text = Math.floor(t.userLevel).toString()), t.hasOwnProperty("userRank") && (this._userrank.text = t.userRank), t.hasOwnProperty("fleetNum") && (this._fleetnum.text = Math.floor(t.fleetNum).toString())
            }, e.prototype.updateInfo = function (t) {
                if (t.hasOwnProperty("fuel") && (this._fuel.text = Math.floor(t.fuel).toString()), t.hasOwnProperty("ammo") && (this._ammo.text = Math.floor(t.ammo).toString()), t.hasOwnProperty("steel") && (this._steel.text = Math.floor(t.steel).toString()), t.hasOwnProperty("baux") && (this._baux.text = Math.floor(t.baux).toString()), t.hasOwnProperty("repairKit") && (this._repairKit.text = Math.floor(t.repairKit).toString()), t.hasOwnProperty("devKit") && (this._devKit.text = Math.floor(t.devKit).toString()), t.hasOwnProperty("revKit") && (this._revKit.text = Math.floor(t.revKit).toString()), t.hasOwnProperty("shipNum")) {
                    var e = r.ObjUtil.getNumber(t, "shipNum");
                    this._shipnum.update(e)
                }
                if (t.hasOwnProperty("slotNum")) {
                    var e = r.ObjUtil.getNumber(t, "slotNum");
                    this._slotnum.update(e)
                }
                if (t.hasOwnProperty("shipMax")) {
                    var e = r.ObjUtil.getNumber(t, "shipMax");
                    this._shipnum.updateMaxValue(e)
                }
                if (t.hasOwnProperty("slotMax")) {
                    var e = r.ObjUtil.getNumber(t, "slotMax");
                    this._slotnum.updateMaxValue(e)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._gear.dispose(), this._username.destroy(), this._userlevel.destroy(), this._userrank.destroy(), this._fleetnum.destroy(), this._shipnum.destroy(), this._slotnum.destroy(), this._fuel.destroy(), this._ammo.destroy(), this._steel.destroy(), this._baux.destroy(), this._repairKit.destroy(), this._devKit.destroy(), this._revKit.destroy(), this._btn_record.dispose(), this._btn_friend.dispose(), this._btn_album.dispose(), this._btn_item.dispose(), this._btn_interior.dispose(), this._btn_duty.dispose(), this._btn_shop.dispose()
            }, e
        }(PIXI.Container);
    e.UpperBar = p;
    var d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.changeSkin = function (t) {
                this.removeChildren(), 101 == t || 102 == t ? this._setUpForSkin1(t) : 201 == t ? this._setUpForSkin2() : 301 == t ? this._setUpForSkin3(t) : 311 == t && this._setUpForSkin3K(t)
            }, e.prototype._setUpForSkin1 = function (t) {
                this.texture = a.PORT_SKIN_1.getTexture(14), 101 == t ? (this._createSprite(a.PORT_SKIN_1.getTexture(27), 433, 16), this._createSprite(a.PORT_SKIN_1.getTexture(28), 745, 18), this._createSprite(a.PORT_SKIN_1.getTexture(29), 862, 18), this._createSprite(a.PORT_SKIN_1.getTexture(19), 1011, 17), this._createSprite(a.PORT_SKIN_1.getTexture(20), 1099, 17)) : (this._createSprite(a.PORT_SKIN_1.getTexture(24), 413, 16), this._createSprite(a.PORT_SKIN_1.getTexture(25), 698, 18), this._createSprite(a.PORT_SKIN_1.getTexture(26), 791, 18), this._createSprite(a.PORT_SKIN_1.getTexture(19), 904, 17), this._createSprite(a.PORT_SKIN_1.getTexture(20), 1003, 17), this._createSprite(a.PORT_SKIN_1.getTexture(21), 1105, 16)), this._createSprite(a.PORT_SKIN_1.getTexture(15), 991, 51), this._createSprite(a.PORT_SKIN_1.getTexture(16), 988, 79), this._createSprite(a.PORT_SKIN_1.getTexture(17), 1095, 52), this._createSprite(a.PORT_SKIN_1.getTexture(18), 1096, 78), this._createSprite(a.PORT_SKIN_1.getTexture(12), 415, 0)
            }, e.prototype._setUpForSkin2 = function () {
                this.texture = _.PORT_SKIN_2.getTexture(6), this._createSprite(_.PORT_SKIN_2.getTexture(16), 413, 16), this._createSprite(_.PORT_SKIN_2.getTexture(17), 698, 18), this._createSprite(_.PORT_SKIN_2.getTexture(18), 791, 18), this._createSprite(_.PORT_SKIN_2.getTexture(11), 904, 17), this._createSprite(_.PORT_SKIN_2.getTexture(12), 1003, 17), this._createSprite(_.PORT_SKIN_2.getTexture(13), 1105, 16), this._createSprite(_.PORT_SKIN_2.getTexture(7), 991, 51), this._createSprite(_.PORT_SKIN_2.getTexture(8), 988, 79), this._createSprite(_.PORT_SKIN_2.getTexture(9), 1095, 52), this._createSprite(_.PORT_SKIN_2.getTexture(10), 1096, 78), this._createSprite(_.PORT_SKIN_2.getTexture(4), 415, 0)
            }, e.prototype._setUpForSkin3 = function (t) {
                this.texture = u.PORT_SKIN_3.getTexture(6), this._createSprite(u.PORT_SKIN_3.getTexture(16), 413, 16), this._createSprite(u.PORT_SKIN_3.getTexture(17), 698, 18), this._createSprite(u.PORT_SKIN_3.getTexture(18), 791, 18), this._createSprite(u.PORT_SKIN_3.getTexture(11), 904, 17), this._createSprite(u.PORT_SKIN_3.getTexture(12), 1003, 17), this._createSprite(u.PORT_SKIN_3.getTexture(13), 1105, 16), this._createSprite(u.PORT_SKIN_3.getTexture(7), 991, 51), this._createSprite(u.PORT_SKIN_3.getTexture(8), 988, 79), this._createSprite(u.PORT_SKIN_3.getTexture(9), 1095, 52), this._createSprite(u.PORT_SKIN_3.getTexture(10), 1096, 78), this._createSprite(u.PORT_SKIN_3.getTexture(4), 415, 0)
            }, e.prototype._setUpForSkin3K = function (t) {
                this.texture = l.PORT_SKIN_3K.getTexture(22), this._createSprite(l.PORT_SKIN_3K.getTexture(32), 409, 20), this._createSprite(l.PORT_SKIN_3K.getTexture(33), 629, 21), this._createSprite(l.PORT_SKIN_3K.getTexture(34), 737, 21), this._createSprite(l.PORT_SKIN_3K.getTexture(27), 904, 17), this._createSprite(l.PORT_SKIN_3K.getTexture(28), 1003, 17), this._createSprite(l.PORT_SKIN_3K.getTexture(29), 1105, 16), this._createSprite(l.PORT_SKIN_3K.getTexture(23), 991, 51), this._createSprite(l.PORT_SKIN_3K.getTexture(24), 988, 79), this._createSprite(l.PORT_SKIN_3K.getTexture(25), 1095, 52), this._createSprite(l.PORT_SKIN_3K.getTexture(26), 1096, 78), this._createSprite(l.PORT_SKIN_3K.getTexture(20), 415, 0)
            }, e.prototype._createSprite = function (t, e, i) {
                var n = new PIXI.Sprite(t);
                n.position.set(e, i), this.addChild(n)
            }, e
        }(PIXI.Sprite),
        f = function (t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this;
                return n._max = 0, n._value = 0, n._default_color = i, n
            }
            return n(e, t), e.prototype.updateDefaultColor = function (t) {
                this._default_color = t, this._update()
            }, e.prototype.updateMaxValue = function (t) {
                this._max = t, this._update()
            }, e.prototype.update = function (t) {
                this._value = t, this._update()
            }, e
        }(s.TextBox),
        y = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._update = function () {
                var t = this._max - this._value;
                this.style.fill = t <= 5 ? 14442282 : this._default_color, this.text = this._value.toString()
            }, e
        }(f),
        m = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._update = function () {
                var t = this._max - this._value;
                this.style.fill = t <= 5 ? 14442282 : t < 20 ? 14461696 : this._default_color, this.text = this._value.toString()
            }, e
        }(f)
}