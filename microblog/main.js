const profilePicDOM = document.querySelector("#profile-pic");
const titleDOM = document.querySelector("#title");
const feedDOM = document.querySelector("#feed");
const posts = [
  { time: "08:53p", date: "08/31", content: "microbloggin'", id: 1 },
  { time: "09:23p", date: "08/31", content: "damn son, where'd you find this?", id: 2 },
  { time: "09:26p", date: "08/31", content: "my website is so stupid, a windows-esque homepage, a terminal themed blog, and a clean neumorphism microblog", id: 3 },
];
const clamp = (input, min, max) => {
  if (input < min) {
    return min;
  }
  if (input > max) {
    return max;
  }
  return input;
};
const bigs = ["PHARMA", "TECH", "AG"];
const dialog = document.querySelector("dialog");
const dialogLink = document.querySelector("#dialog-share-link");

let selector = Math.floor(Math.random() * bigs.length);
console.log(selector);
titleDOM.innerHTML = `BIG ${bigs[selector]}`;

profilePicDOM.src = "https://place.dog/75/75";

// for loop over the posts backwards
posts
  .slice()
  .reverse()
  .forEach((post) => {
    feedDOM.innerHTML += `
        <section id="post${post.id}" class="post">
          <div class="post-top">
            <img
              class="profile-pic"
              src="https://place.dog/75/75"
              alt="Random Profile Picture of a dog"
              height="50"
              title="Dog pfp"
            />
            <span>${post.time}</span>
            <span>${post.date}</span>
          </div>
          <hr>
          <p>${post.content}</p>
          <br><br>
          <div class="post-buttons">
            <button onclick="dialogLink.value='https://josephheinz.tech/microblog/#post${post.id}';dialog.showModal()"><i class="fa-solid fa-share"></i> Share</button>
          </div>
        </section>
    `;
  });

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("dialog-share-link");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  //alert("Copied the text: " + copyText.value);
}
