const function122 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function () {
        function t() {
        }

        return t._getRectItem = function (t, e) {
            if (!1 === this._items.hasOwnProperty(t)) return void(this._items[t] = []);
            var i = this._items[t].filter(function (t) {
                for (var i = t.data, n = !0, o = 0, r = i.length; o < r; o++) if (i[o] !== e[o]) {
                    n = !1;
                    break
                }
                return n
            });
            if (0 !== i.length) return i[0].sprite
        }, t.gradientLeftToRight = function (t, e, i, n) {
            var o = this._getRectItem("L2R", [t, e, i, n]);
            if (void 0 !== o) return new PIXI.Sprite(o);
            var r = document.createElement("canvas");
            r.width = t, r.height = e;
            var s = r.getContext("2d");
            s.beginPath();
            var a = s.createLinearGradient(0, 0, t, 0);
            a.addColorStop(0, "#ffffff"), a.addColorStop(i, "#ffffff"), a.addColorStop(n, "#000000"), a.addColorStop(1, "#000000"), s.fillStyle = a, s.rect(0, 0, t, e), s.fill();
            var _ = PIXI.Texture.fromCanvas(r);
            return this._items.L2R.push({ data: [t, e, i, n], sprite: _ }), new PIXI.Sprite(_)
        }, t._items = {}, t
    }();
    e.CreateRect = n
}