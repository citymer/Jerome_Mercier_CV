const sectionDroite = document.querySelector('#parcours')
const articleProfil = document.createElement('article')
sectionDroite.appendChild(articleProfil)
articleProfil.innerHTML = `<h4>PROFIL PROFESSIONNEL</h4>`

const articleParcours = document.createElement('article')
sectionDroite.appendChild(articleParcours)
articleParcours.innerHTML = `<h4>PARCOURS PROFESSIONNEL</h4>`

const articleFormation = document.createElement('article')
sectionDroite.appendChild(articleFormation)
articleFormation.innerHTML = `<h4>FORMATION</h4>`
