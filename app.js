document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).join(', ');
    const experience = document.getElementById('experience').value;
  
    // Display the resume output
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-phone').textContent = phone;
    document.getElementById('output-skills').textContent = skills;
    document.getElementById('output-experience').textContent = experience;
  
    // Show the resume
    document.getElementById('resume-output').style.display = 'block';
  });
  