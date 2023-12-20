const editor = document.getElementById('editor');
let isDarkMode = false;

function saveFile() {
  const content = editor.value;
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'textfile.txt';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function loadFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'text/plain';

  input.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        editor.value = e.target.result;
      };

      reader.readAsText(file);
    }
  });

  input.click();
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeStyle = document.getElementById('theme-style');
  themeStyle.href = isDarkMode ? 'style-dark.css' : 'style-light.css';
}
