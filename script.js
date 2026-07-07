document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize Sidebar for mobile responsiveness
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left'
    });
    
    // Initialize Materialize Tooltips
    var tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);

    // Dynamic Active Link Tracker
    var currentUrl = window.location.pathname.split('/').pop();
    if (currentUrl === "") currentUrl = "index.html";
    
    var sideNavLinks = document.querySelectorAll('.sidenav li');
    sideNavLinks.forEach(function(li) {
        var a = li.querySelector('a');
        if (a && a.getAttribute('href') === currentUrl) {
            li.classList.add('active');
        }
    });
});