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

function Accept() {
    console.log($SecName.value)
    console.log($FirName.value);
    console.log($ThrName.value);
    //console.log($SxChoose.value);
    $SxChoose.forEach(element => {
        if (element.checked) {
            console.log(element.nextSibling.data);
        }
    });
    console.log($BirthDate.value);
    console.log($TelNum.value);
    if ($Work.checked) {
        console.log("Опыт работы есть!");
    } else {
        console.log("Опыта работы нет!");
    }
    console.log($EMail.value);
    console.log($Login.value);
    console.log($Pass.value);
    console.log($CheckPass.value);
    console.log($MoreInfo.value);
}

$Accept.addEventListener('click', Accept);
$Clear.addEventListener('click', Clear);


function Clear() {
    console.log(document.getElementsByTagName("input").length);
    for (i = 0; i < document.getElementsByTagName("input").length; i++) {

        document.getElementsByTagName("input")[i].value = "";
        document.getElementsByTagName("input")[i].checked = false;
        $MoreInfo.value = "";
    }

}