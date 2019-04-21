// function onKeyDown(event) {
//     var randomPoint = Point.random();
//     var maxPoint = new Point(view.size.width, view.size.height);
//     var point = randomPoint * maxPoint;
//     var circle = new Path.Circle(point, 10);
//     circle.fillColor = 'red';
//   }

var Data = {
    q: {
      sound: new Howl({
        src: ['sounds/bubbles.mp3']
      }),
      color: '#1abc9c'
    },
    w: {
      sound: new Howl({
        src: ['sounds/clay.mp3']
      }),
      color: '#2ecc71'
    },
    e: {
      sound: new Howl({
        src: ['sounds/confetti.mp3']
      }),
      color: '#3498db'
    },
    r: {
      sound: new Howl({
        src: ['sounds/corona.mp3']
      }),
      color: '#9b59b6'
    },
      t: {
      sound: new Howl({
        src: ['sounds/dotted-spiral.mp3']
      }),
      color: '#34495e'
    },
    y: {
      sound: new Howl({
        src: ['sounds/flash-1.mp3']
      }),
      color: '#16a085'
    },
    u: {
      sound: new Howl({
        src: ['sounds/flash-2.mp3']
      }),
      color: '#27ae60'
    },
    i: {
      sound: new Howl({
        src: ['sounds/flash-3.mp3']
      }),
      color: '#2980b9'
    },
    o: {
      sound: new Howl({
        src: ['sounds/glimmer.mp3']
      }),
      color: '#8e44ad'
    },
    p: {
      sound: new Howl({
        src: ['sounds/moon.mp3']
      }),
      color: '#2c3e50'
    },
    a: {
      sound: new Howl({
        src: ['sounds/pinwheel.mp3']
      }),
      color: '#f1c40f'
    },
    s: {
      sound: new Howl({
        src: ['sounds/piston-1.mp3']
      }),
      color: '#e67e22'
    },
      d: {
      sound: new Howl({
        src: ['sounds/piston-2.mp3']
      }),
      color: '#e74c3c'
    },
    f: {
      sound: new Howl({
        src: ['sounds/prism-1.mp3']
      }),
      color: '#95a5a6'
    },
    g: {
      sound: new Howl({
        src: ['sounds/prism-2.mp3']
      }),
      color: '#f39c12'
    },
    h: {
      sound: new Howl({
        src: ['sounds/prism-3.mp3']
      }),
      color: '#d35400'
    },
    j: {
      sound: new Howl({
        src: ['sounds/splits.mp3']
      }),
      color: '#1abc9c'
    },
    k: {
      sound: new Howl({
        src: ['sounds/squiggle.mp3']
      }),
      color: '#2ecc71'
    },
    l: {
      sound: new Howl({
        src: ['sounds/strike.mp3']
      }),
      color: '#3498db'
    },
    z: {
      sound: new Howl({
        src: ['sounds/suspension.mp3']
      }),
      color: '#9b59b6'
    },
    x: {
      sound: new Howl({
        src: ['sounds/timer.mp3']
      }),
      color: '#34495e'
    },
    c: {
      sound: new Howl({
        src: ['sounds/ufo.mp3']
      }),
      color: '#16a085'
    },
    v: {
      sound: new Howl({
        src: ['sounds/veil.mp3']
      }),
      color: '#27ae60'
    },
    b: {
      sound: new Howl({
        src: ['sounds/wipe.mp3']
      }),
      color: '#2980b9'
    },
    n: {
      sound: new Howl({
        src: ['sounds/zig-zag.mp3']
      }),
      color: '#8e44ad'
    },
    m: {
      sound: new Howl({
        src: ['sounds/moon.mp3']
      }),
      color: '#2c3e50'
    }
  }

paper.install(window);
window.onload = function() {
    paper.setup('myCanvas');
    var tool = new Tool();
    mainFunc();
}


function mainFunc()
{
    tool.onKeyDown = function(event){
        if(Data[event.key]){
            var circle = new Path.Circle(new Point(Math.floor(Math.random() * view.size.width), Math.floor(Math.random() * view.size.height)), 400);
            circle.fillColor = Data[event.key].color;
            Data[event.key].sound.play();
            Circles.push(circle);
        }
    }
    view.onFrame = function(event) {
        // Each frame, change the fill color of the path slightly by
        // adding 1 to its hue:
        for(var i = 0; i < Circles.length; i ++){
            Circles[i].fillColor.hue += 1;
            Circles[i].scale(.9);
            if(Circles[i].area < 1){
                Circles[i].remove(); // remove the circle from the canvas
                Circles.splice(i, 1); // remove the circle from the array
                console.log(Circles);
            }
        }
    }
}
 

    

var Circles = [];
function onKeyDown(event) {
    if(Data[event.key]){
        var circle = new Path.Circle(new Point(Math.floor(Math.random() * view.size.width), Math.floor(Math.random() * view.size.height)), 400);
        circle.fillColor = Data[event.key].color;
        Data[event.key].sound.play();
        Circles.push(circle);
    }
}

function onFrame(event) {
    // Each frame, change the fill color of the path slightly by
    // adding 1 to its hue:
    for(var i = 0; i < Circles.length; i ++){
        Circles[i].fillColor.hue += 1;
        Circles[i].scale(.9);
        if(Circles[i].area < 1){
            Circles[i].remove(); // remove the circle from the canvas
            Circles.splice(i, 1); // remove the circle from the array
            console.log(Circles);
        }
    }
}


// html embeded version
// var Circles = [];
// function onKeyDown(event) {
//   if(Data[event.key]){
//     var circle = new Path.Circle(new Point(Math.floor(Math.random() * view.size.width), Math.floor(Math.random() * view.size.height)), 400);
//     circle.fillColor = Data[event.key].color;
//     Data[event.key].sound.play();
//     Circles.push(circle);
//   }
// }

// function onFrame(event) {
//   // Each frame, change the fill color of the path slightly by
//   // adding 1 to its hue:
//   for(var i = 0; i < Circles.length; i ++){
//     Circles[i].fillColor.hue += 1;
//     Circles[i].scale(.9);
//     if(Circles[i].area < 1){
//       Circles[i].remove(); // remove the circle from the canvas
//       Circles.splice(i, 1); // remove the circle from the array
//       console.log(Circles);
//     }
//   }
// }
// </script>