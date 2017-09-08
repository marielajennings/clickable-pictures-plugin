function definePlugin (){
var plugin = {};

plugin.info= {
	name: 'clickable-pictures',
	description:'This plugin allows quiz-takers to select the picture that best matches the sentence from the question.',
	parameters: {
	image1: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: undefined,
        no_function: false,
        description: 'This is the first image\'s source'
      },
      image2: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: undefined,
        no_function: false,
        description: 'This is the first image\'s source'
      },
      preamble: {
      	type:[jsPsych.plugins.parameterType.STRING],
      	default: '',
      	no_function:false,
      	description: 'This is the preamble that shows on top'
      },
      question: {
      	type:[jsPsych.plugins.parameterType.STRING],
      	default: undefined,
      	no_function:false,
      	description: 'This is the real question'
      }
      
	}
}

plugin.trial= function (display_element, trial) {

var p = document.createElement('p');
p.setAttribute('align','center');
display_element.appendChild(p);
p.innerHTML= trial.preamble;


/*var p2 = document.createElement('p');
display_element.appendChild(p2);
p2.innerHTML= trial.question */

var h4 = document.createElement('h4');
h4.setAttribute('align','center');
display_element.appendChild(h4);
h4.innerHTML=trial.question;


var div = document.createElement('div');
display_element.appendChild(div);

var img1 = document.createElement('img');
img1.setAttribute('src',trial.image1);
img1.setAttribute('border','3');
img1.setAttribute('style', 'width:43%;');

div.appendChild(img1);


var img2 = document.createElement('img');
img2.setAttribute('src',trial.image2);
img2.setAttribute('style', 'margin-left:100px; width:43%;');
img2.setAttribute('border','3');

div.appendChild(img2);



function onImageClicked (imagePath) {
  display_element.innerHTML = '';
  var endTime = (new Date()).getTime();
  var response_time = endTime - startTime;
    jsPsych.finishTrial({
     "preamble": trial.preamble,
     "question": trial.question,
     "response": imagePath,
     "rt": response_time
  });
}
img1.addEventListener('click', () => {
  var imagePath = trial.image1;
  onImageClicked(imagePath);
});

img2.addEventListener('click', () => {
  var imagePath = trial.image2;
  onImageClicked(imagePath);
});



var startTime = (new Date()).getTime(); 

}
return plugin;
}

jsPsych.plugins['clickable-pictures'] = definePlugin() ;