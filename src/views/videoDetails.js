var VideoDetailsView = Backbone.View.extend({

  initialize: function() {
    this.getDetails(this.collection.models[0].id);
    this.collection.on('select', (event) => {
      this.getDetails(event.attributes.id);
    });
  },

  getDetails: function(id) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/videos',
      data: {
        id: id,  
        part: 'snippet',
        key: window.YOUTUBE_API_KEY
      },
      success: data => {
        console.log('success');
        console.log(data);
        $('.video-player-details div').html(`<pre>${data.items[0].snippet.description}</pre>`);
      },
      error: data => {
        console.log('failure');
        console.log(data.responseText);
      }
    });
  }

});