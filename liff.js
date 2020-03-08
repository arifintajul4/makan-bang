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
        if (!liff.isLoggedIn()) {
            btnLogin.addEventListener('click', function() {
                liff.login();
            });
        }else{
            window.location.href = "order.php";
        }
    }else{
        if (liff.isLoggedIn()) {
            getProfile();
            handleOrder();  
        }else{
            window.location.href = "index.php";
        } 
    }
}
var displayName;
function getProfile(){
    liff.getProfile().then(function(profile) {
        displayName = profile.displayName;
        document.getElementById('displayName').textContent = displayName;
    }).catch(function(error) {
        window.alert('Error getting profile: ' + error);
    });
}

function handleOrder()
{
    if (!liff.isInClient()) {
        document.getElementById("openInBrowser").classList.add('hidden');
        document.getElementById('btnLogout').addEventListener('click', function() {
            liff.logout();
            window.location.href = "index.php";
        });
        document.getElementById('btnOrder').addEventListener('click', function(){
            window.alert('Fitur ini hanya dapat digunakan di aplikasi LINE');
        });
    } else {
        document.getElementById("btnLogout").classList.add('hidden');
        document.getElementById('openInBrowser').addEventListener('click', function() {
            liff.openWindow({
                url: 'https://makan-bang.herokuapp.com/',
                external: true
            });
        });

        document.getElementById('btnOrder').addEventListener('click', function(){
            let message = "Hai "+displayName+"\n\nTerimakasih telah memesan makanan, berikut adalah review pesanannya:\n\n"+pesanan+"\n\nPesanan kakak akan segera diproses dan akan diberitahu jika sudah diambil.\n\nMohon ditunggu ya!";
            if(pesanan != ''){
                liff.sendMessages([{
                    'type': 'text',
                    'text': message
                }]).then(function() {
                    window.alert('Sukses melakukan pemesanan, silahkan cek pesan anda');
                }).catch(function(error) {
                    window.alert('Error sending message: ' + error);
                });
            }else{
                window.alert('Silahkan pilih menu dulu!');
            }
            
        });
            
    }

}
