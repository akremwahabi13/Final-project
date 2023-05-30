const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const User = require("./models/userModel");
const Post = require("./models/postModel");
const Pin = require("./models/Pin");

const contentNavigation = {
  name: "Let'sCamp",
  icon: "Success",
};
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
  rootPath: "/admin",

  resources: [
    {
      resource: User,
      options: { navigation: contentNavigation },
      properties: {
        fullname: {
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        username: {
          isVisible: { list: true, filter: true, show: true, edit: false },
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: false },
        },
        email: {
          isVisible: { list: false, filter: false, show: true, edit: false },
        },
        avatar: {
          isVisible: { list: false, filter: false, show: true, edit: false },
        },
      },
    },
    { resource: Pin, options: { navigation: contentNavigation } },

  ],
  branding: {
    companyName: "Let's Camp c.o.",
  },
  preventAssignment: true,
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
