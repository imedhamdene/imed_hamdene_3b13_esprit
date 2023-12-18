// animation.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the element you want to animate
  const element = document.getElementById("animatedElement");
  const element1 = document.getElementById("animatedElement1");
  const element2 = document.getElementById("animatedElement2");
  const element3 = document.getElementById("animatedElement3");
  const element4 = document.getElementById("animatedElement4");
  // Set initial position and velocity
  let position = 50;
  let position1 = 360;
  let position2 = 670;
  let position3 = 980;
  let position4 = 1300;
  let velocity = 2; // Pixels per frame

  function animate() 
  {
     position += velocity;
     element.style.left = position + "px"; 
     if (position > window.innerWidth) 
     { 
      position = -element.clientWidth;// Reset position when it goes out of the viewport
     }
     requestAnimationFrame(animate);
  }
  function animate1() 
  {
      position1 += velocity;
      element1.style.left = position1 + "px";
      if (position1 > window.innerWidth) 
      { 
        position1 = -element1.clientWidth;// Reset position when it goes out of the viewport
      }
      requestAnimationFrame(animate1);
  }
  function animate2() 
  {
     position2 += velocity;
     element2.style.left = position2 + "px"; 
     if (position2 > window.innerWidth) 
     { 
      position2 = -element2.clientWidth;// Reset position when it goes out of the viewport
     }
     requestAnimationFrame(animate2);
  }
  function animate3() 
  {
     position3 += velocity;
     element3.style.left = position3 + "px"; 
     if (position3 > window.innerWidth) 
     { 
      position3 = -element3.clientWidth;// Reset position when it goes out of the viewport
     }
     requestAnimationFrame(animate3);
  }
  function animate4() 
  {
     position4 += velocity;
     element4.style.left = position4 + "px"; 
     if (position4 > window.innerWidth) 
     { 
      position4 = -element4.clientWidth;// Reset position when it goes out of the viewport
     }
     requestAnimationFrame(animate4);
  }

  // Start the animation
  animate();
  animate1();
  animate2();
  animate3();
  animate4();
});