# ng-component-cli
CLI for creating new ng components

## Create new component
Command should be:

`node create.js new-component`

It should create new folder **new-component** in **src** and following files:
- config.js
- controller.js
- index.js
- model.js
- template.html

It should create **new-component.html** in **special** folder.

## Component files
Command should insert component name instead <newComponent> as camel case:

**controller.js**:
```
export default class <newComponent>Controller extends BaseClass {
	constructor () {
		'ngInject';
		super(arguments);
	}
}
```

**index.js**:
```
export default angular.module('<newComponent>', [])
	.component('<newComponent>', config)
	.factory('<newComponent>Model', model)
	.name;
```
**model.js**:
```
export default function <newComponent>Model () {
	'ngInject';

	const factory = {};

	return factory;
}
```
In **template.html** it should insert component name as plain text:
```
<div>
	new component
</div>
```
