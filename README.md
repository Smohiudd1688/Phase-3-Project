# Tv Guide Application

This application is a one stop shop to get to know all about Avatar the Last Airbender. You can find out what the show is about, summary's regarding the main characters and the four nations. If you find a missing character you can even add one.

## Getting Started

### Installation

1. Clone the repository and cd into the folder.
2. Make sure Google Chrome is your default browser, it may not work correctly otherwise.
3. In terminal open the html file using the code below.
    ```bash
    npm start
    ```
4. You are ready to start using the application!

### Configuration

In order for the application to run correctly you will need to run a JSON server to replicate a full REST API. To do this you will need to:
1. Install the JSON server in terminal (either globally or locally) by running this code:
    ```bash
    npm install -g json-server
    ```
2. Then cd into directory where `db.json file` is stored, if not already
3. Lastly, run the following code:
    ```bash
    json-server --watch db.json
    ```

## Usage
To use the application you may browse, as you would any website. You can travel to a page discussing the different characters, by either clicking the character tab on the navigation bar or by clicking the image of the characters on the home page. When on the character page, you can browse the characters or add a missing character by clicking the appropiate button and filling out/submitting the form that pops up. After doing so, you should see the new character added to the bottom of the page.

You can travel to a page discussing the different nations, by either clicking the nations tab on the navigation bar or by clicking the map image of the nations on the home page. Once on the page the four different nations are displayed with a quick description, and you can click on it to go to a page dedicated to that particular nation. The page will display some details as well as the characters belonging to that nation.

## Project Status
This application is completed.