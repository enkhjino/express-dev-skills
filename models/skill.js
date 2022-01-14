const skills = [
    { id: 125223, skill: "Javascript", advanced: "true" },
    { id: 127904, skill: "CSS", advanced: "false" },
    { id: 139608, skill: "HTML", advanced: "true" }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, newSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, newSkill);
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}