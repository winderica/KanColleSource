const function138 = function (t, e, i) {
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
    var o = i(0), r = i(45), s = i(23), a = i(50), _ = i(7), l = function (t) {
        function e(e) {
            void 0 === e && (e = 1);
            var i = t.call(this) || this;
            return i._rad = 0, i._direction = !0, i._threshold = 0, i._base_scale = e, i._content = new PIXI.Sprite, i._content.scale.set(e), i._content.anchor.set(.5), i.addChild(i._content), i
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._content.texture = o.default.resources.getSlotitem(t, "item_up");
            var i = a.SlotUtil.isEnemyItem(t) ? -1 : 1;
            if (1 == r.PlaneConst.OFFSET.hasOwnProperty(t.toString())) {
                var n = r.PlaneConst.OFFSET[t], s = _.ObjUtil.getNumber(n, "x"), l = _.ObjUtil.getNumber(n, "y"),
                    u = _.ObjUtil.getNumber(n, "r"), c = _.ObjUtil.getNumber(n, "sx", 1);
                this._content.position.set(s, l), this._content.rotation = -u / 180 * Math.PI * (e ? 1 : -1), this._content.scale.x = this._base_scale * c * i * (e ? 1 : -1), this._content.scale.y = this._base_scale * Math.abs(c)
            } else this._content.position.set(0, 0), this._content.rotation = 0, this._content.scale.x = this._base_scale * i * (e ? 1 : -1), this._content.scale.y = this._base_scale;
            138 == t && (this._content.scale.x *= 1.4, this._content.scale.y *= 1.4), this._baseY = this._content.y, this._rad_accel = 60 * (.05 + .05 * Math.random()) / createjs.Ticker.framerate
        }, e.prototype.activate = function () {
            var t = this;
            if (null == this._t) {
                var e = createjs.Ticker.framerate, i = function () {
                    t._rad += t._rad_accel, t._content.y = t._baseY + 900 / e * Math.sin(t._rad), t._threshold += 1 / e, t._threshold > 1 / 30 && (t._threshold = 0, t._direction = !t._direction, t._content.y += t._direction ? 1 : -1)
                };
                this._t = createjs.Tween.get(this, { loop: !0, onChange: i })
            }
        }, e.prototype.deactivate = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(s.Container);
    e.Plane = l
}