const function1075 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._karyoku = e._createTextBox(85), e._raisou = e._createTextBox(124), e._taiku = e._createTextBox(163), e._kaihi = e._createTextBox(202), e._taikyu = e._createTextBox(241), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this.texture = r.ALBUM_MAIN.getTexture(91), this._karyoku.text = t.karyoku.toString(), this._karyoku.x = 487 - Math.floor(this._karyoku.width / 2), this._raisou.text = t.raisou.toString(), this._raisou.x = 487 - Math.floor(this._raisou.width / 2), this._taiku.text = t.taiku.toString(), this._taiku.x = 487 - Math.floor(this._taiku.width / 2), this._kaihi.text = t.kaihi.toString(), this._kaihi.x = 487 - Math.floor(this._kaihi.width / 2), this._taikyu.text = t.taikyu.toString(), this._taikyu.x = 487 - Math.floor(this._taikyu.width / 2)
        }, e.prototype._createTextBox = function (t) {
            var e = new o.TextBox(23, 16777215);
            return e.y = t - 3, this.addChild(e), e
        }, e
    }(PIXI.Sprite);
    e.ShipDetailStatusBox = s
}