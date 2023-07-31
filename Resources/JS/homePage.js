const skills = document.getElementById("skills");
const abt = document.getElementById("aboutME");
const contact = document.getElementById("contact");

function scroll() {
    skills.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollAbt() {
    abt.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollContact() {
    contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}