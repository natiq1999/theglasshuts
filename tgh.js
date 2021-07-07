function initMap() {
    var opt = {
        center: {lat:40.3575638587181, lng:49.812024752030474},
        zoom:16
    }

    var map = new google.maps.Map(document.getElementById("map"),opt);

    var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.Drop,
        position:{lat:40.3575638587181, lng:49.812024752030474},})
        marker.addListener("click",toggleBounce);
}

function toggleBounce(){
    if (marker.getAnimation()!==null){
        marker.setAnimation(null);
    }
    else{
        marker.setAnimation(google.maps.Animation.Bounce);
    }
};

let shareWidgies = document.querySelectorAll('.share-widget:not(.full) .share-widget-sub');

shareWidgies.forEach(el => {
    el.addEventListener('click', function () {
        if (this.classList.contains('flipped')) {
            this.classList.remove('flipped');
        } else {
            this.classList.add('flipped');
        }
    });
});