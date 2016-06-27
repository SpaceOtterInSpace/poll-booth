Polls.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc, fields, modifier){
    return true;
  },
  remove: function(userId, doc){
    return true;
  }
});

Votes.allow({
  insert: function(userId, doc){
    if (! userId) {
      throw new Meteor.Error('not-authorized');
    } else {
      return true;
    }
  },
  update: function(userId, doc, fields, modifier){
    if (! userId) {
      throw new Meteor.Error('not-authorized');
    } else {
      return true;
    }
  },
  remove: function(userId, doc){
    if (! userId) {
      throw new Meteor.Error('not-authorized');
    } else {
      return true;
    }
  }
});