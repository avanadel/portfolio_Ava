var projectWaypoint = new Waypoint({
  element: document.getElementById('below-hero'),
  handler: function(direction) {
    if(direction="down"){
      // console.log("Scrolling down to project");
      $("#stepTwo").toggleClass("activeStepper");
      $("#stepOne").toggleClass("activeStepper");
    } else{
      // console.log("Scrolling up to project");
      $("#stepTwo").toggleClass("activeStepper");
      $("#stepThree").toggleClass("activeStepper");
    }
  },
  offset: 50
});

var aboutWaypoint = new Waypoint({
  element: document.getElementById('below-projects'),
  handler: function(direction) {
    if(direction="down"){
      // console.log("Scrolling down to about ");
      $("#stepThree").toggleClass("activeStepper");
      $("#stepTwo").toggleClass("activeStepper");
    } else{
      // console.log("Scrolling up to about");
      $("#stepThree").toggleClass("activeStepper");
      $("#stepFour").toggleClass("activeStepper");
    }
  },
  offset: 50
});

var contactWaypoint = new Waypoint({
  element: document.getElementById('below-about'),
  handler: function(direction) {
    if(direction="down"){
      // console.log("Scrolling down to contact");
      $("#stepFour").toggleClass("activeStepper");
      $("#stepThree").toggleClass("activeStepper");
    }
  },
  offset: 50
});
