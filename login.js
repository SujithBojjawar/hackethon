// // DOM Elements
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");
// const skillsContainer = document.getElementById('skills-container');

// // Toggle between sign-up and sign-in modes
// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

// // =========================================
// // THREE.JS BACKGROUND ANIMATION
// // =========================================
// let scene, camera, renderer, stars = [];

// function initThreeJS() {
//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
//   camera.position.z = 1;
//   camera.rotation.x = Math.PI/2;
  
//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.getElementById('background-canvas').appendChild(renderer.domElement);
  
//   // Create stars
//   for(let i = 0; i < 1000; i++) {
//     const geometry = new THREE.SphereGeometry(0.1, 8, 8);
//     const material = new THREE.MeshBasicMaterial({
//       color: 0xffffff,
//       transparent: true,
//       opacity: Math.random()
//     });
//     const star = new THREE.Mesh(geometry, material);
    
//     star.position.x = Math.random() * 2000 - 1000;
//     star.position.y = Math.random() * 2000 - 1000;
//     star.position.z = Math.random() * 2000 - 1000;
    
//     scene.add(star);
//     stars.push(star);
//   }
  
//   animateStars();
// }

// function animateStars() {
//   requestAnimationFrame(animateStars);
  
//   stars.forEach(star => {
//     star.position.z += 0.3;
    
//     if(star.position.z > 1000) {
//       star.position.z = -1000;
//     }
//   });
  
//   renderer.render(scene, camera);
// }

// // Handle window resize
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Initialize Three.js background
// initThreeJS();

// // =========================================
// // FLYING SKILLS TAGS ANIMATION
// // =========================================
// const skills = [
//   "JavaScript", "Python", "React", "Node.js", "MongoDB", 
//   "Express", "HTML5", "CSS3", "AWS", "Docker", 
//   "Git", "TypeScript", "GraphQL", "REST API", "Redux",
//   "Vue.js", "Angular", "Java", "C++", "PHP", 
//   "Django", "Flask", "Ruby", "Swift", "Kotlin",
//   "TensorFlow", "PyTorch", "SQL", "NoSQL", "Firebase"
// ];

// // Create and animate skill tags
// function createSkillTag() {
//   const skill = document.createElement('div');
//   skill.className = 'skill-tag';
//   skill.textContent = skills[Math.floor(Math.random() * skills.length)];
  
//   // Random position on screen edges
//   const side = Math.floor(Math.random() * 4);
//   let x, y;
  
//   switch(side) {
//     case 0: // top
//       x = Math.random() * window.innerWidth;
//       y = -50;
//       break;
//     case 1: // right
//       x = window.innerWidth + 50;
//       y = Math.random() * window.innerHeight;
//       break;
//     case 2: // bottom
//       x = Math.random() * window.innerWidth;
//       y = window.innerHeight + 50;
//       break;
//     case 3: // left
//       x = -50;
//       y = Math.random() * window.innerHeight;
//       break;
//   }
  
//   skill.style.left = `${x}px`;
//   skill.style.top = `${y}px`;
  
//   // Random color
//   const hue = Math.floor(Math.random() * 360);
//   skill.style.background = `hsla(${hue}, 80%, 60%, 0.2)`;
//   skill.style.borderLeft = `4px solid hsla(${hue}, 80%, 60%, 0.8)`;
  
//   skillsContainer.appendChild(skill);
  
//   // Animate with GSAP
//   gsap.to(skill, {
//     duration: Math.random() * 5 + 8,
//     x: Math.random() * window.innerWidth - x,
//     y: Math.random() * window.innerHeight - y,
//     opacity: 1,
//     ease: "power1.inOut",
//     onComplete: () => {
//       gsap.to(skill, {
//         duration: 1,
//         opacity: 0,
//         onComplete: () => {
//           skill.remove();
//         }
//       });
//     }
//   });
  
//   // Create next skill tag after a random delay
//   setTimeout(createSkillTag, Math.random() * 1500 + 800);
// }

// // Start creating skill tags
// for(let i = 0; i < 5; i++) {
//   setTimeout(() => createSkillTag(), i * 500);
// }

