let btnControl;
let main_control;
let door_control;
let light_control;
let tire_control;
let hood, leftDoor, rightDoor, cabin;
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
  //   door_control.style.display = "none";
  light_control.style.display = "none";
  tire_control.style.display = "none";
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
    doorSetting(cabin, false);
    doorSetting(leftDoor, true);
    doorSetting(rightDoor, false);
    doorSetting(hood, false);
  };
  const doorSetting = (item, isLocked) => {
    if (isLocked) {
      item.style = "background-color: blue";
    } else {
      item.style = "background-color: red";
      item.appendChild(createPing());
    }
    item.appendChild = creatIconDoor(isLocked);
      
  };
  const removeElement = (item, id) => {
    var elem = item.getElementById(id);
    return elem.parentNode.removeChild(elem);
  };
  const createPing = () => {
    let pingDoor = document.createElement("span");
    pingDoor.className =
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-100";

    return pingDoor;
    };
    const creatIconDoor = (isLocked) => {
        let icon;
        icon = document.createElement("iconify-icon")
        icon.style = "height='30'"
        icon.width = '30'
        icon.heihgt = '30'
        if (isLocked) {
            icon.icon = 'mingcute:lock-fill'
        }
        else {
            icon.icon ='mingcute:unlock-fill'
        }
        return icon
    }
  settingDoor();
});
