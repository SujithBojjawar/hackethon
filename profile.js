// Function to load profile data from localStorage
function loadProfileData() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
    const defaultBio = `
        I'm a passionate tech enthusiast with a strong foundation in software development and a keen interest in emerging technologies. 
        With experience in multiple programming languages and frameworks, I enjoy building innovative solutions that solve real-world problems. 
        My journey in tech started years ago, and since then, I've worked on various projects ranging from web applications to machine learning models. 
        I thrive in collaborative environments and am always eager to learn new skills and stay updated with industry trends. Outside of coding, I enjoy exploring new gadgets, gaming, and contributing to open-source communities. 
        My goal is to leverage my expertise to create impactful products while continuously growing as a professional. Feel free to connect with me to discuss tech, projects, or just to geek out about the latest advancements!
    `; // 250+ characters (about 50 words)

    const defaultData = {
        profilePic: '',
        backgroundPic: 'https://via.placeholder.com/1200x200?text=Default+Background', // Adjusted height
        bio: defaultBio,
        github: 'https://github.com/username',
        interests: [],
        companies: [],
        skills: [],
        skillLevel: 'Medium'
    };

    const data = { ...defaultData, ...profileData };

    document.getElementById('display-pic').src = data.profilePic || 'https://via.placeholder.com/120';
    document.getElementById('user-background').style.backgroundImage = `url(${data.backgroundPic})`;
    document.getElementById('display-bio').textContent = data.bio.length < 250 ? defaultBio : data.bio;
    const githubLink = document.getElementById('display-github');
    githubLink.href = data.github;
    githubLink.textContent = data.github;

    const interestsContainer = document.getElementById('display-interests');
    data.interests.forEach(interest => {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.textContent = interest;
        interestsContainer.appendChild(tag);
    });

    const companiesContainer = document.getElementById('display-companies');
    data.companies.forEach(company => {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.textContent = company;
        companiesContainer.appendChild(tag);
    });

    const skillsContainer = document.getElementById('display-skills');
    data.skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });

    document.getElementById('display-skill-level').textContent = data.skillLevel;

    loadCompanyTrends();
}

// Company trends with real content and pics (Left-to-Right Scrolling, Removed 4th Item)
function loadCompanyTrends() {
    const trendsContainer = document.getElementById('trends-container');
    trendsContainer.innerHTML = '';

    const trendsData = [
        {
            title: 'AI Adoption Surges',
            desc: 'Tech giants like Google and Microsoft report a 40% increase in AI tool usage in 2025, driving automation across industries.',
            img: 'https://via.placeholder.com/350x150?text=AI+Surge'
        },
        {
            title: 'Quantum Leap Forward',
            desc: 'IBM and Google push quantum computing boundaries with new error-correction tech, promising faster computations.',
            img: 'https://via.placeholder.com/350x150?text=Quantum+Tech'
        },
        {
            title: 'Green Tech Boom',
            desc: 'Tesla and Amazon lead investments in sustainable tech, with new solar and electric vehicle innovations.',
            img: 'https://via.placeholder.com/350x150?text=Green+Tech'
        },
        // Removed "5G Expansion" (4th item)
        {
            title: 'Cloud Wars Heat Up',
            desc: 'AWS, Azure, and Google Cloud compete with new AI-driven cloud services for enterprise dominance.',
            img: 'https://via.placeholder.com/350x150?text=Cloud+Wars'
        },
        {
            title: 'AR/VR Renaissance',
            desc: 'Apple’s Vision Pro and Nvidia’s GPUs fuel a surge in AR/VR app development for gaming and work.',
            img: 'https://via.placeholder.com/350x150?text=AR+VR'
        }
    ];

    const marquee = document.createElement('div');
    marquee.classList.add('trends-marquee');
    
    trendsData.forEach(trend => {
        const trendItem = document.createElement('div');
        trendItem.classList.add('trends-item');
        trendItem.innerHTML = `
            <img src="${trend.img}" alt="${trend.title}">
            <h3>${trend.title}</h3>
            <p>${trend.desc}</p>
        `;
        marquee.appendChild(trendItem);
    });

    trendsContainer.appendChild(marquee);
}

// Save form data from the previous page (add this to your original home.js)
document.getElementById('profile-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const profileData = {
        profilePic: document.getElementById('pic-preview').querySelector('img')?.src || '',
        backgroundPic: document.getElementById('background-pic')?.files[0] ? 
            URL.createObjectURL(document.getElementById('background-pic').files[0]) : 
            'https://via.placeholder.com/1200x200?text=Default+Background',
        bio: document.getElementById('bio').value,
        github: document.getElementById('github').value,
        interests: Array.from(document.querySelectorAll('.interest-options input:checked')).map(input => input.value),
        companies: Array.from(document.getElementById('companies').selectedOptions).map(option => option.value),
        skills: Array.from(document.getElementById('skills').selectedOptions).map(option => option.value),
        skillLevel: document.getElementById('skill-level').value
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    const overlay = document.getElementById('success-overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.display = 'none';
        window.location.href = 'profile.html';
    }, 3000);
});

// Skill Test Button Functionality
document.getElementById('skill-test-btn')?.addEventListener('click', () => {
    alert('Skill Test Coming Soon! Prove your skills and earn a verified badge.');
});

// Load profile data when the page loads
window.addEventListener('load', loadProfileData);