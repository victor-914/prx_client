const Hero = require('@ulixee/hero');
// mobile ip = 102.90.103.14


try {
    (async () => {
        const hero = new Hero({
          showChrome:true,
          connectionToCore: {
              host: `127.0.0.1:1818`,
            },
            upstreamProxyUrl:"http://127.0.0.1:9080"
        });
        await hero.goto('https://whoer.net/');
      
      //   const title = await hero.document.title;
      //   const intro = await hero.document.querySelector('p').textContent;
      //   await hero.close();
      })();   
} catch (error) {
    console.log("🚀 ~ error:", error)
    
}
