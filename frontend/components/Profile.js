class Profile {
    constructor( //all parameters are String data types
      firstService,
      secondService,
      thirdService,
      fourthService,
      fifthService,
      email,
      linkedIn,
      gitHub,
      image
    ) {
      this.firstService = firstService; //assigning parameter values to constructor
      this.secondService = secondService;
      this.thirdService = thirdService;
      this.fourthService = fourthService;
      this.fifthService = fifthService;
      this.email = email;
      this.linkedIn = linkedIn;
      this.gitHub = gitHub;
      this.image = image;
    }
  }
  
  //exporting Profile class to be used in data file
  export default Profile;
