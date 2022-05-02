// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let cubedRadius = radius * radius * radius;
  let volume = 4 / 3 * PI * cubedRadius;
  return volume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let base = PI * (radius * radius);
  let volume = 1 / 3 * (base * height);
  return volume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let baseArea = width * depth;
  let volume = baseArea * height;
  return volume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let body = sphereVolume(largeSphere.radius);
  let head = sphereVolume(smallSphere.radius);
  let beak = coneVolume(cone.radius, cone.height);
  let total = body + head + beak;
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);