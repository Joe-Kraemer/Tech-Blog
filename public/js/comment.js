const commentFormhandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const comment = document.querySelector('#comment').value.trim();
    const id = document.querySelector('#id').value.trim();
  const user = user.id
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/post/comment`, { //fix route very very wrong 
        method: 'POST',
        body: JSON.stringify({ comment, id, user }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
