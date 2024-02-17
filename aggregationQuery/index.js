db.users.aggregate([
    {
      $group: {
        _id: "$country",
        totalUsers: { $sum: 1 }, 
        averageAge: { $avg: "$age" } 
      }
    },
    {
      $project: {
        _id: 0, 
        country: "$_id", 
        totalUsers: 1, 
        averageAge: 1 
      }
    }
  ]);
  