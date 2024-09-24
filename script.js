import scrollEvents from "./src/js/scrollEvents.mjs";
import openingHours from "./src/js/openingHours.mjs";
import heroRandomizer from "./src/js/heroRandomizer.mjs";
import createPricingList from "./src/js/createPricingList.mjs";
import languageSwap from "./src/js/languageSwap.mjs";

//Adds scrollevents 
scrollEvents();

// Hero image randomizer
heroRandomizer();

// Opening hours
openingHours();

// Create pricing list
createPricingList();

// Language swap
languageSwap();