// Button Click Event with Animation
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("output").textContent = "🎮 Game On, Thapelo! You clicked the button!";
    document.getElementById("output").style.color = "gold";
    document.getElementById("changeTextBtn").classList.add("button-clicked");
  });
  
  // Secret Double Click Action with Glow Animation
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("🎉 Secret Action Unlocked! You found it, Thapelo!");
    document.getElementById("secretBtn").style.animation = "glow 1s infinite alternate";
  });
  
  // Keyframe Animation for Glow Effect
  document.styleSheets[0].insertRule(`
  @keyframes glow {
    0% { box-shadow: 0 0 10px #ff6f00, 0 0 20px #ff6f00, 0 0 30px #ff6f00; }
    100% { box-shadow: 0 0 10px #ff9100, 0 0 20px #ff9100, 0 0 30px #ff9100; }
  }`, document.styleSheets[0].cssRules.length);
  
  // Tab Switch with Cool Animation
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
      const content = document.getElementById(tab.dataset.content);
      content.style.display = "block";
      content.style.animation = "gameBounce 1.5s ease-in-out";
    });
  });
  
  // Form Validation with Feedback
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    let feedback = "";
  
    if (!email.includes("@")) {
      feedback = "🚫 Invalid email!";
    } else if (pass.length < 8) {
      feedback = "🔒 Password too short!";
    } else {
      feedback = "✅ Form looks good. Ready for the next level!";
    }
  
    document.getElementById("formFeedback").textContent = feedback;
  });
  
  // Detecting Keypress like a gamer
  document.addEventListener("keydown", (e) => {
    console.log(`🎮 Key pressed: ${e.key}`);
  });
  