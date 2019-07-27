let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "NF - When I Grow Up",
    lengthInMinutes: 4,
    category: "Music",
    uploadDate: new Date("6-27-2019"),
    tags: "music, rap, lyrics",
    features: ["Purchased", "Subtitles/CC"],
    viewCount: 30775569,
    rating: 4.7
  },
  {
    title: "It: Chapter Two Comic-Con Trailer #1",
    lengthInMinutes: 3,
    category: "Film & Animation",
    uploadDate: new Date("7-18-2019"),
    tags: "horror, movies, trailer",
    features: ["Purchased", "HD"],
    viewCount: 933675,
    rating: 4.8
  },
  {
    title: "Simba Birth Scene - Circle of Life Song - THE LION KING ",
    lengthInMinutes: 3,
    category: "Film & Animation",
    uploadDate: new Date("7-13-2019"),
    tags: "music, movies, trailer",
    features: ["HD", "subtitles"],
    viewCount: 3713984,
    rating: 4.9
  },
  {
    title: "What's the most painful thing you've been told? (Australia)",
    lengthInMinutes: 13,
    category: "Entertainment",
    uploadDate: new Date("7-18-2019"),
    tags: "vlog, realityshow",
    features: ["HD", "Subtitles/CC"],
    viewCount: 185385,
    rating: 4.5
  },
  {
    title: "Intro to JS - Query Selector - Dark / Light Theme App",
    lengthInMinutes: 85,
    category: "Education",
    uploadDate: new Date("6-17-2019"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HDR"],
    viewCount: 114,
    rating: 4.4
  },
  {
    title: "super funny cats videos compilation",
    lengthInMinutes: 34,
    category: "Pets & Animals",
    uploadDate: new Date("11-28-2017"),
    tags: "funny, cats, animals",
    features: ["creative commons", "HD"],
    viewCount: 781620,
    rating: 4.2
  },
  {
    title: "Papers, Please!",
    lengthInMinutes: 50,
    category: "Education",
    uploadDate: new Date("6-22-2019"),
    tags: "gaming, gameplay, vlog",
    features: ["Subtitles/CC", "HD", "live"],
    viewCount: 93124,
    rating: 4
  },
  {
    title:
      "Build A Weather App With Vanilla Javascript Tutorial | Javascript For Beginners",
    lengthInMinutes: 43,
    category: "Science & Technology",
    uploadDate: new Date("7-1-2019"),
    tags: "javascript, app, web development",
    features: ["Subtitles/CC", "HD"],
    viewCount: 114,
    rating: 4.4
  },
  {
    title: "What is Logo? Logo Design Course Class 1 in Urdu / Hindi",
    lengthInMinutes: 85,
    category: "Education",
    uploadDate: new Date("9-3-2017"),
    tags: "logo, design, tutorial",
    features: ["Subtitles/CC", "HD"],
    viewCount: 118527,
    rating: 4.4
  },
  {
    title: "Top 10 CSS Effects",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("11-29-2018"),
    tags: "css, animations, web development",
    features: ["Subtitles/CC", "HD", "creative commons"],
    viewCount: 422558,
    rating: 4.4
  }
];
/*Q1.
for (let i=0; i<videos.length; i++){
    console.log("Title: " + videos[i].title)
    console.log("Length: " + videos[i].lengthInMinutes + " minutes")
    console.log("Category:" + videos[i].category)
    console.log("Views: " + videos[i].viewCount.toLocaleString(
    ))
    console.log("Rating: " + videos[i].rating)
    console.log("Uploaded On: " + videos[i].uploadDate)
    console.log("")
}
Q2.
for (let i=0; i<videos.length; i++){
  if(videos[i].lengthInMinutes <= 3){
    console.log(videos[i].title)
  }
}
Q3.
for (let i=0; i<videos.length; i++){
  if(videos[i].lengthInMinutes >= 20){
    console.log(videos[i].title)
  }
}
Q4.
for (let i=0; i<videos.length;i++){
  if(videos[i].lengthInMinutes>3 && videos[i].lengthInMinutes<20){
    console.log(videos[i].title)
  }
}
Q4 Print titles of all videos with category "Education"
for (let i=0; i<videos.length;i++){
  if(videos[i].category=="Education"){
    console.log(videos[i].title)
  }
}
*/

// Print titles of all videos uploaded this year
// for (let i = 0; i < videos.length; i++) {
//   if (videos[i].uploadDate.getFullYear() == new Date().getFullYear()) {
//     console.log(videos[i].title);
//   }
// }


// // Print titles of all videos uploaded today
// for (let i = 0; i < videos.length; i++) {
//   if (videos[i].uploadDate.getDate() == new Date().getDate()) {
//     console.log(videos[i].title);
//   }
// }

// // Print titles of all videos uploaded this month
// for (let i = 0; i < videos.length; i++) {
//   if (videos[i].uploadDate.getMonth() == new Date().getMonth()) {
//     console.log(videos[i].title);
//   }
// }


// Print titles of all videos uploaded this week


// // Sort the array in ascending order of number of views and print the titles


// // Sort the array in ascending order of rating and print the titles

// Print titles of all videos with tag "Javascript"

// Print titles of all videos with HD feature

// Print title of the longest video
let longestVideo = people[0]
for (let i=1; i<people.length;i++){
if (people[1].age > oldestStudent.age)
oldestStudent = people[i];
}
console.log(oldestStudent.name);