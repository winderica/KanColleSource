const function559 = function (t, e, i) {
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
    var o = i(0), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._texture = null, e._caches = {}, e._img = new PIXI.Sprite, e._img.visible = !1, e.addChild(e._img), e._mask_shape = new PIXI.Graphics, e._mask_shape.visible = !1, e.addChild(e._mask_shape), e
        }

        return n(e, t), e.prototype.load = function (t, e) {
            var i = this, n = o.default.model.furniture.getData(t);
            if (null == n || 2 != n.type) return void (null != e && e());
            if (this._id = this._createID(n), 1 == this._caches.hasOwnProperty(this._id)) return this._texture = this._caches[this._id], void (null != e && e());
            var r = this._createURL(this._id), s = new PIXI.loaders.Loader;
            s.add(this._id, r), s.load(function () {
                if (i._img.texture = PIXI.Texture.EMPTY, 1 == s.resources.hasOwnProperty(i._id)) {
                    var t = s.resources[i._id];
                    null != t && null == t.error && null != t.texture && (i._caches[i._id] = t.texture, i._texture = t.texture)
                }
                e()
            })
        }, e.prototype.update = function () {
            null != this._texture && (this._img.texture = this._texture), this._texture = null, this._img.visible = !0
        }, e.prototype._createID = function (t) {
            var e = (new Date).getHours(), i = t.outside;
            if (i > 4) {
                if (5 == i) {
                    var n = [[127, 0, 127, 174, 255, 180, 255, 0], [375, 0, 375, 183, 517, 193, 517, 0]];
                    this._createOutsideMask(n), this._img.mask = this._mask_shape
                }
                i = 4
            } else this._img.mask = null;
            var o = 0;
            return o = e < 4 ? 4 : e < 8 ? 5 : e < 16 ? 1 : e < 18 ? 2 : e < 20 ? 3 : 4, "window_bg_" + i + "-" + o
        }, e.prototype._createURL = function (t) {
            return o.default.settings.path_root + "resources/furniture/outside/" + t + ".png"
        }, e.prototype._createOutsideMask = function (t) {
            for (var e = 0; e < t.length; e++) for (var i = 0; i < t[e].length; i += 2) t[e][i] += 294;
            this._mask_shape.clear(), this._mask_shape.beginFill(16777215);
            for (var e = 0; e < t.length; e++) this._mask_shape.drawPolygon(t[e]);
            this._mask_shape.endFill()
        }, e
    }(PIXI.Container);
    e.FurnitureOutside = r
}