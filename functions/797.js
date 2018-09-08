const function797 = function (t, e, i) {
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
    var o = i(218), r = i(4), s = i(130), a = function (t) {
        function e() {
            for (var e = t.call(this) || this, i = [], n = new Array, a = 0; a < 4; a++) {
                var _ = new o.IconCategory, u = new r.TextBox(21, 16777215);
                _.position.set(90 * a, 0), u.position.set(45 + 90 * a, 9), _.update(s.PowerUpCategory.EMPTY), n.push(_), i.push(u), e.addChild(_), e.addChild(u)
            }
            return e.iconCategories = n, e.powerNums = i, e
        }

        return n(e, t), e.prototype.update = function (t) {
            for (var e = 0; e < 4; e++) this.powerNums[e].visible = !1, this.iconCategories[e].visible = !1;
            var i = 0, n = t[s.PowerUpCategory.Karyoku];
            0 < n && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Karyoku), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++), n = t[s.PowerUpCategory.Raisou], 0 < n && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Raisou), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++), n = t[s.PowerUpCategory.Taiku], 0 < n && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Taiku), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++), 0 < (n = t[s.PowerUpCategory.Soukou]) && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Soukou), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++)
        }, e.prototype.dispose = function () {
            for (var t = 0; t < this.iconCategories.length; t++) this.removeChild(this.iconCategories[t]), this.iconCategories[t].dispose(), this.iconCategories[t] = null;
            for (var t = 0; t < this.powerNums.length; t++) this.removeChild(this.powerNums[t]), this.powerNums[t].text = "", this.powerNums[t] = null;
            this.iconCategories = null, this.powerNums = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.IconCategories = a
}