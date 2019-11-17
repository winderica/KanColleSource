const function1081 = function (t, e, i) {
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
        r = i(11),
        s = i(17),
        a = i(84),
        _ = i(175),
        l = i(73),
        u = i(73),
        c = i(73),
        h = i(73),
        p = i(385),
        d = i(117),
        f = i(117),
        y = i(117),
        m = i(117),
        g = i(117),
        v = i(117),
        b = i(42),
        w = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._selected_mode = 1, e._selected_tab_no = 0, e._onChangeTab = function (t, i) {
                    if (1 == t) {
                        var n = _.AlbumConst.BGM_ID_FOR_SHIP;
                        o.default.sound.bgm.play(n)
                    } else {
                        var n = _.AlbumConst.BGM_ID_FOR_SLOT;
                        o.default.sound.bgm.play(n)
                    }
                    e._selected_mode = t;
                    var r = i * _.AlbumConst.COUNT_INTAB * _.AlbumConst.COUNT_INPAGE;
                    if (e._selected_tab_no = r, e._view.tab_container.update(t, i), 0 == e._model.hasData(t, i)) {
                        new p.AlbumAPI(t, i, e._model).start(function () {
                            e._update(t, r)
                        })
                    } else e._update(t, r)
                }, e._onChangePage = function (t) {
                    var i = e._selected_mode;
                    e._update(i, t)
                }, e._onSelect = function (t) {
                    if (t instanceof c.AlbumShipModel) {
                        var i = new m.TaskShowShipDetail(e._over, t, e._option, e._view);
                        i.start()
                    } else if (t instanceof h.AlbumSlotModel) {
                        var i = new g.TaskShowSlotDetail(e._over, t, e._view);
                        i.start()
                    }
                }, e._onSwitchAlbum = function () {
                    new v.TaskSwitchAlbumMode(e._view.album_switch_btn, e._view.tab_container).start()
                }, e._onBack = function () {
                    o.default.scene.change(0)
                }, e._option = new l.AlbumSceneOptionModel, e._model = new u.AlbumModelManager, e._view = new b.MainView(e._onChangeTab, e._onChangePage, e._onSelect, e._onSwitchAlbum), e.addChild(e._view), e._over = new s.FadeBox(1, 0, 1200, 720), e._over.hide(0), e._over.visible = !1, e.addChild(e._over), e
            }
            return n(e, t), e.prototype.getPreInitializeTask = function (t) {
                return new d.TaskScenePreInitialize(t, this._model, this._view, this._onBack)
            }, e.prototype.getInitializeTask = function (t) {
                return new f.TaskSceneInitialize(t, this._view)
            }, e.prototype.getFinalizeTask = function () {
                return a.TaskLoadBase.abortAll(), new y.TaskSceneFinalize(this._view)
            }, e.prototype._update = function (t, e) {
                a.TaskLoadBase.abortAll();
                var i = _.AlbumConst.COUNT_INPAGE,
                    n = this._model.getData(t, e, i),
                    o = this._selected_tab_no;
                this._view.pager.update(o, e);
                var r = this._view.content;
                r.deactivate(), r.update(t, e, n), r.activate()
            }, e
        }(r.SceneBase);
    e.AlbumScene = w
}