define([ "angular", "angular-material" ], function(angular) {
	return angular.module("app", [ "ngMaterial", "app.ws", "app.tiles" ]);
});