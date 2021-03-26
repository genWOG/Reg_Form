var $FirName = document.querySelector('#FirName');
var $SecName = document.querySelector('#SecName');
var $ThrName = document.querySelector('#ThrName');
var $SxChoose = document.querySelectorAll('#SxChoose');
var $BirthDate = document.querySelector('#BirthDate');
var $TelNum = document.querySelector('#TelNum');
var $Work = document.querySelector('#Work');
var $EMail = document.querySelector('#EMail');
var $Login = document.querySelector('#Login');
var $Pass = document.querySelector('#Pass');
var $CheckPass = document.querySelector('#CheckPass');
var $MoreInfo = document.querySelector('#MoreInfo');
var $Accept = document.querySelector('#Accept');
var $Clear = document.querySelector('#Clear');

var i;
var job;
var sxchoose;
var accept = true; //flag
var correct_text;
var see;
var date_now = new Date(); //current date
var now = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate())
var bd;
var users_bd;
var minus;
var age;
var bd_year;
var bd_mnth;
var bd_day;

var DBObject = {};

function Accept() {


    $SxChoose.forEach(element => {
        if (element.checked) {
            sxchoose = element.nextSibling.data;
        }
    });
    bd = $BirthDate.value;
    bd_year = bd.substring(0, 4);
    bd_mnth = bd.substring(5, 7);
    bd_day = bd.substring(8, 10);
    users_bd = new Date(bd_year, bd_mnth, bd_day);
    age = now.getFullYear() - users_bd.getFullYear();
    if ($Work.checked) {
        job = "Опыт работы есть!";
    } else {
        job = "Опыта работы нет!";
    }
    if ($CheckPass.value != $Pass.value || $Pass.value == "") {
        alert("Данные не совпадают! или пароль пустой");
        $Pass.value = "";
        $CheckPass.value = "";
        accept = false;
    }
    //sdsdsdsif(FirName.value[0])
    //see = $BirthDate.getFullYear();
    console.log(see);
    if (accept == true) {
        DBObject.name = $FirName.value;
        DBObject.surname = $SecName.value;
        DBObject.thirdname = $ThrName.value;
        DBObject.sxChoose = sxchoose;
        DBObject.birthdate = $BirthDate.value;
        DBObject.telnum = $TelNum.options.first; //!!!!!!!!!!!!!!
        DBObject.work = job;
        DBObject.email = $EMail.value; //!!!!!!!!!!!!!!
        DBObject.login = $Login.value;
        DBObject.pass = $Pass.value;
        DBObject.moreinfo = $MoreInfo.value;
        if (accept == 1) {
            console.log(DBObject);
        }
        console.log(DBObject);
    } else {
        console.log("Что-то не так!");
        accept = true;
    }
}

$Accept.addEventListener('click', Accept);
$Clear.addEventListener('click', Clear);
$TelNum.addEventListener('keypress', e => {
    // Отменяем ввод не цифр
    if (!/\d/.test(e.key))
        e.preventDefault();
});
//Check for russian symbols
$FirName.addEventListener('keypress', e => {
    if (!/^[а-яё]*$/i.test(e.key)) {
        e.preventDefault();
    } else {}
});

$SecName.addEventListener('keypress', e => {
    if (!/^[а-яё]*$/i.test(e.key)) {
        e.preventDefault();
    }
});

$ThrName.addEventListener('keypress', e => {
    if (!/^[а-яё]*$/i.test(e.key)) {
        e.preventDefault();
    }

});


function Clear() {
    for (i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = "";
        document.getElementsByTagName("input")[i].checked = false;
    }
    $MoreInfo.value = "";

}