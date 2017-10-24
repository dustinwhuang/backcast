var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function(data) {
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    var videoListEntry = [];
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    this.$el.append(this);
//console.log('VideoListView render');
    // data.forEach(function(entry, index) {
    // debugger;
// console.log('data:', this.collection);
//console.log('this.model', this.model);
    this.collection.models.forEach(function(model, index) {
      // console.log(model);
      videoListEntry[index] = new VideoListEntryView({model: model});
      // console.log(entry);
      videoListEntry[index].render();
    });
    // let entry = new VideoListEntryView({collection: this.collection});
    
    // entry.render();
    // this.collection.forEach(entry.render, this.model);
    // for (let i = 0; i < data.length; i++) {
    //   videoListEntry[i] = new VideoListEntryView(data[i]);
    //   //videoListEntry[index].render();
    //   // console.log(videoListEntry);
    // }
    //console.log(data);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
