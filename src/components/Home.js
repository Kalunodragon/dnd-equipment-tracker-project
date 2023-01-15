import React from "react";

function Home() {
    return(
        <div className="home">
            <h1>Welcome to the Equipment Tracker tool for D&D 5E!</h1>
            <p className="main-description">
                This tool can be used to keep track of the inventory that a player has within their bag for a D&D game.
                <br/>
                <br/>
                At the top of this application you will find a navigation bar, on it you will see a few different options to select from.
                Currently you should see that the Home tab is selected. This is where you can find out how to use this amazing app!
                <br/>
                <br/>
                Next to that you should see the Inventory tab, this tab will show you the current items within your player inventory. There
                should be a few sample items already loaded in there for you to get a glace at what it should look like!
                <br/>
                <br/>
                After that should be the Equipment List tab. Now this one may seem a bit overwhelming at first, however that is probably
                because it holds around 200+ items that you can find within D&D 5E! There is a ton to explore there! Here you can select
                items that you would like to add to your bag or inventory. If it happens to be an item that you already have well then it
                will just add an additional item to the count that you already have.
                <br/>
                <br/>
                Now for my personal favorite! The Form tab, here you can submit your own home brewed items into your own inventory! There are
                a few requirments which you can find over on that tab. There are a few required form inputs that you will need to fill out
                as well. These items are currently only stored in your specific inventory. So make sure if you go to delete one of these
                items that you wont need it again, because if you do you will need to fill out the form again to get it back!
                <br/>
                <br/>
                Last in this lineup will be the Random Treasure tab! I bet you can already guess what this one will do! Though there is a bit
                of added functionality on that tab as well. You can select how many random items you want and will get back as many items as
                you asked for. Now being that these are random, there is a slight chance that you can have items that match one another. Future
                updated to this application might fix this problem
            </p>
            <p className="signature">
                This application has been built by Andrew Onulak, Student at Flatirons school for Software Engineering. The API used for getting
                the information for the items is found in the GitHub README on this applications GitHub page.
            </p>
        </div>
    )
}

export default Home