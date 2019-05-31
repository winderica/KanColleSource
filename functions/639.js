const function639 = function (t, e, i) {
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
    var o = i(0),
        r = i(4),
        s = i(49),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this, e, null) || this;
                return n._models = i, n
            }
            return n(e, t), e.prototype._createContent = function () {
                this._icons = [], this._text = new r.TextBox(25, 16774898), this._dialog.container.addChild(this._text);
                for (var t = "", e = 0, i = this._models.rewards; e < i.length; e++) {
                    var n = i[e],
                        s = o.default.resources.getUseitem(n.mst_id, 0),
                        a = new PIXI.Sprite(s);
                    a.y = -121, this._dialog.container.addChild(a), this._icons.push(a), t += n.name + "\xd7" + n.count + "\n"
                }
                this._text.text = t, this._text.x = -Math.round(this._text.width / 2), this._models.rewards.length >= 6 ? this._text.y = -30 : 5 == this._models.rewards.length ? this._text.y = -15 : this._text.y = 0;
                for (var _ = this._icons.length, l = [0, 0, 96, 75, 45, 30, 15][_], u = 75 * _ + l * (_ - 1), c = 0; c < _; c++) {
                    var a = this._icons[c];
                    a.x = -u / 2 + (75 + l) * c
                }
                this._showDialog()
            }, e.prototype._removeContent = function () {
                this._dialog.container.removeChild(this._text), this._text.destroy(), this._text = null;
                for (var t = 0, e = this._icons; t < e.length; t++) {
                    var i = e[t];
                    this._dialog.container.removeChild(i)
                }
                this._icons = null
            }, e
        }(s.TaskRewardDialogBase);
    e.TaskRewardDialogMultiUseitem = a
}