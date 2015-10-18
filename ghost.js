ghost = Npm.require('ghost');
// Needed according to 
// https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-NPM-module#update
ghost().then(function (ghostServer) {
    ghostServer.start();
});
