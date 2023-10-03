// create a new article button handler
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#article-title').value.trim();
    const content = document.querySelector('#article-content').value.trim();

    console.log(title);
    console.log(content);
    if (title && content) {
        const response = await fetch('/api/articles/new', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create article');
        }
    }
};

// create btn listener
document
    .querySelector('.new-article-form')
    .addEventListener('submit', newFormHandler);