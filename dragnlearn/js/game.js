var w=window.innerWidth;
var h=window.innerHeight;
var o=74;
if(w>500){w=500;}
var game = new Phaser.Game(w,h, Phaser.AUTO, 'gameDiv');

var data_string ="\
Bear,1,bear.jpg,chicken.jpg,dog.jpg,fox.jpg;\
Mouse,2,tiger.jpg,mouse.jpg,leapord.jpg,fox.jpg;\
Dog,3,tiger.jpg,chicken.jpg,dog.jpg,fox.jpg;\
Leapord,3,fox.jpg,tiger.jpg,leapord.jpg,bear.jpg;\
Lion,1,lion.png,fox.jpg,leapord.jpg,bear.jpg\
";
var random_item;


var mainState = {

    preload: function() {
        game.stage.backgroundColor = '#71c5cf';

        var temp = data_string.split(';');
        var data_arr =[]
        for(i=0;i<temp.length;i++){
            data_arr.push(temp[i].split(","));
        }

        random_item = data_arr[Math.floor(Math.random()*data_arr.length)];
        console.log(random_item);
        game.load.image('option1', 'assets/img/'+random_item[2]);
        game.load.image('option2', 'assets/img/'+random_item[3]);
        game.load.image('option3', 'assets/img/'+random_item[4]);
        game.load.image('option4', 'assets/img/'+random_item[5]);

    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        options = game.add.group();
        options.add(this.game.add.sprite(w/4-o/2, 250, 'option1'));
        options.add(this.game.add.sprite(3*w/4-o/2, 250, 'option2'));
        options.add(this.game.add.sprite(w/4-o/2,400, 'option3'));
        options.add(this.game.add.sprite(3*w/4-o/2,400, 'option4'));

        function itemDragStop(item) {
              var temp = item.name.split(';');
              console.log(temp);
              if(item.y<180){
                if(random_item[1] == temp[0]){
                    console.log("correct");
                    item.x=w/2;
                    item.y=70;
                    item.scale.x=2.5;
                    item.scale.y=3.5;
                    alert("Well Done !!");
                    game.state.start('main');
                    return;
                }

              }
              var temp = item.name.split(';');
              //console.log("moving to " + temp[1]+","+temp[2]);
              item.x=temp[1];
              item.y=temp[2];
              //this.game.add.tween(item).to({x:temp[1],y:temp[2]}, 100).start();
              //console.log("new position "+item.x+","+item.y)
            };

        var i=1;
        options.forEach(function (item) {
              item.inputEnabled = true;
              item.input.enableDrag(true, true);
              item.events.onDragStop.add(itemDragStop);
              item.scale.x=1.5;
              item.scale.y=1.5;
              item.name=i++ + ";"+item.x+";"+item.y;
              console.log(item.x,item.y);
            });

        this.score = 0;
        this.labelScore = this.game.add.text(w/2-30, 70, random_item[0], { font: "30px Arial", fill: "#ffffff" });

        this.jumpSound = this.game.add.audio('jump');

        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(0);
        graphics.beginFill(0xFFFF0B, 0.5);
        graphics.drawCircle(w/2,100,120);

    },

    update: function() {
        
    }
};

game.state.add('main', mainState);
game.state.start('main');
