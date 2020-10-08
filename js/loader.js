// just like a callback function
$(document).ready(function () {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
  $(".parallax").parallax();
  $(".myreviews").carousel({
    numVisible: 7, //total number of images or slides
    shift: 55, //how much we want to shift the values lies between 0 to 100(gap between slides)
    padding: 55,
  }); //feel free to use any name but remember to use this
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}
