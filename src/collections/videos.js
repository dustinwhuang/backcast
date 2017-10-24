var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.search('jquery');
  },

  search: function(query) {
    this.fetch({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true',
        type: 'video'
      },
      success: data => {
        console.log('success');
      },
      error: data => {
        console.log('failure');
        console.log(data.responseText);
      }
    });
    
  },

  parse: function(data) {
    return data.items;
  }

});
