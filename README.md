# B2B-DAPP
front-end engineering project small web app on a beer blog 


In the project there are the following directory:

 *	**CSS**: contains all the css of the template;
   
 *	**Images**: contains the image of the slider (of index.html) and the logo of the app;
    
 *	**Pages**: contains several directory, each one relative to a different web page;
   
 *	**Plugins**: contains all the plugins of the template;
   
 *	**Services**: contains several directory each one relative to a different external service and a Javascript file (persistence-menager.js) to avoid direct coupling between files responsible to manage persistence and others;
   
Each directory in pages has the follow files: 

 *	**page.html**: contains the html of the web page;
   
 *	**utility-function.js**: : responsible to mange HTML but do not interact with external services
   
 *	**set-event.js**: responsible to assign events to html element. Interact with persistence-manager to retrieve the data from external service and with utility-function to manage HTML;
   
The Service directory contain the follow files:  

 *	**Firebase/conf-firebase.js**: maintain the firebase api configuration;
   
 *	**Firebase/firestore-database/crud-op.js**: responsible to interact with Firestore (a no-sql database included in firebase stack) used in this project for store reviews and few beers data used for research use case;
   
 *	**Firebase/storage/manage_storage.js**: responsible to interact with Firestore (a cloud service useful to store images and video) at the end do not used for the project;
   
 *	**BeerApi/BeerApiHeandler.js**: responsible to interact with Punk API
   
 *	**Persistence_menager.js**: an interface between persistence layer and others 
