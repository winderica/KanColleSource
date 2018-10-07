/*
 * the function called by `522.js`
 * ship graph
 */
const function14 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0),
        o = i(29),
        r = i(23),
        s = i(101),
        a = i(76),
        _ = function () {
            function t() {
                null == t._queue && (t._queue = []), this._url_list = []
            }

            /*
             * get url
             * `t`: ship (mst) id
             * `e`: damaged graph?
             * `i`: graph type?
             */
            t.getPath = function (t, e, i) {
                "album_status" == i ? e = false :
                    "banner_g" == i ? e = true :
                        1 == o.ShipUtil.isEnemy(t) && (e = false);
                var _ = i + (e ? "_dmg" : ""),
                    u = "ship_" + _,
                    l = s.SuffixUtil.create(t, u),
                    c = r.MathUtil.zeroPadding(t, 4);
                return n.default.settings.path_root + "resources/ship/" + _ + "/" + c + "_" + l + ".png" + a.VersionUtil.getResourceVersion(0, parseInt(c))
            };
            // push url
            t.prototype.add = function (e, i, n) {
                var o = t.getPath(e, i, n);
                this._url_list.push(o);
                return this
            };
            // some seasonal CGs don't have card graph
            t.prototype.getSpecificAlbumImageLoadList = function (t) {
                switch (t) {
                    case 754:   // 決戦山雲
                    case 755:   // 決戦朝雲
                    case 984:   // 節分瑞穂
                    case 1003:  // 決戦長波
                    case 1004:  // 決戦大淀
                    case 1005:  // 決戦大淀改
                    case 1006:  // 決戦早霜
                    case 1007:  // 決戦清霜
                    case 1008:  // 決戦藤波
                    case 1009:  // 決戦沖波
                    case 1010:  // 決戦長波改二
                    case 1011:  // 決戦鬼怒改二
                    case 1012:  // 決戦熊野改二
                    case 1013:  // 決戦熊野航改二
                    case 1014:  // 決戦多摩改二
                    case 1015:  // 決戦阿武隈改二
                    case 1016:  // 決戦金剛改二
                    case 1017:  // 決戦榛名改二
                    case 1018:  // 決戦鈴谷改二
                    case 1019:  // 決戦鈴谷航改二
                    case 1020:  // 決戦長門改二
                    case 1021:  // 決戦能代
                    case 1022:  // 決戦武蔵
                    case 1023:  // 決戦武蔵改
                    case 1024:  // 決戦野分
                    case 1025:  // 決戦矢矧
                    case 1026:  // 決戦雪風
                    case 1027:  // 決戦長門
                    case 1028:  // 決戦多摩
                    case 1029:  // 決戦大和
                    case 1030:  // 決戦大和改
                    case 1031:  // 決戦不知火
                    case 1032:  // 決戦浦波
                    case 1033:  // 決戦伊勢改
                    case 1034:  // 決戦日向改
                        // don't have card graph
                        return ["character_up", "character_full"];
                    default:
                        return null
                }
            };
            // has card graph
            t.prototype.needCard = function (t) {
                return null === t || t.indexOf("card") > -1
            };
            // has character_full graph
            t.prototype.needCharaFull = function (t) {
                return null === t || t.indexOf("character_full") > -1
            };
            // has character_up graph
            t.prototype.needCharaUp = function (t) {
                // ??? typo?
                return null === t || t.indexOf("character_full") > -1
            };
            // push to loading queue and load if there is only one item in queue
            t.prototype.load = function (e) {
                void 0 === e && (e = null);
                this._cb_onComplete = e;
                t._queue.indexOf(this) >= 0 || (t._queue.push(this), 1 == t._queue.length && this._load())
            };
            // load recursively
            t.prototype._load = function () {
                var t = this;
                this._url_list = this._url_list.filter(function (t, e, i) {
                    return !PIXI.utils.TextureCache[t] && i.indexOf(t) === e
                });
                if (0 == this._url_list.length) {
                    this._onLoadComplete();
                    return undefined;
                }
                var e = new PIXI.loaders.Loader, i = 0;
                for (n = this._url_list; i < n.length; i++) {
                    var o = n[i];
                    e.add(o)
                }
                e.load(function () {
                    t._onLoadComplete()
                })
            };
            // callback on loaded
            t.prototype._onLoadComplete = function () {
                this._cb_onComplete();
                this._cb_onComplete = null;
                if (t._queue.shift() != this) throw new Error("ShipLoader Error");
                t._queue.length > 0 && t._queue[0]._load()
            };
            return t
        }();
    e.ShipLoader = _
}