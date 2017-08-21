function Places(location, landmarks, time) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
}

Places.prototype.fullPlace = function() {
  return this.location + " " + this.landmarks + " " + this.time + " ";
}

$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $('input#new-location').val();
    var inputtedLandmarks = $('input#new-landmarks').val();
    var inputtedTime = $('input#new-time').val();

    var newPlaces = new Places(inputtedLocation, inputtedLandmarks, inputtedTime);

    $("ul#places").append("<li><span class='places'>" + newPlaces.fullPlace() + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlaces.location);
      $(".location").text(newPlaces.location);
      $(".landmarks").text(newPlaces.landmarks);
      $(".time").text(newPlaces.time);
    });


    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");

  });
});
