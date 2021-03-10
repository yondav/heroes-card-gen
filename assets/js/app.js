const max = 731;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getHeroes() {
  fetch(
    `https://superheroapi.com/api/10157469717981058/${getRandomInt(max)}`
  ).then(function (response) {
    return response.json().then(function (data) {
      console.log(data);
      const publisher = data.biography.publisher;
      const img = data.image.url;
      const name = data.name;
      const alias = data.biography.aliases;
      const alignment = data.biography.alignment;
      const affiliation = data.connections['group-affiliation'];
      const relatives = data.connections.relatives;
      const race = data.appearance.race;
      const job = data.work.occupation;
      const location = data.work.base;
      const combat = data.powerstats.combat;
      const durability = data.powerstats.durability;
      const intel = data.powerstats.intelligence;
      const power = data.powerstats.power;
      const speed = data.powerstats.speed;
      const strength = data.powerstats.strength;

      console.log('publisher: ' + publisher);
      console.log('image: ' + img);
      console.log('name: ' + name);
      console.log('alias: ' + alias);
      console.log('alignment: ' + alignment);
      console.log('affiliation: ' + affiliation);
      console.log('relatives: ' + relatives);
      console.log('race: ' + race);
      console.log('job: ' + job);
      console.log('location: ' + location);
      console.log('STATS');
      console.log('combat: ' + combat);
      console.log('durability: ' + durability);
      console.log('intel: ' + intel);
      console.log('power: ' + power);
      console.log('speed: ' + speed);
      console.log('strength: ' + strength);
    });
  });
}

getHeroes();
