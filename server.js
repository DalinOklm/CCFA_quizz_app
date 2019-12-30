var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var room_name;
users = [];
nameFromClient = [];
IDFromCient = [];


connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server running...');
console.log('listening to port 3000 from new app');

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//main
io.sockets.on('connection', function(socket){
      connections.push(socket);
      console.log('Connection: %s sockets connected', connections.length);

      //Disconnect
       socket.on('disconnect', function(data){
        users.splice(users.indexOf(socket.userName), 1);
        var disconnectIndex = IDFromCient.indexOf(socket.id)
        var disconnectName = nameFromClient[disconnectIndex] 
        IDFromCient.splice(IDFromCient.indexOf(socket.id), 1);
        nameFromClient.splice(nameFromClient.indexOf(disconnectName), 1);
         updateUsernamesNew();
         connections.splice(connections.indexOf(socket), 1);
        console.log('Connection: %s sockets connected', connections.length);
        console.log(disconnectName+" leave the connection")
       });


      // grab user name send
      socket.on('userJustLogin', function(userJustLoginData){

         nameFromClient.push(userJustLoginData.name);
         IDFromCient.push(userJustLoginData.id);
        updateUsernamesNew();
      })


      // send challenge
      socket.on('iamchallenging', function(data){
       
        receiver = data.receiver;
         sender = "'/"+data.sender+"'";
        console.log("sender join room: "+ socket.id)
        socket.join(socket.id)
        io.sockets.to(socket.id).emit('joined',`${data.sender} says I have joined the ${socket.id} room!`)

        console.log('challenge data.id : '+data.id)
        console.log('challenge data.id_receiver: '+data.id_receiver)
              
        // send to receiver
        io.sockets.emit('challengeReceiver',{ receiver: data.receiver, sender: data.sender, id: socket.id , sender_id: data.id, receiver_id: data.id_receiver})
        io.sockets.emit('busy_person_challenge', {sender: data.id, receiver: data.id_receiver})
     
      })


  // send chat request
  socket.on('i_wanna_chat', function(data){
       
    receiver = data.receiver;
     sender = "'/"+data.sender+"'";
    console.log(data.sender+" join chat_room: "+ socket.id)
    socket.join(socket.id)
    io.sockets.to(socket.id).emit('joined-chat',`${data.sender} says I have joined the ${socket.id} room!`)
          
    // send to receiver
    io.sockets.emit('chat_Receiver',{ name: data.name,receiver: data.receiver, sender: data.sender, id: socket.id, sender_id: data.id, receiver_id: data.id_receiver })
    io.sockets.emit('busy_person', {sender: data.id, receiver: data.id_receiver})
 
  })

      // accept challenge
      socket.on('challengeAccepted', function(data){
       console.log("receiver join room: "+data.dna)
        socket.join(data.dna)
        io.sockets.to(data.dna).emit('joined-receiver',{msg: `${data.receiver} says I have joined the ${data.dna} room too!`, lodge: data.dna})
       // console.log("sender id/room bottom: "+data.dna)
        io.sockets.to(data.dna).emit('challengeAcceptedResponse', { msg : "loading...", receiver: data.receiver, letter: data.letter})
      })


       // accept chat
       socket.on('chat_Accepted', function(data){
         room_name = data.dna;
        console.log(data.receiver +" join chat_room: "+data.dna)
         socket.join(data.dna)
         io.sockets.to(data.dna).emit('joined_chat_receiver',{msg: `${data.receiver} says I have joined the ${data.dna} room too!`, lodge: data.dna})
        // console.log("sender id/room bottom: "+data.dna)
         io.sockets.to(data.dna).emit('chat_Accepted_Response', data.dna )
       })


       // chat exchange
       socket.on('private-message', function(data){
         console.log('private-msg event: '+data.current_msg_sender+' says '+data.msg+" /room: "+data.id)
         console.log("cmsg: "+data.cmsg)
       io.sockets.to(data.id).emit('private-message-back', {msg: data.msg, msg_sender: data.current_msg_sender})
       })


       // country
      socket.on('Country', function(countryData){ 

      console.log("country+id: "+countryData.country +"+"+ countryData.id)
      io.sockets.to(countryData.id).emit('Country-response', countryData.country);

        })


    // country receiver
    socket.on('Country-receiver', function(countryData){ 
      console.log("receiver-country+id: "+countryData.countryReceiver +" + "+ countryData.idReceiver)
      io.sockets.to(countryData.idReceiver).emit('Country-response-receiver', countryData.countryReceiver);
          
    })


         // Car
      socket.on('Car', function(carData){
      console.log("car+id: "+carData.car +"+"+ carData.id)
      io.sockets.to(carData.id).emit('Car-response',carData.car);
                     })


        // Car receiver
    socket.on('Car-receiver', function(carData){ 
      console.log("receiver-car+id: "+carData.car +" + "+carData.id)
      io.sockets.to(carData.id).emit('Car-response-receiver', carData.car);
          
    })        
        

         // Fruit
         socket.on('Fruit', function(fruitData){
       console.log("Fruit+id: "+fruitData.fruit +"+"+ fruitData.id)
       io.sockets.to(fruitData.id).emit('Fruit-response',fruitData.fruit);
              })    


              
        // Fruit receiver
    socket.on('Fruit-receiver', function(fruitData){ 
      console.log("receiver-fruit+id: "+fruitData.fruit +" + "+fruitData.id)
      io.sockets.to(fruitData.id).emit('Fruit-response-receiver', fruitData.fruit);
          
      })  


          // Animal
         socket.on('Animal', function(animalData){
       console.log("animal+id: "+animalData.animal +"+"+ animalData.id)
       io.sockets.to(animalData.id).emit('Animal-response',animalData.animal);
              })   
              
              
     // Animal receiver
     socket.on('Animal-receiver', function(animalData){ 
      console.log("receiver-Animal+id: "+animalData.animal +" + "+animalData.id)
      io.sockets.to(animalData.id).emit('Animal-response-receiver', animalData.animal);
          
      }) 


      // decline challenge
      socket.on('challengeRejected', function(data){
      console.log(data.msg)
      console.log(data.id)
      io.sockets.emit('challengeRejectedResponse',{msg: data.msg, id: data.id})
      })

       // decline chat
       socket.on('chat_Rejected', function(data){
        console.log(data)
        io.sockets.emit('chat_Rejected_Response',"chat decline")
        })

                   // score update 
       socket.on('player_0_score', function(data){
        console.log('score update: '+data.score)
        console.log('receiver name: '+data.receiver)
        io.sockets.emit('player_0_score_Response', {score: data.score, receiver: data.receiver})
        })

         // prevent correct answer repeat
       socket.on('Correct_answer_no_repeat', function(data){
        console.log('Correct_answer_no_repeat: '+data)
        io.sockets.emit('Correct_answer_no_repeat_back', data)
        })

          // tell everyone, i m available
       socket.on('available', function(data){
      /*  console.log('data.msg: '+data.msg)
        console.log('sender_id: '+data.sender_id)
        console.log('receiver_id: '+data.receiver_id) */
        io.sockets.emit('available_back', {msg: data.msg, sender_id: data.sender_id, receiver_id: data.receiver_id})
        })

           // tell everyone, i m available
       socket.on('available_challenger', function(data){
         console.log('data.msg: '+data.msg)
          console.log('sender_id: '+data.sender_id)
          console.log('receiver_id: '+data.receiver_id) 
          io.sockets.emit('available_challenger_back', {msg: data.msg, sender_id: data.sender_id, receiver_id: data.receiver_id})
          })

// 1 chat_option_sender
  socket.on('chat_option_sender', function(data){
    console.log('data.msg: '+data.msg)
    console.log('data.id: '+data.id)
    io.sockets.to(data.id).emit('chat_option_back_sender', {msg: data.msg, id: data.id})
     }) 

     // 1 replay_option_sender
  socket.on('replay_option_sender', function(data){
    console.log('data.msg_replay: '+data.msg)
    console.log('data.id_replay: '+data.id)
    io.sockets.to(data.id).emit('replay_option_back_sender', {msg: data.msg, id: data.id})
     }) 

// 2 chat_option_receiver
  socket.on('chat_option_receiver', function(data){
    console.log('data.msg: '+data.msg)
    console.log('data.id: '+data.id)
    io.sockets.to(data.id).emit('chat_option_back_receiver', {msg: data.msg, id: data.id})
     }) 

     // 2 replay_option_receiver
  socket.on('replay_option_receiver', function(data){
    console.log('data.msg_replay: '+data.msg)
    console.log('data.id_replay: '+data.id)
    io.sockets.to(data.id).emit('replay_option_back_receiver', {msg: data.msg, id: data.id})
     })


// 3 in_game_chat_receiver_accepted
     socket.on('in_game_chat_receiver_accepted', function(data){
      console.log('igcra data.msg: '+data.msg)
      console.log('igcra data.id: '+data.id)
      io.sockets.to(data.id).emit('in_game_chat_receiver_accepted_back', {msg: data.msg, id: data.id})
       }) 


       // 3 in_replay_receiver_accepted
     socket.on('in_replay_receiver_accepted', function(data){
      console.log('igcra data.msg_replay: '+data.msg)
      console.log('igcra data.id_replay: '+data.id)
      console.log('data.letter_replay receiver: '+data.letter_replay)
      io.sockets.to(data.id).emit('in_replay_receiver_accepted_back', {msg: data.msg, id: data.id, letter_replay: data.letter_replay})
       })

  // 4 in_game_chat_sender_accepted
       socket.on('in_game_chat_sender_accepted', function(data){
        console.log('igcsa data.msg: '+data.msg)
        console.log('igcsa data.id: '+data.id)
        io.sockets.to(data.id).emit('in_game_chat_sender_accepted_back', {msg: data.msg, id: data.id})
         }) 

         // 4 in_game_chat_sender_accepted
       socket.on('in_replay_sender_accepted', function(data){
        console.log('igcsa data.msg_replay: '+data.msg)
        console.log('igcsa data.id_replay: '+data.id)
        console.log('data.letter_replay sender: '+data.letter_replay)
        io.sockets.to(data.id).emit('in_replay_sender_accepted_back', {msg: data.msg, id: data.id, letter_replay: data.letter_replay})
         }) 

socket.on("i_m_free", function(data){
  console.log(data.msg)
  console.log(data.free_id)
  io.sockets.emit("i_m_free_back", {msg: data.msg, free_id: data.free_id})
})

               function updateUsernamesNew(){
        io.sockets.emit('userLoginSendBack',{name: nameFromClient, id: IDFromCient, noUser: nameFromClient.length});
       socket.emit("numberOfPeople", connections.length)
       console.log("nameFromClient: "+nameFromClient)
       console.log("nameFromClient.length: "+nameFromClient.length)
       }

   
});



