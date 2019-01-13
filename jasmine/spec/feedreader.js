
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This loops through each allFeeds objexts and ensures it has 
         * a URL defined & that the URL is not empty
         */
        it('url defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });


    /*new test suite named "The menu" */
describe('The menu', function(){
        /* A test that ensures the menu element is
         * hidden by default. 
         */
    it('is hidden', function() {
        let body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
    });

    it('toggles on and off', function() {
        let body = document.querySelector('body');
        let menu = document.querySelector('.menu-icon-link');
        //displays when clicked
        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);
        //goes away once clicked again 
        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);

    }); 

});

    /* new test suite named "Initial Entries" */
describe('Initial Entries', function(){
            /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    beforeEach(function(done) {
        loadFeed(0, done);
    });
    /*loadFeed function is called and completes its work there is at least a
    single .entry element within the .feed container 
    */
    it('completes work', function() {
        const feed = document.querySelector('.feed .entry');
        expect(feed.length > 0).toBe(true);
    });
});

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        let feed = document.querySelector('.feed');
        let firstFeed = [];
        loadFeed();
        
        //new feed is loaded by loadFeed
        beforeEach(function(done){
            loadFeed(0);
            Array.from(feed.children).forEach(function(entry){
                firstFeed.push(entry.innerText);
            loadFeed(1,done);
            });
        });
            //checks to see if the content changes once the function is run 
        it('content changes', function(){
            Array.from(feed.children).forEach(function(entry, index){
                expect(entry.innerText === firstFeed[index]).toBe(false);
                expect(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
            });

        });
    
            /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    

});
});
