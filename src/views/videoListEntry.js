var VideoListEntryView = Backbone.View.extend({
   
  el: '.video-list',

  events: {
    'click .video-list-entry-title': 'select'
  },

  // initialize: function() {
  //   this.select();
  // },

  select: function () {
console.log('select');
    this.model.select();
  },

  render: function() {
    let $template = $('<div></div>');
    let snippet = this.model.attributes.snippet;
    $template.html(this.template(this.model.attributes));
    $template.find('.media-object').attr('src', snippet.thumbnails.default.url);
    $template.find('.video-list-entry-title').text(snippet.title);
    $template.find('.video-list-entry-detail').text(snippet.description);
    this.$el.append($template);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
