 // "http": "^0.0.1-security",
    // "http-proxy": "^1.18.1"

    const Hero = require('@ulixee/hero');
// mobile ip = 102.90.103.14


try {
    (async () => {
        const hero = new Hero({
          showChrome:true,
          connectionToCore: {
            host: `127.0.0.1:1818`,
          },
            upstreamProxyUrl:"https://102.90.103.14:9080"
        });
        // await hero.goto('https://whoer.net/');
        await hero.goto('https://shows.acast.com/creatives-interviewed-with-j/episodes/graphics-and-fashion-designer');
      
      //   const title = await hero.document.title;
      //   const intro = await hero.document.querySelector('p').textContent;
      //   await hero.close();
      })();   
} catch (error) {
    console.log("🚀 ~ error:", error)
    
}
