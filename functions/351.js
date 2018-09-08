const function351 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(18), a = i(24), _ = i(23), u = i(25), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._setTexture = function (t) {
                e.texture = u.SALLY_AIRUNIT.getTexture(t)
            }, e._fairy = new PIXI.Sprite, e.addChild(e._fairy), e._area = new PIXI.Sprite, e._area.position.set(5, 5), e.addChild(e._area), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            var e = _.MathUtil.zeroPadding(t, 3), i = "./resources/area/airunit/" + e + ".png";
            i = i + "?" + s.START_TIME, this._area.texture = PIXI.Texture.fromImage(i)
        }, e.prototype.update = function (t, e) {
            var i = this;
            this._stopLoadImage(), e > 0 ? (this._load_task = new c(e, this._fairy), this._load_task.start(function () {
                i._load_task = null
            })) : this._fairy.texture = PIXI.Texture.EMPTY, this._stopAnimation(), 1 == t ? this._t = createjs.Tween.get(null, { loop: !0 }).call(this._setTexture, [0]).wait(150).call(this._setTexture, [1]).wait(150) : 2 == t ? this.texture = u.SALLY_AIRUNIT.getTexture(2) : 3 == t ? this._t = createjs.Tween.get(null, { loop: !0 }).call(this._setTexture, [3]).wait(150).call(this._setTexture, [4]).wait(150) : this.texture = PIXI.Texture.EMPTY
        }, e.prototype.dispose = function () {
            this._stopLoadImage(), this._stopAnimation()
        }, e.prototype._stopLoadImage = function () {
            null != this._load_task && (this._load_task.cancel(), this._load_task = null)
        }, e.prototype._stopAnimation = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e
    }(PIXI.Sprite);
    e.AirUnitPanelBanner = l;
    var c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._mst_id = e, n._target = i, n
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._l = new a.SlotLoader, this._l.add(this._mst_id, "airunit_fairy"), this._l.load(function () {
                null != t._target && (t._target.texture = o.default.resources.getSlotitem(t._mst_id, "airunit_fairy"), t._endTask())
            })
        }, e.prototype.cancel = function () {
            this._endTask()
        }, e.prototype._endTask = function () {
            this._target = null, this._l = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase)
}