/*
// challenge 0 room
io.of('challenge0').on('connect', (DataSocket)=>{
  DataSocket.on('challengeAccepted', function(data){
      console.log(data)
  io.of('challenge0').emit('challengeAcceptedResponse',"challenge accepted")
    })

     //chooseLetter
     DataSocket.on('chooseLetter', function(letterPicked){
    io.of('challenge0').emit('letterSender', letterPicked)
})

})  



// challenge 1 room
io.of('challenge1').on('connect', (DataSocket)=>{
    DataSocket.on('challengeAccepted', function(data){
        console.log(data)
    io.of('challenge1').emit('challengeAcceptedResponse',"challenge accepted")
      })

       //chooseLetter
       DataSocket.on('chooseLetter', function(letterPicked){
      io.of('challenge1').emit('letterSender', letterPicked)
  })

})  
    
  


// challenge 2 room
io.of('challenge2').on('connect', (DataSocket)=>{
  DataSocket.on('challengeAccepted', function(data){
      console.log(data)
  io.of('challenge2').emit('challengeAcceptedResponse',"challenge accepted")
    })

     //chooseLetter
     DataSocket.on('chooseLetter', function(letterPicked){
    io.of('challenge2').emit('letterSender', letterPicked)
 })

})  



// challenge 3 room
io.of('challenge3').on('connect', (DataSocket)=>{
  DataSocket.on('challengeAccepted', function(data){
      console.log(data)
  io.of('challenge3').emit('challengeAcceptedResponse',"challenge accepted")
    })

     //chooseLetter
     DataSocket.on('chooseLetter', function(letterPicked){
    io.of('challenge3').emit('letterSender', letterPicked)
 })

})  





// challenge 4 room
io.of('challenge4').on('connect', (DataSocket)=>{
  DataSocket.on('challengeAccepted', function(data){
      console.log(data)
  io.of('challenge4').emit('challengeAcceptedResponse',"challenge accepted")
    })

     //chooseLetter
     DataSocket.on('chooseLetter', function(letterPicked){
    io.of('challenge4').emit('letterSender', letterPicked)
 })

})  






// challenge 5 room
io.of('challenge5').on('connect', (DataSocket)=>{
  DataSocket.on('challengeAccepted', function(data){
      console.log(data)
  io.of('challenge5').emit('challengeAcceptedResponse',"challenge accepted")
    })

     //chooseLetter
     DataSocket.on('chooseLetter', function(letterPicked){
    io.of('challenge5').emit('letterSender', letterPicked)
 })

})  */




