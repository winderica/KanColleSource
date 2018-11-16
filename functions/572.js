const function572 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(8), a = i(6), _ = i(1), u = i(100), l = i(78), c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._data = e;
            var n = parseInt(e.src), o = u.SuffixUtil.create(n, "furniture_picture"),
                a = r.default.settings.path_root + "resources/furniture/picture/" + e.src + "_" + o + ".png" + l.VersionUtil.getResourceVersion(2, n);
            if (null != PIXI.utils.TextureCache[a]) {
                var _ = PIXI.utils.TextureCache[a];
                i._img = new PIXI.Sprite(_), i._img.visible = !1, i._centering()
            } else {
                var _ = PIXI.Texture.fromImage(a);
                i._img = new PIXI.Sprite(_), i._img.visible = !1, _.baseTexture.once("loaded", function () {
                    i._centering()
                })
            }
            return i.addChild(i._img), i._clickArea = new s.AreaBox(0, 16777215), i.addChild(i._clickArea), i
        }

        return n(e, t), e.prototype.show = function (t) {
            var e = this;
            void 0 === t && (t = null), this._onClose = t, this._img.visible = !0, a.SE.play(this._data.se_open), this._clickArea.once(_.EventType.CLICK, function () {
                e._onClose()
            })
        }, e.prototype.hide = function () {
            this._img.visible = !1, a.SE.play(this._data.se_close)
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._img.texture.baseTexture.removeAllListeners("loaded"), this._clickArea.removeAllListeners(_.EventType.CLICK)
        }, e.prototype._centering = function () {
            var t = Math.floor(o.default.width / 2 - this._img.width / 2 + this._data.offset_x),
                e = Math.floor(o.default.height / 2 - this._img.height / 2 + this._data.offset_y);
            this._img.position.set(t, e)
        }, e
    }(PIXI.Container);
    e.FurniturePopupLayer = c
}