var Image_gallery_container=document.getElementById('image-gallery')
var images=['cloud','oak','moon']
var Stage =1

for(var i =0;i<3;i++)
{
var image_container=document.createElement('div')
var image=document.createElement('img')
var caption = document.createElement('span')

image.id=images[i]
image.src=`assets/${images[i]}.jpg`
image_container.appendChild(image)
Image_gallery_container.appendChild(image_container)

image_container.appendChild(caption)
var caption_text=document.createTextNode(images[i])
caption.appendChild(caption_text)
caption.id=`${images[i]}_caption`
}

var cloud = document.getElementById('cloud')
cloud.classList.add('active')
document.getElementById('oak_caption').style.display="none"
document.getElementById('moon_caption').style.display="none"

var oak = document.getElementById('oak')
oak.classList.add('inactive')

var moon=document.getElementById('moon')
moon.classList.add('inactive')

var PreviousImage=document.createElement('button')
PreviousImage.innerText="Previous"

var NextImage=document.createElement('button')
NextImage.innerText="Next"

PreviousImage.addEventListener('click',Slider)
NextImage.addEventListener('click',Slider)

Image_gallery_container.append(PreviousImage)
Image_gallery_container.append(NextImage)

var StageNumber=document.createElement('span')
StageNumber.innerText=`${Stage}/${images.length}`
Image_gallery_container.append(StageNumber)

function Slider(event)
{
if(event.target.innerText=="Next")
{
    Stage++

    if(Stage==2)
    {
    oak.className="active"
    document.getElementById('oak_caption').style.display="block"
    cloud.className="inactive"
    document.getElementById('cloud_caption').style.display="none"
    document.getElementById('moon_caption').style.display="none"
    }

    if(Stage==3)
    {
        moon.className="active"
        document.getElementById('moon_caption').style.display="block"
        oak.className="inactive"
    }

    if(Stage>3)
    {
        Stage=1
        cloud.className="active"
        document.getElementById('cloud_caption').style.display="block"
        document.getElementById('oak_caption').style.display="none"
        document.getElementById('moon_caption').style.display="none"
        oak.className="inactive"
        moon.className="inactive"
    }
}


if(event.target.innerText=="Previous")
{
    Stage--
    if(Stage<1)
    {
        Stage=1
        StageNumber.innerText=Stage
    }

    if(Stage==1)
    {
        cloud.className="active"
        document.getElementById('cloud_caption').style.display="block"
        oak.className="inactive"
        document.getElementById('oak_caption').style.display="none"
        moon.className="inactive"
        moon_caption.style.display="none"
    }

    if(Stage==2)
    {
    oak.className="active"
    document.getElementById('cloud_caption').style.display="none"
    cloud.className="inactive"
    document.getElementById('oak_caption').style.display="block"
    moon.className="inactive"
    document.getElementById('moon_caption').style.display="none"
    }

    if(Stage==3)
    {   moon.className="active"
        document.getElementById('moon_caption').style.display="block"
        oak.className="inactive"
        document.getElementById('cloud_caption').style.display="none"
        document.getElementById('oak_caption').style.display="none"
    }

    if(Stage<1)
    {
        Stage=1
        cloud.className="active"
        oak.className="inactive"
        moon.className="inactive"
    }
}

StageNumber.innerText=`${Stage}/${images.length}`
}