socket = io('http://localhost:3000')
var profileName = document.getElementById("profileName");
var scorevalue = document.getElementById("player_1_scrore");

//data
var AcountryData = document.getElementById("country_Data");
var AcarData = document.getElementById("Car_Data");
var AFruitData = document.getElementById("Fruit_Data");
var AanimalData = document.getElementById("Animal_Data");

var AcountryData_receiver = document.getElementById("country_Data_receiver");
var AcarData_receiver = document.getElementById("Car_Data_receiver");
var AFruitData_receiver = document.getElementById("Fruit_Data_receiver");
var AanimalData_receiver = document.getElementById("Animal_Data_receiver");

//input
var AcountryInput = document.getElementById("1countryInput");
var AcarInput = document.getElementById("1CarInput");
var AFruitInput = document.getElementById("1FruitInput");
var AanimalInput = document.getElementById("1AnimalInput");
var input_msg = document.getElementById("inputmsg");

var AcountryInput_receiver = document.getElementById("1countryInput-receiver");
var AcarInput_receiver = document.getElementById("1CarInput-receiver");
var AFruitInput_receiver = document.getElementById("1FruitInput-receiver");
var AanimalInput_receiver = document.getElementById("1AnimalInput-receiver");

//button
var  AconfirmButton = document.getElementById("1countryconfirmButton");
var  AcarconfirmButton = document.getElementById("1CarconfirmButton");
var  AFruitconfirmButton = document.getElementById("1FruitconfirmButton");
var  AanimalconfirmButton = document.getElementById("1AnimalconfirmButton");

var  AconfirmButton_receiver = document.getElementById("1countryconfirmButton-receiver");
var  AcarconfirmButton_receiver = document.getElementById("1CarconfirmButton-receiver");
var  AanimaltconfirmButton_receiver = document.getElementById("1AnimalconfirmButton-receiver");
var  AFruitconfirmButton_receiver = document.getElementById("1FruitconfirmButton-receiver");

var country_edit_button = document.getElementById("edit_country");
var car_edit_button = document.getElementById("edit_car");
var fruit_edit_button = document.getElementById("edit_fruit");
var Animal_edit_button = document.getElementById("edit_Animal");
var used_button = document.getElementById("used_button");
var used_button_car = document.getElementById("used_button_car");
var used_button_fruit = document.getElementById("used_button_fruit");
var used_button_animal = document.getElementById("used_button_animal");

// div button & input
var  AfieldAndButtondiv = document.getElementById("1countryfieldAndButtondiv");
var  AcarfieldAndButtondiv = document.getElementById("1CarfieldAndButtondiv");
var  AFruitfieldAndButtondiv = document.getElementById("1FruitfieldAndButtondiv");
var  AanimalfieldAndButtondiv = document.getElementById("1AnimalfieldAndButtondiv");

var  AfieldAndButtondiv_receiver = document.getElementById("1countryfieldAndButtondiv-receiver");
var  AcarfieldAndButtondiv_receiver = document.getElementById("1CarfieldAndButtondiv-receiver");
var  AFruitfieldAndButtondiv_receiver = document.getElementById("1FruitfieldAndButtondiv-receiver");
var  AanimalfieldAndButtondiv_receiver = document.getElementById("1AnimalfieldAndButtondiv-receiver");


// check icon 
var incorrect = document.getElementById("inco")
var correct = document.getElementById("correct")

// check icon car
var incorrect_car = document.getElementById("inco_car")
var correct_car = document.getElementById("correct_car")

// check icon fruit
var incorrect_fruit = document.getElementById("inco_fruit")
var correct_fruit = document.getElementById("correct_fruit")

// check icon Animal
var incorrect_Animal = document.getElementById("inco_Animal")
var correct_Animal = document.getElementById("correct_Animal")


// app variable
var  username = document.getElementById("username");
var  receiver_name = document.getElementById("receiver-name");
var  timeremainingvalue = document.getElementById("timeremainingvalue");
var  chooseLetter = document.getElementById("chooseLetter");
var  panelHeading = document.getElementById("panelHeading");
var  onlinePeople = document.getElementById("onlinePeople");
var  onlinePeople_h3 = document.getElementById("online_people_h3");
var  playerScore_div = document.getElementById("playerScore");
var  chatinGame = document.getElementById("chatinGame");
var replay = document.getElementById("replay");
var homeButton = document.getElementById("homeButton");

var  locker1 = document.getElementById("locker1");
var  locker2 = document.getElementById("locker2");
var  locker3 = document.getElementById("locker3");
var  locker4 = document.getElementById("locker4");
var timeremaining = 60;
var action;
var randomNu;
var numberOfOnline;
var userACountryInput;
var idOfPendingButton;
var scoreIncrease = 0;
var i_answer = [];
var busy_people = [];
var alphaLetter = ["A","B","C","D","E","F","G","H","I",
                    "J","K","L","M","N","O","P",
                    "Q","R","S","T","U","V","W",
                    "Y","Z"]

var country = ["Argentina","Algeria","Afghanistan","Angola","Australia","Azerbaijan",
              "Austria","Armenia","Albania","Antigua and Barbuda","Andorra","Brazil",
              "Bangladesh","Burkina","Benin","Belgium","Burundi","Bolivia","Belarus","Bulgaria",
              "Bosnia and Herzegovina","Botswana","Bahrain","Bhutan","Brunei","Belize","Bahamas",
              "Barbados","China","Colombia","Canada","Cameroon","Côte d'Ivoire","Chile","Cambodia",
              "Chad","Cuba","Czechia","Czech","Congo","Costa Rica","Central African Republic", 
              "Croatia","Cyprus","Comoros","Cabo Verde","Dominican Republic","Denmark","Djibouti",
              "Dominica","Ethiopia","Egypt","Ecuador","El Salvador","Eritrea","Equatorial Guinea",
              "Estonia","Swaziland","France","Finland","Fiji","Germany","Ghana","Guatemala","Guinea",
              "Greece","Georgia","Gambia","Gabon","Guinea-Bissau","Guyana","Grenada","Haiti","Honduras",
              "Hungary","Vatican City","India","Indonesia","Iran","Italy","Iraq","Israel","Ireland",
              "Iceland","Japan","Jordan","Jamaica","Kenya","Kazakhstan","Kyrgyzstan","Kuwait",
              "Kiribati","Laos","Lebanon","Libya","Liberia","Lithuania","Lesotho","Latvia","Luxembourg",
              "Liechtenstein","Mexico","Myanmar","Morocco","Malaysia","Mozambique","Madagascar","Mali",
              "Malawi","Mauritania","Moldova","Mongolia","Mauritius","Montenegro","Micronesia","Maldives",
              "Malta","Marshall Islands","Monaco","Nigeria","Nepal","North Korea","Niger","Netherlands",
              "Nicaragua","Norway","New Zealand","Namibia","North Macedonia","Nauru","Oman","Pakistan",
              "Philippines","Poland","Peru","Portugal","Papua New Guinea","Paraguay","Palestine","Panama","Palau",
              "Quatar","Russia","Romania","Rwanda","South Africa","South Korea","Spain","Sudan","Saudi Arabia",
              "Sri Lanka","Syria","Senegal","Somalia","South Sudan","Sweden","Serbia","Switzerland",
              "Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Suriname","Sao Tome and Principe Samoa",
              "Saint Lucia","Saint Vincent and the Grenadines","Seychelles","Saint Kitts and Nevis","San Marino",
              "Turkey","Thailand","Tanzania","Tunisia","Tajikistan","Togo","Turkmenistan","Trinidad and Tobago",
              "Timor-Leste","Tonga","Tuvalu","United States of America","United Kingdom","Uganda","Ukraine",
              "Uzbekistan","United Arab Emirates","Uruguay","Vietnam","Venezuela","Vanuatu","wales","yemen","zambia","zimbabwe"]   



var car = ["Acura","Alfa Romeo","Aston Martin","Audi",

          "Bentley","BMW",
           "Bugatti","Buick",
           
           "Cadillac","Chevrolet","Chrysler","Citroen",
           
           "Dodge",
           
           "Ferrari","Fiat","Ford",
           
           "Geely","General Motors","GMC",
           
           "Honda","Hyundai","Infiniti",
           
           "Jaguar","Jeep",
           
           "Kia","Koenigsegg",

           "Lamborghini","Land Rover","Lexus",
           
           "Maserati","Mazda","McLaren",
            "Mercedes-Benz","Mini","Mitsubishi",
            
            "Nissan",

            "Opel",
            
            "Pagani","Peugeot",
          "Porsche",
          
          "Ram","Renault","Rolls Royce",
          
          "Saab","Subaru","Suzuki",


            "Tata Motors","Tesla","Toyota",
            
            "Volkswagen","Volvo"]


var fruit = [
  
  "Apples","Apricots","Avocados","Bananas",

  "Boysenberries","Blueberries","Bing Cherry",

"Cherries","Cantaloupe","Crab apples","Clementine","Cucumbers",

"Damson plum", "Dinosaur Eggs (Pluots)","Dates","Dewberries","Dragon Fruit",

"Elderberry","Eggfruit","Evergreen Huckleberry","Entawak",

"Fig","Farkleberry","Finger Lime",

"Grapefruit","Grapes","Gooseberries","Guava",

"Honeydew melon","Hackberry","Honeycrisp Apples",

"Indian Prune (Plum)","Indonesian Lime","Imbe","Indian Fig",

"Jackfruit","Java Apple","Jambolan",

"Kiwi","Kaffir Lime","Kumquat",

"Lime (Lemon)","Longan","Lychee","Loquat",

"Mango","Mandarin Orange","Mulberry","Melon",

"Nectarine","Navel Orange","Nashi Pear (Asian Pear)",

"Olive","Oranges","Ogeechee Limes","Oval Kumquat",

"Papaya","Persimmon","Paw Paw","Prickly Pear","Peach","Pomegranate","Pineapple",

"Quince","Queen Anne Cherry","Quararibea cordata (Chupa Chupa)",

"Rambutan","Raspberries","Rose Hips",

"Star Fruit","Strawberries","Sugar Baby Watermelon",

"Tomato","Tangerine","Tamarind","Tart Cherries",

"Ugli Fruit","Uniq Fruit","Ugni",

"Vanilla Bean","Velvet Pink Banana","Voavanga",

"Watermelon","Wolfberry","White Mulberry",

"Xigua (Chinese Watermelon)","Ximenia caffra fruit", "Xango Mangosteen Fruit Juice",

"Yellow Passion Fruit","Yunnan Hackberry","Yangmei",

"Zig Zag Vine fruit","Zinfandel Grapes","Zuchinni (a fruit, like tomatoes)"]