// // Add some interactive effects
// document.querySelectorAll('.input-field').forEach(field => {
//   field.addEventListener('focus', () => {
//     gsap.to(field, {
//       duration: 0.3,
//       scale: 1.03,
//       boxShadow: '0 8px 20px rgba(92, 107, 192, 0.3)'
//     });
//   }, true);
  
//   field.addEventListener('blur', () => {
//     gsap.to(field, {
//       duration: 0.3,
//       scale: 1,
//       boxShadow: 'none'
//     });
//   }, true);
// });

// // Add button hover effects
// document.querySelectorAll('.btn').forEach(button => {
//   button.addEventListener('mouseenter', () => {
//     gsap.to(button, {
//       duration: 0.3,
//       y: -3,
//       boxShadow: '0 10px 25px rgba(92, 107, 192, 0.6)'
//     });
//   });
  
//   button.addEventListener('mouseleave', () => {
//     gsap.to(button, {
//       duration: 0.3,
//       y: 0,
//       boxShadow: '0 10px 25px rgba(92, 107, 192, 0.3)'
//     });
//   });
  
//   button.addEventListener('click', () => {
//     gsap.to(button, {
//       duration: 0.1,
//       scale: 0.95,
//       onComplete: () => {
//         gsap.to(button, {
//           duration: 0.2,
//           scale: 1
//         });
//       }
//     });
    
//     // Create additional skill tags on button click
//     for(let i = 0; i < 5; i++) {
//       setTimeout(() => createSkillTag(), i * 200);
//     }
//   });
// });

// // Form submission (prevent default for demo)
// document.querySelectorAll('form').forEach(form => {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Create success animation
//     const formBtn = form.querySelector('.btn');
//     const originalText = formBtn.value;
    
//     formBtn.value = form.classList.contains('sign-in-form') ? "Logging in..." : "Signing up...";
    
//     gsap.to(formBtn, {
//       duration: 0.3,
//       background: '#4CAF50',
//       boxShadow: '0 10px 25px rgba(76, 175, 80, 0.5)',
//       onComplete: () => {
//         // Reset after 2 seconds
//         setTimeout(() => {
//           formBtn.value = originalText;
//           gsap.to(formBtn, {
//             duration: 0.3,
//             background: '#5c6bc0',
//             boxShadow: '0 10px 25px rgba(92, 107, 192, 0.5)'
//           });
//         }, 2000);
//       }
//     });
    
//     // Create celebration effect with more skills
//     for(let i = 0; i < 10; i++) {
//       setTimeout(() => createSkillTag(), i * 100);
//     }
//   });
// });

// DOM Elements
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const skillsContainer = document.getElementById('skills-container');

// Toggle between sign-up and sign-in modes
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// =========================================
// THREE.JS BACKGROUND ANIMATION
// =========================================
let scene, camera, renderer, stars = [];

function initThreeJS() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('background-canvas').appendChild(renderer.domElement);
  
  // Create stars
  for (let i = 0; i < 1000; i++) {
    const geometry = new THREE.SphereGeometry(0.1, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: Math.random()
    });
    const star = new THREE.Mesh(geometry, material);
    
    star.position.x = Math.random() * 2000 - 1000;
    star.position.y = Math.random() * 2000 - 1000;
    star.position.z = Math.random() * 2000 - 1000;
    
    scene.add(star);
    stars.push(star);
  }
  
  animateStars();
}

