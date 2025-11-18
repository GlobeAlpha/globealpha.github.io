var body= document.querySelector('body')
// score  bard 
var score = 0;
var ScoreBoard= document.createElement('span')
body.appendChild(ScoreBoard)
ScoreBoard.innerText=`Score:${score}` 

//Game Board Initilisation 
var GameBoard = document.createElement('table')
body.appendChild(GameBoard)

var GameBoardTable = document.querySelector('table')

var letters=['A','B','C','D','E','F','G']
var number=[1,2,3,4,5,6,7]

var Firing_Input=document.createElement('input')
var Firing_Trigger=document.createElement('button')
Firing_Trigger.type="submit"
var button_text = document.createTextNode('submit')

body.appendChild(Firing_Input)
body.appendChild(Firing_Trigger)
Firing_Trigger.appendChild(button_text)
Firing_Trigger.addEventListener('click',Fire)



var Row_Legend= document.createElement('div')
Row_Legend.className="Row_Legend"
for(var i=0;i<letters.length;i++)
{


var text = document.createTextNode(letters[i])
var Row_text=document.createElement('p')
body.appendChild(Row_Legend)
Row_text.appendChild(text)
Row_Legend.appendChild(Row_text)
Row_text.id=letters[i]

}

for(var i=0;i<7;i++)
{
    var row= document.createElement('tr')
    row.id=letters[i]
    row.addEventListener('click',ShipLocation)
    GameBoard.appendChild(row)
    
    for(var j=0;j<7;j++)
    {
        var cell = document.createElement("td")
        cell.id=row.id+number[j]
        row.appendChild(cell)
    }

}

//Static Ship Positions
// Row A




// for(var i=0;i<20;i++)
// {
// var TenporaryShip=document.createTextNode('Ship')
// console.log(TenporaryShip)

// for(var j=0;j<7;j++)
// {
// var TemporaryLocation=GameBoard.rows[i].cells[j]
// console.log(TemporaryLocation)
// }

// }




var Ship=document.createTextNode('Ship')
var Ship2=document.createTextNode('Ship')
var Ship3=document.createTextNode('Ship')

var ShipLocation1 = GameBoard.rows[0].cells[0]
ShipLocation1.classList="Ship"
ShipLocation1.style.color="white"
ShipLocation1.appendChild(Ship)

var ShipLocation2 = GameBoard.rows[0].cells[3]
ShipLocation2.classList="Ship"
ShipLocation2.style.color="white"
ShipLocation2.appendChild(Ship2)

var ShipLocation3 = GameBoard.rows[0].cells[6]
ShipLocation3.classList="Ship"
ShipLocation3.style.color="white"
ShipLocation3.appendChild(Ship3)


// Row B
var Ship4=document.createTextNode('Ship')
var Ship5=document.createTextNode('Ship')
var Ship6=document.createTextNode('Ship')

var ShipLocation4 = GameBoard.rows[1].cells[0]
ShipLocation4.classList="Ship"
ShipLocation4.style.color="white"
ShipLocation4.appendChild(Ship4)

var ShipLocation5 = GameBoard.rows[1].cells[3]
ShipLocation5.classList="Ship"
ShipLocation5.style.color="white"
ShipLocation5.appendChild(Ship5)

var ShipLocation6 = GameBoard.rows[1].cells[6]
ShipLocation6.classList="Ship"
ShipLocation6.style.color="white"
ShipLocation6.appendChild(Ship6)

// Row C
var Ship7=document.createTextNode('Ship')
var Ship8=document.createTextNode('Ship')
var Ship9=document.createTextNode('Ship')

var ShipLocation7 = GameBoard.rows[2].cells[0]
ShipLocation7.classList="Ship"
ShipLocation7.style.color="white"
ShipLocation7.appendChild(Ship7)

var ShipLocation8 = GameBoard.rows[2].cells[3]
ShipLocation8.classList="Ship"
ShipLocation8.style.color="white"
ShipLocation8.appendChild(Ship8)

var ShipLocation9 = GameBoard.rows[2].cells[6]
ShipLocation9.classList="Ship"
ShipLocation9.style.color="white"
ShipLocation9.appendChild(Ship9)

// Row D 
var Ship10=document.createTextNode('Ship')
var Ship11=document.createTextNode('Ship')
var Ship12=document.createTextNode('Ship')

var ShipLocation10 = GameBoard.rows[3].cells[0]
ShipLocation10.classList="Ship"
ShipLocation10.style.color="white"
ShipLocation10.appendChild(Ship10)

