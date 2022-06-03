async function newFormHandler(event) {
    event.preventDefault();
    const project_name = document.querySelector('#project_name').value;
    const description = document.querySelector('#description').value;
    const needed_funding = document.querySelector('#needed_funding').value;
  
    const response = await fetch(`/api/project`, {
      method: 'POST',
      body: JSON.stringify({
        project_name,
        description,
        needed_funding,
        has_nuts,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add project');
    }
  }
  
  document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);