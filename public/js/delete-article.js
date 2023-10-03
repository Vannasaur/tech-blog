
// delete button handler
const deleteBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        const response = await fetch(`/api/articles/${id}`, {
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

// delete btn listener
document
    .querySelector('.article-list')
    .addEventListener('click', deleteBtnHandler);