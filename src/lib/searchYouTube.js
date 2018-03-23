var searchYouTube = (options, callback) => {
  // TODO
$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {'q': options.query, 
    'maxResults': options.max,
    'part': 'snippet',
    'key': options.key,
    'embedded': true
      },
    contentType: 'application/json',
    success: function (data) {
      // context.set(context.models, context.parse(data));
      // console.log(context.models)
      //console.log('data retrieved', data);
      callback(data)
    },
    error: function (data) {

      console.error('Failed to get data', data);
    }
  });
};

window.searchYouTube = searchYouTube;
