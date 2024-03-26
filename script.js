new Swiper('.image-slider', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //буллеты, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
});

function chSelected() {
    const selectTypeValue = document.querySelector('#type').value;
    if(selectTypeValue == "Пополняемый")
    {
        document.querySelector('#percent-two').style.display = 'none';
        document.querySelector('#percent-one').style.display = 'block';
    }
    else
    {
        document.querySelector('#percent-one').style.display = 'none';
        document.querySelector('#percent-two').style.display = 'block';
    }
  }

function Calculate() {
    const selectTypeValue =document.querySelector('#type').value;
    var period;
    if(selectTypeValue != ''){
        if(selectTypeValue == "Пополняемый")
            period = document.querySelector('#percent-one').value;
        else if (selectTypeValue == "Срочный")
            period = document.querySelector('#percent-two').value;
        if(period != ""){
            var valueArr = period.split(',').map(item => isNaN(item) ? item : parseFloat(item));
            var moneySum = parseFloat(document.querySelector('#moneySum').value);
            document.getElementById('id_out__text-info').innerHTML = "Вклад "+selectTypeValue+" на срок " + valueArr[0] + " на сумму "+ moneySum +" руб.";
            document.getElementById('id_out__text-sum').innerHTML = ""+(moneySum+moneySum*valueArr[2]*valueArr[1]).toFixed(2)+" руб.";
        }
    }
    else
    {
        document.getElementById('id_out__text-info').innerHTML = "";
        document.getElementById('id_out__text-sum').innerHTML = "";
    }
  }