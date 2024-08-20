document.addEventListener('DOMContentLoaded', function() {
    const mergeButton = document.getElementById('mergeWindows');
  
    chrome.windows.getAll({populate: true}, function(windows) {
      const windowList = document.getElementById('windowList');
      windows.forEach(function(window, index) {
        const windowDiv = document.createElement('div');
        windowDiv.className = 'window';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `window-${window.id}`;
        checkbox.value = window.id;
  
        const label = document.createElement('label');
        label.htmlFor = `window-${window.id}`;
        label.innerHTML = `<span>Window ${index + 1} (${window.tabs.length} tab${window.tabs.length !== 1 ? 's' : ''})</span>`;
  
        checkbox.addEventListener('change', updateMergeButton);
  
        label.prepend(checkbox);
        windowDiv.appendChild(label);
        windowList.appendChild(windowDiv);
      });
    });
  
    function updateMergeButton() {
      const selectedWindows = document.querySelectorAll('input[type="checkbox"]:checked');
      mergeButton.disabled = selectedWindows.length < 2;
    }
  
    mergeButton.addEventListener('click', function() {
      const selectedWindows = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => parseInt(checkbox.value));
      
      if (selectedWindows.length > 1) {
        chrome.runtime.sendMessage({action: "mergeWindows", windowIds: selectedWindows});
        window.close();
      }
    });
  });