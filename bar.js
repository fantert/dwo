


function sendTo(page) {
    var params = new URLSearchParams(window.location.search);
    switch (page) {
        case 'documents':
            window.location.href = '/dwo/documents.html?' + params.toString();
            break;
        case 'services':
            window.location.href = '/dwo/services.html?' + params.toString();
            break;
        case 'qr':
            window.location.href = '/dwo/qr.html?' + params.toString();
            break;
        case 'more':
            window.location.href = '/dwo/more.html?' + params.toString();
            break;
        case 'home':
            window.location.href = '/dwo/home.html?' + params.toString();
            break;
        case 'card':
            window.location.href = '/dwo/card.html?' + params.toString();
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