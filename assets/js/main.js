let descriptionWebsite = document.getElementById("description");
descriptionWebsite.onclick = function(){
    if(descriptionWebsite.style.display == "-webkit-box")
    {
        descriptionWebsite.style.display = "block";
    }
    else{
        descriptionWebsite.style.display = "-webkit-box";
    }
};