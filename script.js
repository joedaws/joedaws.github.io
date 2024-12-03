/* Functions to power basic interactivity */
function removeBanner() {
  const banner = document.getElementById('stickyBanner');
  if (banner) {
    banner.style.display = 'none';
  }
}

module.exports = { removeBanner };
