# B2B-DAPP
front-end engineering project small web app on a beer blog
Logical organization, layering and directory structure:
In the project there are the follow directory:
  •	CSS: contain all the css of the template;
  •	Images: contain the image of the slider (of index.html) and the logo of the app;
  •	Pages: contain several directory each one relative to a different web page;
  •	Plugins: contains all the plugin of the template;
  •	Services: contains several directory each one relative to a different external service and a Javascript fie (persistence-menager.js) to avoid direct coupling between file responsible to manage persistence and other;
Each directory in pages has the follow files:
  •	page.html: contain the html of the web page;
  •	utility-function.js: : it’s responsible to mange HTML but do not interact with external services
  •	set-event.js: it’s responsible to assign events to html element. Interact with persistence-manager to retrieve the data from external service and with utility-function to manage HTML;
The Service directory contain the follow files:
  •	#Firebase/conf-firebase.js#: maintain the firebase api configuration 
  •	Firebase/firestore-database/crud-op.js :  it’s responsible to interact with Firestore (a no-sql database included in firebase stack) used in this project for store reviews and few beers data used for research use case
  •	Firebase/storage/manage_storage.js:   it’s responsible to interact with Firestore (a cloud service useful to store images and video) at the end do not used for the project
  •	BeerApi/BeerApiHeandler.js: it’s responsible to interact with Punk API
  •	Persistence_menager.js: it’s an interface between persistence layer and other
