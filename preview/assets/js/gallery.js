let galleryImages = [];

// Function to display images
function displayImages(container, loadMoreBtn, filter = 'all', count = visibleImages) {
    container.innerHTML = '';
    const filteredImages = filter === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === filter);
    
    const imagesToShow = filteredImages.slice(0, count);
    
    imagesToShow.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = image.category;
        galleryItem.innerHTML = `<img src="${image.src}" alt="Gallery image">`;
        container.appendChild(galleryItem);
        
        // Add click event to open modal
        galleryItem.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = image.src;
        });
    });
    
    // Show/hide load more button
    if (loadMoreBtn) {
        if (count >= filteredImages.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

function configureModal(modal, modalImg, modalClose) {
    // Close modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function configureFilters(container, loadMoreBtn, filters, currentFilter, visibleImages) {
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentFilter = filter.dataset.filter;
            // visibleImages = 8; // Reset visible images count when filter changes
            displayImages(container, loadMoreBtn, currentFilter, visibleImages);
        });
    });
}

function configureLoadMore(container, loadMoreBtn){
    loadMoreBtn.addEventListener('click', () => {
        visibleImages += 4;
        displayImages(container, loadMoreBtn, currentFilter, visibleImages);
    });    
}