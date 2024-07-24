/* document.addEventListener("DOMContentLoaded", function() { */
setTimeout(function() { 
function init() {
    timer = setInterval(doAnim, 1000);    
} 

function doAnim() { 
    var d = new Date();
    var h = (d.getHours() * 30) + (d.getMinutes() / 2);  
    var m = d.getMinutes() * 6;
    var s = d.getSeconds() * 6;
    
    document.getElementById("hora").setAttribute("transform", "rotate(" + m + " 272.5 190.3)"); 
    document.getElementById("minuto").setAttribute("transform", "rotate(" + s + " 272.5 190.3)");  
}

 // Inicialización al cargar el DOM
    init();
    doAnim();


    var animationProgress = 0; // Cambiado a un nombre más descriptivo

    var linesContainer = document.querySelector('#lines');
    var lines = linesContainer.querySelectorAll('line');
    var allPaths = document.querySelectorAll('#paths path'); // Combinar todos los elementos de 'paths'
    var logoPaths = document.querySelectorAll('#logoEA path:not(.st13)');
    var st13Paths = document.querySelectorAll('#paths path.st13');

    initializeElements(lines);
    initializeElements(allPaths); // Inicializar todos los elementos de 'paths'

   
    setInterval(animateFrame, 10); // Cambiado el nombre de la función frame a animateFrame

    function initializeElements(elements) {
        elements.forEach(function(element) {
            var length = element.getTotalLength();
            element.style.strokeDasharray = length + " " + length;
            element.style.strokeDashoffset = length;
        });
    }

    function animateFrame() { // Cambiado el nombre de la función frame a animateFrame
        animationProgress += 1;

        animateElements(lines, animationProgress, 'none'); // Animar todas las líneas
        animateElements(allPaths, animationProgress, 'white'); // Animar todos los elementos de 'paths'
        animateElements(logoPaths, animationProgress, 'black');
        animateElements(st13Paths, animationProgress, '#003366');

        if (Math.floor(animationProgress) === 100) {
            animationProgress = 0;
        }
    }

    function animateElements(elements, progress, fillColor) {
        elements.forEach(function(element) {
            var length = element.getTotalLength();
            element.style.strokeDashoffset = length * (1 - progress / 100);
            
            if (progress >= 50) {
                element.style.fill = fillColor;
            } else {
                element.style.fill = 'none';
            }
        });
    }
}, 4000) ; // 4000 milisegundos = 4 segundos;



/* document.addEventListener("DOMContentLoaded", function() {
    var value = 0;

    var lines = document.querySelectorAll('#lines line');
    var paths = document.querySelectorAll('#paths path');
    var animatablePaths = Array.from(paths).filter(path => !path.classList.contains('st13'));

    function initializeLines(lines) {
        lines.forEach(function(line) {
            var lineLength = line.getTotalLength();
            line.style.strokeDasharray = lineLength + " " + lineLength;
            line.style.strokeDashoffset = lineLength;
        });
    }

    function initializePaths(paths) {
        paths.forEach(function(path) {
            var pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + " " + pathLength;
            path.style.strokeDashoffset = pathLength;
        });
    }

    initializeLines(lines);
    initializePaths(animatablePaths);

    setInterval(frame, 10);

    function frame() {
        value += 0.5;

        function animateLines(lines) {
            lines.forEach(function(line) {
                var lineLength = line.getTotalLength();
                line.style.strokeDashoffset = lineLength * (1 - value / 100);
            });
        }

        function animatePaths(paths) {
            paths.forEach(function(path) {
                var pathLength = path.getTotalLength();
                path.style.strokeDashoffset = pathLength * (1 - value / 100);
                if (value >= 80) {
                    path.style.fill = 'white'; // Cambia 'white' al color que desees para el fill
                } else {
                    path.style.fill = 'none';
                }
            });
        }

        animateLines(lines);
        animatePaths(animatablePaths);

        if (Math.floor(value) === 100) {
            value = 0;
        }
    }
});
 */

/* document.addEventListener("DOMContentLoaded", function() {
    var value = 0;

var lines = document.querySelectorAll('#lines line')
var paths = document.querySelectorAll('#paths path');

    function initializeLines(lines) {
        lines.forEach(function(line) {
            var lineLength = line.getTotalLength();
            line.style.strokeDasharray = lineLength + " " + lineLength;
            line.style.strokeDashoffset = lineLength;
        });
    }

    function initializePaths(paths) {
        paths.forEach(function(path) {
            var pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + " " + pathLength;
            path.style.strokeDashoffset = pathLength;
        });
    }

    initializeLines(lines);
    initializePaths(paths);

    setInterval(frame, 10);

    function frame() {
        value += 0.5;

        function animateLines(lines) {
            lines.forEach(function(line) {
                var lineLength = line.getTotalLength();
                line.style.strokeDashoffset = lineLength * (1 - value / 100);
            });
        }

        function animatePaths(paths) {
            paths.forEach(function(path) {
                var pathLength = path.getTotalLength();
                path.style.strokeDashoffset = pathLength * (1 - value / 100);
                if (value >= 80) {
                    path.style.fill = 'white'; // Cambia 'black' al color que desees para el fill
                if (paths[1]){
                    path.style.fill = 'black';
                }
                } else {
                    path.style.fill = 'none';
                }
            });
        }

        animateLines(lines);
        animatePaths(paths);

        if (Math.floor(value) == 100) {
            value = 0;
        }
    }
});
 */




/* document.addEventListener("DOMContentLoaded", function() {
    var value = 0;
    var paths = document.querySelectorAll('#columna path');
    paths.forEach(function(path) {
        var pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + " " + pathLength; 
        path.style.strokeDashoffset = pathLength; 
    });
    setInterval(frame, 10);
    function frame() {
        value += 0.5;
        paths.forEach(function(path) {
            var pathLength = path.getTotalLength();
            path.style.strokeDashoffset = pathLength * (1 - value / 100);
            if (value >= 80) {
                path.style.fill = 'white'; // Cambia 'black' al color que desees para el fill
            } else {
                path.style.fill = 'none';
            }
        });
        if (Math.floor(value) == 100) { value = 0; }
    }    
}); */

/* document.addEventListener("DOMContentLoaded", function() {
    var value = 0;
    var paths = document.querySelectorAll('#columna path');
    paths.forEach(function(path) {
        var pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + " " + pathLength; 
        path.style.strokeDashoffset = pathLength; 
    });
    setInterval(frame, 10);
    function frame() {
        value += 0.5;
        paths.forEach(function(path) {
            var pathLength = path.getTotalLength();
            path.style.strokeDashoffset = pathLength * (1 - value/100);
        });
        if (Math.floor(value) == 100) { value = 0; }
    }    
});
 */


/* document.addEventListener("DOMContentLoaded", function() {
    var value = 0;
    var paths = document.querySelectorAll('#logo line');
    paths.forEach(function(line) {
        var pathLength = line.getTotalLength();
        line.style.strokeDasharray = pathLength + " " + pathLength; 
        line.style.strokeDashoffset = pathLength; 
    });
    setInterval(frame, 10);
    function frame() {
        value += 0.5;
        paths.forEach(function(line) {
            var pathLength = line.getTotalLength();
            line.style.strokeDashoffset = pathLength * (1 - value/100);
        });
        if (Math.floor(value) == 100) { value = 0; }
    }    
});
 */