var animal = [
"Aardvark","Abyssinian","Adelie Penguin","Affenpinscher","Afghan Hound","African Bush Elephant","African Civet",
"African Clawed Frog","African Forest Elephant","African Palm Civet","African Penguin","African Tree Toad","African Wild Dog",
"Ainu Dog,Airedale Terrier","Akbash","Akita","Alaskan Malamute","Albatross","Aldabra Giant Tortoise","Alligator",
"Alpine Dachsbracke","American Bulldog","American Cocker Spaniel","American Coonhound","American Eskimo Dog","American Foxhound",
"American Pit Bull Terrier","American Staffordshire Terrier","American Water Spaniel","Anatolian Shepherd Dog",
"Angelfish","Ant","Anteater","Antelope","Appenzeller Dog","Arctic Fox","Arctic Hare","Arctic Wolf","Armadillo",
"Asian Elephant","Asian Giant Hornet","Asian Palm Civet","Asiatic Black Bear","Australian Cattle Dog","Australian Kelpie Dog",
"Australian Mist","Australian Shepherd","Australian Terrier","Avocet","Axolotl","Aye Aye",




"Baboon","Bactrian Camel","Badger","Balinese","Banded Palm Civet","Bandicoot","Barb,Barn Owl","Barnacle","Barracuda",
"Basenji Dog","Basking Shark","Basset Hound","Bat","Bavarian Mountain Hound","Beagle","Bear","Bearded Collie","Bearded Dragon",
"Beaver","Bedlington Terrier","Beetle,Bengal Tiger","Bernese Mountain Dog","Bichon Frise","Binturong","Bird","Birds Of Paradise",
"Birman","Bison","Black Bear","Black Rhinoceros","Black Russian Terrier","Black Widow Spider","Bloodhound","Blue Lacy Dog",
"Blue Whale","Bluetick Coonhound","Bobcat","Bolognese Dog","Bombay","Bongo","Bonobo","Booby","Border Collie","Border Terrier",
"Bornean Orang-utan Borneo Elephant","Boston Terrier","Bottle Nosed Dolphin","Boxer Dog","Boykin Spaniel","Brazilian Terrier","Brown Bear",
"Budgerigar","Buffalo","Bull Mastiff","Bull Shark","Bull Terrier","Bulldog","Bullfrog","Bumble Bee","Burmese","Burrowing Frog","Butterfly",
"Butterfly Fish",




"Caiman","Caiman Lizard","Cairn Terrier","Camel","Canaan Dog","Capybara","Caracal","Carolina Dog","Cassowary","Cat","Caterpillar","Catfish",
"Cavalier King Charles Spaniel","Centipede","Cesky Fousek","Chameleon","Chamois","Cheetah","Chesapeake Bay Retriever","Chicken","Chihuahua",
"Chimpanzee","Chinchilla","Chinese Crested Dog","Chinook","Chinstrap Penguin","Chipmunk","Chow Chow","Cichlid","Clouded Leopard",
"Clown Fish","Clumber Spaniel","Coati","Cockroach","Collared Peccary","Collie","Common Buzzard","Common Frog","Common Loon","Common ToadCoral",
"Cottontop Tamarin","Cougar","Cow","Coyote","Crab","Crab-Eating Macaque","Crane","Crested Penguin","Crocodile","Cross River Gorilla",
"Curly Coated Retriever","Cuscus","Cuttlefish",




 'Dachshund',  'Dalmatian',  'Darwin\'s Frog','Deer','Desert Tortoise','Deutsche Bracke','Dhole','Dingo','Discus','Doberman Pinscher','Dodo',
  'Dog','Dogo Argentino','Dogue De Bordeaux', 'Dolphin', 'Donkey', 'Dormouse', 'Dragonfly', 'Drever','Duck', 'Dugong', 'Dunker', 'Dusky Dolphin',
  'Dwarf Crocodile' ,



'Eagle','Earwig','Eastern Gorilla','Eastern Lowland Gorilla','Echidna','Edible Frog','Egyptian Mau','Electric Eel','Elephant','Elephant Seal',
'Elephant Shrew','Emperor Penguin','Emperor Tamarin','Emu', 'English Cocker Spaniel', 'English Shepherd', 'English Springer Spaniel',
'Entlebucher Mountain Dog', 'Epagneul Pont Audemer', 'Eskimo Dog', 'Estrela Mountain Dog', 



'Falcon','Fennec Fox','Ferret','Field Spaniel','Fin Whale','Finnish Spitz','Fire-Bellied Toad','Fish','Fishing Cat','Flamingo','Flat Coat Retriever',
'Flounder','Fly','Flying Squirrel','Fossa','Fox','Fox Terrier','French Bulldog','Frigatebird','Frilled Lizard','Frog','Fur Seal',



'Galapagos Penguin','Galapagos Tortoise','Gar','Gecko','Gentoo Penguin','Geoffroys Tamarin','Gerbil','German Pinscher','German Shepherd','Gharial',
'Giant African Land Snail','Giant Clam','Giant Panda Bear','Giant Schnauzer','Gibbon','Gila Monster','Giraffe','Glass Lizard','Glow Worm','Goat',
'Golden Lion Tamarin','Golden Oriole','Golden Retriever','Goose','Gopher','Gorilla','Grasshopper','Great Dane','Great White Shark','Greater Swiss Mountain Dog',
'Green Bee-Eater','Greenland Dog','Grey Mouse Lemur','Grey Reef Shark','Grey Seal','Greyhound','Grizzly Bear','Grouse','Guinea Fowl','Guinea Pig','Guppy', 



'Hammerhead Shark','Hamster','Hare','Harrier','Havanese','Hedgehog','Hercules Beetle','Hermit Crab','Heron','Highland Cattle','Himalayan','Hippopotamus',
'Honey Bee','Horn Shark','Horned Frog','Horse','Horseshoe Crab','Howler Monkey','Human','Humboldt Penguin','Hummingbird','Humpback Whale','Hyena', 


'Ibis','Ibizan Hound','Iguana','Impala','Indian Elephant','Indian Palm Squirrel','Indian Rhinoceros','Indian Star Tortoise','Indochinese Tiger','Indri',
  'Insect','Irish Setter','Irish WolfHound',




  'Jack Russel','Jackal','Jaguar','Japanese Chin','Japanese Macaque','Javan RhinocerosJavanese','Jellyfish',



  'Kakapo','Kangaroo','Keel Billed Toucan','Killer Whale','King Crab','King Penguin','Kingfisher','Kiwi','Koala','Komodo Dragon','Kudu',




'Labradoodle','Labrador Retriever','Ladybird','Leaf-Tailed Gecko','Lemming','Lemur','Leopard','Leopard Cat','Leopard Seal','Leopard Tortoise','Liger',
'Lion','Lionfish','Little Penguin','Lizard','Llama','Lobster','Long-Eared Owl','Lynx',



'Macaroni Penguin','Macaw','Magellanic Penguin','Magpie','Maine Coon','Malayan Civet','Malayan Tiger','Maltese','Manatee','Mandrill','Manta Ray','Marine Toad',
'Markhor','Marsh Frog','Masked Palm Civet','Mastiff','Mayfly','Meerkat','Millipede','Minke Whale','Mole','Molly','Mongoose','Mongrel','Monitor Lizard','Monkey',
'Monte Iberia Eleuth','Moorhen','Moose','Moray Eel','Moth','Mountain Gorilla','Mountain Lion','Mouse','Mule',




  
  'Neanderthal','Neapolitan Mastiff','Newfoundland','Newt','Nightingale','Norfolk Terrier','Norwegian Forest','Numbat','Nurse Shark',




  
  'Ocelot','Octopus','Okapi','Old English Sheepdog','Olm','Opossum','Orang-utan','Ostrich','Otter','Oyster','Owl',
  
  
  
  'Pademelon','Panther',




 'Parrot','Patas Monkey','Peacock','Pekingese','Pelican','Penguin','Persian','Pheasant','Pied Tamarin','Pig','Pika','Pike','Pink Fairy Armadillo','Piranha',
  'Platypus','Pointer','Poison Dart Frog','Polar Bear','Pond Skater','Poodle','Pool Frog','Porcupine','Possum','Prawn','Proboscis Monkey','Puffer Fish','Puffin',
  'Pug','Puma','Purple Emperor','Puss Moth','Pygmy Hippopotamus','Pygmy Marmoset',




  
  'Quail','Quetzal','Quokka','Quoll',




  'R',
'Rabbit','Raccoon','Raccoon Dog','Radiated Tortoise','Ragdoll','Rat','Rattlesnake','Red Knee Tarantula','Red Panda','Red Wolf','Red-handed Tamarin','Reindeer',
'Rhinoceros','River Dolphin','River Turtle','Robin','Rock Hyrax','Rockhopper Penguin','Roseate Spoonbill','Rottweiler','Royal Penguin','Russian Blue',




  'S',
'Sabre-Toothed Tiger','Saint Bernard','Salamander','Sand Lizard','Saola','Scorpion','Scorpion Fish','Sea Dragon','Sea Lion','Sea Otter','Sea Slug','Sea Squirt',
'Sea Turtle','Sea Urchin', 'Seahorse','Seal','Serval','Sheep','Shih Tzu','Shrimp','Siamese','Siamese Fighting Fish','Siberian','Siberian Husky','Siberian Tiger',
'Silver Dollar','Skunk','Sloth','Slow Worm','Snail', 'Snake','Snapping Turtle','Snowshoe','Snowy Owl','Somali','South China Tiger','Spadefoot Toad','Sparrow',
'Spectacled Bear','Sperm Whale','Spider Monkey','Spiny Dogfish','Sponge', 'Squid','Squirrel','Squirrel Monkey','Sri Lankan Elephant','Staffordshire Bull Terrier',
'Stag Beetle','Starfish','Stellers Sea Cow','Stick Insect','Stingray','Stoat','Striped Rocket Frog','Sumatran Elephant','Sumatran Orang-utan','Sumatran Rhinoceros',
  'Sumatran Tiger','Sun Bear','Swan',


 
  'Tang','Tapanuli Orang-utan','Tapir','Tarsier','Tasmanian Devil','Tawny Owl','Termite','Tetra','Thorny Devil','Tibetan Mastiff','Tiffany','Tiger','Tiger Salamander',
  'Tiger Shark','Tortoise','Toucan','Tree Frog','Tropicbird','Tuatara','Turkey','Turkish Angora',



  
  'Uakari','Uguisu','Umbrellabird',





  'Vampire Bat','Vervet Monkey','Vulture',


  
'Wallaby','Walrus','Warthog','Wasp','Water Buffalo','Water Dragon','Water Vole','Weasel','Welsh Corgi','West Highland Terrier','Western Gorilla',
'Western Lowland Gorilla','Whale Shark','Whippet','White Faced Capuchin','White Rhinoceros','White Tiger','Wild Boar','Wildebeest','Wolf','Wolverine',
'Wombat','Woodlouse','Woodpecker','Woolly Mammoth','Woolly Monkey','Wrasse',




  'XX-Ray Tetra',


  'Y','Yak','Yellow-Eyed Penguin','Yorkshire Terrier',


  
  'Zebra','Zebra Shark','Zebu','Zonkey','Zorse' ]

/*
   for (let l = 0; l < alphaLetter.length; l++) {
    var ee;
    var lty = l;
  //  var tt = alphaLetter[l]
  for (let i = 0; i < animal.length; i++) {
                // only data starting with the choose letter
        if(animal[i].substring(0,1) === alphaLetter[lty])
        {
          var rr = [];
          rr.push(animal[i])
          console.log(alphaLetter[lty]+" number animal: "+rr.length)
        }
      }
     
    } */


  var justGotIn;
    var justGotInId;
//take the user name and send to all socket
  document.getElementById("Submitbution").addEventListener("click", function() {
    
    onlinePeople_h3.style.display = "block";
    profileName.style.display = "block";
    onlinePeople_h3.style.color = "black";
    onlinePeople_h3.style.backgroundColor = "rgb(44, 191, 100)"
    onlinePeople_h3.style.color = "white"
    onlinePeople_h3.setAttribute("class","well")
    profileName.setAttribute("class","well")
    profileName.style.backgroundColor = "rgb(35, 114, 166)"
    profileName.style.position = "relative";
    profileName.style.width = "120px";
    profileName.style.color = "white";
    profileName.style.left = "30px";
    profileName.style.top = "80px";
    profileName.style.fontSize = "23px";


    userName = document.getElementById("userName");

    //str.trim()
    //clientName.trim()
    var clientName = userName.value.trim();
    profileName.innerHTML = clientName.charAt(0).toUpperCase() + clientName.substring(1);
    justGotIn = clientName.charAt(0).toUpperCase() + clientName.substring(1);
    justGotInId = socket.id;

    console.log("id lenght: "+justGotInId.length)

      socket.emit('userJustLogin',{name: justGotIn, id: justGotInId});

      socket.emit('userJustLoginId', justGotInId);

    document.getElementById("initForm").style.display = "none";
    document.getElementById("onlinePeople").style.display = "block";
    document.getElementById("QuizCCFA").style.display = "none";
    userName.value = "";
 
});



// get the online user and Style the online div
socket.on('connect', ()=>{

  
  socket.on('userLoginSendBack', function(userLoginSendBackData){
   
    var userId = [];
    userId.push(userLoginSendBackData.id);
    decorate(userLoginSendBackData.name, userLoginSendBackData.id)

    
 homeButton.addEventListener("click", function(){

  socket.emit("i_m_free", {msg: "free", free_id: justGotInId})

console.log("i_m_free: "+justGotInId)

 reset_game_for_button_home();

  busy_people = [];
  onlinePeople_h3.style.display = "block";
  profileName.style.display = "block";
  onlinePeople_h3.style.color = "black";
  onlinePeople_h3.style.backgroundColor = "rgb(44, 191, 100)"
  onlinePeople_h3.style.color = "white"
  onlinePeople_h3.setAttribute("class","well")
  profileName.setAttribute("class","well")
  profileName.style.backgroundColor = "rgb(35, 114, 166)"
  profileName.style.position = "relative";
  profileName.style.width = "120px";
  profileName.style.color = "white";
  profileName.style.left = "30px";
  profileName.style.top = "80px";
  profileName.style.fontSize = "23px";
   
  document.getElementById("onlinePeople").style.display = "block";
  document.getElementById("chat-container").style.display = "none";
  decorate(userLoginSendBackData.name, userLoginSendBackData.id)

  onlinePeople_h3.innerHTML = `Online people (${userLoginSendBackData.noUser})`
  
 })
    
  onlinePeople_h3.innerHTML = `Online people (${userLoginSendBackData.noUser})`

  onlinePeople_h3.style.backgroundColor = "orange"
  var flash_timer = 1;
     flash_msg = setInterval(() => {

        flash_timer -= 1
        if(flash_timer == 0)
    {
        clearInterval(flash_msg);
        onlinePeople_h3.style.backgroundColor = "rgb(44, 191, 100)"

    }
         
     }, 1000);

    })


})

socket.on("i_m_free_back", function(data){
  document.getElementById(data.free_id+"+chat").style.display = "block"
document.getElementById(data.free_id).style.display = "block"
})

 // decorate function
