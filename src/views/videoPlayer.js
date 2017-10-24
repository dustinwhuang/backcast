var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function(data) {
    this.collection.on('select', (event) => {
      this.render(event.attributes);
    });
    this.render({id: '1w8Z0UOXVaY', snippet: {title: 'Title', description: 'Description'}});
  },

  render: function(data) {
    this.$el.html(this.template(data));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});