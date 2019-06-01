import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError} from '../testing/async-observable-helpers';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import {MessageService} from './message.service';
import {of} from 'rxjs';

describe ('HeroesService (with spies)', () => {
  // #docregion test-with-spies
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    var messageService = new MessageService();
    heroService = new HeroService(<any> httpClientSpy, messageService);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expectedHeroes: Hero[] =
      [{ id: 1, name: 'Alejandro' }, { id: 2, name: 'Guillermo' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    heroService.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    heroService.getHeroes().subscribe(
      heroes => fail('expected an error, not heroes'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

  it('should return expected hero (HttpClient called once)', () => {
    const expectedHero: Hero = { id: 1, name: 'Alejandro' };

    httpClientSpy.get.and.returnValue(asyncData(expectedHero));

    heroService.getHero(expectedHero.id).subscribe(
      heroes => expect(heroes).toEqual(expectedHero, 'expected hero'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  // #enddocregion test-with-spies

});

describe('HeroesService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test
      providers: [ HeroService ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    heroService = TestBed.get(HeroService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#addHero Test', () => {
    // Expecting the query form of URL so should not 404 when id not found
    const makeUrl = (id: number) => `${heroService.heroesUrl}/?id=${id}`;

    it('should add a hero and return it', () => {

      const addHeroExpected: Hero = { id: 1, name: 'Alejandro' };

      heroService.addHero(addHeroExpected).subscribe(
        data => expect(data).toEqual(addHeroExpected, 'should return the hero'),
        fail
      );

      // HeroService should have made one request to POST hero
      const req = httpTestingController.expectOne(heroService.heroesUrl);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(addHeroExpected);

      // Expect server to return the hero after POST
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: addHeroExpected });
      req.event(expectedResponse);
    });
  });

  describe('#deleteHero Test', () => {
    // Expecting the query form of URL so should not 404 when id not found
    const makeUrl = (id: number) => `${heroService.heroesUrl}/?id=${id}`;

    it('should delete a hero ', () => {

      const deleteHeroExpected: Hero = { id: 1, name: 'Alejandro' };

      heroService.deleteHero(deleteHeroExpected).subscribe(
        data => expect(data).toEqual(deleteHeroExpected, 'should delete the hero'),
        fail
      );

      // HeroService should have made one request to DELETE hero
      const req = httpTestingController.expectOne(heroService.heroesUrl);
      expect(req.request.method).toEqual('DELETE');
      expect(req.request.body).toEqual(deleteHeroExpected);

      // Expect server to return the hero after POST
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: deleteHeroExpected });
      req.event(expectedResponse);
    });
  });

  describe('#updateHero Test', () => {
    // Expecting the query form of URL so should not 404 when id not found
    const makeUrl = (id: number) => `${heroService.heroesUrl}/?id=${id}`;

    it('should update a hero and return it', () => {

      const updateHero: Hero = { id: 1, name: 'A' };

      heroService.updateHero(updateHero).subscribe(
        data => expect(data).toEqual(updateHero, 'should return the hero'),
        fail
      );

      // HeroService should have made one request to PUT hero
      const req = httpTestingController.expectOne(heroService.heroesUrl);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(updateHero);

      // Expect server to return the hero after PUT
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: updateHero });
      req.event(expectedResponse);
    });
  });

  // TODO: test other HeroService methods
});
