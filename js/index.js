// Основной JavaScript практического сайта.
// alert('Привет-привет! Основной модуль JS успешно подгружен!')

// Чекер адреса страницы и удаления записи localStorage для вкладок
if (sessionStorage.getItem('last_path') != window.location.pathname) {
    sessionStorage.setItem('last_path', window.location.pathname);
    sessionStorage.removeItem('Tab_Status')
}

// Код для плавного переключения страниц
$(document).ready(function() {    
    $("body").css("opacity", "1");
});

// Спойлер для сайта - создаётся через <div class="spoiler_head">название</div> и 
// <div class="spoiler_body">наполнение</div>
$(document).ready(function(){
    $('.spoiler_head').append('<span class="state">▼</span><style>span.state { float:right; margin-right: .3em; }</style>');
    $('.spoiler_head').click(function(){
        if ($(this).next('.spoiler_body').css("display")!="none") $(this).children(".state").html("▼");
        else $(this).children(".state").html("▲");
        $(this).next('.spoiler_body').slideToggle('normal');
        return false;
    });
});

// Плавные анимации для кнопок скролла вверх и вниз.
function ScrollUp(){
    var t,s;
    s=document.documentElement.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=5);else clearInterval(t)},5);
}
function ScrollDown(){
    var t,s;
    s=document.documentElement.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s<document.documentElement.scrollHeight-document.documentElement.clientHeight)window.scroll(0,s+=5);else clearInterval(t)},5);
}

// Простой счёт
function resultation() {
    let itemsInStock = 18;
    if (itemsInStock > 0) {
        console.log(itemsInStock);
    } else {
        console.log("Товар закончился");
    }
}

// Генерация таблицы
function CreateTablePreset() {
    document.write ('<table width="100%" border="1">');
    for (i=1; i<11; i++) {
    document.writeln("<tr>");
        for (j=1; j<11; j++) document.write("<td>" + i + j + "<\/td>");
        document.writeln("<\/tr>");
    }
    document.write ("<\/table> "); 
    //alert('Таблица создана!')
}

// Webamp - https://github.com/captbaritone/webamp
function Web_player() {
    const app = document.getElementById("app")
    const webamp = new Webamp();
    webamp.renderWhenReady(app);
}

// Замена css tabs. Jeb mosniy. Переключает вкладки без отдельных страниц.
function showTab(tabs, tab) {
    var links = tabs.querySelectorAll(".my-tabs-link > a");
    links.forEach(function (link) {
        var content = document.querySelector(link.getAttribute("href"));
        content.classList.remove("active");
    });
    var activeContent = document.querySelector(tab.getAttribute("href"));
    activeContent.style.display = 'block';
    setTimeout(function () {
        activeContent.classList.add("active");
    }, 10);
    setTimeout(function () {
        links.forEach(function (link) {
            var content = document.querySelector(link.getAttribute("href"));
            if (!content.classList.contains("active")) {
                content.style.display = 'none';
            }
        });
    }, 500);
    sessionStorage.setItem('Tab_Status', tab.getAttribute("href"));
}

document.addEventListener('DOMContentLoaded', function(){ 
    var my_tabs_array = document.querySelectorAll(".my-tabs");
    var tabId = sessionStorage.getItem('Tab_Status');
    if (tabId != null){
        showTab(document.querySelector(".my-tabs a[href='" + tabId + "']").closest(".my-tabs"), document.querySelector(".my-tabs a[href='" + tabId + "']"));
    }
    if (document.location.hash!=''){
        showTab(document.querySelector(".my-tabs a[href='" + document.location.hash + "']").closest(".my-tabs"), document.querySelector(".my-tabs a[href='" + document.location.hash + "']"));
    }
    
    my_tabs_array.forEach(function(tabs) {
        var links = tabs.querySelectorAll(".my-tabs-link > a");
        links.forEach(function(link) {
            link.addEventListener("click", function(event){
                showTab(tabs, this);
                event.preventDefault();
            });
        });
    });
});