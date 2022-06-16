const newPostHandler = async (evt)=> {
  evt.preventDefault();
const image = document.querySelector('#create-post-image').value;
  const videogame = document.querySelector('#create-post-videogame').value;
  const console = document.querySelector('#create-post-console').value;
  const content = document.querySelector('#create-post-content').value;
  
  await fetch('/api/posts',{
      method: 'POST',
      body: JSON.stringify({
          videogame,
          console,
          content,
      }),
      headers: { 'Content-Type' : 'application/JSON'},
  });

  window.location.replace('/dashboard');

}

const cancelHandler = async (evt)=> {
  evt.preventDefault();
  window.location.replace('/dashboard');
}
document.querySelector('#create-post-form').addEventListener('submit', newPostHandler);
//document.querySelector('#cancel').addEventListener('click', cancelHandler);