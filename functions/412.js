const function412 = function (t, e, i) {
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
    var o = i(3), r = i(1181), s = i(1184), a = i(1185), _ = i(1186), l = i(1187), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._btns = [], e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._btns = [];
            for (var i = 0, n = t; i < n.length; i++) {
                var o = n[i], r = this._createBtn(o, e);
                this.addChild(r), this._btns.push(r)
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
            null != e && (null == this._alert && (this._alert = new l.RewardSelectDialogFurnitureAlert, this._alert.initialize(), this.addChild(this._alert)), this._alert.x = e.x + 71, this._alert.y = e.y - 20, this._alert.show())
        }, e.prototype._createBtn = function (t, e) {
            if (11 == t.type) {
                var i = new s.RewardSelectDialogShipBtn(e);
                return i.initialize(t), i
            }
            if (12 == t.type) {
                var i = new a.RewardSelectDialogSlotitemBtn(e);
                return i.initialize(t), i
            }
            if (13 == t.type) {
                var i = new _.RewardSelectDialogUseitemBtn(e);
                return i.initialize(t), i
            }
            if (14 == t.type) {
                var i = new r.RewardSelectDialogFurnitureBtn(e);
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
    e.RewardSelectDialog = u;
    var c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function (e, i) {
            t.prototype.initialize.call(this, e, i), this.texture = o.DUTY_COMMON.getTexture(53), this._btns[0].position.set(130, 86), this._btns[1].position.set(407, 86)
        }, e
    }(u);
    e.RewardSelectDialog2 = c;
    var h = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.initialize = function (e, i) {
            t.prototype.initialize.call(this, e, i), this.texture = o.DUTY_COMMON.getTexture(54), this._btns[0].position.set(78, 86), this._btns[1].position.set(326, 86), this._btns[2].position.set(578, 86)
        }, e
    }(c);
    e.RewardSelectDialog3 = h
}