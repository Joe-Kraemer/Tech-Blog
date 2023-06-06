const createPostFormhandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const article = document.querySelector('#article').value.trim();
  
    if (title && article) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', { //fix route
        method: 'POST',
        body: JSON.stringify({ title, article }),
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
    .querySelector('.post-form')
    .addEventListener('submit', createPostFormHandler);
