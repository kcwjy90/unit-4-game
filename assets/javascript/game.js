$(document).ready(function() {
  
    // var characters = {
    //     'Hero': {
    //         name: "Legend",
    //         health: 120, 
    //         attack: 10,
    //         counter: 8,
    //         enemyAttackBack: 15
    //     }, 
    //     'Enemy1': {
    //         name: 'Viscious',
    //         health: 100,
    //         attack: 15,
    //         counter: 9,
    //         enemyAttackBack: 5
    //     }, 
    //     'Enemy2': {
    //         name: 'Cruel',
    //         health: 150,
    //         attack: 10,
    //         counter: 9,
    //         imageUrl: "assets/images/King.png",
    //         enemyAttackBack: 10
    //     }, 
    //     'Enemy3': {
    //         name: 'Boss',
    //         health: 180,
    //         attack: 10,
    //         counter: 4,
    //         imageUrl: "assets/images/Joker.png",
    //         enemyAttackBack: 15
    //     }
  
    var array = [];
    var _myLife;
    var _myAttack;
    var _enemyLife1;
    var _enemyAttack1;
    var _enemyLife2;
    var _enemyAttack2;
    var _enemyLife3;
    var _enemyAttack3;
    var _enemyRemainingLife;
    var _myRemainingLife;
    var wait;
    var _initialAttack;
  

    $(".carduniv").on("click", function(){

        var movechar = $("<div>");
        movechar.prepend($(this));
            
        console.log(array.length);
        if (array.length == 0) {
            youChar = movechar;
            $("#firstone").append(movechar);
            array.push(movechar);
            _myLife = Math.floor(Math.random() * 10)+300;
            _initialAttack = Math.floor(Math.random() * 5)+20;
            _myAttack = _initialAttack;
            $(".mychar").append("<p> Life: " + _myLife + "</p>"); 
            $(".mychar").append("<p> Attack: " + _initialAttack + "</p>"); 
                
        } else if (array.length == 1) {
            $("#secondone").append(movechar);
            eneChar = movechar;
            array.push(movechar);
            _enemyLife1 = Math.floor(Math.random()*10)+200;
            _enemyAttack1 = Math.floor(Math.random() * 5)+20;
            $(".enemycharone").append("<p> Life: " + _enemyLife1 + "</p>"); 
            $(".enemycharone").append("<p> Attack: " + _enemyAttack1 + "</p>"); 
        }
        else if (array.length == 2) {
            $("#thirdone").append(movechar);
            array.push(movechar);
            _enemyLife2 = Math.floor(Math.random()*10)+300;
            _enemyAttack2 = Math.floor(Math.random() * 5)+30;
            $(".enemychartwo").append("<p> Life: " + _enemyLife2 + "</p>"); 
            $(".enemychartwo").append("<p> Attack: " + _enemyAttack2 + "</p>"); 
        }
        else if (array.length == 3) {
            $("#fourthone").append(movechar);
            array.push(movechar);
            _enemyLife3 = Math.floor(Math.random()*100)+500;
            _enemyAttack3 = Math.floor(Math.random() *10)+50;
            $(".enemycharthree").append("<p> Life: " + _enemyLife3 + "</p>"); 
            $(".enemycharthree").append("<p> Attack: " + _enemyAttack3 + "</p>"); 
        }
    });

    $("#attack-button2").hide();
    $("#attack-button3").hide();

    $("#attack-button1").on("click", function() {
    
        _enemyRemainingLife = _enemyLife1 - _myAttack;
        console.log("_enemyRemainingLife" + _enemyRemainingLife);
        _myAttack = _myAttack + _initialAttack;
        _myRemainingLife = _myLife - _enemyAttack1;
        console.log("_myRemainingLife" + _myRemainingLife);
        $(".mychar").html("<p> Life: " + _myRemainingLife + "</p>"); 
        $(".mychar").append("<p> Attack: " + _myAttack + "</p>"); 
        $(".enemycharone").html("<p> Life: " + _enemyRemainingLife + "</p>"); 
        $(".enemycharone").append("<p> Attack: " + _enemyAttack1 + "</p>"); 
        _enemyLife1 = _enemyRemainingLife;
        _myLife = _myRemainingLife;

        if (_myLife <= 0){
            alert("YOU LOST");   
            $(".mychar").html("<h1>YOU LOST</h1>"); 
            $(".enemycharone").html("<h1> YOU WON</h1>");
            window.location.reload();
        }
        else if ( _enemyLife1 <= 0){
            
            $("#secondone").fadeTo("slow", 0.001); 
            $(".enemycharone").html("<h1> Choose Second Enemy</h1>");
            $("#attack-button1").hide();
            $("#attack-button2").fadeTo("slow", 1);
            
            
        
            $("#attack-button2").on("click", function() {
                
                _enemyRemainingLife = _enemyLife2 - _myAttack;
                console.log("_enemyRemainingLife" + _enemyRemainingLife);
                _myAttack = _myAttack + _initialAttack;
                _myRemainingLife = _myLife - _enemyAttack2
                console.log("_myRemainingLife" + _myRemainingLife);
                $(".mychar").html("<p> Life: " + _myRemainingLife + "</p>"); 
                $(".mychar").append("<p> Attack: " + _myAttack + "</p>"); 
                $(".enemychartwo").html("<p> Life: " + _enemyRemainingLife + "</p>"); 
                $(".enemychartwo").append("<p> Attack: " + _enemyAttack2 + "</p>"); 
                _enemyLife2 = _enemyRemainingLife;
                _myLife = _myRemainingLife;
                firstCharPresent = true;

                if (_myLife <= 0){
                    alert("YOU LOST");
                    $(".mychar").html("<h1>YOU LOST</h1>"); 
                    $(".enemychartwo").html("<h1> YOU WON</h1>");
                    window.location.reload();
                }
                else if ( _enemyLife2 <= 0){
                    
                    $("#thirdone").fadeTo("slow", 0.001);  
                    $(".enemychartwo").html("<h1> Choose Third Enemy</h1>");
                    $("#attack-button2").hide();
                    $("#attack-button3").fadeTo("slow", 1);
                    
                    console.log(_enemyAttack3);
                    $("#attack-button3").on("click", function() {
                        _enemyRemainingLife = _enemyLife3 - _myAttack;
                        console.log("_enemyRemainingLife" + _enemyRemainingLife);
                        _myAttack = _myAttack + _initialAttack;
                        _myRemainingLife = _myLife - _enemyAttack3
                        console.log("_myRemainingLife" + _myRemainingLife);
                        $(".mychar").html("<p> Life: " + _myRemainingLife + "</p>"); 
                        $(".mychar").append("<p> Attack: " + _myAttack + "</p>"); 
                        $(".enemycharthree").html("<p> Life: " + _enemyRemainingLife + "</p>"); 
                        $(".enemycharthree").append("<p> Attack: " + _enemyAttack3 + "</p>"); 
                        _enemyLife3 = _enemyRemainingLife;
                        _myLife = _myRemainingLife;
                        
                        if (_enemyLife3 <=0 ){
                            $("#fourthone").fadeTo("slow", 0.001); 
                            $(".enemycharthree").html("<h1>I LOST</h1>");
                            $(".mychar").html("<h1> YOU WIN!! Let's Play again</h1>"); 
                            
                            wait = setTimeout(function() { 

                                window.location.reload();

                                }, 1700)
                       
                
                        }
                        else if (_myLife <= 0){
                            alert("YOU LOST");  
                            $(".mychar").html("<h1>YOU LOST</h1>"); 
                            $(".enemycharthree").html("<h1> YOU WON</h1>");
                            window.location.reload();
                        }
                    
                    });
        
                }   

            });

        }   



    });
    

});//end




//  attack 버튼을 누르면, enemyone - myattack. hero - enemyattack.
// 그리고 myattack 2배가된다 .
// 적이 죽을때까지 반복. 이기면
//그 다음 캐릭터를 또 적쪽에 넣고 반복.
// 지면 "you lose"
//이기면 "you win "