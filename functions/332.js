const function332 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {}
        return t.LeafAnimation = function (t, e) {
            var i = 0,
                n = [
                    [0 + e.x, 0 + e.y, 0],
                    [179 + e.x, 80 + e.y, .0984848484848485],
                    [386.95 + e.x, 126 + e.y, .196969696969697],
                    [578.95 + e.x, 95 + e.y, .287878787878788],
                    [527.95 + e.x, 62 + e.y, .386363636363636],
                    [489.95 + e.x, 102 + e.y, .454545454545455],
                    [660.95 + e.x, 164 + e.y, .53030303030303],
                    [869.95 + e.x, 173 + e.y, .621212121212121],
                    [1026.95 + e.x, 132 + e.y, .71969696969697],
                    [1034.95 + e.x, 116 + e.y, .78030303030303],
                    [1071.95 + e.x, 155 + e.y, .840909090909091],
                    [1190.95 + e.x, 222 + e.y, .916666666666667],
                    [1331.95 + e.x, 246 + e.y, 1]
                ],
                o = {
                    progress: 0
                },
                r = createjs.Tween.get(o, {
                    loop: !0
                }),
                s = function () {
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e],
                            r = i[0],
                            s = i[1],
                            a = i[2];
                        if (o.progress < a) {
                            var _ = e - 1;
                            _ < 0 && (_ = 0);
                            var u = n[_],
                                l = u[0],
                                c = u[1],
                                h = u[2],
                                p = (o.progress - h) / (a - h),
                                d = l + (r - l) * p,
                                f = c + (s - c) * p;
                            return t.position.x = d, void(t.position.y = f)
                        }
                    }
                },
                a = function () {
                    i++
                },
                _ = function () {
                    i % 2 == 0 && s()
                };
            return o.progress = 0, s(), r.call(function () {
                return r.addEventListener("change", a), r.addEventListener("change", _), r
            }).to({
                progress: 1
            }, 4400, createjs.Ease.quadOut).call(function () {
                r.removeAllEventListeners("change"), o.progress = 1, s()
            }), r
        }, t.LeafWithDashAnimation = function (t, e, i) {
            var n = 0,
                o = [
                    [0 + i.x, 0 + i.y, 0],
                    [179 + i.x, 80 + i.y, .0984848484848485],
                    [386.95 + i.x, 126 + i.y, .196969696969697],
                    [578.95 + i.x, 95 + i.y, .287878787878788],
                    [527.95 + i.x, 62 + i.y, .386363636363636],
                    [489.95 + i.x, 102 + i.y, .454545454545455],
                    [660.95 + i.x, 164 + i.y, .53030303030303],
                    [869.95 + i.x, 173 + i.y, .621212121212121],
                    [1026.95 + i.x, 132 + i.y, .71969696969697],
                    [1034.95 + i.x, 116 + i.y, .78030303030303],
                    [1071.95 + i.x, 155 + i.y, .840909090909091],
                    [1190.95 + i.x, 222 + i.y, .916666666666667],
                    [1331.95 + i.x, 246 + i.y, 1]
                ],
                r = {
                    progress: 0
                },
                s = createjs.Tween.get(r),
                a = function () {
                    for (var e = 0; e < o.length; e++) {
                        var i = o[e],
                            n = i[0],
                            s = i[1],
                            a = i[2];
                        if (r.progress < a) {
                            var _ = e - 1;
                            _ < 0 && (_ = 0);
                            var u = o[_],
                                l = u[0],
                                c = u[1],
                                h = u[2],
                                p = (r.progress - h) / (a - h),
                                d = l + (n - l) * p,
                                f = c + (s - c) * p;
                            return t.position.x = d, void(t.position.y = f)
                        }
                    }
                },
                _ = function () {
                    n++
                },
                u = function () {
                    n % 2 == 0 && a()
                },
                l = function () {
                    if (n % 8 == 0) {
                        var i = e[Math.floor(n % e.length)];
                        i.x = t.x - 15, i.y = t.y + 75, i.alpha = 1, createjs.Tween.removeTweens(i), createjs.Tween.get(i).to({
                            alpha: 0
                        }, 1e3).play(null)
                    }
                };
            return r.progress = 0, a(), s.call(function () {
                return s.addEventListener("change", _), s.addEventListener("change", u), s.addEventListener("change", l), s
            }).to({
                progress: 1
            }, 4400, createjs.Ease.quadOut).call(function () {
                s.removeAllEventListeners("change"), r.progress = 1, a()
            }), s
        }, t
    }();
    e.LeafAnimationUtil = n
}