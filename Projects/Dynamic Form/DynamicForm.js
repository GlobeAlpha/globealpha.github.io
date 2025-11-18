// attach form to the body 
var form = document.createElement('form')
var body = document.querySelector('body')
body.appendChild(form)		

// kereps track of form stages 
var stage= 1;
// add inputs to Form
for(var i=0;i<7;i++)
{
// generate  form fields elements 
var formElement= document.createElement('input')
form.appendChild(formElement)

//field name
var FieldNames=['First Name','Last Name','Organisation','Organisation Type','Organisation address','Email','Password'] 
formElement.name=FieldNames[i]

//field  place holder 
var FieldPlaceHolders = ['First Name','Last Name','Organisation','Organisation Yype','Organisation address','Email','Password']
formElement.placeholder =FieldPlaceHolders[i]
}
form[2].style.display="none" 
form[3].style.display="none"
form[4].style.display="none"
form[5].style.display="none"
form[6].style.display="none"
	  
// collect input from fields 
form.addEventListener('submit',Submit)
// next button
var PreviousButton = document.createElement('button')
var NextButton = document.createElement('button')

var PreviousText = document.createTextNode('Previous')
var NextText = document.createTextNode('Next')

body.appendChild(PreviousButton)
PreviousButton.appendChild(PreviousText)
	
body.appendChild(NextButton)
NextButton.appendChild(NextText)

NextButton.addEventListener('click',formStages)
PreviousButton.addEventListener('click',formStages) 

var StageCounter=document.createElement('div')
body.appendChild(StageCounter)

StageCounter.innerText = stage

for(var i = 1;i<4;i++)
{
var StageIndicator= document.createElement('span')
// as class names are stored as an array and  
StageIndicator.className="StageIndicatorDots"
body.appendChild(StageIndicator)
StageIndicator.style.display="block";
StageIndicator.style.border="solid 1px black";
StageIndicator.style.borderRadius="50%";
StageIndicator.style.width="10px";
StageIndicator.style.height="10px";
}

var StageIndicatorDots = document.getElementsByClassName('StageIndicatorDots')
for(var i = 0;i<StageIndicatorDots.length;i++)

{
StageIndicatorDots[0].style.backgroundColor="black"
}

function formStages(event)
{// firstly I need to determine what stage form is at
	if(event.target.innerText== 'Previous')
	{
	stage --
    StageCounter.innerText = stage
	}
	
	if(event.target.innerText== 'Next')
	{
	stage++
	StageCounter.innerText = stage
	}
		
// break form into  multiple stages  allowing to break a large form apart 

// hide other stages of the form  
//  show what stage form is 


if(stage==1)
	
{   StageIndicatorDots[0].style.backgroundColor="black"
    StageIndicatorDots[1].style.backgroundColor="white"
	StageIndicatorDots[2].style.backgroundColor="white"
for(var i=0;i<form.length;i++)
{
	  form[i].style.display="none"
	  form[0].style.display="block"
	  form[1].style.display="block"
 }
}

if(stage==2)
{
	StageIndicatorDots[0].style.backgroundColor="white"
	StageIndicatorDots[1].style.backgroundColor="black"
	StageIndicatorDots[2].style.backgroundColor="white"
	for(var i=0;i<form.length;i++)
	{
	  form[i].style.display="none"
	  form[2].style.display="block"
	  form[3].style.display="block"
	  form[4].style.display="block"
     }
}

if(stage==3)
{
	StageIndicatorDots[0].style.backgroundColor="white"
	StageIndicatorDots[1].style.backgroundColor="white"
	StageIndicatorDots[2].style.backgroundColor="black"
	for(var i=0;i<form.length;i++)
	{
	  form[i].style.display="none"
	  form[5].style.display="block"
	  form[6].style.display="block"
     }
// attach sumbit button and text  
var SubmitButton= document.createElement('button')
SubmitButton.type="submit"
form.appendChild(SubmitButton)

var ButtonText= document.createTextNode('submit')
SubmitButton.appendChild(ButtonText)
}

if(stage>3)
{	stage=1
	if(stage==1)	
{

	StageIndicatorDots[0].style.backgroundColor="black"
    StageIndicatorDots[1].style.backgroundColor="white"
	StageIndicatorDots[2].style.backgroundColor="white"
	for(var i=0;i<form.length;i++)
	{
	  form[i].style.display="none"
	  form[0].style.display="block"
	  form[1].style.display="block"
     }
}
	StageCounter.innerText = stage	
}
		
if (stage<1)
{
	stage =1 
	StageCounter.innerText = stage		
}
}

function Submit(event)
{
event.preventDefault()
console.log(`Form has been sumbitted ${event.timeStamp}!`)

var formData = document.createElement('div')
formData.id="FormData"
body.appendChild(formData)

for(var i =0;i<7;i++)
{
var formOutput = document.createElement('p')
formData.appendChild(formOutput)

var formNameText= document.createTextNode(`${form[i].name}:${form[i].value}`)
formOutput.appendChild(formNameText)
}
}