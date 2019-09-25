var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      

      charlength = characters.length;
      
      function randomChar (letters){
        var password ='';
        for (var i =0; i<letters; i++){
          password+=characters.charAt(Math.floor(Math.random()*characters.length));
        }

        return password; 
      }
      