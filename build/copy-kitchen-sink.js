const { promise: exec } = require('exec-sh');

const copyKitchenSink = async () => {
  // eslint-disable-next-line
  /* eslint-disable */
  for (let lib of ['react', 'vue', 'svelte']) {
    try {
      await exec(`rm -rf public/kitchen-sink/${lib}/dist`);
      await exec(`rm -rf public/kitchen-sink/${lib}/pages`);
    } catch (err) {}

    await exec(`mkdir public/kitchen-sink/${lib}/dist`);
    await exec(`mkdir public/kitchen-sink/${lib}/pages`);
    await exec(
      `cp -r ../konsta/kitchen-sink/${lib}/dist/* public/kitchen-sink/${lib}/dist`
    );
    await exec(
      `cp -r ../konsta/kitchen-sink/${lib}/pages/* public/kitchen-sink/${lib}/pages`
    );
  }
  /* eslint-enable */
};

copyKitchenSink();
