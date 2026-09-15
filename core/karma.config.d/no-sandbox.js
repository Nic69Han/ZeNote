// Le conteneur de développement tourne en root : Chrome refuse de démarrer sans
// --no-sandbox. Ce réglage ne concerne que les tests, jamais l'application livrée.
config.set({
  browsers: ['ChromeHeadlessNoSandbox'],
  customLaunchers: {
    ChromeHeadlessNoSandbox: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    },
  },
});
