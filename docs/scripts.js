(function () {
  var panel = document.getElementById('panel');
  var rafId = null;
  var mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) {
      rafId = requestAnimationFrame(tilt);
    }
  });

  document.addEventListener('mouseleave', function () {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    panel.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });

  function tilt() {
    rafId = null;
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var dx = (mouseX - cx) / cx;
    var dy = (mouseY - cy) / cy;
    panel.style.transform =
      'rotateY(' + (dx * 7) + 'deg) rotateX(' + (-dy * 7) + 'deg)';
  }
})();
