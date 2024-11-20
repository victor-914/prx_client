const CloudNode = require('@ulixee/cloud').CloudNode;


(async () => {
  const cloudNode = new CloudNode({
    port: 1818,
  });
  await cloudNode.listen();

  console.log(`CloudNode started on port ${await cloudNode.port}`);
})().catch(error => {
  console.log('ERROR starting Ulixee CloudNode', error);
  process.exit(1);
});
