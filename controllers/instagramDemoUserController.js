const InstagramDemoUser = require('../models/instagramDemoUser');
const catchAsync = require('../utils/catchAsync');

exports.createInstagramDemoUser = catchAsync(async (req, res, next) => {
  const { email, userName } = req.body;

  const newInstaDemoUser = await InstagramDemoUser.create({ email, userName });

  res.status(201).json({
    status: 'SUCCESS',
    data: {
      user: newInstaDemoUser,
    },
  });
});
