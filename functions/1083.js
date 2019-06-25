const function1083 = function (t, e, i) {
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
    var o = i(2),
        r = i(13),
        s = i(382),
        a = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._onClose = function () {
                    r._panel.deactivate(), r._hideFade()
                }, r._layer = e, r._model = i, r._option = n, r._mainView = o, r
            }
            return n(e, t), e.prototype._start = function () {
                this._layer.hide(0), this._layer.visible = !0, this._layer.show(300), this._loadImages()
            }, e.prototype._loadImages = function () {
                var t = this,
                    e = this._model.mst_ids,
                    i = new r.ShipLoader;
                i.add(e[0], !1, "album_status");
                for (var n = 0, o = e; n < o.length; n++) {
                    var s = o[n],
                        a = i.getSpecificAlbumImageLoadList(s);
                    1 == i.needCard(a.typeList) && i.add(s, !1, "card"), 1 == i.needCharaFull(a.typeList) && i.add(s, !1, "character_full"), 1 == i.needCharaUp(a.typeList) && i.add(s, !1, "character_up"), 1 == this._model.hasTaiha(s) && (null == a.typeList ? (i.add(s, !0, "character_full"), i.add(s, !0, "character_up")) : a.hasTaiha && (i.add(s, !0, "character_full"), i.add(s, !0, "character_up")))
                }
                i.load(function () {
                    t._showPanel()
                })
            }, e.prototype._showPanel = function () {
                var t = this,
                    e = new s.ShipDetailPanel(this._onClose);
                this._panel = e, e.initialize(this._model, this._option), e.alpha = 0, this._layer.addChild(e), e.preactivate(), createjs.Tween.get(e).to({
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
                this._layer = null, this._model = null, this._option = null, null != this._panel.parent && this._panel.parent.removeChild(this._panel), this._panel.dispose(), this._panel = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskShowShipDetail = a
}