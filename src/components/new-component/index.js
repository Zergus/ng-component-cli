import config from './config';
import model from './model';

export default angular.module('<newComponent>', [])
	.component('newChallange', config)
	.factory('newChallangeModel', model)
	.name;
