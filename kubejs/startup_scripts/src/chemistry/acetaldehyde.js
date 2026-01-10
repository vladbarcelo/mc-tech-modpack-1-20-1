StartupEvents.registry('fluid', event => {
  // Mixtures for phenolic resin
  event.create('creosote_acetaldehyde_mixture')
    .thinTexture(0x966400)
    .displayName('Creosote-Acetaldehyde Reaction Mixture')

  event.create('acetaldehyde_vapor')
    .thinTexture(0xe8deca)
    .displayName('Acetaldehyde Vapor')
    .gaseous()
    .noBlock();
});