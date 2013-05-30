var url = 'http://far7-plugin.tk/',
    req = {
		id: 1004089,
        player:'haba-haba',
        system:1,
        planet:4,
        time:new Date().getTime(),
        info:{
            "1":{sell:123, buy:456},
            "2":{sell:234, buy:765},
            "3":{sell:1234, buy:1765},
            "4":{sell:2234, buy:5765},
            "5":{sell:4234, buy:8765},
            "6":{sell:7234, buy:12765},
            "7":{sell:15234, buy:25765},
            "8":{sell:26234, buy:46765},
            "9":{sell:47234, buy:57765},
            "10":{sell:65834, buy:99765},
            "11":{sell:93234, buy:148765},
            "12":{sell:342674, buy:541765},
            "13":{sell:531234, buy:983765},
        }
    },
    xhr = new XMLHttpRequest();
    xhr.open('POST',url);
    xhr.send(JSON.stringify(req));