const function143 = function (t, e, i) {
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
    var o = i(1),
        r = i(77),
        s = i(1179),
        a = i(1182),
        _ = i(1183),
        u = i(1184),
        l = i(1185),
        c = i(1186),
        h = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var i = t.call(this) || this;
                return i._title = new PIXI.Sprite, i.addChild(i._title), e && (i._backBtn = new PIXI.Sprite, i._backBtn.interactive = !0, i._backBtn.buttonMode = !0, i._backBtn.position.set(705, 26), i.addChild(i._backBtn)), i._btns = [], i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._backBtn ? (this._title.texture = r.COMMON_SELECTABLE_REWARD.getTexture(11), this._backBtn.texture = r.COMMON_SELECTABLE_REWARD.getTexture(2), this._backBtn.on(o.EventType.CLICK, function () {
                    e(null)
                })) : this._title.texture = r.COMMON_SELECTABLE_REWARD.getTexture(12), this._btns = [], this._shipCount = t.length;
                for (var i = 0, n = t; i < n.length; i++) {
                    var s = n[i],
                        a = this._createBtn(s, e);
                    this.addChild(a), this._btns.push(a)
                }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.showAlert = function (t) {
                var e = this._getBtn(t);
                null != e && (null == this._alert && (this._alert = new c.RewardSelectDialogFurnitureAlert, this._alert.initialize(), this.addChild(this._alert)), this._alert.x = e.x + 71, this._alert.y = e.y - 20, this._alert.show())
            }, e.prototype._createBtn = function (t, e) {
                if (11 == t.type) {
                    var i = void 0;
                    return i = 5 == this._shipCount ? new _.RewardSelectDialogShipBtnUI5(e) : new a.RewardSelectDialogShipBtn(e), i.initialize(t), i
                }
                if (12 == t.type) {
                    var i = new u.RewardSelectDialogSlotitemBtn(e);
                    return i.initialize(t), i
                }
                if (13 == t.type) {
                    var i = new l.RewardSelectDialogUseitemBtn(e);
                    return i.initialize(t), i
                }
                if (14 == t.type) {
                    var i = new s.RewardSelectDialogFurnitureBtn(e);
                    return i.initialize(t), i
                }
                return null
            }, e.prototype._getBtn = function (t) {
                for (var e = 0, i = this._btns; e < i.length; e++) {
                    var n = i[e];
                    if (n.candidate == t) return n
                }
                return null
            }, e
        }(PIXI.Sprite);
    e.RewardSelectDialog = h;
    var p = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function (e, i) {
            t.prototype.initialize.call(this, e, i), this.texture = r.COMMON_SELECTABLE_REWARD.getTexture(8), this._btns[0].position.set(130, 86), this._btns[1].position.set(407, 86), this._title.x = Math.round(this.width - this._title.width) / 2, this._title.y = 38
        }, e
    }(h);
    e.RewardSelectDialog2 = p;
    var d = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function (e, i) {
            t.prototype.initialize.call(this, e, i), this.texture = r.COMMON_SELECTABLE_REWARD.getTexture(9), this._btns[0].position.set(78, 86), this._btns[1].position.set(326, 86), this._btns[2].position.set(578, 86), this._title.x = Math.round(this.width - this._title.width) / 2, this._title.y = 38
        }, e
    }(p);
    e.RewardSelectDialog3 = d;
    var f = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function (e, i) {
            t.prototype.initialize.call(this, e, i), this.texture = r.COMMON_SELECTABLE_REWARD.getTexture(10);
            for (var n = 0; n < this._btns.length; n++) this._btns[n].position.set(20 + 190 * n, 86);
            this._title.x = Math.round(this.width - this._title.width) / 2, this._title.y = 38
        }, e
    }(d);
    e.RewardSelectDialog5 = f
}