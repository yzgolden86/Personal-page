//可变化的
const siteConfig = {
    pageTitle: "",
    logoText: "简单记录，简单生活",
    welcomeMessage: "try your best",
    quote: "Endless desire can never bring satisfaction, but only distress.",
    quoteAuthor: "— Epicurus",
    navLinks: [
        { text: "博客", url: "https://blog.685586.xyz/" },
        { text: "面板", url: "https://panel.zlcom.pp.ua/" },
        { text: "热榜", url: "https://hot.imsyy.top/" },
        { text: "导航", url: "https://navi.yzgo.nyc.mn/" },
        { text: "图床", url: "https://tggraph1.zlcom.pp.ua/" }
    ],
    footerLinks: [
        { text: "YouTube", url: "https://www.youtube.com" },
        { text: "Twitter", url: "https://www.twitter.com" },
        { text: "Email", url: "mailto:yzgo@stronzi.org" }
    ]
};

window.onload = function() {
    document.title = siteConfig.pageTitle;

    document.querySelector('.logo').innerHTML = siteConfig.logoText;
    document.querySelector('.welcome').innerHTML = siteConfig.welcomeMessage;
    document.querySelector('.quote').innerHTML = `"${siteConfig.quote}" <br> - ${siteConfig.quoteAuthor}`;

    updateDateTime();
    setInterval(updateTime, 1000);

    const navContainer = document.querySelector('.nav-buttons');
    siteConfig.navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        anchor.target = "_blank";
        navContainer.appendChild(anchor);
    });

    const footerContainer = document.querySelector('.footer');
    siteConfig.footerLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        anchor.target = "_blank";
        footerContainer.appendChild(anchor);
    });
};

function updateTime() {
    const clockElement = document.querySelector('.clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time-weather');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1
    const date = String(now.getDate()).padStart(2, '0');
    const day = now.getDay();
    const dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const formattedDate = `${year}年${month}月${date}日 ${dayNames[day]}`;

    const weatherInfo = ``;
    dateTimeElement.innerHTML = `${formattedDate} <br> ${weatherInfo}`;

    updateTime();
}