/***************  car country fruit animal **********************/

/*
io.of('tony').on('connect', (DataSocket)=>{

    DataSocket.on('ChallengeBack', function(data){

        console.log(data)

        io.of('tony').emit('sendChallengeBack', data)

    })
 })   
*/
 
 
//io.of('tony').on('connection', function(PrivateSocket){

   
   /* //chooseLetter
    PrivateSocket.on('chooseLetter', function(letterPicked){
        io.PrivateSocket.emit('letterSender', letterPicked)
    })
       

    // socket country
    PrivateSocket.on('msgCountryToServer', function(msgImoToServer14){ 
            console.log("country: "+msgImoToServer14)
               io.PrivateSocket.emit('msgCountryFromServer', msgImoToServer14);
                })



                
     //socket Car
     PrivateSocket.on('msgCarToServer', function(msgCarToClient){
        console.log("Car: "+msgCarToClient)
        io.PrivateSocket.emit('msgCarFromServer',msgCarToClient);
                })


    //socket Fruit
    PrivateSocket.on('msgFruitToServer', function(msgFruitToClient){
        console.log("Fruit: "+msgFruitToClient)
        io.PrivateSocket.emit('msgFruitFromServer',msgFruitToClient);
                })


    //socket Fruit
    PrivateSocket.on('msgAnimalToServer', function(msgFruitToClient){
        console.log("Animal: "+msgFruitToClient)
        io.PrivateSocket.emit('msgAnimalFromServer',msgFruitToClient);
                })*/




                
 

    //new user
  /*  socket.on('new user', function(data, callback){
       callback(true);
       socket.userName = data;
       users.push(socket.userName);
       updateUsernames();
    });

    function updateUsernamesNew(){
        io.sockets.emit('userLoginSendBack',{name: nameFromClient, id: IDFromCient});
    }*/

   
//});