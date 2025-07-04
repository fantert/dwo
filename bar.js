


function sendTo(page) {
    switch (page) {
        case 'documents':
            window.location.href = '/dwo/documents.html';
            break;
        case 'services':
            window.location.href = '/dwo/services.html';
            break;
        case 'qr':
            window.location.href = '/dwo/qr.html';
            break;
        case 'more':
            window.location.href = '/dwo/more.html';
            break;
        case 'home':
            window.location.href = '/dwo/home.html';
            break;
        case 'card':
            window.location.href = '/dwo/card.html';
            break;
    }
}


document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
  }
  
  if (getMobileOperatingSystem() == 2){
      document.querySelector(".bottom_bar").style.height = "70px"
}