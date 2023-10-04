// add comment button handler
const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    console.log(content);

    const id = document.querySelector('#comment-btn').getAttribute('data-id')
    console.log(id);
    if (content) {
        const response = await fetch('/api/articles/comment', {
            method: 'POST',
            body: JSON.stringify({ 
                id, 
                content ,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace(`/articles/${id}`);
        } else {
            alert('Failed to add comment');
        }
    }
};

// add comment btn listener
document
    .querySelector('#comment-btn')
    .addEventListener('click', commentFormHandler);