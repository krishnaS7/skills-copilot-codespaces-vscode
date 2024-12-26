function skillsMember()
{
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        details: {
            hobby: "Reading",
            location: "USA"
        }
    };

    // Adding a new skill
    member.skills.push("Sass");

    // Displaying the skills
    console.log(member.skills);
}