const function566 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(567), o = function () {
        function t(t, e) {
            if (this._frames = [], this._loopMax = e, null != t) for (var i = 0; i < t.length; i++) {
                var o = t[i], r = new n.FurnitureKeyFrameModel(o);
                this._frames.push(r)
            }
        }

        return Object.defineProperty(t.prototype, "frames", {
            get: function () {
                return this._frames
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "loopMax", {
            get: function () {
                return this._loopMax
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.FurnitureLayerModel = o
}