describe('karmic-core', function () {
    var $rootScope,
        $injector,

    beforeEach(function () {
        module('karmic-core');
        
        inject(function (_$rootScope_, _$injector_) {
            $rootScope = _$rootScope_;
        });
    });

    it('should be awesome', function () {
        var awesome = true;
        expect(awesome).toBe(true);
    });
});