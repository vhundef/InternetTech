a = "background-color:#00ffff; color:#ff00ff;"
a += "font-size: 24pt; font-family: 'Times New Roman'"
name = 'Сеть магазинов "ВСЁ ДЛЯ ДОМА"'
var da = new Date()
d = da.getDate() + "." + (da.getMonth() + 1) + "." + da.getFullYear()
document.write('<p align="center" style= "' + a + '">' +
    name + '</p><p align="center">Сегодня ' + d + '</p>')