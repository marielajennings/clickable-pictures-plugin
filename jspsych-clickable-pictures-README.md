##jspsych-clickable-pictures plugin

The clickable-pictures plugin presents two images and a sentence(question) to the user. The user is asked to select an image as a response by clicking on it. The trial contains a preamble which explains what action the user needs to take to answer the question.

###Parameters

The following table lists the parameters associated with this plugin. Parameters with the default value of *undefined* must be specified. 

| Parameter| Type| Default Value| Description|
| ---------|:---:|:------------:|:-----------|
|question|string|*undefined*|A string containing the question/prompt for the trial. 
|preamble|string|*undefined*|The prompt that specifies what action the user needs to take to answer the question.
|image1|string|*undefined*|The path to the first image for the trial.
|image2|string|*undefined*|The path to the second image for the trial.

###Data Generated
The data for the trial is contained within an object with the following key-value pairs:

| Name| Type|  Value| 
| ---------|:---:|:-----------|
| "rt"|numeric|The response time in milliseconds for the subject to make a response. The time is measured from when the questions first appear on the screen until the subject's response.
|"preamble"|string|The specific preamble for the whole trial if any (otherwise empty string).
|"question"|string|The question associated with the trial.
|"response"|string|The path to the image the user selected as their answer.

###Example

```
var picture_q = {

type: "clickable-pictures",
question: 'The dog was chased by the cat.',
preamble: 'Click on the picture that best matches the sentence:',
image1: '/static/images/1_1.jpg',
image2:'/static/images/1_2.jpg'

};


```
