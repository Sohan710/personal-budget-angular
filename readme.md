Sohan Birajdar
801298151
ITCS NBAD 5166
Angular website 

Done with these questions: 
1. Move the CSS that we added for the NAV tag (which is inside the styles.scss) and move that CSS inside the file menu.component.scss 
    1. Make sure that it works
2. Locate the H1 tag which is inside the component Hero (hero.component.html) and add to it a [routerLink]... so if someone clicks in this H1 element it should redirect the browser to the root address (the main home page)
3. Create a new component called "breadcrumbs". You can add any content and CSS that you want to this new component. But now that you created the breadcrumbs component, please add it as the first child of the "main" tag that is inside the homepage component template.
4. Create a new component and call it "contact". It can have any content and CSS that you want.
    1. Once you create the contact component, go to the Router module and add a new path, so if people access '/contact' they will be served this newly created "contact" component
    2. Also, add a new link to the "menu" component template (and name it "Contact"), so when people click that link they will access the router that will lead them to the Contact page 
5. Make sure that your D3JS chart works with the Angular way of doing things
    1. You might need to google "Angular D3JS" to see how to use D3JS inside Angular
6. Create a new Angular Service called "data", and make sure that
    1. The HTTP call to the backend will populate a variable inside the DataService
    2. And that the Charts that you have implemented are reading the data from the DataService and not from a local variable
7. Also, make sure that the method that makes the call to the backend service will only be executed if the variable inside the DataService is empty. If the variable inside the DataService is full, then there is no need to make a new call to the backend

# Info
The path to NGInx main folder: /usr/share/nginx/html

