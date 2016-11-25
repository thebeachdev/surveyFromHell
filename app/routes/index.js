import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[{
      "id":1,
      "inputType":"checkbox",
      "inputValue":"buttPains",
      "inputClass":"buttPains",
      "inputName":"buttPains",
      "text":"Do you has the butt pains?",
      "response":""
    },{
      "id":2,
      "inputType":"checkbox",
      "inputClass":"theStank",
      "inputValue":"theStank",
      "inputName":"theStank",
      "text":" You have the stank?",
      "response":""
    },{
      "id":3,
      "inputType":"checkbox",
      "inpputValue":"suffAndThings",
      "inputClass":"stuffAnThings",
      "inputName":"stuffAndThings",
      "text":" Do you have stuff and things to today",
      "response":""
    },{
      "id":4,
      "inputType":"checkbox",
      "inputClass":"checkBecause",
      "inputValue":"heckBecause",
      "inputName":"heckBecause",
      "text":"Check be because, i got nothing else to do",
      "response":""
     }
     //,{
    //   "id":5,
    //   "inputType":"checkbox",
    //   "inputClass":"",
    //   "inputValue":"",
    //   "inputName":"",
    //   "text":"",
    //   "response":""
    // },{
    //   "id":6,
    //   "inputType":"checkbox",
    //   "inputClass":"",
    //   "inputValue":"",
    //   "inputName":"",
    //   "text":"",
    //   "response":""
    // },{
    //   "id":7,
    //   "inputType":"checkbox",
    //   "inputClass":"",
    //   "inputValue":"",
    //   "inputName":"",
    //   "text":"",
    //   "response":""
    // },{
    //   "id":8,
    //   "inputType":"checkbox",
    //   "inputClass":"",
    //   "inputValue":"",
    //   "inputName":"",
    //   "text":"",
    //   "response":""
    // },{
    //   "id":9,
    //   "inputType":"checkbox",
    //   "inputClass":"",
    //   "inputValue":"",
    //   "inputName":"",
    //   "text":"",
    //   "response":""
    // },{
    //   "id":10,
    //   "inputType":"checkbox",
    //   "inputClass":"",
    //   "inputValue":"",
    //   "inputName":"",
    //   "text":"",
    //   "response":""
    ];
  }
});
