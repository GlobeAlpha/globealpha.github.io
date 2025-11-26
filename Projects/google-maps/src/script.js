


function CreateMap()
{

  var StJames = { lat: parseFloat(54.95490) , long: parseFloat(-1.62432)};
 // Postcodes
// NE8 2PB   54.95490,-1.62432 Foundation 
var FoundationStore =
  {
  lat:parseFloat(54.95490),long:parseFloat(-1.62432)
   }

// SR5 3TX   54.92178,-1.41371
var RecyclingPlant_1= 

{
  lat:parseFloat(54.92178),long:parseFloat(-1.41371)
}

// SR3 4JW   54.88308,-1.43485
var RecyclingPlant_2 =
    {
      lat:parseFloat(54.88308),long:parseFloat(-1.43485)
    }
 
  const options =
        {
          zoom:10,
          center:{lat:StJames.lat,lng:StJames.long}
//         54.97513279 , -1.62136939
        }
  
  
  var map = new google.maps.Map(document.getElementById('Map'),options)
  
//   Markers
//   Call Api to get Seller Coordinates
//   Possibly Hard Code current Sellers might need to get postcode cordinates  
  var Foundation = new google.maps.Marker
  ({
  position:{lat:FoundationStore.lat,lng:FoundationStore.long},
  map:map,
  
});
  
  var CommunitySustainabilityServices = new google.maps.Marker
  ({
  position:{lat:RecyclingPlant_1.lat,lng:RecyclingPlant_1.long},
  map:map,
  
});
  
  var CommunitySustainabilityServices2 = new google.maps.Marker
  ({
  position:{lat:RecyclingPlant_2.lat,lng:RecyclingPlant_2.long},
  map:map,
  
});
 
  
   }
  
 


