'use strict';

/*jshint expr: true*/

var expect = require( 'chai' ).expect;

var utils = require( '../utils' );

describe( 'lib/utils', function() {

    describe( '.parseJSON', function() {

        var json = {

            one: 1,
            two: 'two',
            three: 'iii'
        };

        it( 'with callback', function() {

            utils.parseJSON( JSON.stringify( json ), function( err, obj ) {

                expect( err ).to.not.exist;
                expect( obj ).to.eql( json );
            });
        });

        it( 'with callback and error condition', function() {

            utils.parseJSON( '==' + JSON.stringify( json ), function( err, obj ) {

                expect( err ).to.exist;
                expect( obj ).to.not.exist;
            });
        });

        it( 'without callback', function() {

            expect( utils.parseJSON( JSON.stringify( json ) ) ).to.eql( json );
        });

        it( 'without callback with exception', function() {

            expect( utils.parseJSON.bind( null, '===' + JSON.stringify( json ) ) ).to.throw();
        });
    });
});
