
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('about').del()
    .then(function () {
      // Inserts seed entries
      return knex('about').insert([
        {about: "Some time ago, I became involved in the Cosplay community. I find it to be a rich and rewarding hobby, and generally a welcoming demographic. One thing I have found that the community may be lacking in, however, is a way for individual Cosplayers to teach or share their individual areas of crafting expertice. In my own projects, I've often found that partway through whatever I'm working on I realize I'm lacking in some particular area of crafting, and this causes me to either change the direction, or attemt a crash course in learning and hope I'll be able to pick it up before I need to finish the project.  In an attempt to fill that gap, I decided to create Vulkans Forge as a place where Cosplayers can make new friends, ask for advice, assistance, or offer their own skills to the Cosplay community."},
      ]);
    });
};
