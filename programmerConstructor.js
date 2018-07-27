function Programmer( name, title, age, language ) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.language = language;
    this.PrintProgrammer = function () {
        console.log(this.name, this.title, this.age, this.language)
    };
}

var Patrick = new Programmer("Patrick", "Junior Programmer", 24, "Yu-Gi-Oh Cards")

Patrick.PrintProgrammer();