describe('karmic-core', function () {
    var $rootScope,
        $injector;

    beforeEach(function () {
        inject(function (_$rootScope_, _$injector_) {
            $rootScope = _$rootScope_;
        });
    });

    it ('should be awesome', function () {
        var thisApp = true,
            awesome = true;

        expect(thisApp).toBe(awesome);
    });
});
