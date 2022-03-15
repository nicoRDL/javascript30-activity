const panels = document.querySelectorAll('.panel')

    function openPanelToggle() {
      this.classList.toggle('open')
    }

    function activePanel(e) {
      if(e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active')
      }
    }

    panels.forEach(panel => panel.addEventListener('click', openPanelToggle))
    panels.forEach(panel => panel.addEventListener('transitionend', activePanel))