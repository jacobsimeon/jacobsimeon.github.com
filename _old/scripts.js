$(function(){
  rotatePages('post');
});

var maxRotationAngle = 1.5;
var disableRotation = true;

function rotatePages(theID)
{
//    if (navigator.appVersion.indexOf('iPhone OS ') < 0 && disableRotation !== true) { // Don't rotate?

        // post = document.getElementById(theID);
        // 
        // if (typeof post.parentNode.className == 'string'            // we can read the parent's classname
        //     && post.parentNode.className.indexOf('noRotation') < 1  // - and it's not set to noRotation
        //     && ! post.style.webkitTransform                         // - and not already rotated
        //     && ! post.style.mozTransform)                           // - and not rotated in Firefox
        //     {
        //         rotateString = 'rotate(' + ((Math.random() * maxRotationAngle * 2) - maxRotationAngle) + 'deg)';
        //         post.style.webkitTransform = rotateString;
        //         // post.style.MozTransform = rotateString;          // Wow, that text looks terrible!
        //     }
        
//    }
}
