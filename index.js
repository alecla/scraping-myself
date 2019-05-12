const puppeteer = require('puppeteer');

void (async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://alecla.github.io/');
        await page.screenshot({
            path: './screenshots/page1.png'
        });

        await page.pdf({path: './pdfs/page1.pdf'});

        const me = await page.evaluate(() => {
            return ({
                title: document.querySelector('h1').innerText,
                description: document.querySelector('p').innerText
            })
        })

        console.log(`Content: ${JSON.stringify(me)}`)

        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();