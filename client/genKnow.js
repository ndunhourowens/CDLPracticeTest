import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './genKnow.html';
import './home.html';
import './js.js';

import { AirBrakes } from '../imports/api/airBrakesQues.js';
import { Combination } from '../imports/api/combination.js';
import { DoubTrip } from '../imports/api/doubTrip.js';
import { GenKnow } from '../imports/api/genKnowQues.js';
import { Hazmat } from '../imports/api/hazmat.js';
import { Passenger } from '../imports/api/passenger.js';
import { Tanker } from '../imports/api/tanker.js';

    // console.log('in rendered', numOfQues)

Template.genKnow.onCreated = function(){
};

Template.genKnow.rendered = function(){
    $('#userMsg').append('THE MAXIMUM OF QUESTIONS FOR THE <strong>' + Session.get('selectTest') + '</strong> TEST IS <strong>' + Session.get('quesVal') + '</strong>')
};

Template.genKnow.helpers({
});

Template.genKnow.events({

});