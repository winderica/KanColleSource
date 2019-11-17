const function659 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(108),
        r = function () {
            function t(t) {
                void 0 === t && (t = null), this.path = "img/tutorial", this.prefix = "tutorial_", this._loader = new PIXI.loaders.Loader(n.default.settings.path_root);
                for (var e = function (t) {
                        for (var e = [], i = 0, n = t.length; i < n; i++) {
                            var o = t[i];
                            e.push([o + ".png", o])
                        }
                        return e.push(["tutorial_main.json", null]), e
                    }([o.IMAGE_FILE.BG, o.IMAGE_FILE.CRUMB, o.IMAGE_FILE.TITLE_BG, o.IMAGE_FILE.MSG_BOX]), i = 0, r = e.length; i < r; i++) {
                    var s = e[i];
                    this.add(s[0], s[1])
                }
                this.load(t)
            }
            return t.prototype.add = function (t, e) {
                void 0 === e && (e = null);
                var i = this.path + "/" + t;
                null != e ? this._loader.add(this.prefix + e, i) : this._loader.add(i)
            }, t.prototype.load = function (t) {
                void 0 === t && (t = null), this._loader.load(function (e, i) {
                    null != t && t()
                })
            }, t.prototype.use = function (t) {
                return PIXI.Texture.from(this.prefix + t)
            }, t.prototype.charaImagesList = function () {
                for (var t = [o.CHARA.FUBUKI, o.CHARA.MURAKUMO, o.CHARA.SAZANAMI, o.CHARA.INADUMA, o.CHARA.SAMIDARE], e = [], i = 0, n = t.length; i < n; i++) ! function (i, n) {
                    var r = t[i];
                    Object.keys(o.CHARA_SUFFIX).forEach(function (t) {
                        var i = o.CHARA_SUFFIX[t];
                        e.push(["chara/c" + r + "_" + i + ".png", o.CHARA_PREFIX + "_" + r + "_" + i])
                    })
                }(i);
                return e
            }, t.prototype.dispose = function () {
                this._loader.destroy()
            }, t
        }();
    e.ImageManager = r
}