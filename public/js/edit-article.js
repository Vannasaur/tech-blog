// save edit button handler
const saveEditBtnHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-article-title').value.trim();
    const content = document.querySelector('#edit-article-content').value.trim();
    console.log(title);
    console.log(content);

    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/articles/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            article_id: id,
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert('Failed to update article');
        console.log(response.statusText)
    }
};

// update btn listener
document
    .querySelector('.article-edit')
    .addEventListener('click', saveEditBtnHandler);