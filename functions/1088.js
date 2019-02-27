const function1088 = function (t, e, i) {
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
    var o = i(11),
        r = i(25),
        s = i(42),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._onClose = function () {
                    o._panel.deactivate(), o._hideFade()
                }, o._layer = e, o._model = i, o._mainView = n, o
            }
            return n(e, t), e.prototype._start = function () {
                this._layer.hide(0), this._layer.visible = !0, this._layer.show(300), this._loadImages()
            }, e.prototype._loadImages = function () {
                var t = this,
                    e = this._model.mst_ids,
                    i = new r.SlotLoader;
                i.add(e[0], "statustop_item");
                for (var n = 0, o = e; n < o.length; n++) {
                    var s = o[n];
                    i.add(s, "card"), i.add(s, "item_up"), i.add(s, "item_on"), i.add(s, "item_character")
                }
                i.load(function () {
                    t._showPanel()
                })
            }, e.prototype._showPanel = function () {
                var t = this,
                    e = new s.SlotDetailPanel(this._onClose);
                this._panel = e, e.initialize(this._model), e.alpha = 0, this._layer.addChild(e), createjs.Tween.get(e).to({
                    alpha: 1
                }, 500).call(function () {
                    e.activate(), t._mainView.visible = !1
                })
            }, e.prototype._hideFade = function () {
                var t = this;
                this._mainView.visible = !0, createjs.Tween.get(this._panel).to({
                    alpha: 0
                }, 300), this._layer.hide(500, function () {
                    t._layer.visible = !1, t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, null != this._panel.parent && this._panel.parent.removeChild(this._panel), this._panel.dispose(), this._panel = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskShowSlotDetail = a
}