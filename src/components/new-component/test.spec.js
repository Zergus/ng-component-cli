describe("<New component> test", function() {
  	beforeEach(angular.mock.module('<newComponent>'));

  	beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
	}));

	it('should create component', () => {
        let el = $compile('<new-component></new-component>')($rootScope);
        $rootScope.$digest();
        expect(el.html()).toMatch(/<new component>/i);
    });
});

