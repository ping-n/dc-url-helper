import { writable } from "svelte/store";

export let mainUrl = writable([
  {
    Id: 1,
    Name: "Agenda",
    Url: "/x/programs",
  },
  {
    Id: 2,
    Name: "Talk",
    Url: "/talks",
  },
  {
    Id: 3,
    Name: "Exhibitor",
    Url: "/exhibitors",
  },
  {
    Id: 4,
    Name: "Sponsor",
    Url: "/sponsors",
  },
  {
    Id: 5,
    Name: "Livestream",
    Url: "/lives",
  },
  {
    Id: 6,
    Name: "Recommendation",
    Url: "/recommendations",
  },
  {
    Id: 7,
    Name: "User Connect",
    Url: "/users/connect",
  },
  {
    Id: 8,
    Name: "Now On",
    Url: "/nowon",
  },
  {
    Id: 9,
    Name: "Session",
    Url: "/sessions",
  },
  {
    Id: 10,
    Name: "Theme",
    Url: "/themes",
  },
  {
    Id: 11,
    Name: "Networking Room",
    Url: "/networking_rooms",
  },
  {
    Id: 12,
    Name: "Abstract Submission",
    Url: "/talk/content_upload",
  },
  {
    Id: 13,
    Name: "Custom Pages",
    Url: "/pages/custom",
    Note: "custom = the slug of your custom pages",
  },
  {
    Id: 14,
    Name: "Speakers",
    Url: "/speakers",
  },
  {
    Id: 15,
    Name: "Chat",
    Url: "/chat",
  },
  {
    Id: 16,
    Name: "Login/Create Account",
    Url: "/users/sign_in",
  },
]);

export let filteredUrl = writable([
  {
    Id: 1,
    Name: "Talk Type",
    Url: "/talks?talk_type=id",
    Note: "id = talk type id",
  },
  {
    Id: 2,
    Name: "Exhibitor Type",
    Url: "/exhibitors?exhibitor_type=id",
    Note: "id = exhibitor type id",
  },
  {
    Id: 3,
    Name: "Theme Type",
    Url: "/themes/id",
    Note: "id = theme id",
  },
  {
    Id: 4,
    Name: "Sponsor Tier",
    Url: "/sponsors?sponsor_tier=id",
    Note: "id = sponsors tier id",
  },
  {
    Id: 5,
    Name: "Exhibitor Group",
    Url: "/exhibitors/group",
  },
  {
    Id: 6,
    Name: "All theme with talks",
    Url: "/talk-themes",
  },
  {
    Id: 7,
    Name: "All theme with eposters",
    Url: "/eposter-themes",
  },
  {
    Id: 8,
    Name: "Eposter Filter",
    Url: "/talks/eposter?talk_type=id",
    Note: "id = talk type id",
  },
  {
    Id: 9,
    Name: "Eposter Filter",
    Url: "/talks/eposter?talk_type=id",
    Note: "id = talk type id",
  },
]);

export let registrationUrl = writable([
  {
    Id: 1,
    Name: "Registration Intro",
    Url: "/registrations/page/intro",
    Note: "The first starting point of registration",
  },
  {
    Id: 2,
    Name: "Registration Type Group",
    Url: "/registrations/page/type_group",
    Note: "List all registration delegate group type, the second step if delegate group exist",
  },
  {
    Id: 3,
    Name: "Registration Type",
    Url: "/registrations/page/type",
    Note: "List all delegate type, the second step if delegate group do not exist",
  },
  {
    Id: 4,
    Name: "Registration Type filtered",
    Url: "/registrations/page/type?group=id",
    Note: "List all delegate type, the third step if delegate group exist. id = delegate type group id",
  },
  {
    Id: 5,
    Name: "Registration Addon",
    Url: "/registrations/page/addons",
    Note: "List all delegate type, the fourth step if registration addon is enabled",
  },
  {
    Id: 6,
    Name: "Registration travel",
    Url: "/registrations/page/travel",
    Note: "List all delegate type, the fourth/fifth step if registration travel is enabled",
  },
  {
    Id: 7,
    Name: "Registration Confirm",
    Url: "/registrations/page/confirm",
    Note: "This page is where the registration price is presented to the users and where they can apply discount code",
  },
  {
    Id: 8,
    Name: "Registration Payment",
    Url: "/registrations/page/payment",
    Note: "This page is where user make payment for their registration and input their registration details.",
  },
  {
    Id: 9,
    Name: "Registration Finish",
    Url: "/registrations/page/finish",
    Note: "This page is the final step and is shown to users when they have completed their registration. prompt users to return to the homepages.",
  },
]);
