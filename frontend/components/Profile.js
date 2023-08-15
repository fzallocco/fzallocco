class Profile {
    constructor( //all parameters are String data types
      firstService,
      secondService,
      thirdService,
      email,
      linkedIn,
      gitHub,
      startDate,
      image
    ) {
      this.firstService = firstService; //assigning parameter values to constructor
      this.secondService = secondService;
      this.thirdService = thirdService;
      this.email = email;
      this.linkedIn = linkedIn;
      this.gitHub = gitHub;
      this.startDate = startDate;
      this.image = image;
    }
    daysOfActivity() { //this function calculates tne number of days since activity started
      let now = new Date(); //importing Date class
      let activity = new Date(this.startDate); //converting string value into Date value
      let elapsed = now - activity; // elapsed time in milliseconds
      let daysOfActivity = Math.floor(elapsed / (1000 * 3600 * 24)); //converting milliseconds into days
      return daysOfActivity; //returning integer value
    }
  }
  
  //exporting Profile class to be used in data file
  export default Profile;