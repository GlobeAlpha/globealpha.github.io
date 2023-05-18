var Work_Gallery = document.getElementsByClassName('Work--Gallery');


var ProjectCommercial = document.getElementById('Commercial');
var ProjectEducation = document.getElementById('Education');
var ProjectPersonal = document.getElementById('Personal');
var ProjectPersonal_value = document.getElementById('Personal');
var ProjectCard = document.getElementsByClassName('Project--Card');
var Project_Card = Array.from(ProjectCard)





stackFilter = () =>
{

    var ProjectCard = document.getElementsByClassName('Project--Card');
    var TechStack_Filter = document.getElementById('Stack').value;

    var JS = document.getElementsByClassName("JS");
    var React = document.getElementsByClassName("React");

    if (TechStack_Filter == "JavaScript")
    {
        for (var i = 0; i < ProjectCard.length; i++) 
        {
            if (ProjectCard[i].classList.contains("JS"))
             {
                 for (var i = 0; i < React.length; i++)
                 {
                    console.log(React[i].style);
                    React[i].style.display="none";
                 }
             }
        }

    }


     
    for (var i = 0; i < ProjectCard.length; i++)
    {
        if (ProjectCard[i].classList.contains("React"))
        {
            for (var i = 0; i < JS.length; i++)
            {
                console.log(JS[i].style);
                JS[i].style.display = "none";
            }
        }
    }
     
   
}



ProjectCommercial.checked = true;
ProjectPersonal.checked = false; 
ProjectEducation.checked = false; 

//ProjectCommercial.style.color = "yellow";
//ProjectCommercial.style.textDecoration = "underline green";




for (i = 0; i < Project_Card.length; i++) {

    Project_Card[i].classList.add("card--filter_active")
    Project_Card[i].classList.remove("card--filter_inactive")
    if (Project_Card[i].classList.contains("Commercial") == true) {
        console.log(Project_Card[i])
        Project_Card[i].classList.add("card--filter_active")
        Project_Card[i].classList.remove("card--filter_inactive")
    }


    else {
        Project_Card[i].classList.add("card--filter_inactive")
        Project_Card[i].classList.remove("card--filter_active")

    }

}


Project_Commercial = () =>
{
    ProjectCommercial.checked = true;
    if (ProjectCommercial.checked == true)
    {
        

        ProjectCommercial.classList.add('filter-active');
        ProjectCommercial.classList.remove('filter-inactive');

        ProjectEducation.classList.add('filter-inactive');
        ProjectPersonal.classList.add('filter-inactive');
        console.log(ProjectCommercial.classList);


    }


   
    for (i = 0; i < Project_Card.length; i++)
    {

        Project_Card[i].classList.add("card--filter_active")
        Project_Card[i].classList.remove("card--filter_inactive")
        if (Project_Card[i].classList.contains("Commercial") == true)
        {
            console.log(Project_Card[i])
            Project_Card[i].classList.add("card--filter_active")
            Project_Card[i].classList.remove("card--filter_inactive")
        }


        else
        {
            Project_Card[i].classList.add("card--filter_inactive")
            Project_Card[i].classList.remove("card--filter_active")

        }

    }


}



Project_Type = () =>
{
    ProjectPersonal.checked = true;
    ProjectEducation.checked = false;
    ProjectCommercial.checked = false;


  

    if (ProjectPersonal.checked == true) {

        ProjectPersonal.classList.add('filter-active');
        ProjectPersonal.classList.remove('filter-inactive');
        ProjectEducation.classList.add('filter-inactive');
        ProjectCommercial.classList.add('filter-inactive');
  
        console.log(ProjectPersonal)
    }






    for (i = 0; i < Project_Card.length; i++)
    {
        if (Project_Card[i].classList.contains("Personal") == true)
        {
            Project_Card[i].classList.remove("card--filter_inactive")
            Project_Card[i].classList.add("card--filter_active")

        }


        else
        {
            Project_Card[i].classList.remove("card--filter_active")
            Project_Card[i].classList.add("card--filter_inactive")

        }
    }
}


Project_Education = () =>
{
   
      ProjectEducation.checked = true;
      ProjectCommercial.checked = false;
      ProjectPersonal.checked = false

    if (ProjectEducation.checked == true)
    {

        ProjectEducation.classList.add('filter-active');
        ProjectEducation.classList.remove('filter-inactive');
        ProjectCommercial.classList.add('filter-inactive');
        ProjectPersonal.classList.add('filter-inactive');
        
        console.log(ProjectEducation)
        //ProjectPersonal.classList.add('filter-inactive');
        //ProjectCommercial.classList.add('filter-inactive');
    }


    if (ProjectEducation.checked == false) {
        ProjectEducation.checked = false;

       
        ProjectEducation.classList.remove('filter-active');
        ProjectEducation.classList.add('filter-inactive');
        //ProjectPersonal.classList.add('filter-inactive');
        //ProjectCommercial.classList.add('filter-inactive');
    }

    for (i = 0; i < Project_Card.length; i++)
    {
        if (Project_Card[i].classList.contains("Education") == true)
        {
            Project_Card[i].classList.remove("card--filter_inactive")
            Project_Card[i].classList.add("card--filter_active")
        }


        if (Project_Card[i].classList.contains("Education") == false)
        {
            Project_Card[i].classList.remove("card--filter_active")
            Project_Card[i].classList.add("card--filter_inactive")
        }

    }


  }


