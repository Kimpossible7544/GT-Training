// Shared access gate for every GT Training page. Visitors log in once on the
// GT Player Dashboard landing page (same origin, same browser tab); anyone
// without that session is sent there.
(function(){
  var LANDING_URL = 'https://kimpossible7544.github.io/GT-Player-Dashboard/index.html';
  var user = null;
  try { user = JSON.parse(sessionStorage.getItem('gtUser') || 'null'); } catch (e) {}

  if (sessionStorage.getItem('gtGoalsAuth') !== '1' || !user){
    document.documentElement.style.display = 'none';
    location.replace(LANDING_URL);
    return;
  }
  window.gtUser = user;

  document.addEventListener('DOMContentLoaded', function(){
    ['goalsNavLink','recentNavLink'].forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.style.display = user.master ? '' : 'none';
    });
  });
})();
