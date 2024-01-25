document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('copy',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('cut',function(e){e.preventDefault();e.stopPropagation();});

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("Thank you for your message! We'll respond as soon as possible.\n\n" + name);
    document.getElementById("form").reset();
  });