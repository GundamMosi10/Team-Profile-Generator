const generateTeam = (team) => {
  console.log(team);
  console.log('hello team');
  const html = [];
  const generateManager = manager => {
    console.log(manager);
    let managerHTML = `
    <div class="card">
          <img src="https://www.footballkitarchive.com/static/logos/players/Ronaldinho.jpg" class="card-img-top" alt="RonaldinhoImage">
          <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text"><ul class="list-group">
                <li class="list-group-item">Name: ${manager.name}</li>
                <li class="list-group-item">ID:${manager.id}</li>
                <li class="list-group-item">Email: <span id='email'><a href='mailto:${manager.email}'>${manager.email}</a></span></li>
                <li class="list-group-item">Office Number:${manager.officeNumber}</li>
            </ul></p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
    </div>
    `;
    html.push(managerHTML);
  }
  const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHTML = `
    <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIypCwWHGCZ6qrGyquEWFWjfoBmLAqrUIyTn3VaTjaqSWaMByv7pcY7kYH-4VpnCvdUE&usqp=CAU" class="card-img-top" alt="RonaldoBrazil">
          <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text"><ul class="list-group">
                <li class="list-group-item">Name:${engineer.name}</li>
                <li class="list-group-item">ID:${engineer.id}</li>
                <li class="list-group-item">Email: <span id='email'><a href='mailto:${engineer.email}'>${engineer.email}</a></span></li>
                <li class="list-group-item">Github User Name: <a target='blank' href='https://github.com/${engineer.github}'>${engineer.github}</a></li>
            </ul></p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
    </div>
    `;
    html.push(engineerHTML);
  }
  const generateIntern = intern => {
    console.log(intern);
    let internHTML = 
    `
    <div class="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktdb-nP-bujaoPkZx_vVEu-mAFRodBUdyoo4vKSY28j0Acm4TbNlssILR2ZYoABzKgKg&usqp=CAU" class="card-img-top" alt="RobertoCarlosBrazil">
          <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text"><ul class="list-group">
                <li class="list-group-item">Name:${intern.name}</li>
                <li class="list-group-item">ID:${intern.id}</li>
                <li class="list-group-item">Email: <span id='email'><a href='mailto:${intern.email}'>${intern.email}</a></span></li>
                <li class="list-group-item">School:${intern.school}</li>
            </ul></p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
    </div>
    `;
    html.push(internHTML);
  }
  //this for loop is to loop through and get each role that is from the user input 
  for (let i = 0; i < team.length; i++) {
    console.log(team[i].getRole());
    if (team[i].getRole() === 'manager') {
      generateManager(team[i]);
    }
    if (team[i].getRole() === 'engineer') {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === 'intern') {
      generateIntern(team[i]);
    }
  }

  return html.join(''); //joins all the pieces together/team members in the html

}

module.exports = team => {
  
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Team Profile Generator</h1>
          <p class="lead">My Team</p>
        </div>
    </div>
    <main>
    <div class="card-deck">${generateTeam(team)}</div>
    </main>
</body>
</html>
`;

}

