var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.collection.on('select', (event) => {
      this.render(event.attributes);
    });
  },

  render: function(data) {
    if (data) {
      this.$el.html(this.template(data));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }

    let videoDetailsView = new VideoDetailsView({collection: this.collection});

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});