function decorate(arg1,arg2){

  if (onlinePeople.hasChildNodes()) {
    onlinePeople.innerHTML = '';
  }

  for (let i = 0; i < arg1.length; i++) {
  

  //this.arg1 = arg1

var onlineSelfMade = document.createElement("div");
var firstLetter = document.createElement("div");
var challengeButton = document.createElement("button");
var chatButton = document.createElement("button");


var userIdfromServer;
var divID = arg2[i];



challengeButton.setAttribute("id", divID);
challengeButton.setAttribute("class", "challenge_button");
chatButton.setAttribute("id", divID+"+chat");
chatButton.setAttribute("class", "chat_Button");
onlineSelfMade.setAttribute("class", "userBox");
firstLetter.setAttribute("class", "firstLetter");
onlineSelfMade.setAttribute("id", divID+"+div");

firstLetter.innerText = arg1[i].charAt(0).toUpperCase() + arg1[i].substring(1);
challengeButton.innerText = "Challenge";
chatButton.innerText = "Chat";



//chat button  *******************************************************************
chatButton.addEventListener("click", function() {


 
  // id of the button you clicked on
  idOfPendingButton = event.target.id;
  var person_Chatted = event.target.id;

  // using slice we trim '+chat' from the string
  // this allow us to get just the ID
  var id_receiver_process = person_Chatted.slice(-26,-5);
  var chat_Sender = document.getElementById(person_Chatted)
  console.log("person_Chatted: "+person_Chatted)
  chat_Sender.setAttribute("class","chat_Button")
  chat_Sender.innerHTML = "pending...";

  console.log("idOfPendingButton chat click: "+idOfPendingButton)
     
  //var id_chat = justGotInId+"+chat";
  //console.log("id_chat: "+id_chat)

  

// send chat request to receiver
    socket.emit('i_wanna_chat', {name: justGotIn, receiver: arg1[i], sender: justGotIn, id: socket.id, id_receiver: id_receiver_process})

  // confirmation from server that sender join the room
    socket.on('joined-chat', function(data){
      console.log('joined-chat event: '+data)
    })

    // confirmation from server that receiver join the room
    socket.on("joined_chat_receiver", function(data){
      console.log(data.msg)
    })

    // receiver accept chat request
    socket.on('chat_Accepted_Response', function(data){
        
        
    profileName.style.display = "none";
      document.getElementById("profileName_chat").innerHTML =justGotIn;
      onlinePeople.style.display = "none";
      onlinePeople_h3.style.display = "none";
      profileName.style.display = "none";
      document.getElementById("chat-container").style.display = "block";

      

          document.getElementById("sender").addEventListener("click", function() {

                    
            if(input_msg.value.trim().length > 0)
            {
              //console.log("input_msg.value: "+input_msg.value)
              var message = input_msg.value;
              socket.emit('private-message', {msg: message, id: socket.id, current_msg_sender: justGotIn})
              input_msg.value = "";

            }

          })     // end of send message button ************************  

                      
              // beginning of private-message-back  ***************************
              socket.on('private-message-back', function(data){
                          
                document.getElementById("messageNotice").play();
  
                console.log("private-message-back event: "+data.msg)

                    
    if(data.msg_sender == justGotIn)
    {

                    
      //declaring the receive variables (grey)
      var rc = document.createElement("div");
      var rci = document.createElement("div");
      var rmr = document.createElement("div");
      var rmis = document.createElement("div");
      var pCreated = document.createElement("p");
      var timeCreated = document.createElement("span");

      pCreated.innerText = data.msg;
      timeCreated.innerText = data.msg_sender+"    "+itTime();

                    
      //styling Receive-msg id= receivedMsg = rmr
      rmr.style.display = 'inline-block';
      rmr.style.padding = '0 0 0 10px';
      rmr.style.verticalAlign = 'top';
      rmr.style.width = '92%';

                    
      //styling Receive-msg inbox send  id = send8
      rmis.style.width = '70%';

      //styling the paragraph Received grey color
      pCreated.style.background = '#efefef none repeat scroll 0 0';
      pCreated.style.borderRadius = '0px 20px 20px 20px';
      pCreated.style.color = '#646464';
      pCreated.style.fontSize = '14px';
      pCreated.style.margin = '0';
      pCreated.style.padding = '5px 10px 5px 12px';
      pCreated.style.width = '100%';
                    
      // styling time/name section
      timeCreated.style.color = '#777';
      timeCreated.style.display = 'block';
      timeCreated.style.fontSize = '12px';
      timeCreated.style.margin = '8px 0 8px';

      msgPage.appendChild(rc);
      rc.appendChild(rci);
      rc.appendChild(rmr);
      rmr.appendChild(rmis);
      rmis.appendChild(pCreated);
      rmis.appendChild(timeCreated);
      msgPage.scrollTo(0,msgPage.scrollHeight);

    }else
    {

      //declaring the outgoing msg variables (green)
      var oc = document.createElement("div");
      var ocm = document.createElement("div");
      var oci = document.createElement("div");
      var pCreated = document.createElement("p");
      var timeCreated = document.createElement("span");

      //styling outgoing-chats
      oc.style.overflow = 'hidden'; 
      oc.style.margin = '26px 20px';

      //styling the paragraph outgoing green color
      pCreated.style.background = 'rgb(0, 74, 119) none repeat scroll 0 0';
      pCreated.style.color = '#fff';
      pCreated.style.borderRadius = '20px 0px 20px 20px';
      pCreated.style.fontSize = '14px';
      pCreated.style.margin = '0';
      pCreated.style.padding = '5px 10px 5px 12px';
      pCreated.style.width = '100%';


      // styling time/name section
      timeCreated.style.color = '#777';
      timeCreated.style.display = 'block';
      timeCreated.style.fontSize = '12px';
      timeCreated.style.margin = '8px 0 0';

      //styling outgoing-chats-msg
      ocm.style.float = 'right'; 
      ocm.style.width = '70%';
      ocm.style.marginLeft = '0';

      //styling outgoing-chats-img
      oci.style.display = 'inline-block';
      oci.style.width = '20px';
      oci.style.float = 'right';

      pCreated.innerText = data.msg;
      timeCreated.innerText = data.msg_sender +" "+itTime();


      msgPage.appendChild(oc);
      oc.appendChild(ocm);
      ocm.appendChild(pCreated);
      ocm.appendChild(timeCreated);
      oc.appendChild(oci);
      msgPage.scrollTo(0,msgPage.scrollHeight);

    } // end of else statement

            }) // end of private-message-back *********************************

      })  // end of chat_Accepted_Response
      

}) // end of chat button *******************************************************************



  /*
 homeButton.addEventListener("click", function(){
   
  document.getElementById("onlinePeople").style.display = "block";
  document.getElementById("chat-container").style.display = "none";

 }) */



challengeButton.addEventListener("click", function() {

 
// id of the button you clicked on
   idOfPendingButton = event.target.id;
  var person_Chatted = event.target.id;

  console.log("idOfPendingButton: "+idOfPendingButton)

  // using slice we trim '+chat' from the string
  // this allow us to get just the ID
  var id_receiver_process = person_Chatted
  var chat_Sender = document.getElementById(person_Chatted)
  chat_Sender.setAttribute("class","challenge_button")
  chat_Sender.innerHTML = "pending...";

  console.log("id_receiver_process.lenght: "+id_receiver_process.length)
  console.log("in challenge id_receiver_process: "+id_receiver_process)

// send challenge request to receiver
    socket.emit('iamchallenging', {receiver: arg1[i], sender: justGotIn, id: socket.id, id_receiver: id_receiver_process })

    socket.on('joined', function(data){
      console.log('joined event: '+data)


 socket.on("challengeAcceptedResponse", function (data) {

   
   chooseLetter.innerText = data.letter ;


      document.getElementById(idOfPendingButton).style.position = "relative";
      document.getElementById(idOfPendingButton).style.top = "-70px";
      document.getElementById(idOfPendingButton).style.left = "50%";

      var pendingButton =  document.getElementById(idOfPendingButton)
     pendingButton.innerHTML = data.msg;
  
      
  
       
      var timeTo = 2;
      actionFlash = setInterval(function(){ 
        timeTo -= 1
        if(timeTo == 0){

          clearInterval(actionFlash);
          
      var gameStartin = 3;
         actionFlash2 = setInterval(function()
          {
            gameStartin -= 1
            document.getElementById(idOfPendingButton).innerHTML = `game start in ${gameStartin} sec`;
            if (gameStartin == 0) {
              clearInterval(actionFlash2)
               onlinePeople.style.display = "none";
               profileName.style.display = "none";
               onlinePeople_h3.style.display = "none";
               startCounting();
              document.getElementById("QuizCCFA").style.display = "block";



              //*****************     replay    ********************************
              console.log("replay.innerText: "+replay.innerText)
              replay.addEventListener("click", function(){

                if(replay.innerText == "Replay")
                {
                 var request_them = "request"
                 console.log("replay.innerText: "+replay.innerText)
                   socket.emit("replay_option_sender", {msg: request_them, id: socket.id})
                   replay.innerText = "request";
                }
              })


              socket.on("replay_option_back_receiver", function(data){

                document.getElementById("notification_up").play();

                replay.innerText = data.msg;
                console.log("receiver data.msg: "+data.msg)
                  // chat option
                  replay.addEventListener('click', function(){

                if(replay.innerText == "request")
                {
                  replay_game();
                    
                console.log("chooseLetter.innerText_replay: "+chooseLetter.innerText)
                  socket.emit("in_replay_receiver_accepted", {msg: "block", id: socket.id, letter_replay: chooseLetter.innerText })

                  console.log("replay.innerText: "+replay.innerText)
                  replay.innerText = "Replay";
              
              }
               
              }) 
                 
               }) 
               
                //*****************     end replay    ********************************


              
              anime({
                targets: '#chooseLetter',
                translateY: [
                    {value: 184, duration: 100 },
                    {value: 0, duration: 800}
                ]
              });

             
              var receiver = data.receiver;
              var sender = justGotIn
              var players_name = [ sender, receiver];
              
             

              // list of opponents
              for(let i = 0; i < players_name.length; i++) {

                var contest_div = document.createElement("div");
                var span_div = document.createElement("span");

                contest_div.setAttribute("class", "playerScore_div");
                span_div.setAttribute("class", "player_1_scrore");
                span_div.setAttribute("id", "player_score_"+i);
  
                contest_div.innerHTML = players_name[i];
                span_div.innerHTML = ":  0 ";
  
                contest_div.appendChild(span_div);
                playerScore_div.appendChild(contest_div);

              }

              // opponent score
              socket.on("player_0_score_Response", function(data){

                if(justGotIn == data.receiver)
                {
                  document.getElementById("player_score_1").innerHTML = ":  "+data.score+" ";
                }
              })

              console.log("chatinGame.innerText: "+chatinGame.innerText)
                // chat option
                chatinGame.addEventListener('click', function(){
                  if(chatinGame.innerText == "Chat")
             {
              var request_them = "request"
              console.log("chatinGame.innerText: "+chatinGame.innerText)
                socket.emit("chat_option_sender", {msg: request_them, id: socket.id})
                chatinGame.innerText = "request";
             }
               }) 

               socket.on("chat_option_back_receiver", function(data){
                           
                document.getElementById("notification_up").play();
  
                chatinGame.innerText = data.msg;
                console.log("receiver data.msg: "+data.msg)
                  // chat option
              chatinGame.addEventListener('click', function(){

                if(chatinGame.innerText == "request")
                {
                  socket.emit("in_game_chat_receiver_accepted", {msg: "block", id: socket.id})

                  console.log("chatinGame.innerText: "+chatinGame.innerText)
                document.getElementById("QuizCCFA").style.display = "none";

                document.getElementById("chat-container").style.display = "block";
  
              }
               
              }) 
                 
               }) 

               

               document.getElementById("sender").addEventListener("click", function() {
  
                      
                if(input_msg.value.trim().length > 0)
                {
                  //console.log("input_msg.value: "+input_msg.value)
                  var message = input_msg.value;
                  socket.emit('private-message', {cmsg: "using challenge way sender", msg: message, id: socket.id, current_msg_sender: justGotIn})
                  input_msg.value = "";
    
                }
    
              })     // end of send message button ************************  



              socket.on('private-message-back', function(data){
                          
                document.getElementById("messageNotice").play();
  
   
                console.log('msg: '+data.msg)
                console.log('msg_sender: '+data.msg_sender)
                messageStructure(data)
              })

              
               socket.on("in_game_chat_sender_accepted_back", function(data){
                console.log("accepted in game chat: "+ data);
                document.getElementById("QuizCCFA").style.display = "none";
                document.getElementById("chat-container").style.display = "block";
  
              })


              socket.on("in_replay_sender_accepted_back", function(data){
                replay_game();
                console.log("chooseLetter.innerText_replay: "+chooseLetter.innerText)

                chooseLetter.innerText = data.letter_replay;
                console.log("chooseLetter.innerText_replay, data.letter_replay: "+chooseLetter.innerText)
                replay.innerText = "Replay";
              })
          

                // country instructions/codes *********************************************

              
                placeholder_Option(country, AcountryInput)
           
                AcountryInput.addEventListener("keyup", function(event) {
                  
                    if (event.keyCode === 13) {

                      var wrong = true;   
              country_edit_button.style.display = "block";
              incorrect.style.display = "block"
  
              
              console.log('i_answer: '+i_answer);

                        if(AcountryInput.value)
                        {
                                           
                       socket.emit('Country', { country: AcountryInput.value, id: socket.id});
               
        
                       for (let i = 0; i < country.length; i++) {

                        // only data starting with the choose letter
                    if(country[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                    {
                      AcountryInput.placeholder = i+" options"
                      // score increase, only if input match data
                if (AcountryInput.value.toLowerCase() == country[i].toLowerCase())
                { 
                  wrong = false;
                console.log("input match")
                 // display correct icon, increase points and hide incorrect icon
                 socket.emit("Correct_answer_no_repeat", AcountryInput.value)
                 country_edit_button.style.display = "none";
                incorrect.style.display = "none";
                correct.style.display = "block";
                 scoreIncrease += 25;
                 document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                 socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

                    // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) {
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AcountryInput.value.toLowerCase() == i_answer[i] ) {
                  wrong = true;
                      console.log('repeatetion detected');
                      console.log(AcountryInput.value+' is already used');
                      country_edit_button.style.display = "block";
                      used_button.style.display = "block";
                      correct.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                }
                 
                   }

                        }
                       }

                       console.log("wrong:"+wrong)
                
                       if (wrong) {
                         document.getElementById("wrongSound").play(); console.log("wrong sound")
                       }else {
                         console.log("there was no repeat")   
                         document.getElementById("pointsSound").play();
                         console.log("right sound")
                       }

                        }

                    }
        
                });

               

                AconfirmButton.addEventListener("click", function() {

                  var wrong; 
                  country_edit_button.style.display = "block";
                 incorrect.style.display = "block";


                if(AcountryInput.value) 
                {

               socket.emit('Country', { country: AcountryInput.value, id: socket.id});
       

                for (let i = 0; i < country.length; i++) {

                  // only data starting with the choose letter
              if(country[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
              {
                // score increase, only if input match data
               if (AcountryInput.value.toLowerCase() == country[i].toLowerCase())
                {  
                  wrong = false;
                console.log("input match")
                 // display correct icon, increase points and hide incorrect icon
                 socket.emit("Correct_answer_no_repeat", AcountryInput.value)
                 country_edit_button.style.display = "none";
                incorrect.style.display = "none";
                correct.style.display = "block";
                 scoreIncrease += 25;
                 document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                 socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

                 anime({
                  targets: '#correct',
                  translatex: [
                      {value: 184, duration: 100 },
                      {value: 0, duration: 800}
                  ]
                });


                    // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) {
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AcountryInput.value.toLowerCase() == i_answer[i] ) { 
                  wrong = true;
                      console.log('repeatetion detected');
                      console.log(AcountryInput.value+' is already used');
                      country_edit_button.style.display = "block";
                      used_button.style.display = "block";
                      correct.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                }  
                 
                   }
                  }
                 }

                 console.log("wrong:"+wrong)
                
                 if (wrong) {
                   document.getElementById("wrongSound").play(); console.log("wrong sound")
                 }else {
                   console.log("there was no repeat")   
                   document.getElementById("pointsSound").play();
                   console.log("right sound")
                   
                 }

                }

              })


             // populate the array answer
             // so we know that some name was already been use
             socket.on('Correct_answer_no_repeat_back', function(data){
               i_answer.push(data);
             })


             //socket country
             socket.on('Country-response', function(msgImoToClient){
                AcountryData.innerText = msgImoToClient;
                AfieldAndButtondiv.style.display = "none";
                AcountryData.style.display = "block";
                    })


                 //socket country
              socket.on('Country-response-receiver', function(data){
             AcountryData_receiver.innerText = data;
             AfieldAndButtondiv_receiver.style.display = "none";
             AcountryData_receiver.style.display = "block";
            }) 


            // edit data
            country_edit_button.addEventListener('click', function() {
              var edit_data = AcountryData.value;
              AcountryData.style.display = "none";
              country_edit_button.style.display = "none";
              incorrect.style.display = "none";
              AcountryInput.innerHTML = edit_data;
              AfieldAndButtondiv.style.display = "block";
              used_button.style.display = "none";
            })

          

            // end of country ********************************************************



            // beginning of car code *************************************************

            placeholder_Option(car, AcarInput)
           AcarInput.addEventListener("keyup", function(event) {

                if (event.keyCode === 13) {

                        
                     
            var wrong = true;       
                  car_edit_button.style.display = "block";                            
                incorrect_car.style.display = "block";

                    if(AcarInput.value)
                    {
                    socket.emit('Car', { car: AcarInput.value, id: socket.id});
                     
             
                     for (let i = 0; i < car.length; i++) {
                            // only data starting with the choose letter
                    if(car[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                    {
                       // score increase, only if input match data
             if (AcarInput.value.toLowerCase() == car[i].toLowerCase())
             { 
               
              wrong = false;
              console.log("input match")
              // display correct icon, increase points and hide incorrect icon
              socket.emit("Correct_answer_no_repeat", AcarInput.value)

            car_edit_button.style.display = "none";
              incorrect_car.style.display = "none";
              correct_car.style.display = "block";
               scoreIncrease += 25;
               document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
               socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
            
                 // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) {
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AcarInput.value.toLowerCase() == i_answer[i] ) {
                  wrong = true;
                      console.log('repeatetion detected');
                      console.log(AcarInput.value+' is already used');
                      car_edit_button.style.display = "block";
                      used_button_car.style.display = "block";
                      correct_car.style.display = "none";
                    correct_car.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                }   

              }
                      }
                     }

                     console.log("wrong:"+wrong)
                
                     if (wrong) {
                       document.getElementById("wrongSound").play(); console.log("wrong sound")
                     }else {
                       console.log("there was no repeat")   
                       document.getElementById("pointsSound").play();
                       console.log("right sound")
                     }

                    }
                }


            });

            AcarconfirmButton.addEventListener("click", function() {

            
              var wrong = true; 
              car_edit_button.style.display = "block";                            
              incorrect_car.style.display = "block";

              if(AcarInput.value)
                {
                socket.emit('Car', { car: AcarInput.value, id: socket.id});
                 
         
                for (let i = 0; i < car.length; i++) {
                  // only data starting with the choose letter
          if(car[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
          {
             // score increase, only if input match data
             if (AcarInput.value.toLowerCase() == car[i].toLowerCase())
             { 
                
              wrong = false;
              console.log("input match")
              // display correct icon, increase points and hide incorrect icon
              socket.emit("Correct_answer_no_repeat", AcarInput.value)

            car_edit_button.style.display = "none";
              incorrect_car.style.display = "none";
              correct_car.style.display = "block";
               scoreIncrease += 25;
               document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
               socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
            
                 // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) { 
                wrong = true;
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AcarInput.value.toLowerCase() == i_answer[i] ) {
                      console.log('repeatetion detected');
                      console.log(AcarInput.value+' is already used');
                     car_edit_button.style.display = "block";
                     used_button_car.style.display = "block";
                     correct_car.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                }   

              }
            }
           }

           console.log("wrong:"+wrong)
                
           if (wrong) {
             document.getElementById("wrongSound").play(); console.log("wrong sound")
           }else {
             console.log("there was no repeat")   
             document.getElementById("pointsSound").play();
             console.log("right sound")
           }

                }
         })
         
         
         
                        //socket Car 
                     socket.on('Car-response', function(msgCarToClient){
                     AcarData.innerText = msgCarToClient;
                     AcarfieldAndButtondiv.style.display = "none";
                     AcarData.style.display = "block";
                         })

                           //socket country
              socket.on('Car-response-receiver', function(data){
                AcarData_receiver.innerText = data;
                AcarfieldAndButtondiv_receiver.style.display = "none";
                AcarData_receiver.style.display = "block";
              }) 

                // edit data
            car_edit_button.addEventListener('click', function() {
              var edit_data_car = AcarData.value;
            AcarData.style.display = "none";
              car_edit_button.style.display = "none";
            incorrect_car.style.display = "none";
             AcarInput.innerHTML = edit_data_car;
             AcarfieldAndButtondiv.style.display = "block";
             used_button_car.style.display = "none";
            })

            // end of car code *************************************************


            // beginning of fruit code *************************************************

            placeholder_Option(fruit, AFruitInput)
           AFruitInput.addEventListener("keyup", function(event) {

                if (event.keyCode === 13) {

                  var wrong = true; 
                  fruit_edit_button.style.display = "block";
                  incorrect_fruit.style.display = "block";

                    if(AFruitInput.value)
                    {
                        socket.emit('Fruit',  { fruit: AFruitInput.value, id: socket.id} );
                      

                        for (let i = 0; i < fruit.length; i++) {
                          // only data starting with the choose letter
                          if(fruit[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                          {
                            // score increase, only if input match data
                            if (AFruitInput.value.toLowerCase() == fruit[i].toLowerCase())
                            {   
                              wrong = false;
                              socket.emit("Correct_answer_no_repeat", AFruitInput.value)
                                  fruit_edit_button.style.display = "none";
                                  incorrect_fruit.style.display = "none";
                                  correct_fruit.style.display = "block";
                              scoreIncrease += 25;
                              document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                              socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );


                                   // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) {
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AFruitInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                  wrong = true;
                      console.log('repeatetion detected');
                      console.log(AFruitInput.value+' is already used');
                    fruit_edit_button.style.display = "block";
                   used_button_fruit.style.display = "block";
                    correct_fruit.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                } 


                            }
                          }
                          }

                          console.log("wrong:"+wrong)
                
                          if (wrong) {
                            document.getElementById("wrongSound").play(); console.log("wrong sound")
                          }else {
                            console.log("there was no repeat")   
                            document.getElementById("pointsSound").play();
                            console.log("right sound")
                          }

                    }
                }


            });

              AFruitconfirmButton.addEventListener("click", function() {

                fruit_edit_button.style.display = "block";
                incorrect_fruit.style.display = "block";

                  if(AFruitInput.value)
                    {
                        socket.emit('Fruit',  { fruit: AFruitInput.value, id: socket.id} );
                      

                        for (let i = 0; i < fruit.length; i++) {
                          // only data starting with the choose letter
                          if(fruit[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                          {
                             // score increase, only if input match data
                             if (AFruitInput.value.toLowerCase() == fruit[i].toLowerCase())
                             {
                               socket.emit("Correct_answer_no_repeat",  AFruitInput.value)
                                   fruit_edit_button.style.display = "none";
                                   incorrect_fruit.style.display = "none";
                                   correct_fruit.style.display = "block";
                               scoreIncrease += 25;
                               document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                               socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
 
 
                                    // check for repeat answer
               for (let i = 0; i < i_answer.length; i++) {
                 console.log("checking for repeat")
                 console.log('i_answer element: '+i_answer[i]);
                 if( AFruitInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                       console.log('repeatetion detected');
                       console.log(AFruitInput.value+' is already used');
                     fruit_edit_button.style.display = "block";
                    used_button_fruit.style.display = "block";
                     correct_fruit.style.display = "none";
                       scoreIncrease -= 25;
                       document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                       socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
      
                       //incorrect.style.display = "block"
                  }
                 } 
 
 
                             }
                          }
                          }
                    }
              })

              //socket Fruit
              socket.on('Fruit-response', function(msgFruitToClient){
                      AFruitData.innerText = msgFruitToClient;
                      AFruitfieldAndButtondiv.style.display = "none";
                      AFruitData.style.display = "block";
                              })


                    //socket Fruit
              socket.on('Fruit-response-receiver', function(data){
                AFruitData_receiver.innerText = data;
                AFruitfieldAndButtondiv_receiver.style.display = "none";
                AFruitData_receiver.style.display = "block";
              })          
              
              
                // edit data
          fruit_edit_button.addEventListener('click', function() {
              var edit_data_fruit = AFruitData.value;
              AFruitData.style.display = "none";
              fruit_edit_button.style.display = "none";
          incorrect_fruit.style.display = "none";
           AFruitInput.innerHTML = edit_data_fruit;
           AFruitfieldAndButtondiv.style.display = "block";
           used_button_fruit.style.display = "none";
            })
                          
              // end of fruit code *************************************************
              
              

                  // beginning of animal code *************************************************
                                // Animal

                                placeholder_Option(animal, AanimalInput)
                AanimalInput.addEventListener("keyup", function(event) {

                    if (event.keyCode === 13) {

                      var wrong = true; 
                     Animal_edit_button.style.display = "block";
                    incorrect_Animal.style.display = "block";
    

                        if(AanimalInput.value)
                        {
    
                        socket.emit('Animal', { animal: AanimalInput.value, id: socket.id});
    
                        for (let i = 0; i < animal.length; i++) {
                          if(animal[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                          {
                                    // score increase, only if input match data
                  if (AanimalInput.value.toLowerCase() == animal[i].toLowerCase())
                  {
                    wrong = false;
                    socket.emit("Correct_answer_no_repeat", AanimalInput.value)
                    Animal_edit_button.style.display = "none";
                  incorrect_Animal.style.display = "none";
                  correct_Animal.style.display = "block";
                    scoreIncrease += 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

             // check for repeat answer
             for (let i = 0; i < i_answer.length; i++) {
              console.log("checking for repeat")
              console.log('i_answer element: '+i_answer[i]);
              if( AanimalInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                wrong = true;
                    console.log('repeatetion detected');
                    console.log( AanimalInput.value+' is already used');
                Animal_edit_button.style.display = "block";
               used_button_animal.style.display = "block";
                correct_Animal.style.display = "none";
                    scoreIncrease -= 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
   
                    //incorrect.style.display = "block"
               }
              } 



                  }
                                  }
                                  }

                                  console.log("wrong:"+wrong)
                
                                  if (wrong) {
                                    document.getElementById("wrongSound").play(); console.log("wrong sound")
                                  }else {
                                    console.log("there was no repeat")   
                                    document.getElementById("pointsSound").play();
                                    console.log("right sound")
                                  }

                                  console.log("wrong:"+wrong)
                
                                  if (wrong) {
                                    document.getElementById("wrongSound").play(); console.log("wrong sound")
                                  }else {
                                    console.log("there was no repeat")   
                                    document.getElementById("pointsSound").play();
                                    console.log("right sound")
                                  }
                        
                        }

                    }
                });



                  AanimalconfirmButton.addEventListener("click", function() {

                    var wrong = true;
                    Animal_edit_button.style.display = "block";
                    incorrect_Animal.style.display = "block";

                    if(AanimalInput.value)
                      {

                      socket.emit('Animal', { animal: AanimalInput.value, id: socket.id});

                      for (let i = 0; i < animal.length; i++) {
                         // score increase, only if input match data
                  if (AanimalInput.value.toLowerCase() == animal[i].toLowerCase())
                  {
                    wrong = false;
                    socket.emit("Correct_answer_no_repeat", AanimalInput.value)
                    Animal_edit_button.style.display = "none";
                  incorrect_Animal.style.display = "none";
                  correct_Animal.style.display = "block";
                    scoreIncrease += 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

             // check for repeat answer
             for (let i = 0; i < i_answer.length; i++) {
              console.log("checking for repeat")
              console.log('i_answer element: '+i_answer[i]);
              if( AanimalInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                wrong = true;
                    console.log('repeatetion detected');
                    console.log( AanimalInput.value+' is already used');
                Animal_edit_button.style.display = "block";
               used_button_animal.style.display = "block";
                correct_Animal.style.display = "none";
                    scoreIncrease -= 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
   
                    //incorrect.style.display = "block"
               }
              } 



                  }
                      }

                      console.log("wrong:"+wrong)
                
                      if (wrong) {
                        document.getElementById("wrongSound").play(); console.log("wrong sound")
                      }else {
                        console.log("there was no repeat")   
                        document.getElementById("pointsSound").play();
                        console.log("right sound")
                      }

                      }
                  })



                  //socket Animal
                  socket.on('Animal-response', function(msgAnimalToClient){
                    AanimalData.innerText = msgAnimalToClient;
                    AanimalfieldAndButtondiv.style.display = "none";
                    AanimalData.style.display = "block";
                  })


                      //socket Animal
                  socket.on('Animal-response-receiver', function(data){
                    AanimalData_receiver.innerText = data;
                    AanimalfieldAndButtondiv_receiver.style.display = "none";
                    AanimalData_receiver.style.display = "block";
                  }) 

                    // edit data
                  Animal_edit_button.addEventListener('click', function() {
                      var edit_data_Animal = AanimalData.value;
                      AanimalData.style.display = "none";
                      Animal_edit_button.style.display = "none";
                      incorrect_Animal.style.display = "none";
                  AanimalInput.innerHTML = edit_data_Animal;
                AanimalfieldAndButtondiv.style.display = "block";
                used_button_animal.style.display = "none";
                    })

                  // end of animal code *************************************************


            } // end of if statement / once timer done show game UI
       
          },1000); // end of action2 / second till game start

        

        } // end of timeto if statement
        
        }, 1000); // end time till game timer start / timeto
  
       pendingButton.setAttribute("class", "btn btn-success")

       receiver_name.innerText = data.receiver


      }) // end of challengeAcceptedResponse


    }) // end of joined event



    username.innerText = justGotIn.charAt(0).toUpperCase() + justGotIn.substring(1);

});

onlinePeople.appendChild(onlineSelfMade);
onlineSelfMade.appendChild(firstLetter);
onlineSelfMade.appendChild(chatButton);
  onlineSelfMade.appendChild(challengeButton);
}



for (let i = 0; i < busy_people.length; i++) {

 if(busy_people[i] !== justGotInId)
{

console.log("loop "+[i]+" busy_people[i]: "+busy_people[i])

document.getElementById(busy_people[i]+"+chat").style.display = "none"
document.getElementById(busy_people[i]).style.display = "none"

}
  
}



}  // end of decorate function


// hide the person div in public, when busy with a other user
socket.on('busy_person_challenge', function(data){
  var busy_person_challenge = data.sender;
  var busy_person_challenge_receiver = data.receiver;
  console.log("busy_person_challenge_receiver: "+busy_person_challenge_receiver)
  console.log("busy_person_challenge: "+busy_person_challenge)


  if(busy_person_challenge == justGotInId || busy_person_challenge_receiver == justGotInId)
  {
  console.log('show the chat')
  }else
  {
    console.log('hide everything')
    document.getElementById(busy_person_challenge+"+chat").style.display = "none"
    document.getElementById(busy_person_challenge).style.display = "none"
    document.getElementById(busy_person_challenge_receiver+"+chat").style.display = "none"
    document.getElementById(busy_person_challenge_receiver).style.display = "none"
    //document.getElementById("busy_person").style.display = "block"
  }
})


// hide the person div in public, when busy with a other user
socket.on('busy_person', function(data){

  busy_people.push(data.sender)
  busy_people.push(data.receiver)
  

  var busy_person_chat = data.sender;
  var busy_person_chat_receiver = data.receiver;
  console.log("busy_person_chat_receiver: "+busy_person_chat_receiver)


  if(busy_person_chat == justGotInId || busy_person_chat_receiver == justGotInId)
  {
  console.log('show the chat')
  console.log("busy_people.length: "+busy_people.length)
  console.log("busy_people: "+busy_people[0])
  console.log("busy_people: "+busy_people[1])
  }else
  {
    console.log('hide everything')
    document.getElementById(busy_person_chat+"+chat").style.display = "none"
    document.getElementById(busy_person_chat).style.display = "none"
    document.getElementById(busy_person_chat_receiver+"+chat").style.display = "none"
    document.getElementById(busy_person_chat_receiver).style.display = "none"
    //document.getElementById("busy_person").style.display = "block"
  }
})



// receive chat request
socket.on('chat_Receiver', function(data){

  document.getElementById("notification_up").play();

  if(data.receiver == justGotIn){

    console.log("justGotInId: "+justGotInId)
    var chat_Receiver = document.getElementById(justGotInId+"+chat")
     document.getElementById(justGotInId).style.display = "none";
    chat_Receiver.innerHTML = data.name + " request Chat"; /*data.sender+" request chat";*/

    var  panelBodyUser = document.getElementById(justGotInId+"+div");
      var acceptButton = document.createElement("button")
      var rejectButton = document.createElement("button")
      acceptButton.setAttribute("class", "btn btn-success")
      rejectButton.setAttribute("class", "btn btn-danger")
      acceptButton.setAttribute("id", "chat_accept")
      rejectButton.setAttribute("id", "chat_decline")
      acceptButton.style.display = "block";
      rejectButton.style.display = "block";
      acceptButton.innerText = "accept";
      rejectButton.innerText = "decline";
      panelBodyUser.appendChild(acceptButton);
      panelBodyUser.appendChild(rejectButton);

      // accept chat
      acceptButton.addEventListener("click", function(){

       socket.emit('chat_Accepted', {msg: "i accept your chat request", dna: data.id, receiver: data.receiver})

        
        onlinePeople.style.display = "none";
        onlinePeople_h3.style.display = "none";
        profileName.style.display = "none";
        document.getElementById("chat-container").style.display = "block";
        document.getElementById("profileName_chat").innerHTML = "profile Name: "+justGotIn;


          // beginning of send message button ************************

          document.getElementById("sender").addEventListener("click", function() {

                            
            if(input_msg.value.trim().length > 0)
            {    
              console.log('data.id: '+ data.id)
              console.log("input_msg.value: "+input_msg.value)
              var message = input_msg.value;
              socket.emit('private-message', {msg: message, id: data.id, current_msg_sender: justGotIn})
              input_msg.value = "";
            }
          }) // end of send message button ************************  
           

          // beginning of private-message-back  ************************

          socket.on('private-message-back', function(data){
                          
            document.getElementById("messageNotice").play();


          console.log("private-message-back event: "+data.msg)

    
          if(data.msg_sender == justGotIn)
          {
      
                          
            //declaring the receive variables (grey)
            var rc = document.createElement("div");
            var rci = document.createElement("div");
            var rmr = document.createElement("div");
            var rmis = document.createElement("div");
            var pCreated = document.createElement("p");
            var timeCreated = document.createElement("span");
      
            pCreated.innerText = data.msg;
            timeCreated.innerText = data.msg_sender+"    "+itTime();
      
                          
            //styling Receive-msg id= receivedMsg = rmr
            rmr.style.display = 'inline-block';
            rmr.style.padding = '0 0 0 10px';
            rmr.style.verticalAlign = 'top';
            rmr.style.width = '92%';
      
                          
            //styling Receive-msg inbox send  id = send8
            rmis.style.width = '70%';
      
            //styling the paragraph Received grey color
            pCreated.style.background = '#efefef none repeat scroll 0 0';
            pCreated.style.borderRadius = '0px 20px 20px 20px';
            pCreated.style.color = '#646464';
            pCreated.style.fontSize = '14px';
            pCreated.style.margin = '0';
            pCreated.style.padding = '5px 10px 5px 12px';
            pCreated.style.width = '100%';
                          
            // styling time/name section
            timeCreated.style.color = '#777';
            timeCreated.style.display = 'block';
            timeCreated.style.fontSize = '12px';
            timeCreated.style.margin = '8px 0 8px';
      
            msgPage.appendChild(rc);
            rc.appendChild(rci);
            rc.appendChild(rmr);
            rmr.appendChild(rmis);
            rmis.appendChild(pCreated);
            rmis.appendChild(timeCreated);
            msgPage.scrollTo(0,msgPage.scrollHeight);
      
          }else
          {
      
            //declaring the outgoing msg variables (green)
            var oc = document.createElement("div");
            var ocm = document.createElement("div");
            var oci = document.createElement("div");
            var pCreated = document.createElement("p");
            var timeCreated = document.createElement("span");
      
            //styling outgoing-chats
            oc.style.overflow = 'hidden'; 
            oc.style.margin = '26px 20px';
      
            //styling the paragraph outgoing green color
            pCreated.style.background = 'rgb(0, 74, 119) none repeat scroll 0 0';''
            pCreated.style.color = '#fff';
            pCreated.style.borderRadius = '20px 0px 20px 20px';
            pCreated.style.fontSize = '14px';
            pCreated.style.margin = '0';
            pCreated.style.padding = '5px 10px 5px 12px';
            pCreated.style.width = '100%';
      
      
            // styling time/name section
            timeCreated.style.color = '#777';
            timeCreated.style.display = 'block';
            timeCreated.style.fontSize = '12px';
            timeCreated.style.margin = '8px 0 0';
      
            //styling outgoing-chats-msg
            ocm.style.float = 'right'; 
            ocm.style.width = '70%';
            ocm.style.marginLeft = '0';
      
            //styling outgoing-chats-img
            oci.style.display = 'inline-block';
            oci.style.width = '20px';
            oci.style.float = 'right';
      
            pCreated.innerText = data.msg;
            timeCreated.innerText = data.msg_sender +" "+itTime();
      
      
            msgPage.appendChild(oc);
            oc.appendChild(ocm);
            ocm.appendChild(pCreated);
            ocm.appendChild(timeCreated);
            oc.appendChild(oci);
            msgPage.scrollTo(0,msgPage.scrollHeight);
      
          } // end of else statement



          }) // end of private-message-back *****************************************





      }) // end of accept chat

      // decline chat
      rejectButton.addEventListener('click', function(){
        socket.emit('chat_Rejected', "i rejected your chat request")

        
        var dd = data.sender_id;
        var ee = data.receiver_id;
        console.log("dd data.sender_id: "+dd)
        console.log("ee data.receiver_id: "+ee)
        socket.emit("available", {msg: "not busy anymore", sender_id: dd, receiver_id: ee})

        document.getElementById(justGotInId).innerHTML = "challenge";
        document.getElementById(justGotInId).setAttribute("class", "challenge_button")
        document.getElementById("chat_accept").remove();
        document.getElementById("chat_decline").remove();

        var flash_timer = 2;
        flash_msg = setInterval(() => {
   
           flash_timer -= 1
           if(flash_timer == 0)
       {
           clearInterval(flash_msg);
           var challenge_button = document.getElementById(justGotInId)
           challenge_button.style.display = "block";   
           var chat_Receiver = document.getElementById(justGotInId+"+chat")
               chat_Receiver.innerHTML = "chat";
               chat_Receiver.setAttribute("class", "chat_Button") 
               
               console.log("data.receiver_id: "+data.receiver_id)
               console.log("sender_id: "+data.sender_id)
       }
            
        }, 1000);



       /* var chat_Receiver = document.getElementById(justGotInId+"+chat")
        document.getElementById(justGotInId).style.display = "block";
       chat_Receiver.innerHTML =  "chat";
       chatButton.style.background = "rgb(52,58,64)";
       chat_Receiver.style.width = "30%"; */
       
      }) // end of reject button

     } // end of if statement that check receiver

}) // end of chat_receive event


       socket.on('available_back', function(data){
  
        if(data.sender_id !== justGotInId || data.receiver_id !== justGotInId)
        {
        console.log(data.msg)
        console.log(data.sender_id)
        console.log(data.receiver_id) 
        document.getElementById(data.sender_id+"+chat").style.display = "block"
        document.getElementById(data.sender_id).style.display = "block"
        document.getElementById(data.receiver_id+"+chat").style.display = "block"
        document.getElementById(data.receiver_id).style.display = "block"
        }

       })


       socket.on('available_challenger_back', function(data){
  
       

        if(data.sender_id !== justGotInId || data.receiver_id !== justGotInId)
        {
        console.log("available_challenger_back+data.msg: "+data.msg)
        console.log("available_challenger_back+data.sender_id: "+data.sender_id)
        console.log("available_challenger_back+data.receiver_id: "+data.receiver_id) 
        document.getElementById(data.sender_id+"+chat").style.display = "block"
        document.getElementById(data.sender_id).style.display = "block"
        document.getElementById(data.receiver_id+"+chat").style.display = "block"
        document.getElementById(data.receiver_id).style.display = "block"
        }

       })
        




// check if user is the receiver
socket.on('challengeReceiver', function(data){
  

  document.getElementById("notification_up").play();

 
  if(data.receiver == justGotIn)
    {
    var chat_button = document.getElementById(justGotInId+"+chat")
   chat_button.style.display = "none";   
   var chat_Receiver = document.getElementById(justGotInId)
    chat_Receiver.innerHTML = data.sender+" challenge you";
    chat_Receiver.setAttribute("class","challenge_button")


      var  panelBodyUser = document.getElementById(justGotInId+"+div");
      var acceptButton = document.createElement("button")
      var rejectButton = document.createElement("button")
      acceptButton.setAttribute("class", "btn btn-success")
      rejectButton.setAttribute("class", "btn btn-danger")
      acceptButton.setAttribute("id", "challenge_accept")
      rejectButton.setAttribute("id", "challenge_reject")
      acceptButton.style.margin = "10px";
      rejectButton.style.margin = "10px";
      acceptButton.innerText = "accept";
      rejectButton.innerText = "decline";
      panelBodyUser.appendChild(acceptButton);
      panelBodyUser.appendChild(rejectButton);

      
      // accept challenge
      acceptButton.addEventListener("click", function(){


         //randomly generate a letter
         randomNu = Math.floor((Math.random()*25)+0);
         chooseL = alphaLetter[randomNu]
         chooseLetter.innerText = chooseL;



        username.innerText = data.receiver;
        receiver_name.innerText = data.sender;

        socket.emit('challengeAccepted', {msg: "i accept your challenge 2", dna: data.id, receiver: data.receiver, letter: chooseL })

        socket.on('joined-receiver', function(data){
         console.log(data.msg)

         // change Accept-button from orange to green-sucess
         document.getElementById(justGotInId).innerHTML = "loading...";
         document.getElementById(justGotInId).setAttribute("class", "challenge_button")
         document.getElementById("challenge_accept").remove();
         document.getElementById("challenge_reject").remove();

         var timeTo = 2;
         actionFlash = setInterval(function(){ 
         timeTo -= 1
         if(timeTo == 0){
         clearInterval(actionFlash);
        
       
      var gameStartin = 3;
         actionFlash2 = setInterval(function()
          {
            gameStartin -= 1
            document.getElementById(justGotInId).innerHTML = `game start in ${gameStartin} sec`;
            if (gameStartin == 0) {
              clearInterval(actionFlash2)
               onlinePeople.style.display = "none";
               profileName.style.display = "none";
               onlinePeople_h3.style.display = "none";
               startCounting();
              document.getElementById("QuizCCFA").style.display = "block";

            
              anime({
                targets: '#chooseLetter',
                translateY: [
                    {value: 54, duration: 100 },
                    {value: 0, duration: 800}
                ]
              });



              // players and scores
              var receiver = justGotIn
              var sender = receiver_name.innerText;
              var players_name = [receiver, sender ];
              
              // players and scores
              for(let i = 0; i < players_name.length; i++) {

                var contest_div = document.createElement("div");
                var span_div = document.createElement("span");

                contest_div.setAttribute("class", "playerScore_div");
                span_div.setAttribute("class", "player_1_scrore");
                span_div.setAttribute("id", "player_score_"+i);
  
                contest_div.innerHTML = players_name[i];
                span_div.innerHTML = ":  0 ";
  
                contest_div.appendChild(span_div);
                playerScore_div.appendChild(contest_div);

              }

              // opponent score
              socket.on("player_0_score_Response", function(data){

                if(justGotIn == data.receiver)
                {
                  document.getElementById("player_score_1").innerHTML = ":  "+data.score+" ";
                }
              })

          
               console.log("chatinGame.innerText: "+chatinGame.innerText)
               // chat option
               chatinGame.addEventListener('click', function(){
                 if(chatinGame.innerText == "Chat")
            {
              var request_them = "request";
             console.log("chatinGame.innerText: "+chatinGame.innerText)
               socket.emit("chat_option_receiver", {msg: request_them, id: data.lodge})
               chatinGame.innerText = "request";
            }
              }) 

              socket.on("chat_option_back_sender", function(data){      

                document.getElementById("notification_up").play();
                
                chatinGame.innerText = data.msg;
                console.log("sender data.msg: "+data.msg)
                 // chat option
               chatinGame.addEventListener('click', function(){

                if(chatinGame.innerText == "request")
                {
                  socket.emit("in_game_chat_sender_accepted", {msg: "block", id: data.id})

                  
             console.log("chatinGame.innerText: "+chatinGame.innerText)
                document.getElementById("QuizCCFA").style.display = "none";

                document.getElementById("chat-container").style.display = "block";
  
                }
              })

              })


              // replay 

              
              console.log("replay.innerText: "+replay.innerText)

              replay.addEventListener('click', function(){
                if(replay.innerText == "Replay")
           {
             var request_them = "request";
            console.log("replay.innerText: "+replay.innerText)
              socket.emit("replay_option_receiver", {msg: request_them, id: data.lodge})
              replay.innerText = "request";
           }
             }) 

             socket.on("replay_option_back_sender", function(data){
               
  document.getElementById("notification_up").play();

              replay.innerText = data.msg;
               console.log("sender data.msg: "+data.msg)
                // chat option
                replay.addEventListener('click', function(){

               if(replay.innerText == "request")
               {
                replay_game();
                
                console.log("chooseLetter.innerText_replay: "+chooseLetter.innerText)
                 socket.emit("in_replay_sender_accepted", {msg: "block", id: data.id, letter_replay: chooseLetter.innerText})
                 
                 console.log("replay.innerText: "+replay.innerText)
                 replay.innerText = "Replay";
 
               }
             })

             })




              document.getElementById("sender").addEventListener("click", function() {
  
                      
                if(input_msg.value.trim().length > 0)
                {
                  //console.log("input_msg.value: "+input_msg.value)
                  var message = input_msg.value;
                  socket.emit('private-message', {cmsg: "using challenge way receiver", msg: message, id: data.lodge, current_msg_sender: justGotIn})
                  input_msg.value = "";
    
                }
    
              })     // end of send message button ************************  



              socket.on('private-message-back', function(data){
                          
                document.getElementById("messageNotice").play();
  
   
                console.log('msg: '+data.msg)
                console.log('msg_sender: '+data.msg_sender)
                messageStructure(data)
              })

              

              socket.on("in_game_chat_receiver_accepted_back", function(data){
                console.log("accepted in game chat: "+ data);
                document.getElementById("QuizCCFA").style.display = "none";
                document.getElementById("chat-container").style.display = "block";
  
              })


              socket.on("in_replay_receiver_accepted_back", function(data){
                replay_game();
                console.log("chooseLetter.innerText_replay: "+chooseLetter.innerText)

                chooseLetter.innerText = data.letter_replay;
                console.log("chooseLetter.innerText_replay, data.letter_replay: "+chooseLetter.innerText)
                replay.innerText = "Replay";
              })

                   // country instructions/codes

                   placeholder_Option(country, AcountryInput)

                   AcountryInput.addEventListener("keyup", function(event) {
            
                    if (event.keyCode === 13) {
                      var wrong = true;
                      country_edit_button.style.display = "block";
                      incorrect.style.display = "block"
                      
                      console.log('i_answer: '+i_answer);
                   

                    if(AcountryInput.value)
                    {
                      
                  country_edit_button.style.display = "block";
                  socket.emit('Country-receiver', { countryReceiver : AcountryInput.value, idReceiver: data.lodge});
           

                  for (let i = 0; i < country.length; i++) {

                    // only data starting with the choose letter
                if(country[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                {
                 // score increase, only if input match data
                 if (AcountryInput.value.toLowerCase() == country[i].toLowerCase())
                 { 
                  wrong = false;
                 console.log("input match")
                  // display correct icon, increase points and hide incorrect icon
                  socket.emit("Correct_answer_no_repeat", AcountryInput.value)
                  country_edit_button.style.display = "none";
                 incorrect.style.display = "none";
                 correct.style.display = "block";
                  scoreIncrease += 25;
                  document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                  socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
 
                  anime({
                    targets: '#correct',
                    translatex: [
                        {value: 184, duration: 100 },
                        {value: 0, duration: 800}
                    ]
                  });
  
 
                     // check for repeat answer
               for (let i = 0; i < i_answer.length; i++) {
                 console.log("checking for repeat")
                 console.log('i_answer element: '+i_answer[i]);
                 if( AcountryInput.value.toLowerCase() == i_answer[i] ) {
                      wrong = true;
                       console.log('repeatetion detected');
                       console.log(AcountryInput.value+' is already used');
                       country_edit_button.style.display = "block";
                       used_button.style.display = "block";
                       correct.style.display = "none";
                       scoreIncrease -= 25;
                       document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                       socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
      
                       //incorrect.style.display = "block"
                  }
                 }   
                  
                  
                    }

                    }
                   }
                   console.log("wrong:"+wrong)
                
                   if (wrong) {
                     document.getElementById("wrongSound").play(); console.log("wrong sound")
                   }else {
                     console.log("there was no repeat")   
                     document.getElementById("pointsSound").play();
                     console.log("right sound")
                   }
                        }
                    }
                });



            AconfirmButton.addEventListener("click", function() { 
            
              var wrong = true;
              country_edit_button.style.display = "block";
             incorrect.style.display = "block"

              
                if(AcountryInput.value)
                {
                  
              socket.emit('Country-receiver', { countryReceiver : AcountryInput.value, idReceiver: data.lodge});
       

              for (let i = 0; i < country.length; i++) {

                // only data starting with the choose letter
            if(country[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
            {
                // score increase, only if input match data
                if (AcountryInput.value.toLowerCase() == country[i].toLowerCase())
                { 
                  wrong = false;
                console.log("input match database")
                 // display correct icon, increase points and hide incorrect icon
                 socket.emit("Correct_answer_no_repeat", AcountryInput.value)
                 country_edit_button.style.display = "none";
                incorrect.style.display = "none";
                correct.style.display = "block";
                 scoreIncrease += 25;
                 document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                 socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );


                    // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) {
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AcountryInput.value.toLowerCase() == i_answer[i] ) {
                     wrong = true;
                      console.log('repeatetion detected');
                      console.log(AcountryInput.value+' is already used');
                      country_edit_button.style.display = "block";
                      used_button.style.display = "block";
                      correct.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                }   
             
                 
                   }
                }
               }
               console.log("wrong:"+wrong)
                
               if (wrong) {
                 document.getElementById("wrongSound").play(); console.log("wrong sound")
               }else {
                 console.log("there was no repeat")   
                 document.getElementById("pointsSound").play();
                 console.log("right sound")
               }
                
          }
        })

 // populate the array answer
             // so we know that some name was already been use
             socket.on('Correct_answer_no_repeat_back', function(data){
              i_answer.push(data);
            })

        //socket country, own page
    socket.on('Country-response-receiver', function(msgImoToClient){
         AcountryData.innerText = msgImoToClient;
         AfieldAndButtondiv.style.display = "none";
          AcountryData.style.display = "block";
          })


                //socket country, opponent page
           socket.on('Country-response', function(msgImoToClient){
            AcountryData_receiver.innerHTML = msgImoToClient;
            AfieldAndButtondiv_receiver.style.display = "none";
            AcountryData_receiver.style.display = "block";

          })


            // edit data
            country_edit_button.addEventListener('click', function() {
              var edit_data = AcountryData.value;
              AcountryData.style.display = "none";
              country_edit_button.style.display = "none";
              incorrect.style.display = "none";
              AcountryInput.innerHTML = edit_data;
              AfieldAndButtondiv.style.display = "block";
              used_button.style.display = "none";
            })


         

           // beginning of car code *************************************************

           placeholder_Option(car, AcarInput)
           AcarInput.addEventListener("keyup", function(event) {

            if (event.keyCode === 13) {
      
             
              var wrong = true;
              car_edit_button.style.display = "block";                            
              incorrect_car.style.display = "block";


                if(AcarInput.value)
                {
                socket.emit('Car-receiver', { car: AcarInput.value, id: data.lodge });
                 
         
                for (let i = 0; i < car.length; i++) {
                  // only data starting with the choose letter
          if(car[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
          {
             // score increase, only if input match data
             if (AcarInput.value.toLowerCase() == car[i].toLowerCase())
             { 
               
              wrong = false;
              console.log("input match")
              // display correct icon, increase points and hide incorrect icon
              socket.emit("Correct_answer_no_repeat", AcarInput.value)

            car_edit_button.style.display = "none";
              incorrect_car.style.display = "none";
              correct_car.style.display = "block";
               scoreIncrease += 25;
               document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
               socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
            
                 // check for repeat answer
              for (let i = 0; i < i_answer.length; i++) {
                console.log("checking for repeat")
                console.log('i_answer element: '+i_answer[i]);
                if( AcarInput.value.toLowerCase() == i_answer[i] ) {
                  wrong = true;
                      console.log('repeatetion detected');
                      console.log(AcarInput.value+' is already used');
                      car_edit_button.style.display = "block";
                      used_button_car.style.display = "block";
                      correct_car.style.display = "none";
                      scoreIncrease -= 25;
                      document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                      socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
     
                      //incorrect.style.display = "block"
                 }
                }   

              }
            }
           }

           console.log("wrong:"+wrong)
                
           if (wrong) {
             document.getElementById("wrongSound").play(); console.log("wrong sound")
           }else {
             console.log("there was no repeat")   
             document.getElementById("pointsSound").play();
             console.log("right sound")
           }

                }

            }


        });



           AcarconfirmButton.addEventListener("click", function() {

               
            var wrong = true;
            car_edit_button.style.display = "block";                            
            incorrect_car.style.display = "block";

            if(AcarInput.value)
              {
              socket.emit('Car-receiver', { car: AcarInput.value, id: data.lodge });

               
       
              for (let i = 0; i < car.length; i++) {
                // only data starting with the choose letter
        if(car[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
        {
          // score increase, only if input match data
          if (AcarInput.value.toLowerCase() == car[i].toLowerCase())
          { 
            
            wrong = false;
           console.log("input match")
           // display correct icon, increase points and hide incorrect icon
           socket.emit("Correct_answer_no_repeat", AcarInput.value)

         car_edit_button.style.display = "none";
           incorrect_car.style.display = "none";
           correct_car.style.display = "block";
            scoreIncrease += 25;
            document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
            socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
         
              // check for repeat answer
           for (let i = 0; i < i_answer.length; i++) {
             console.log("checking for repeat")
             console.log('i_answer element: '+i_answer[i]);
             if( AcarInput.value.toLowerCase() == i_answer[i] ) {
              wrong = true;
                   console.log('repeatetion detected');
                   console.log(AcarInput.value+' is already used');
                   car_edit_button.style.display = "block";
                   used_button_car.style.display = "block";
                   correct_car.style.display = "none";
                   scoreIncrease -= 25;
                   document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                   socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
  
                   //incorrect.style.display = "block"
              }
             }   

           }
          }
         }

         console.log("wrong:"+wrong)
                
         if (wrong) {
           document.getElementById("wrongSound").play(); console.log("wrong sound")
         }else {
           console.log("there was no repeat")   
           document.getElementById("pointsSound").play();
           console.log("right sound")
         }

              }
       })
       
       

              //socket Car
            socket.on('Car-response-receiver', function(msgCarToClient){
            AcarData.innerText = msgCarToClient;
            AcarfieldAndButtondiv.style.display = "none";
            AcarData.style.display = "block";
                })

                         //socket Car
            socket.on('Car-response', function(data){
              AcarData_receiver.innerText = data;
              AcarfieldAndButtondiv_receiver.style.display = "none";
              AcarData_receiver.style.display = "block";
            }) 

              // edit data
              car_edit_button.addEventListener('click', function() {
                console.log('hello happen sender');
                var edit_data_car = AcarData.value;
              AcarData.style.display = "none";
                car_edit_button.style.display = "none";
              incorrect_car.style.display = "none";
               AcarInput.innerHTML = edit_data_car;
               AcarfieldAndButtondiv.style.display = "block";
              })
          // end of car code *************************************************



          // beginning of fruit code *************************************************
          placeholder_Option(fruit, AFruitInput)
          AFruitInput.addEventListener("keyup", function(event) {

            if (event.keyCode === 13) {

              var wrong = true; 
              fruit_edit_button.style.display = "block";
              incorrect_fruit.style.display = "block";

                if(AFruitInput.value)
                {
                    socket.emit('Fruit-receiver',  { fruit: AFruitInput.value, id: data.lodge } );
                  
  
                  for (let i = 0; i < fruit.length; i++) {
                  // only data starting with the choose letter
                  if(fruit[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                  {
                     // score increase, only if input match data
                     if (AFruitInput.value.toLowerCase() == fruit[i].toLowerCase())
                     {   
                      wrong = false;
                       socket.emit("Correct_answer_no_repeat",  AFruitInput.value)
                           fruit_edit_button.style.display = "none";
                           incorrect_fruit.style.display = "none";
                           correct_fruit.style.display = "block";
                       scoreIncrease += 25;
                       document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                       socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );


                            // check for repeat answer
       for (let i = 0; i < i_answer.length; i++) {
         console.log("checking for repeat")
         console.log('i_answer element: '+i_answer[i]);
         if( AFruitInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
          wrong = true;
               console.log('repeatetion detected');
               console.log(AFruitInput.value+' is already used');
             fruit_edit_button.style.display = "block";
            used_button_fruit.style.display = "block";
             correct_fruit.style.display = "none";
               scoreIncrease -= 25;
               document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
               socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

               //incorrect.style.display = "block"
          }
         } 


                     }
                  }
                  }


                  console.log("wrong:"+wrong)
                
                  if (wrong) {
                    document.getElementById("wrongSound").play(); console.log("wrong sound")
                  }else {
                    console.log("there was no repeat")   
                    document.getElementById("pointsSound").play();
                    console.log("right sound")
                  }

                }
            }


        });

   

          AFruitconfirmButton.addEventListener("click", function() {

            var wrong = true;
           fruit_edit_button.style.display = "block";
         incorrect_fruit.style.display = "block";


            if(AFruitInput.value)
              {
                  socket.emit('Fruit-receiver',  { fruit: AFruitInput.value, id: data.lodge } );
                

                  for (let i = 0; i < fruit.length; i++) {
                    // only data starting with the choose letter
                    if(fruit[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                    {
                        // score increase, only if input match data
                        if (AFruitInput.value.toLowerCase() == fruit[i].toLowerCase())
                        {
                          wrong = false;
                          socket.emit("Correct_answer_no_repeat",  AFruitInput.value)
                              fruit_edit_button.style.display = "none";
                              incorrect_fruit.style.display = "none";
                              correct_fruit.style.display = "block";
                          scoreIncrease += 25;
                          document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                          socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );


                                          // check for repeat answer
                    for (let i = 0; i < i_answer.length; i++) {
                      console.log("checking for repeat")
                      console.log('i_answer element: '+i_answer[i]);
                      if( AFruitInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                        wrong = true;
                            console.log('repeatetion detected');
                            console.log(AFruitInput.value+' is already used');
                          fruit_edit_button.style.display = "block";
                          used_button_fruit.style.display = "block";
                          correct_fruit.style.display = "none";
                            scoreIncrease -= 25;
                            document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                            socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

                            //incorrect.style.display = "block"
                        }
                      } 


                        }
                    }
                    }

                    console.log("wrong:"+wrong)
                
                    if (wrong) {
                      document.getElementById("wrongSound").play(); console.log("wrong sound")
                    }else {
                      console.log("there was no repeat")   
                      document.getElementById("pointsSound").play();
                      console.log("right sound")
                    }

              }
        })

                 //socket Fruit, on your own page
               socket.on('Fruit-response-receiver', function(msgFruitToClient){
                AFruitData.innerText = msgFruitToClient;
                AFruitfieldAndButtondiv.style.display = "none";
                AFruitData.style.display = "block";
                        })


              //socket Fruit, opponent page
        socket.on('Fruit-response', function(data){
          AFruitData_receiver.innerText = data;
          AFruitfieldAndButtondiv_receiver.style.display = "none";
           AFruitData_receiver.style.display = "block";
        })    

               
                // edit data
          fruit_edit_button.addEventListener('click', function() {
              var edit_data_fruit = AFruitData.value;
              AFruitData.style.display = "none";
              fruit_edit_button.style.display = "none";
          incorrect_fruit.style.display = "none";
           AFruitInput.innerHTML = edit_data_fruit;
           AFruitfieldAndButtondiv.style.display = "block";
           used_button_fruit.style.display = "none";
            })      
                    
        // end of fruit code *************************************************




          // beginning of animal code *************************************************
          // Animal
          placeholder_Option(animal, AanimalInput)
         AanimalInput.addEventListener("keyup", function(event) {

            if (event.keyCode === 13) {

              var wrong = true;
              Animal_edit_button.style.display = "block";
             incorrect_Animal.style.display = "block";
                
                if(AanimalInput.value)
                {
  
                socket.emit('Animal-receiver', { animal: AanimalInput.value, id: data.lodge });
  
                for (let i = 0; i < animal.length; i++) {
        if(animal[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
        {
          // score increase, only if input match data
                  if (AanimalInput.value.toLowerCase() == animal[i].toLowerCase())
                  {
             
                    wrong = false;
                    socket.emit("Correct_answer_no_repeat", AanimalInput.value)
                    Animal_edit_button.style.display = "none";
                  incorrect_Animal.style.display = "none";
                  correct_Animal.style.display = "block";
                    scoreIncrease += 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

             // check for repeat answer
             for (let i = 0; i < i_answer.length; i++) {
              console.log("checking for repeat")
              console.log('i_answer element: '+i_answer[i]);
              if( AanimalInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                wrong = true;
                    console.log('repeatetion detected');
                    console.log( AanimalInput.value+' is already used');
                Animal_edit_button.style.display = "block";
               used_button_animal.style.display = "block";
                correct_Animal.style.display = "none";
                    scoreIncrease -= 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
   
                    //incorrect.style.display = "block"
               }
              } 



                  }
                }
                }
  
                console.log("wrong:"+wrong)
                
                if (wrong) {
                  document.getElementById("wrongSound").play(); console.log("wrong sound")
                }else {
                  console.log("there was no repeat")   
                  document.getElementById("pointsSound").play();
                  console.log("right sound")
                }
  
                }
            }


        });

          AanimalconfirmButton.addEventListener("click", function() {
            
            var wrong = true;
            Animal_edit_button.style.display = "block";
            incorrect_Animal.style.display = "block";

            if(AanimalInput.value)
              {

              socket.emit('Animal-receiver', { animal: AanimalInput.value, id: data.lodge });

              for (let i = 0; i < animal.length; i++) {
                if(animal[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
                {
                          // score increase, only if input match data
                  if (AanimalInput.value.toLowerCase() == animal[i].toLowerCase())
                  {
               
                    wrong = false;
                    socket.emit("Correct_answer_no_repeat", AanimalInput.value)
                    Animal_edit_button.style.display = "none";
                  incorrect_Animal.style.display = "none";
                  correct_Animal.style.display = "block";
                    scoreIncrease += 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );

             // check for repeat answer
             for (let i = 0; i < i_answer.length; i++) {
              console.log("checking for repeat")
              console.log('i_answer element: '+i_answer[i]);
              if( AanimalInput.value.toLowerCase() == i_answer[i].toLowerCase() ) {
                wrong = true;
                    console.log('repeatetion detected');
                    console.log( AanimalInput.value+' is already used');
                Animal_edit_button.style.display = "block";
               used_button_animal.style.display = "block";
                correct_Animal.style.display = "none";
                    scoreIncrease -= 25;
                    document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
                    socket.emit('player_0_score', { score: scoreIncrease, receiver: receiver_name.innerText } );
   
                    //incorrect.style.display = "block"
               }
              } 



                  }
                        }
                        }

                        console.log("wrong:"+wrong)
                
                        if (wrong) {
                          document.getElementById("wrongSound").play(); console.log("wrong sound")
                        }else {
                          console.log("there was no repeat")   
                          document.getElementById("pointsSound").play();
                          console.log("right sound")
                        }

              }
          })



          //socket Animal
          socket.on('Animal-response-receiver', function(msgAnimalToClient){
          AanimalData.innerText = msgAnimalToClient;
          AanimalfieldAndButtondiv.style.display = "none";
          AanimalData.style.display = "block";
          })


          //socket Animal
      socket.on('Animal-response', function(data){
        AanimalData_receiver.innerText = data;
        AanimalfieldAndButtondiv_receiver.style.display = "none";
        AanimalData_receiver.style.display = "block";
      }) 

        // edit data
        Animal_edit_button.addEventListener('click', function() {
          var edit_data_Animal = AanimalData.value;
          AanimalData.style.display = "none";
          Animal_edit_button.style.display = "none";
          incorrect_Animal.style.display = "none";
      AanimalInput.innerHTML = edit_data_Animal;
    AanimalfieldAndButtondiv.style.display = "block";
    used_button_animal.style.display = "none";
        })

          // end of animal code *************************************************



            }
       
          },1000);

  }


    }, 1000);

        }) // end of join event

      })  // end of accept button


      
      // reject challenge
      rejectButton.addEventListener("click", function(){
          //idOfPendingButton = "";
        socket.emit('challengeRejected', {msg: justGotIn+" decline your challenge", id: socket.id})

        
        var dd = data.sender_id;
        var ee = data.receiver_id;
        console.log("dd data.sender_id: "+dd)
        console.log("ee data.receiver_id: "+ee)
        socket.emit("available_challenger", {msg: "not busy anymore", sender_id: dd, receiver_id: ee})


        document.getElementById(justGotInId).innerHTML = "you declined";
        document.getElementById(justGotInId).setAttribute("class", "challenge_button")
        document.getElementById("challenge_accept").remove();
        document.getElementById("challenge_reject").remove();


     var flash_timer = 2;
     flash_msg = setInterval(() => {

        flash_timer -= 1
        if(flash_timer == 0)
    {
        clearInterval(flash_msg);
        var chat_button = document.getElementById(justGotInId+"+chat")
        chat_button.style.display = "block";   
        var chat_Receiver = document.getElementById(justGotInId)
            chat_Receiver.innerHTML = "challenge";
            chat_Receiver.setAttribute("class", "challenge_button")
          //  socket.emit("available", "not busy anymore")
    }
         
     }, 1000);

      })  // end of reject button
   

    } // end of if statement / checking if use is the receiver

  }) // end of challenge receiver event




    // reject challenge Response
    socket.on("challengeRejectedResponse", function(data){
      var pendingButton =  document.getElementById(data.id)
      console.log("data.id: "+data.id)
      pendingButton.setAttribute("class", "challenge_button")
      pendingButton.innerHTML = data.msg;

     var flash_timer = 2;
     flash_msg = setInterval(() => {

        flash_timer -= 1
        if(flash_timer == 0)
    {
        clearInterval(flash_msg);
        pendingButton.innerHTML = "challenge";
        pendingButton.setAttribute("class", "challenge_button")
      //  socket.emit("available", "not busy anymore")
    }
         
     }, 1000);

     })


      // reject chat
    socket.on("chat_Rejected_Response", function(data){
      
      var pendingButton =  document.getElementById(idOfPendingButton)
      console.log("idOfPendingButton: "+idOfPendingButton)
      pendingButton.setAttribute("class", "chat_Button")
      pendingButton.innerHTML = data;

      var flash_timer = 2;
      flash_msg = setInterval(() => {
 
         flash_timer -= 1
         if(flash_timer == 0)
     {
         clearInterval(flash_msg);
         pendingButton.innerHTML = "chat";
         pendingButton.setAttribute("class", "chat_Button")
        // socket.emit("available", "not busy anymore")
         //document.getElementById(justGotInId).style.display = "block";
     }
          
      }, 1000);
 
     
     })



function startCounting(){

  
action = setInterval(function(){

timeremaining -= 1;

timeremainingvalue.value = timeremaining;
timeremainingvalue.innerText = timeremainingvalue.value;
//console.log(timeremainingvalue.value)

if(timeremaining <= 5)
{
      document.getElementById("beepSound").play();
}



if(timeremaining == 20){
  anime({
    targets: '#chooseLetter',
    translateY: [
        {value: 54, duration: 100 },
        {value: 0, duration: 800}
    ]
  });
}

if(timeremaining == 10){
  anime({
    targets: '#chooseLetter',
    translateY: [
        {value: 54, duration: 100 },
        {value: 0, duration: 800}
    ]
  });
}

if (timeremaining == 0) 
{

  document.getElementById("gameOver").play();
  chatinGame.style.display = "block";
  replay.style.display = "block";
  

   stopCountdown();

  

   if(AcountryData.innerText == "" || AcountryInput.value == ""){
    locker1.style.display = "block";
   AfieldAndButtondiv.style.display = "none";
   }
   country_edit_button.style.display = "none";
   

   if(AcarData.innerText == "" || AcarInput.value == ""){
     locker2.style.display = "block";
   AcarfieldAndButtondiv.style.display = "none";
   }
   car_edit_button.style.display = "none";


   if(AFruitData.innerText == "" || AFruitInput.value == ""){
   locker3.style.display = "block";
  AFruitfieldAndButtondiv.style.display = "none";
   }
   fruit_edit_button.style.display = "none";


  if(AanimalData.innerText == "" || AanimalInput.value == ""){ 
     locker4.style.display = "block";
     AanimalfieldAndButtondiv.style.display = "none";
   }
   Animal_edit_button.style.display = "none";


}

},1000)

}




function stopCountdown() {
	clearInterval(action);

}
     
// country hide default value
AcountryData.style.display = "none";
AcountryData_receiver.style.display = "none";

//car
AcarData.style.display = "none";
AcarData_receiver.style.display = "none";

// fruit
AFruitData.style.display = "none";
AFruitData_receiver.style.display = "none";


// Animal
AanimalData.style.display = "none";
AanimalData_receiver.style.display = "none";

 //we create date object so that we can use the variety of method 
        //in the Date class e.g second, minute ect..
        var d = new Date();
        var m = new Date();
        var mt = new Date();
        var dd = new Date();
        var s = new Date();
       
       //we declare and populate the array with month name
       //because the month method only return a number from one to tweve
       // with this array we can identify which element/month
       // the number that was return 
       //refer to
        var months = ["January", "February", "March", "April",
         "May", "June", "July", "August", "September", "October",
          "November", "December"];

        function itTime() {
          return months[mt.getMonth()]+" "+dd.getDate();
        }





        function messageStructure(data){
                
if(data.msg_sender == justGotIn)
{

                
  //declaring the receive variables (grey)
  var rc = document.createElement("div");
  var rci = document.createElement("div");
  var rmr = document.createElement("div");
  var rmis = document.createElement("div");
  var pCreated = document.createElement("p");
  var timeCreated = document.createElement("span");

  pCreated.innerText = data.msg;
  timeCreated.innerText = data.msg_sender+"    "+itTime();

                
  //styling Receive-msg id= receivedMsg = rmr
  rmr.style.display = 'inline-block';
  rmr.style.padding = '0 0 0 10px';
  rmr.style.verticalAlign = 'top';
  rmr.style.width = '92%';

                
  //styling Receive-msg inbox send  id = send8
  rmis.style.width = '70%';

  //styling the paragraph Received grey color
  pCreated.style.background = '#efefef none repeat scroll 0 0';
  pCreated.style.borderRadius = '0px 20px 20px 20px';
  pCreated.style.color = '#646464';
  pCreated.style.fontSize = '14px';
  pCreated.style.margin = '0';
  pCreated.style.padding = '5px 10px 5px 12px';
  pCreated.style.width = '100%';
                
  // styling time/name section
  timeCreated.style.color = '#777';
  timeCreated.style.display = 'block';
  timeCreated.style.fontSize = '12px';
  timeCreated.style.margin = '8px 0 8px';

  msgPage.appendChild(rc);
  rc.appendChild(rci);
  rc.appendChild(rmr);
  rmr.appendChild(rmis);
  rmis.appendChild(pCreated);
  rmis.appendChild(timeCreated);
  msgPage.scrollTo(0,msgPage.scrollHeight);

}else
{

  //declaring the outgoing msg variables (green)
  var oc = document.createElement("div");
  var ocm = document.createElement("div");
  var oci = document.createElement("div");
  var pCreated = document.createElement("p");
  var timeCreated = document.createElement("span");

  //styling outgoing-chats
  oc.style.overflow = 'hidden'; 
  oc.style.margin = '26px 20px';

  //styling the paragraph outgoing green color
  pCreated.style.background = 'rgb(0, 74, 119) none repeat scroll 0 0';
  pCreated.style.color = '#fff';
  pCreated.style.borderRadius = '20px 0px 20px 20px';
  pCreated.style.fontSize = '14px';
  pCreated.style.margin = '0';
  pCreated.style.padding = '5px 10px 5px 12px';
  pCreated.style.width = '100%';


  // styling time/name section
  timeCreated.style.color = '#777';
  timeCreated.style.display = 'block';
  timeCreated.style.fontSize = '12px';
  timeCreated.style.margin = '8px 0 0';

  //styling outgoing-chats-msg
  ocm.style.float = 'right'; 
  ocm.style.width = '70%';
  ocm.style.marginLeft = '0';

  //styling outgoing-chats-img
  oci.style.display = 'inline-block';
  oci.style.width = '20px';
  oci.style.float = 'right';

  pCreated.innerText = data.msg;
  timeCreated.innerText = data.msg_sender +" "+itTime();


  msgPage.appendChild(oc);
  oc.appendChild(ocm);
  ocm.appendChild(pCreated);
  ocm.appendChild(timeCreated);
  oc.appendChild(oci);
  msgPage.scrollTo(0,msgPage.scrollHeight);

} // end of else statement

    
        }


        function placeholder_Option(a_box,input_category)
        {
        
          var optionOpen = 0;
          for (let i = 0; i < a_box.length; i++) {

            // only data starting with the choose letter
        if(a_box[i].substring(0,1).toLowerCase() == chooseLetter.innerText.toLowerCase())
        {
          optionOpen += 1;

          }
        }

        input_category.placeholder = optionOpen+" options";
        }


        function replay_game(){

           //randomly generate a letter
         randomNu = Math.floor((Math.random()*25)+0);
         chooseL = alphaLetter[randomNu]
         chooseLetter.innerText = chooseL;

         
         i_answer = [];

         scoreIncrease = 0;

          timeremaining = 60;
          document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
          document.getElementById("player_score_1").innerHTML = ":  "+scoreIncrease+" ";
          startCounting();
          replay.style.display = "none"
          chatinGame.style.display = "none"

          country_edit_button.style.display = "none"
          car_edit_button.style.display = "none"
          fruit_edit_button.style.display = "none"
          Animal_edit_button.style.display = "none"

          used_button.style.display = "none"
          used_button_car.style.display = "none"
          used_button_fruit.style.display = "none"
          used_button_animal.style.display = "none"
          
          locker1.style.display = "none";
          AcountryData.style.display = "none";
          AcountryInput.value = "";
          correct.style.display = "none";
          incorrect.style.display = "none";
          AfieldAndButtondiv.style.display = "block";

          AcountryData_receiver.style.display = "none";
          AcountryInput_receiver.value = "";
          AfieldAndButtondiv_receiver.style.display = "block";

          
          locker2.style.display = "none";
         AcarData.style.display = "none";
         AcarInput.value = "";
         correct_car.style.display = "none";
         incorrect_car.style.display = "none";
          AcarfieldAndButtondiv.style.display = "block";

          AcarData_receiver.style.display = "none";
          AcarInput_receiver.value = "";
          AcarfieldAndButtondiv_receiver.style.display = "block";


          
          locker3.style.display = "none";
         AFruitData.style.display = "none";
         AFruitInput.value = "";
         correct_fruit.style.display = "none";
         incorrect_fruit.style.display = "none";
          AFruitfieldAndButtondiv.style.display = "block";

          AFruitData_receiver.style.display = "none";
          AFruitInput_receiver.value = "";
          AFruitfieldAndButtondiv.style.display = "block";

          
          locker4.style.display = "none";
         AanimalData.style.display = "none";
         AanimalInput.value = "";
         correct_Animal.style.display = "none";
         incorrect_Animal.style.display = "none";
          AanimalfieldAndButtondiv.style.display = "block";

          AanimalData_receiver.style.display = "none";
          AanimalInput_receiver.value = "";
          AanimalfieldAndButtondiv.style.display = "block";


        }


        function reset_game_for_button_home(){

          scoreIncrease = 0;
          timeremaining = 60;
          document.getElementById("player_score_0").innerHTML = ":  "+scoreIncrease+" ";
          document.getElementById("player_score_1").innerHTML = ":  "+scoreIncrease+" ";
          playerScore_div.innerHTML = "";
          replay.style.display = "none"
          chatinGame.style.display = "none"

          country_edit_button.style.display = "none"
          car_edit_button.style.display = "none"
          fruit_edit_button.style.display = "none"
          Animal_edit_button.style.display = "none"

          used_button.style.display = "none"
          used_button_car.style.display = "none"
          used_button_fruit.style.display = "none"
          used_button_animal.style.display = "none"
          
          locker1.style.display = "none";
          AcountryData.style.display = "none";
          AcountryInput.value = "";
          correct.style.display = "none";
          incorrect.style.display = "none";
          AfieldAndButtondiv.style.display = "block";

          
          locker2.style.display = "none";
         AcarData.style.display = "none";
         AcarInput.value = "";
         correct_car.style.display = "none";
         incorrect_car.style.display = "none";
          AcarfieldAndButtondiv.style.display = "block";


          
          locker3.style.display = "none";
         AFruitData.style.display = "none";
         AFruitInput.value = "";
         correct_car.style.display = "none";
         incorrect_fruit.style.display = "none";
          AFruitfieldAndButtondiv.style.display = "block";


          
          locker4.style.display = "none";
         AanimalData.style.display = "none";
         AanimalInput.value = "";
         correct_Animal.style.display = "none";
         incorrect_Animal.style.display = "none";
          AanimalfieldAndButtondiv.style.display = "block";
        }