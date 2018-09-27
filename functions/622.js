const function622 = function (t, e, i) {
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
    var o = i(0), r = i(25), s = i(66), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._items = [], e._canvas = new PIXI.Container, e.addChild(e._canvas), e._images = [], e
        }

        return n(e, t), e.prototype.add = function (t) {
            this._items.push(t)
        }, e.prototype.initialize = function (t) {
            this._loadUseitemResources(t)
        }, e.prototype._loadUseitemResources = function (t) {
            for (var e = this, i = new s.UseitemLoader, n = 0, o = this._items; n < o.length; n++) {
                var r = o[n];
                6 == r.type && i.add(r.id, 2)
            }
            i.load(function () {
                e._loadSlotitemResources(t)
            })
        }, e.prototype._loadSlotitemResources = function (t) {
            for (var e = this, i = new r.SlotLoader, n = 0, o = this._items; n < o.length; n++) {
                var s = o[n];
                2 == s.type && i.add(s.id, "card")
            }
            i.load(function () {
                e._display(), t && t()
            })
        }, e.prototype._display = function () {
            for (var t = 0, e = this._items; t < e.length; t++) {
                var i = e[t];
                if (6 == i.type) {
                    var n = new PIXI.Sprite;
                    n.texture = o.default.resources.getUseitem(i.id, 2), i.size > 0 ? n.scale.set(i.size / n.width) : n.scale.set(135 / n.width), this._canvas.addChild(n), this._images.push(n)
                } else {
                    var n = new PIXI.Sprite;
                    n.texture = o.default.resources.getSlotitem(i.id, "card"), i.size > 0 ? n.scale.set(i.size / n.width) : n.scale.set(168 / n.width), this._canvas.addChild(n), this._images.push(n)
                }
            }
            this._layout()
        }, e.prototype._layout = function () {
            for (var t = 0, e = 0, i = 0, n = this._images; i < n.length; i++) {
                var o = n[i];
                t = Math.max(t, o.width), e = Math.max(e, o.height)
            }
            switch (this._images.length) {
                case 1:
                    this._images[0].x = 0, this._images[0].y = 0;
                    break;
                case 2:
                    this._images[0].x = 0, this._images[0].y = e - this._images[0].height, this._images[1].x = this._images[0].width + 4, this._images[1].y = e - this._images[1].height;
                    break;
                case 3:
                    this._images[0].x = 0, this._images[0].y = e - this._images[0].height, this._images[1].x = this._images[0].width + 4, this._images[1].y = e - this._images[1].height, this._images[2].x = this._images[1].x + this._images[1].width + 4, this._images[2].y = e - this._images[2].height;
                    break;
                case 4:
                    this._images[0].x = t - this._images[0].width - Math.round(2), this._images[0].y = e - this._images[0].height - Math.round(2), this._images[1].x = t + Math.round(2), this._images[1].y = e - this._images[1].height - Math.round(2), this._images[2].x = t - this._images[2].width - Math.round(2), this._images[2].y = e + Math.round(2), this._images[3].x = t + Math.round(2), this._images[3].y = e + Math.round(2)
            }
            this._canvas.x = -Math.round(this._canvas.width / 2), this._canvas.y = -Math.round(this._canvas.height / 2)
        }, e
    }(PIXI.Container);
    e.MeltIntoSprite = a
}