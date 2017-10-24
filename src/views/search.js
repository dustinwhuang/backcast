var SearchView = Backbone.View.extend({

  events: {
    'click button': 'search',
    'keyup input': 'handleKeyup'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleKeyup: function(event) {
    if (event.keyCode === 13) {
      this.search();
    }
  },

  search: function() {
    this.collection.search(this.$el.find('.form-control').val());
  }, 

  template: templateURL('src/templates/search.html')

});
