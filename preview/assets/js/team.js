function displayTeam(container, teamList) {
    container.innerHTML = '';
    
    teamList.forEach(person => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';

        const linkLattes = person.lates!=""?`
            <a href="${person.lates}"><img class="contact-icon" src="assets/icons/lattes.svg" alt=""></a>`:``;
        const linkOrcid = person.orcid!=""?`
            <a href="${person.orcid}"><img class="contact-icon" src="assets/icons/orcid.svg" alt=""></a>`:``;
        const linkGithub = person.github!=""?`
            <a href="${person.github}"><img class="contact-icon" src="assets/icons/github.svg" alt=""></a>`:``;
        const linkLinkedin = person.linkedin!=""?`
            <a href="${person.linkedin}"><img class="contact-icon" src="assets/icons/linkedin.svg" alt=""></a>`:``;
        const linkEmail = person.email!=""?`
            <a href="mailto:${person.email}"><img class="contact-icon" src="assets/icons/email.svg" alt=""></a>`:``;

        teamMember.innerHTML = `
            <img src="${person.image}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>${person.role}</p>         
            <div class="team-contacts">
                ${linkLattes}
                ${linkOrcid}
                ${linkGithub}
                ${linkLinkedin}
                ${linkEmail}
            </div>
        `;
        container.appendChild(teamMember);
    });            
}