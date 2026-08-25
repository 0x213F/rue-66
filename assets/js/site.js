/* Rue '66 — video grid.
   Lightweight YouTube facades: a thumbnail + play button that swaps in the
   real iframe on click, so no third-party player loads until asked for.
   To add or reorder videos, edit VIDEOS below. */

var VIDEOS = [
  { id: "wSsdF5qGr2Y", title: "Mirza (Nino Ferrer)" },
  { id: "DtQtK3JlT6M", title: "Tut Tut Tut Tut / Tu Mens (Gillian Hills)" },
  { id: "YVzU4Pq-d3U", title: "C'est la Mode — live at Rickshaw Stop" },
  { id: "qOB42IPGVis", title: "La Fermeture Éclair" },
  { id: "72_6vSpnb2I", title: "Comment Te Dire Adieu" },
  { id: "Aro6bM-mZPI", title: "Le Printemps à Paris" },
  { id: "JLA8gIknZHs", title: "Contact" },
  { id: "5u9Zh2ZXsXo", title: "Laisse Tomber Les Filles (Serge Gainsbourg)" },
  { id: "-uGgXa43vHo", title: "Rentre Sans Moi (The Zombies)" },
  { id: "kQYl8qetZ3s", title: "Les Filles C'est Fait Pour Faire L'Amour" },
  { id: "Zu3l2Ee6gMA", title: "Aucune Fille Au Monde (The Everly Brothers)" },
  { id: "LX-NVRL6zGA", title: "Attention aux Garçons" },
  { id: "hmYQ9aI7kvg", title: "These Boots Are Made For Walking" },
  { id: "XzAZMFsKQbI", title: "Huit Jours Par Semaine (Eight Days a Week)" },
  { id: "gxhttWxAVYA", title: "Adieu My Baby (My Baby's Gone)" }
];

(function () {
  var grid = document.getElementById("videos");
  if (!grid) return;

  var PLAY_ICON =
    '<span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>';

  VIDEOS.forEach(function (v) {
    var fig = document.createElement("figure");
    fig.className = "vid";

    var btn = document.createElement("button");
    btn.className = "vid__btn";
    btn.type = "button";
    btn.setAttribute("aria-label", "Play “" + v.title + "” on YouTube");
    btn.innerHTML =
      '<img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">' +
      '<span class="vid__play" aria-hidden="true">' + PLAY_ICON + "</span>";

    btn.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.src =
        "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0";
      frame.title = v.title;
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.setAttribute("loading", "lazy");
      btn.replaceWith(frame);
    });

    var cap = document.createElement("figcaption");
    cap.className = "vid__cap";
    cap.textContent = v.title;

    fig.append(btn, cap);
    grid.append(fig);
  });
})();
