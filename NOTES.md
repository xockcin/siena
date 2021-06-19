# SIENA
## A CSA app

### 4/15/21

This is a phone app for the Siena Farm CSA program. It will give you a rundown of the items in this week's box, which you can click on for more information and recipes. You will be able to save your favorite recipes and your favorite ingredients, and also browse all recipes and all ingredients.

### 4/22/21

I would like take a first stab at building this app. So what am I building? My Figma prototype could hardly be simpler: There is a splash screen, followed by a scrollable list of CSA items, each of which has a title and an avatar picture. If you tap one, it brings you to a page, also scrollable, with information about the item and a list of recipes.

It occurs to me that the content I want to have in my app is all in the weekly email. I good start would simply be to take that content and put it into the app.

So what do I need? Not much! Really just three screens: splash, item list and item view. The splash will just be a graphic; the item list and item view screens will be scrollviews.

Update: I have the basic layout. My struggle is to get the images to show up in the items. For some reason it's not working. I will stop for now and keep working on it later.

I fixed it! The trick was to put the require function directly in the JSON object.

This was a great start! I can do more tomorrow or next week.

# 4/23/21

Now I will spend some time just making it look nicer. That is what matters most. This app is not going to do very much. The point is just for it to look nice.

Actually, it looks pretty nice already. It's not so hard to make things look nice. What I really need is to implement the routing logic, so that you can hit the buttons to get to the item screens for each of the items. And that I'm not so sure how to do. I will need to look at the NuCamp website, probably, and also spend some time researching different React Native Navigation libraries.

# 6/18/21

It is time to return to this project. I pitched it very informally to Rachel at Siena Farms yesterday, and she thought it sounded like a great idea. So the next step is to build out a minimal prototype.

My plan is to start by building it in Snack. That way it will be easy to share. The first iteration will be an app that contains, essentially, just the information in the email newsletter and nothing more. There will be a scrollable list of items, each with a thumbnail image. If you hit the item, it will expand into a view containing the name of the item, a larger picture of the item, the source of the item (name and location), a description of the item, and a few buttons that open links to recipes in an external browser. Ultimately we will want to make a recipe view for the app itself, but not yet.

I basically have this built already. It's not working right now because apparently there is some sort of dependency conflict with the version of react-navigation that I'm using, but that should be easy enough to fix. All I need to do is show what the experience will be like for the user.

TODO:
- MainComponent and ItemComponent are almost the same - consolidate them into one.
- Make sure the navigation actually works.
- Turn the recipe divs into links.
- Add a splash screen.

# 6/19/21

The best way to do this project will probably be to work on it here in VS Code, and then upload it to Snack once I'm satisfied with it. The first challenge will be to implement navigation. In order to do that, I will need to read the React Navigation documentation, which will take a little while. I also need to generally clean up the code and the file structure. So here is my current todo:
- Read React Navigation docs.
- Turn all class components into functions.
- Make card component look nicer.
- Add links to recipes.
- Implement React Navigation, so that list items navigate to item cards.
- Add back button to item card.
- Make the green frame its own component.
- Add splash screen and main menu.