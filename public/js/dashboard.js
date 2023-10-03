const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#articles-title').value.trim();
    const content = document.querySelector('#articles-content').value.trim();

    if (title && content) {
        const response = await fetch(`/articles`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create article');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/articles/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                article_id: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete article');
        }
    }
};

document
    .querySelector('.new-article-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.article-list')
    .addEventListener('click', delButtonHandler);
