AFRAME.registerComponent('firebase-sync', {
    init: function() {
        ref.on('value', function(snapshot) {
            this.el.innerHTML = snapshot.val();
            console.log(this.el.innerHTML);
        }.bind(this));
    }
});