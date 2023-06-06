const editPostFormhandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const article = document.querySelector('#article').value.trim();
  const id = document.querySelector("#id").innerHTML
    if (title && article) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/edit/?id=${id}`, { //fix route & add id
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
    .addEventListener('submit', editPostFormHandler);