var ShipLocation11 = GameBoard.rows[3].cells[3]
ShipLocation11.classList="Ship"
ShipLocation11.style.color="white"
ShipLocation11.appendChild(Ship11)

var ShipLocation12 = GameBoard.rows[3].cells[6]
ShipLocation12.classList="Ship"
ShipLocation12.style.color="white"
ShipLocation12.appendChild(Ship12)

// Row E
var Ship13=document.createTextNode('Ship')
var Ship14=document.createTextNode('Ship')
var Ship15=document.createTextNode('Ship')

var ShipLocation13 = GameBoard.rows[4].cells[0]
ShipLocation13.classList="Ship"
ShipLocation13.style.color="white"
ShipLocation13.appendChild(Ship13)

var ShipLocation14 = GameBoard.rows[4].cells[3]
ShipLocation14.classList="Ship"
ShipLocation14.style.color="white"
ShipLocation14.appendChild(Ship14)

var ShipLocation15 = GameBoard.rows[4].cells[6]
ShipLocation15.classList="Ship"
ShipLocation15.style.color="white"
ShipLocation15.appendChild(Ship15)

// Row F
var Ship16=document.createTextNode('Ship')
var Ship17=document.createTextNode('Ship')
var Ship18=document.createTextNode('Ship')

var ShipLocation16 = GameBoard.rows[5].cells[0]
ShipLocation16.classList="Ship"
ShipLocation16.style.color="white"
ShipLocation16.appendChild(Ship16)

var ShipLocation17 = GameBoard.rows[5].cells[3]
ShipLocation17.classList="Ship"
ShipLocation17.style.color="white"
ShipLocation17.appendChild(Ship17)

var ShipLocation18 = GameBoard.rows[5].cells[6]
ShipLocation18.classList="Ship"
ShipLocation18.style.color="white"
ShipLocation18.appendChild(Ship18)

// Row G
var Ship19=document.createTextNode('Ship')
var Ship20=document.createTextNode('Ship')
var Ship21=document.createTextNode('Ship')

var ShipLocation19 = GameBoard.rows[6].cells[0]
ShipLocation19.classList="Ship"
ShipLocation19.style.color="white"
ShipLocation19.appendChild(Ship19)

var ShipLocation20 = GameBoard.rows[6].cells[3]
ShipLocation20.classList="Ship"
ShipLocation20.style.color="white"
ShipLocation20.appendChild(Ship20)

var ShipLocation21 = GameBoard.rows[6].cells[6]
ShipLocation21.classList="Ship"
ShipLocation21.style.color="white"
ShipLocation21.appendChild(Ship21)


function ShipLocation(event)
{
    var Hit = false;
    var ShipLocation=event.srcElement.innerText
            
  if(ShipLocation =="Ship" )   
    {
      console.log(event.srcElement)
      event.srcElement.classList.add("Hit")
      event.srcElement.style.color="black"
      Hit =true
        if(Hit==true)
        {
            event.srcElement.classList.remove("Hidden")   
             score ++
             ScoreBoard.innerText=`Score:${score}` 
        }
    }

  else  if(ShipLocation !="Ship" )   
    {
      event.srcElement.classList.add("Miss")
        
     }       
}

for(var i=0;i<number.length;i++)
{
var Column_Legend= document.createElement('th')
var text = document.createTextNode(number[i])
Column_Legend.id="Legend"
Column_Legend.appendChild(text)
GameBoardTable.append(Column_Legend)
}


function Fire()
{
  var value = Firing_Input.value 
  var row_location=value.charAt(0)
  var column_location= value.charAt(1)  
  var Row2=document.getElementById(row_location+column_location)  

 
    if(value == Row2.id)
    {

      if(Row2.className=="Ship")
      {
        Row2.classList.add('Hit')
      }

      if(Row2.className !="Ship")
      {
        
        Row2.click()
      }
    }

}

// Reset Button
// var ResetBoardbutton=document.createElement('button')
// ResetBoardbutton.innerText="Reset Board"
// body.appendChild(ResetBoardbutton)

// ResetBoardbutton.addEventListener('click',ResetBoard)

// function ResetBoard()
// {
//   var value = Firing_Input.value
//   var row_location=value.charAt(0)
//   var column_location= value.charAt(1)  
//   var Row2=document.getElementById(row_location+column_location)  

//   Row2.classList.remove('Hit')
//   Row2.style.color="white"
//   Row2.classList.remove('Miss')

// }
