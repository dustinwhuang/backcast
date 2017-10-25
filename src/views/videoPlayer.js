var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  events: {
    'click .slider': 'toggleAutoplay',
  },

  initialize: function() {
    this.autoplay = false;

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

    if (this.autoplay) {
      let urlSrc = $('.embed-responsive-item').attr('src');
      $('.embed-responsive-item').attr('src', urlSrc + '?autoplay=1');
      $('input:checkbox').attr('checked', true);
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

  toggleAutoplay: function() {
    this.autoplay = !this.autoplay;
  }

});