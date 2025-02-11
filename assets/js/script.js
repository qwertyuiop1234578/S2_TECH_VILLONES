function showBox(day) {
    const box = document.getElementById('movingBox');
    const colors = {
      monday: 'purple',
      tuesday: 'pink',
      wednesday: 'blue',
      thursday: 'green',
      friday: 'yellow',
      saturday: 'orange',
      sunday: 'red'
    };
  
    box.style.backgroundColor = colors[day];
  
    box.offsetWidth;
  
    setTimeout(() => {
  
      box.style.transform = 'scale(1.1)';
      setTimeout(() => {
        box.style.transform = 'scale(1)';
      }, 500);
    }, 100);
  }