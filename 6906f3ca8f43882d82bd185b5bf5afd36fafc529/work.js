(function() {
    window.navigator.userAgent.match(/Macintosh/);
    $(n);

    function n() {
        $("form").each(function() {
            0 === $(window).height() / 2 ?
                window.setTimeout(function() {
                    n();
                }, 100) :
                $(this).css("margin-top", -$(this).outerHeight() / 2);
        });
    }

    window !== window.top && u();
    (function() {
        function a() {
            $("body").mousemove(function(a) {
                m = a.clientX;
                q = a.clientY;
                t = Date.now();
                p || k();
            });
            $(window)
                .on("blur mouseout", function() {
                    q = m = null;
                })
                .on("resize", function() {
                    d && d.parentNode && d.parentNode.removeChild(d);
                    b();
                });
            b();
        }

        function b() {
            var a = null == g ? !0 : !1;
            d = document.createElement("canvas");
            d.width = $(window).width();
            d.height = $(window).height();
            $("body").append(d);
            g = document.createElement("canvas");
            g.width = $(window).width();
            g.height = $(window).height();
            if (d.getContext && d.getContext("2d")) {
                h = d.getContext("2d");
                f = g.getContext("2d");
                f.lineCap = "round";
                f.shadowColor = "#000000";
                f.shadowBlur = 30;
                c = new Image();
                var e = $("body").css("background-image");
                e &&
                    ($(c).one("load", function() {
                            a && k();
                        }),
                        (e = e
                            .replace(/url\((.*)\)/, "$1")
                            .replace(/["']/gi, "")
                            .replace(/_blurred.png/, ".png")),
                        $(c).attr("src", e),
                        (e = $(
                            '\x3cdiv style\x3d"position:absolute;height:0;width:0;overflow:hidden;"\x3e\x3c/div\x3e'
                        )),
                        $("body").append(e),
                        e.append(c));
            }
        }

        function k() {
            var a,
                b = Date.now();
            p = b > t + 500 ? !1 : !0;
            m && p && e.splice(0, 0, { time: b, x: m, y: q });
            for (a = 0; a < e.length;)
                1e3 < b - e[a].time ? e.splice(a, e.length) : a++;
            0 < e.length && window.l(k);
            f.clearRect(0, 0, g.width, g.height);
            for (a = 1; a < e.length; a++) {
                var v = Math.sqrt(
                    Math.pow(e[a].x - e[a - 1].x, 2) + Math.pow(e[a].y - e[a - 1].y, 2)
                );
                f.strokeStyle =
                    "rgba(0,0,0," + Math.max(1 - (b - e[a].time) / 1e3, 0) + ")";
                f.lineWidth = 25 + 75 * Math.max(1 - v / 50, 0);
                f.beginPath();
                f.moveTo(e[a - 1].x, e[a - 1].y);
                f.lineTo(e[a].x, e[a].y);
                f.stroke();
            }
            a = d.width;
            b = d.width / c.naturalWidth * c.naturalHeight;
            b < d.height &&
                ((b = d.height), (a = d.height / c.naturalHeight * c.naturalWidth));
            h.drawImage(c, 0, 0, a, b);
            h.globalCompositeOperation = "destination-in";
            h.drawImage(g, 0, 0);
            h.globalCompositeOperation = "source-over";
        }
        var d,
            g,
            h,
            f,
            c,
            m = null,
            q = null,
            e = [],
            t = 0,
            p = !0;
        "createTouch" in document || $(a);
        window.l = (function() {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(a) {
                    window.setTimeout(a, 1e3 / 60);
                }
            );
        })();
    })();
})();