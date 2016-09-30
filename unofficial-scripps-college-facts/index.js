'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Scripps College Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The mission of Scripps College is 'to educate women to develop their intellects and talents \
    through active participation in a community of scholars, so that as graduates they may \
    contribute to society through public and private lives of leadership, service, integrity, and \
    creativity.'",
    "Scripps College was founded in 1926.",
    "Scripps College is located in Claremont, California.",
    "Scripps College is a member of the Claremont Colleges, a consortium of five undergraduate \
    institutions: Claremont McKenna, Harvey Mudd, Pitzer, and Pomona Colleges. There are also \
    two graduate institutions: Claremont Graduate University and Keck Graduate Institute.",
    "The Scripps College motto is Incipit Vita Nova, meaning here beginneth the new life.",
    "Founder Ellen Browning Scripps once said, 'The paramount obligation of a college is to develop\
     in its students the ability to think clearly and independently, and the ability to live \
     confidently, courageously, and hopefully.'",
    "Students at Scripps College may eat at any of the Claremont Colleges' seven dining halls.",
    "Students at Scripps College may take courses at any of the Claremont Colleges.",
    "The Keck Science Department is shared between Scripps, Pitzer, and Claremont McKenna Colleges.",
    "Scripps College's 32 acre campus is listed in the National Register of Historic Places.",
    "As of 2016, Scripps College has eight residence halls, the first of which was dedicated in 1927",
    "The Motley Coffeehouse is a student-run business located in Seal Court, the heart of Scripps \
    College.",
    "Scripps student-athletes compete on the NCAA division three program with students from \
    Claremont McKenna and Harvey Mudd Colleges. This three-college team is called Claremont Mudd \
    Scripps, or CMS. The official athletic mascots are the stag and the Athena.",
    "Scripps College's Sallie Tiernan Field House was completed in 2008 and includes a 25-meter \
    swimming pool and Alumnae Field.",
    "Notable Scripps College alumnae include Gabrielle Giffords, the Arizona congresswoman and \
    noted gun control advocate.",
    "The main doors of Dennison Library only open twice per year: new students enter in the fall, \
    and graduating students exit in the spring.",
    "Nancy Bekavec became Scripps College's sixth president and first female president in 1990. \
    She continued to serve as president until 2007.",
    "Earnest J. Jaqua served as Scripps College's first president, and is the namesake of Scripps's\
     main quadrangle.",
    "The two mammals featured in the center of Scripps College's Seal Court are, in fact, sea lions.",
    "Alumna Gabrielle Giffords, class of 1993, gave the commencement address at Scripps College's \
    2009 commencement ceremony.",
    "Feminist activist Gloria Steinem gave the Scripps College commencement address in 2004.",
    "Rachel Carson, the author of Silent Spring, gave the 1962 Scripps College commencement address.",
    "Scripps College is located on the eastern edge of Los Angeles County, California.", 
    "Claremont, California, where Scripps College is located, has an average of 282 sunny days per year.",
    "Scripps College is one of the forty partner colleges which may nominate graduating seniors for \
    the prestigious Thomas J. Watson Fellowship.",
    "Scripps College is located south of Harvey Mudd College, north of Claremont McKenna College, \
    and west of Pitzer College."      
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Scripps fact from the Scripps facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Scripps College fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};