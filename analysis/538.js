/*
 * called by `537.js`
 * background graph
 */
const function538 = function (t, e, i) {
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
    var o = i(0),
        r = i(23),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }

            n(e, t);
            /*
             * set image
             * t: number; // background id
             * e: () => any; // callback
             */
            e.prototype.setImage = function (t, e) {
                switch (t) {
                    case 11:    // 編成背景
                    case 12:    // 補給背景
                    case 13:    // 改装背景
                    case 14:    // 入渠背景
                    case 15:    // 工廠背景
                    case 16:    // 出撃背景
                    case 23:    // 図鑑表示背景
                    case 31:    // 改修工廠背景
                        var i = r.MathUtil.zeroPadding(t, 3),
                            n = o.default.settings.path_root + "img/common/bg/" + i + ".png";
                        if (null != PIXI.utils.TextureCache[n]) {
                            this.texture = PIXI.utils.TextureCache[n],
                            this.visible = !0,
                            null != e && e();
                        } else {
                            this._load(n, e);
                        }
                        break;
                    default:
                        this.visible = !1, null != e && e()
                }
            };
            /*
             * load image
             * t: string; // url
             * e: () => any; // callback
             */
            e.prototype._load = function (t, e) {
                var i = this;
                this._loader = new PIXI.loaders.Loader,
                this._loader.add(t),
                this._loader.load(function (n) {
                    if (i._loader == n) {
                        i._loader = null;
                        var o = n.resources[t];
                        i.texture = o.texture,
                        i.visible = !0,
                        null != e && e()
                    }
                })
            };
            return e
        }(PIXI.Sprite);
    e.Background = s
}