function animateStars() {
  requestAnimationFrame(animateStars);
  
  stars.forEach(star => {
    star.position.z += 0.3;
    
    if (star.position.z > 1000) {
      star.position.z = -1000;
    }
  });
  
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize Three.js background
initThreeJS();

// =========================================
// FLYING SKILLS TAGS ANIMATION
// =========================================
const skills = [
  "JavaScript", "Python", "React", "Node.js", "MongoDB", 
  "Express", "HTML5", "CSS3", "AWS", "Docker", 
  "Git", "TypeScript", "GraphQL", "REST API", "Redux",
  "Vue.js", "Angular", "Java", "C++", "PHP", 
  "Django", "Flask", "Ruby", "Swift", "Kotlin",
  "TensorFlow", "PyTorch", "SQL", "NoSQL", "Firebase"
];

// Create and animate skill tags
function createSkillTag() {
  const skill = document.createElement('div');
  skill.className = 'skill-tag';
  skill.textContent = skills[Math.floor(Math.random() * skills.length)];
  
  // Random position on screen edges
  const side = Math.floor(Math.random() * 4);
  let x, y;
  
  switch (side) {
    case 0: // top
      x = Math.random() * window.innerWidth;
      y = -50;
      break;
    case 1: // right
      x = window.innerWidth + 50;
      y = Math.random() * window.innerHeight;
      break;
    case 2: // bottom
      x = Math.random() * window.innerWidth;
      y = window.innerHeight + 50;
      break;
    case 3: // left
      x = -50;
      y = Math.random() * window.innerHeight;
      break;
  }
  
  skill.style.left = `${x}px`;
  skill.style.top = `${y}px`;
  
  // Random color
  const hue = Math.floor(Math.random() * 360);
  skill.style.background = `hsla(${hue}, 80%, 60%, 0.2)`;
  skill.style.borderLeft = `4px solid hsla(${hue}, 80%, 60%, 0.8)`;
  
  skillsContainer.appendChild(skill);
  
  // Animate with GSAP
  gsap.to(skill, {
    duration: Math.random() * 5 + 8,
    x: Math.random() * window.innerWidth - x,
    y: Math.random() * window.innerHeight - y,
    opacity: 1,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(skill, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          skill.remove();
        }
      });
    }
  });
  
  // Create next skill tag after a random delay
  setTimeout(createSkillTag, Math.random() * 1500 + 800);
}

// Start creating skill tags
for (let i = 0; i < 5; i++) {
  setTimeout(() => createSkillTag(), i * 500);
}

// Add some interactive effects
document.querySelectorAll('.input-field').forEach(field => {
  field.addEventListener('focus', () => {
    gsap.to(field, {
      duration: 0.3,
      scale: 1.03,
      boxShadow: '0 8px 20px rgba(92, 107, 192, 0.3)'
    });
  }, true);
  
  field.addEventListener('blur', () => {
    gsap.to(field, {
      duration: 0.3,
      scale: 1,
      boxShadow: 'none'
    });
  }, true);
});

// Add button hover effects
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      duration: 0.3,
      y: -3,
      boxShadow: '0 10px 25px rgba(92, 107, 192, 0.6)'
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      duration: 0.3,
      y: 0,
      boxShadow: '0 10px 25px rgba(92, 107, 192, 0.3)'
    });
  });
  
  button.addEventListener('click', () => {
    gsap.to(button, {
      duration: 0.1,
      scale: 0.95,
      onComplete: () => {
        gsap.to(button, {
          duration: 0.2,
          scale: 1
        });
      }
    });
    
    // Create additional skill tags on button click
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createSkillTag(), i * 200);
    }
  });
});

// Form submission (prevent default for demo)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create success animation
    const formBtn = form.querySelector('.btn');
    const originalText = formBtn.value;
    
    formBtn.value = form.classList.contains('sign-in-form') ? "Logging in..." : "Signing up...";
    
    gsap.to(formBtn, {
      duration: 0.3,
      background: '#4CAF50',
      boxShadow: '0 10px 25px rgba(76, 175, 80, 0.5)',
      onComplete: () => {
        // Redirect to home page after 2 seconds
        setTimeout(() => {
          window.location.href = 'home.html'; // Redirect to home page
        }, 2000);
        
        // Reset after 2 seconds
        setTimeout(() => {
          formBtn.value = originalText;
          gsap.to(formBtn, {
            duration: 0.3,
            background: '#5c6bc0',
            boxShadow: '0 10px 25px rgba(92, 107, 192, 0.5)'
          });
        }, 2000);
      }
    });
    
    // Create celebration effect with more skills
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createSkillTag(), i * 100);
    }
  });
});
