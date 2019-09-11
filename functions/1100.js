const function1100 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        r = i(42),
        s = i(1),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onPrev = function (t) {
                    if (t.stopPropagation(), null != e._current) {
                        var i = e._data_list.indexOf(e._current);
                        if (!(i < 0)) {
                            var n = i - 1;
                            n < 0 && (n = e._data_list.length - 1), e._current = e._data_list[n], e._update()
                        }
                    }
                }, e._onNext = function (t) {
                    if (t.stopPropagation(), null != e._current) {
                        var i = e._data_list.indexOf(e._current);
                        if (!(i < 0)) {
                            var n = i + 1;
                            n >= e._data_list.length && (n = 0), e._current = e._data_list[n], e._update()
                        }
                    }
                }, e._canvas = new PIXI.Sprite, e.addChild(e._canvas), e._prevBtn = new r.PrevBtn(e._onPrev), e._prevBtn.position.set(10, 582), e.addChild(e._prevBtn), e._nextBtn = new r.NextBtn(e._onNext), e._nextBtn.position.set(55, 582), e.addChild(e._nextBtn), e._canvas.interactive = !0, e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._data_list = [];
                for (var e = 0, i = t.mst_ids; e < i.length; e++) {
                    var n = i[e],
                        r = o.default.resources.getSlotitem(n, "card");
                    this._addImageData(n, r, new PIXI.Point(20, 142)), r = o.default.resources.getSlotitem(n, "item_up"), this._addImageData(n, r), r = o.default.resources.getSlotitem(n, "item_on"), this._addImageData(n, r), r = o.default.resources.getSlotitem(n, "item_character"), this._addImageData(n, r)
                }
                this._data_list.length > 0 && (this._current = this._data_list[0], this._update()), this._prevBtn.initialize(), this._nextBtn.initialize()
            }, e.prototype.activate = function () {
                1 != this._canvas.buttonMode && (this._canvas.buttonMode = !0, this._canvas.on(s.EventType.CLICK, this._onNext), this._prevBtn.activate(), this._nextBtn.activate())
            }, e.prototype.deactivate = function () {
                this._canvas.buttonMode = !1, this._canvas.off(s.EventType.CLICK, this._onNext), this._prevBtn.deactivate(), this._nextBtn.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._prevBtn.dispose(), this._nextBtn.dispose();
                for (var t = 0; t < this._data_list.length; t++) this._data_list[t] = null;
                this._data_list = null, this._current = null, this._canvas = null, this._prevBtn = null, this._nextBtn = null
            }, e.prototype._addImageData = function (t, e, i) {
                if (void 0 === i && (i = null), e != PIXI.Texture.EMPTY) {
                    var n = new _;
                    n.mst_id = t, n.texture = e, n.offset = i, this._data_list.push(n)
                }
            }, e.prototype._update = function () {
                null != this._current && (this._canvas.texture = this._current.texture, null != this._current.offset ? (this._canvas.x = this._current.offset.x, this._canvas.y = this._current.offset.y) : this._canvas.position.set(0, 0))
            }, e
        }(PIXI.Container);
    e.SlotDetailContent = a;
    var _ = function () {
        function t() {}
        return t
    }()
}