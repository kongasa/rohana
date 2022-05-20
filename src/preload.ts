window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById(
    'search-input'
  ) as HTMLInputElement | null;
  const searchButton = document.getElementById(
    'search-button'
  ) as HTMLButtonElement | null;
  const fileList = document.getElementById(
    'file-list'
  ) as HTMLParagraphElement | null;
  searchButton?.addEventListener('click', () => {
    const path = searchInput?.value ?? '';
    if (fileList) fileList.innerText = path;
  });
});
