require.config({
    paths: {
      'fontawesome': 'vendor/fontawesome/fontawesome.min',
      'fontawesome/solid': 'vendor/fontawesome/solid.min',
      'fontawesome/brands': 'vendor/fontawesome/brands.min'
    },
    shim: {
      'fontawesome': {
        deps: ['fontawesome/solid', 'fontawesome/brands'],
        exports: 'FontAwesome'
      }
    }
  })
  
  require(['fontawesome'], function (fontawesome) {
    console.log('Congrats, Font Awesome is installed using Require.js')
  
    var icon = fontawesome.icon(
      fontawesome.findIconDefinition({ iconName: 'stroopwafel' }),
      {
        classes: ['fa-10x']
      }
    )
  
    document.body.appendChild(icon.node[0])
  })