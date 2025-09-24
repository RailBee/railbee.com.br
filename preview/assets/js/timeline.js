function displayTimeline(container, itens) {
    container.innerHTML = '<div class="timeline__line"></div>';       
    itens.forEach(year => {
        const annualSection = document.createElement('div');
        annualSection.className = 'timeline__annual-sections';

        const annualSectionSpan = document.createElement('span');
        annualSectionSpan.className = 'timeline__year';
        annualSectionSpan.setAttribute("aria-hidden", "true");
        annualSectionSpan.innerHTML = year.year;
        annualSection.appendChild(annualSectionSpan);

        const annualSectionGroups = document.createElement('div');
        annualSectionGroups.className = 'timeline__groups';
        annualSection.appendChild(annualSectionGroups);

        container.appendChild(annualSection);
                        
        year.pubs.forEach(pub => {
            const group = document.createElement('section');
            group.className = 'timeline__group';
            const linkSection = pub.link!="#"?`
                        <div class="card__body">
                            <div class="card__description">
                                <p><a href="${pub.link}" target="_blank">${pub.linkTitle}</a></p>
                            </div>
                        </div>`:`
                        <div class="card__body">
                            <div class="card__description">
                                <p>${pub.linkTitle}</p>
                            </div>
                        </div>`;
            group.innerHTML = `
                <div class="timeline__point card">
                    <div class="card__container">
                        <div class="card__intro">
                            <h3 class="ra-heading">${pub.title}</h3>
                            <span class="card__time">${pub.category}</span>
                            ${linkSection}
                        </div>
                    </div>
                </div>
            `;
            annualSectionGroups.appendChild(group);
        });  
    });
}
