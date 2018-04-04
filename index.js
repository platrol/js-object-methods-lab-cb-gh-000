// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homeState){
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState
  }
  veto() {
    return 'NO!';
  };

  passBill() {
    return 'You can do that!'
  }

 doCharity() {
    returns "I like to help people."
 }

 conductPressInterview() {
   returns "I am proud to be an American."
 }

  sauyHi() {
    returns `Hi, my name is ${this.name}, I am from ${this.homestate}. I represent the ${this.politcalParty}s and was in office <yearsInOffice>.`
  }
}

