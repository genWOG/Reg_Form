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
var accept = 0;//flag
var correct_text;

var DBObject = {
    name: '',
    surname: '',
    thirdname: '',
    sxChoose: '',
    birthdate: '',
    telnum: '',
    work: '',
    email: '',
    login: '',
    pass: '',
    moreinfo: ''
}

function Accept() {


    $SxChoose.forEach(element => {
        if (element.checked) {
            sxchoose = element.nextSibling.data;
        }
    });
    if ($Work.checked) {
        job = "Опыт работы есть!";
    } else {
        job = "Опыта работы нет!";
    }

    DBObject.name = $FirName.value;
    DBObject.surname = $SecName.value;
    DBObject.thirdname = $ThrName.value;
    if($FirName.value[0].toU)
    DBObject.sxChoose = sxchoose;
    DBObject.birthdate = $BirthDate.value;
    DBObject.telnum = $TelNum.options.first; //!!!!!!!!!!!!!!
    DBObject.work = job;
    DBObject.email = $EMail.value; //!!!!!!!!!!!!!!
    DBObject.login = $Login.value;

    DBObject.pass = $Pass.value;
    if ($CheckPass.value != $Pass.value) {
        alert("Данные не совпадают!");
        $Pass.value = "";
        $CheckPass.value = "";
    }
    //

    DBObject.moreinfo = $MoreInfo.value;
    if (accept == 1) {
        console.log(DBObject.name)
        console.log(DBObject.surname);
        console.log(DBObject.thirdname);
        console.log(DBObject.sxChoose);
        console.log(DBObject.birthdate);
        console.log(DBObject.telnum);
        console.log(DBObject.work);
        console.log(DBObject.email);
        console.log(DBObject.pass);
        console.log(DBObject.moreinfo);
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
    console.log(document.getElementsByTagName("input").length);
    for (i = 0; i < document.getElementsByTagName("input").length; i++) {

        document.getElementsByTagName("input")[i].value = "";
        document.getElementsByTagName("input")[i].checked = false;
        $MoreInfo.value = "";
    }

}