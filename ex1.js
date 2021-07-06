const puppeteer = require('puppeteer');
const BASE_URL = 'https://instagram.com/';
const TAG_URL = (tag) => `https://www.instagram.com/explore/tags/${tag}/`;

var hashtags = ['nature','love','money'] ;
var hashtag1 = ['cars','love','money'] ;

(async () => {
  const browser = await puppeteer.launch({headless:false}, {
  executablePath: '/usr/bin/google-chrome'
});
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0); 
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4427.0 Safari/537.36')
  await page.goto(BASE_URL, {waitUntil: 'networkidle2'});
  await page.waitForTimeout(6000)
  page.waitForNavigation({waitUntil: 'networkidle2'})
  

  //login
  await page.waitForTimeout(7000);
  await page.type('input[name="username"]', 'theqa237', { dealy: 50});
  await page.type('input[name="password"]', '44ken23', { dealy: 50});

  await page.waitForTimeout(4000);
  page.click('button[type="submit"');
  //save sign in
  // await page.waitForTimeout(4000);
  // page.click('button[type="button"');
  // //notification
  // await page.waitForTimeout(4000);
  // page.click('button[tabindex="0"');


  //comment

    await page.waitForTimeout(7000);

    // await hashtag1.forEach((hashtag) => {
    //     like(hashtag)
            
    // });

    await hashtags.forEach((hashtag) => {
        comment(hashtag)
            
    });
    async function comment(hashtag) {
        await page.goto(TAG_URL(hashtag), {waitUntil: 'networkidle2'});

        await page.waitForTimeout(5000);
        // await window.scrollBy(0, 100);
        var posts = await page.$$('.FFVAD')
        console.log(posts)
        await page.waitForTimeout(1000);

        for(i=0; i<50; i++){
        let post = posts[i];
        await post.click()
        await page.waitForTimeout(5000);
        await page.click('svg[aria-label="Comment"]');
        await page.waitForTimeout(5000);
        await page.type('textarea[aria-label="Add a comment…"]', '@new_mother_hub', { dealy: 50});
        page.click('button[type="submit"');
        await page.waitForTimeout(6000);
        await page.click('svg[aria-label="Close"]');
        await page.waitForTimeout(3000);
        
        }

        console.log('first comment');

    }

    async function like(hashtag) {
        await page.goto(TAG_URL(hashtag), {waitUntil: 'networkidle2'});

        await page.waitForTimeout(5000);
        var posts = await page.$$('.FFVAD')
        await page.waitForTimeout(1000);

        for(i=0; i<50; i++){
        let post = posts[i];
        await post.click()
        await page.waitForTimeout(5000);
        await page.click('svg[aria-label="Like"]');
        await page.waitForTimeout(5000);
        // await page.type('textarea[aria-label="Add a comment…"]', '@new_mother_hub', { dealy: 50});
        // page.click('button[type="submit"');
        await page.waitForTimeout(6000);
        await page.click('svg[aria-label="Close"]');
        await page.waitForTimeout(3000);
        
        }

        console.log('first like');

    }
  

//   await browser.close();
})();


