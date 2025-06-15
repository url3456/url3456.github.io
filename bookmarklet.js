// public/bookmarklet.js (or wherever you serve static files from)
(function () {
  const box = document.createElement("div");
  const text = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");

  // Style the container
  box.style.position = "fixed";
  box.style.top = "20px";
  box.style.left = "20px";
  box.style.backgroundColor = "#fff";
  box.style.border = "1px solid #ccc";
  box.style.padding = "16px";
  box.style.borderRadius = "8px";
  box.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  box.style.zIndex = 10000;
  box.style.fontFamily = "sans-serif";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.gap = "12px";
  box.style.fontSize = "18px";

  text.textContent = "Choose an action:";
  box.appendChild(text);

  const buttons = [
    { label: "Alert", onclick: () => alert("You clicked Alert!") },
    { label: "Log", onclick: () => console.log("Button 2 clicked!") },
    { label: "Close", onclick: () => box.remove() }
  ];

  buttons.forEach(({ label, onclick }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.style.padding = "12px 20px";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "6px";
    btn.style.border = "1px solid #888";
    btn.style.backgroundColor = "#f0f0f0";
    btn.onclick = onclick;
    box.appendChild(btn);
  });

  document.body.appendChild(box);
})();
