var VideoListView = Backbone.View.extend({

  initialize: function(data) {
    this.collection.on('sync', this.render, this);
    this.collection.on('select', this.render, this);
  },

  render: function() {
    var videoListEntry = [];

    this.$el.children().detach();
    this.$el.html(this.template(this.collection));
    this.$el.find('.video-list').html('');

    this.collection.models.forEach((model, index) => {
      videoListEntry[index] = new VideoListEntryView({model: model});
      this.$el.find('.video-list').append(videoListEntry[index].render().el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
