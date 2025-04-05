// Profile Picture Preview
document.getElementById('profile-pic')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
          const img = document.createElement('img');
          img.src = event.target.result;
          const preview = document.getElementById('pic-preview');
          preview.innerHTML = '';
          preview.appendChild(img);
      };
      reader.readAsDataURL(file);
  }
});

// Background Picture Preview
document.getElementById('background-pic')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
          const img = document.createElement('img');
          img.src = event.target.result;
          const preview = document.getElementById('background-preview');
          preview.innerHTML = '';
          preview.appendChild(img);
      };
      reader.readAsDataURL(file);
  }
});

// Companies Input
const companyInput = document.getElementById('company-input');
const companiesList = document.getElementById('companies-list');

companyInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && companyInput.value.trim() !== '') {
      e.preventDefault();
      const company = companyInput.value.trim();
      addCompanyTag(company);
      companyInput.value = '';
  }
});

function addCompanyTag(company) {
  const tag = document.createElement('span');
  tag.classList.add('tag');
  tag.innerHTML = `${company} <span class="remove">x</span>`;
  companiesList.appendChild(tag);

  tag.querySelector('.remove').addEventListener('click', () => {
      tag.remove();
  });
}

// Skills Input with Knowledge Level
const skillInput = document.getElementById('skill-input');
const skillsList = document.getElementById('skills-list');

skillInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && skillInput.value.trim() !== '') {
      e.preventDefault();
      const skill = skillInput.value.trim();
      addSkillItem(skill);
      skillInput.value = '';
  }
});

function addSkillItem(skill) {
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item');
  skillItem.innerHTML = `
      ${skill}
      <select>
          <option value="Easy">Easy</option>
          <option value="Medium" selected>Medium</option>
          <option value="Hard">Hard</option>
      </select>
      <span class="remove">x</span>
  `;
  skillsList.appendChild(skillItem);

  skillItem.querySelector('.remove').addEventListener('click', () => {
      skillItem.remove();
  });
}

// Form Submission
document.getElementById('profile-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const profileData = {
      profilePic: document.getElementById('pic-preview').querySelector('img')?.src || '',
      backgroundPic: document.getElementById('background-pic')?.files[0] ? 
          URL.createObjectURL(document.getElementById('background-pic').files[0]) : 
          'https://via.placeholder.com/1200x200?text=Default+Background',
      bio: document.getElementById('bio').value,
      github: document.getElementById('github').value,
      interests: Array.from(document.querySelectorAll('.interest-options input:checked')).map(input => input.value),
      companies: Array.from(document.querySelectorAll('#companies-list .tag')).map(tag => tag.textContent.replace(' x', '')),
      skills: Array.from(document.querySelectorAll('#skills-list .skill-item')).map(item => ({
          name: item.childNodes[0].textContent.trim(),
          level: item.querySelector('select').value
      }))
  };

  localStorage.setItem('profileData', JSON.stringify(profileData));

  const overlay = document.getElementById('success-overlay');
  overlay.style.display = 'flex';
  setTimeout(() => {
      overlay.style.display = 'none';
      window.location.href = 'profile.html';
  }, 3000);
});