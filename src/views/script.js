
const fetchLink = (event) => {    
  const link = event.currentTarget; // Get the link
  const itemId = link.getAttribute('data-id'); // Get the id from data-id attribute
  fetch(`/deleteCsv?id=${itemId}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("File is deleted")
        // Remove the item from the DOM
        const itemElement = document.getElementById(`item-${itemId}`);
        if (itemElement) {
          itemElement.remove();
        }
      } else {
        console.error('Error:', data.msg);
        alert('Failed to delete the file: ' + data.msg);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while deleting the file.');
    });
}


