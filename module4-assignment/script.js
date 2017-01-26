var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 
for (var i=0;i<names.length;i++){
    
     name=names[i];
     
     
     var char = name.charAt(0);    
     
     lowChar = char.toLowerCase();
     
     
     if(lowChar == 'j'){
       
       byeSpeaker.speak(name);
       
     }
     else{
        helloSpeaker.speakHello(name);

     }
   }

