/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var changeTay = document.getElementById("name1");
changeTay.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following: 

Project Manager*/

var changeKhaled = document.getElementById("position2");
changeKhaled.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

var changePiko = document.getElementById("alias3");
changePiko.innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var changeSnoop = document.getElementsByClassName("profile")[0];
changeSnoop.innerHTML = "Lorizzle ipsizzle dolizzle sit crackalackin, fizzle adipiscing elit.";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var changeSammy = document.getElementsByClassName("profile")[2];
changeSammy.innerHTML = "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks.";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

 var changeChuck = document.createElement("div");
changeChuck.id = "name7";
changeChuck.innerHTML = "Chuck Norris";
nameBox.appendChild(changeChuck);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var changeGrim = document.createElement("div");
changeGrim.id = "alias8";
changeGrim.innerHTML = "The Purple Monster";
aliasBox.appendChild(changeGrim);


//Final Boss
/*8. Create your own profile.*/

var myName = document.createElement("div");
myName.id = "name9";
myName.innerHTML = "Mellanie Soriano";
document.getElementsByClassName("block3 col-sm-4")[2].innerHTML = "<img src=http://i68.tinypic.com/14ijxvr.jpg>";