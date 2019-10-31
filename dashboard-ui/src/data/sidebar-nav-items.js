export default function() {
  return [
    {
      title: "Finance Overview",
      htmlBefore: '<i class="material-icons">&#xE6E1;</i>',
      to: "/blog-overview"
    },
    {
      title: "Transaction History",
      to: "/tables",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      htmlAfter: ""
    },
    // {
    //   title: "New Research",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post"
    // },
    {
      title: "Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite"
    },
    {
      title: "Help",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors"
    }
  ];
}
