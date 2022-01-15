class List {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Tile {
    constructor(name, description, role, page_url, id, list_id, uses_link, uses_description) {
        this.name = name;
        this.description = description;
        this.role = role;
        this.page_url = page_url;
        this.id = id;
        this.list_id = list_id;
        this.uses_link = uses_link;
        this.uses_description = uses_description;
    }
}

_LISTS = [
    new List("Unreleased / In Development", "list_unreleased"),
    new List("January 2022", "list_2022_january"),
    new List("December 2021", "list_2021_december")
]

_PROJECTS = [
    // Unreleased / In Development
    new Tile("JesusAI", "a batch game involving Jesus, debugging features and 4 endings", "co-developing, recoding parts of the game", "https://github.com/JesusAIexperience/JesusAI", "web_fpr", "list_unreleased", true, true),
    new Tile("JesusAI Cartridges", "optional DLC that can run from JesusAI", "coding", "https://github.com/DREZMOR/JesusAI-Cartridges", "web_fpr", "list_unreleased", true, true),
    new Tile("Cortisol", "A 2-player Batch game about teamwork and stress", "coding", "https://github.com/DREZMOR/Cortisol", "web_fpr", "list_unreleased", true, true),
    
    //January 2022
    new Tile("Unix Epoch", "Easy to use mod loader + injector for JesusAI", "coding, writing injection methods", "https://github.com/DREZMOR/Unix-Epoch", "web_fpr", "list_2022_january", true, true),
    
    // December 2021
    new Tile("abyss (Scrapped)", "a game of descending layers to find... something", "coding", "https://github.com/DREZMOR/ABANDONED-abyss", "web_fpr", "list_2021_december", false, false), 
    new Tile("Fiberopt (Scrapped)", "A short Batch game about loneliness", "coding", "https://github.com/DREZMOR/Fiberopt", "web_fpr", "list_2021_december", false, false),
]

function getListEntry(list_id) {
    return _LISTS.find(list => {
        return list.id == list_id;
    })
}

function addProjectsToDocument() {
    _PROJECTS.forEach(function(item, index) {
        var list_item = document.createElement('li');
        //var list_image = document.createElement('a');
        var list_details = document.createElement('div');
        var list_title_holder = document.createElement('h3');

        if (item.uses_link == true) {
            var list_title_url = document.createElement('a');
        } else {
            var list_title_url = document.createElement('span');
        }

        var list_description = document.createElement('span');
        var list_work_description = document.createElement('span');
        var list_sep = document.createElement('br');

        // set properties

        if (item.uses_link == true) {
            //list_image.href = item.page_url;
            list_title_url.href = item.page_url;
        }

        list_title_url.innerText = item.name;
        list_description.innerText = item.description;
        list_work_description.innerText = "Work: " + item.role;
        list_item.classList.add("li_project");
        list_item.classList.add("li_project_" + item.id);
        //list_image.style = "background-image: url('" + item.thumbnail_url + "');";
        list_details.classList.add("project_details");
        list_details.classList.add("project_" + item.id + "_details");
        list_description.classList.add("project_desc");
        list_description.classList.add("project_" + item.id + "_desc");
        list_work_description.classList.add("project_work_desc");
        list_work_description.classList.add("project_" + item.id + "_work_desc");

        // add to document
        list_title_holder.appendChild(list_title_url);
        list_title_holder.appendChild(list_sep);

        if (item.uses_description == true) {
            list_title_holder.appendChild(list_description);
            list_title_holder.appendChild(document.createElement("br"));
        }
        
        list_title_holder.appendChild(list_work_description);
        list_details.appendChild(list_title_holder);
        //list_item.appendChild(list_image);
        list_item.appendChild(list_details);
        document.getElementById(item.list_id).appendChild(list_item);
    });
}

function addListsToPage() {
    _LISTS.forEach(function(item, index) {
        createList(item);
    })
}

function getListOnPage(list) {
    return document.getElementById(list.id);
}

function createList(list) {
    var list_name = document.createElement("h3");
    var list_list = document.createElement("ul");

    list_list.classList.add("project_list");
    list_list.id = list.id;
    list_name.classList.add("list_name");
    list_name.innerText = list.name;

    document.getElementById("lists").appendChild(list_name);
    document.getElementById("lists").appendChild(list_list);
}

document.addEventListener("DOMContentLoaded", function() {
    addListsToPage();   
    addProjectsToDocument();
});
