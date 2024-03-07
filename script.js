let volume = document.getElementById("volume-range")
let volumeIcon = document.querySelector("#volume-icon")
let mediumVolue = document.getElementById("medium-volume")
let thumb = document.getElementById("thumb")
thumb.style.left = `${20 + ((70 * volume.value) / 100)}%`
let dragStart = 0
let dragEnd = 0
thumb.ondragstart = function (e) {
  dragStart = e.screenX
}
thumb.ondrag = function (e) {
  if (e.screenX !== 0) {
    dragEnd = e.screenX
  }
  volume.value = +volume.value + (dragEnd - dragStart)
  changeThumbPosition()
  onInputClick()
  dragStart = dragEnd
}


function onInputClick() {
  if (+volume.value === 0) {
    mediumVolue.style.display = "none";
    volumeIcon.setAttribute("style", "display:inline;")
    volumeIcon.className = "fa-solid fa-volume-xmark"
  }
  else if (+volume.value > 0 && +volume.value <= 35) {
    mediumVolue.style.display = "none";
    volumeIcon.setAttribute("style", "display:inline;")
    volumeIcon.className = "fa-solid fa-volume-low"
  }
  else if (+volume.value > 35 && +volume.value <= 70) {
    volumeIcon.setAttribute("style", "display: none;")
    mediumVolue.style.display = "inline";
  }
  else if (+volume.value > 70 && +volume.value <= 100) {
    mediumVolue.style.display = "none";
    volumeIcon.setAttribute("style", "display:inline;")
    volumeIcon.className = "fa-solid fa-volume-high"
  }
  changeThumbPosition()
}

function changeThumbPosition() {
  if (+volume.value == 0) {
    thumb.style.left = "26%"
  }
  else if (+volume.value > 0) {
    thumb.style.left = `${20 + ((70 * volume.value) / 100)}%`
  }
}

volume.addEventListener("input", onInputClick)

