document.addEventListener("DOMContentLoaded", () => {
    const example_icons = document.querySelectorAll('a.a_icon');

    example_icons.forEach(function (icon) {

        icon.addEventListener( 'mouseover', function() {
            this.className = this.className.replace("colored", "");
        });

        icon.addEventListener( 'mouseout', function() {
            this.className += "colored";
        });

    });
  });