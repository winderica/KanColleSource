const function798 = function (t, e, i) {
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
    var o = i(217), r = i(4), s = i(130), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.powerNums = [], e.iconCategories = new Array;
            for (var i = 0; i < 4; i++) {
                var n = new o.IconCategory;
                n.position.set(90 * i, 0), n.update(s.PowerUpCategory.EMPTY), e.iconCategories.push(n);
                var a = new r.TextBox(21, 16777215);
                a.position.set(45 + 90 * i, 9), e.powerNums.push(a), e.addChild(n), e.addChild(a)
            }
            return e
        }

        return n(e, t), e.prototype.update = function (t) {
            for (var e = 0; e < 4; e++) this.powerNums[e].visible = !1, this.iconCategories[e].visible = !1;
            var i = 0, n = t[s.PowerUpCategory.Karyoku];
            0 < n && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Karyoku), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++), n = t[s.PowerUpCategory.Raisou], 0 < n && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Raisou), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++), n = t[s.PowerUpCategory.Taiku], 0 < n && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Taiku), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++), 0 < (n = t[s.PowerUpCategory.Soukou]) && (this.powerNums[i].text = "+" + n, this.iconCategories[i].update(s.PowerUpCategory.Soukou), this.powerNums[i].visible = !0, this.iconCategories[i].visible = !0, i++)
        }, e.prototype.dispose = function () {
            this.removeChildren();
            for (var t = 0; t < this.iconCategories.length; t++) this.iconCategories[t].dispose(), this.iconCategories[t] = null;
            for (var t = 0; t < this.powerNums.length; t++) this.powerNums[t].destroy(), this.powerNums[t] = null;
            this.iconCategories = null, this.powerNums = null
        }, e
    }(PIXI.Container);
    e.IconCategories = a
}