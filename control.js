let btnControl;
let main_control;
let door_control;
let light_control;
let tire_control;
let hood, leftDoor, rightDoor, cabin;
let tl_tire, tr_tire, bl_tire, br_tire;
let tl_number, tr_number, bl_number, br_number;
let tl_circle, tr_circle, bl_circle, br_circle;
let tl_container, tr_container, bl_container, br_container;

window.addEventListener("load", () => {
  // initilize element
  btnControl = document.getElementById("btnControl");
  main_control = document.getElementById("main_control");
  main_control.style.display = "none";
  door_control = document.getElementById("door_control");
  light_control = document.getElementById("light_control");
  tire_control = document.getElementById("tire_control");
  hood = document.getElementById("hood");
  leftDoor = document.getElementById("left_door");
  rightDoor = document.getElementById("right_door");
  cabin = document.getElementById("back_cabin");
  door_control.style.display = "none";
  light_control.style.display = "none";
  tire_control.style.display = "none";
  // tire_control
  //LEFT FRONT
  tl_tire = document.getElementById("tl_tire");
  tl_circle = document.getElementById("tl_circle");
  tl_number = document.getElementById("tl_number");
  tl_container = document.getElementById("tl_container");
  //RIGHT FRONT
  tr_tire = document.getElementById("tr_tire");
  tr_circle = document.getElementById("tr_circle");
  tr_number = document.getElementById("tr_number");
  tr_container = document.getElementById("tr_container");

  // LEFT BACK
  bl_tire = document.getElementById("bl_tire");
  bl_circle = document.getElementById("bl_circle");
  bl_number = document.getElementById("bl_number");
  bl_container = document.getElementById("bl_container");
  // RIGHT BACK
  br_tire = document.getElementById("br_tire");
  br_circle = document.getElementById("br_circle");
  br_number = document.getElementById("br_number");
  br_container = document.getElementById("br_container");

  // event listerner
  btnControl.addEventListener("click", () => {
    if (main_control.style.display == "none") {
      main_control.style.display = "flex";
    } else {
      main_control.style.display = "none";
      // main_control.style = "animation: FadeOut 500ms linear;animation-fill-mode: both; "
    }
    console.log("clicked btn control");
  });
  main_control.addEventListener("click", (e) => {
    let target = e.target.className.split(" ")[0];
    switch (target) {
      case "door_option":
        showOption(0);
        break;
      case "light_option":
        showOption(1);
        break;
      case "tire_option":
        showOption(2);
        break;
    }
  });

  const showOption = (index) => {
    switch (index) {
      case 0:
        door_control.style.display = "flex";
        light_control.style.display = "none";
        tire_control.style.display = "none";
        break;
      case 1:
        door_control.style.display = "none";
        light_control.style.display = "flex";
        tire_control.style.display = "none";
        break;
      case 2:
        door_control.style.display = "none";
        light_control.style.display = "none";
        tire_control.style.display = "flex";
        break;
    }
  };
  const settingDoor = () => {
    doorSetting(hood, false);
    doorSetting(cabin, true);
    doorSetting(leftDoor, true);
    doorSetting(rightDoor, false);
  };
  const doorSetting = (item, isLocked) => {
    if (isLocked) {
      item.style = "background-color: blue";
    } else {
      item.style = "background-color: red";
      item.appendChild(createPing());
    }
    item.appendChild(creatIconDoor(isLocked));
  };
  const settingTire = () => {
    tireSetting(tl_tire, tl_container, tl_circle, tl_number, true);
    tireSetting(tr_tire, tr_container, tr_circle, tr_number, false);
    tireSetting(bl_tire, bl_container, bl_circle, bl_number, false);
    tireSetting(br_tire, br_container, br_circle, br_number, true);
  };
  const tireSetting = (containerOut, containerIn, circle, number, isLow) => {
    if (isLow) {
      containerOut.appendChild(createPing());
      circle.style = "stroke: rgb(220,38,38)";
      containerIn.style = "background-color: rgba(220,38,38,0.5);";
    } else {
      containerIn.style = "background-color: rgba(147,197,253,0.6);";
      circle.style = "stroke: rgb(147,197,253)";
    }
    tireNumber(circle, number, 100); // cang tang cang giam
  };
  const tireNumber = (circle, tire_number, number) => {
    tire_number.innerText = number.toString() + "psi";
    circle.style.strokeDashoffset = (300 - number).toString();
  };
  const createPing = () => {
    let pingDoor = document.createElement("span");
    pingDoor.className =
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-100";
    return pingDoor;
  };
  const creatIconDoor = (isLocked) => {
    let icon;
    icon = document.createElement("div");
    icon.className = "itemBubble flex flex-col justify-center items-center";
    if (isLocked) {
      icon.innerHTML =
        '<iconify-icon icon="mingcute:lock-fill" style="color: white" width="30" height="30"></iconify-icon>';
    } else {
      icon.innerHTML =
        '<iconify-icon icon="mingcute:unlock-fill" style="color: white" width="30" height="30"></iconify-icon>';
    }
    return icon;
  };
  const removeElement = (item, id) => {
    var elem = item.getElementById(id);
    return elem.parentNode.removeChild(elem);
  };
  settingDoor();
  settingTire();
});
