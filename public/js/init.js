(function ($) {
    $(document).ready(function () {
        $('.button-collapse').sideNav({
            menuWidth: 200,
            edge: 'left',
            closeOnClick: true,
            draggable: true
        });
        $('.modal').modal();
        $('.parallax').parallax();
        $('select').material_select();
        $('.scrollspy').scrollSpy({
            scrollOffset: 60
        });
        $('.tooltipped').tooltip({delay: 20});
        $('table#sTable tr').click(function () {
            var val = $(this).find('td:first').text();
            download(val,'Lyrics/');
        });
    });
})(jQuery);
var contactform =  document.getElementById('contactme');
contactform.setAttribute('action', '//formspree.io/' + 'cruzer6ryc4' + '@' + 'gmail' + '.' + 'com');