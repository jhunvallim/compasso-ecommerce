export function cloneDiv() {
  const button = document.getElementById('new-arrivals-button');
  const originalDiv = document.getElementById('new-arrivals');

  button.addEventListener('click', () => {
    const cloneDiv = document.createElement('div');
    cloneDiv.innerHTML = originalDiv.outerHTML;
    originalDiv.parentNode.insertBefore(cloneDiv, button);
    
    button.scrollIntoView({ behavior: 'smooth', block: 'end' })
  });
}