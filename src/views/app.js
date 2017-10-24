var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.on('sync', () => {
      this.videos.at(0).select();
    });
    this.render(window.exampleVideoData);
  },


  render: function(data) {
    this.$el.html(this.template());
    let videoListView = new VideoListView({el: this.$('.list'), collection: this.videos});
    videoListView.render();

    let videoPlayerView = new VideoPlayerView({collection: this.videos});
    videoPlayerView.render();

    let searchView = new SearchView({el: this.$('.search'), collection: this.videos});

    return this;
  },

  template: templateURL('src/templates/app.html')

});
