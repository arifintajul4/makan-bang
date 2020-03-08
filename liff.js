window.onload = function() {
    const useNodeJS = false;  
    const defaultLiffId = "1653926617-vy61ydKb";   

    let myLiffId = "";
    if (useNodeJS) {
        fetch('/send-id')
            .then(function(reqResponse) {
                return reqResponse.json();
            })
            .then(function(jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function(error) {
                document.getElementById("liffAppContent").classList.add('hidden');
                document.getElementById("liffIdErrorMessage").classList.remove('hidden');
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};

function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        document.getElementById("liffAppContent").classList.add('hidden');
        document.getElementById("liffIdErrorMessage").classList.remove('hidden');
    } else {
        initializeLiff(myLiffId);
    }
}

function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: "1653926617-vy61ydKb"
        })
        .then(() => {
            initializeApp();
            console.log('ok');
        })
        .catch((err) => {
            console.log('gak ok');
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffIdErrorMessage").classList.remove('hidden');
        });
}

function initializeApp() {
    var btnLogin = document.getElementById('btnLogin');
    if(btnLogin){
        btnLogin.addEventListener('click', function() {
            if(liff.login()){
                window.location.href = "order.php";
            }
        });
    }else{
        handleBtnOrder();   
    }
}

function handleBtnOrder()
{
    if (!liff.isInClient()) {
        document.getElementById("openInBrowser").classList.add('hidden');
        document.getElementById('btnLogout').addEventListener('click', function() {
            if (liff.isLoggedIn()) {
                liff.logout();
            }
        });
    } else {
        document.getElementById("btnLogout").classList.add('hidden');
        document.getElementById('openInBrowser').addEventListener('click', function() {
            liff.openWindow({
                url: 'https://makan-bang.herokuapp.com/',
                external: true
            });
        });
    }
}