const videoContainer = document.querySelector('.videoContainer')

window.addEventListener('scroll', (e) => {
    scrollY > 100 ? videoContainer.classList.add('active') : videoContainer.classList.remove('active')
})  

const comments = [
    {
      name: "Alice Johnson",
      text: "This video is absolutely mesmerizing! ✨",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Bob Smith",
      text: "Wow, such incredible quality!",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Catherine Brown",
      text: "I could watch this all day. 😍",
      img: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "David Lee",
      text: "Such a relaxing vibe!",
      img: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ella Martinez",
      text: "Fantastic editing and music!",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Franklin Carter",
      text: "Can’t believe how good this is! 👏",
      img: "https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Grace Taylor",
      text: "Love the colors in this video!",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Henry Adams",
      text: "Amazing visuals and energy!",
      img: "https://images.pexels.com/photos/195451/pexels-photo-195451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ivy Nguyen",
      text: "Keep up the great work! 🙌",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Jack Wilson",
      text: "This is pure talent. 👌",
      img: "https://images.pexels.com/photos/1065085/pexels-photo-1065085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Kylie Green",
      text: "Couldn’t stop watching! 🤩",
      img: "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Leo Clark",
      text: "Really inspiring work!",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mia Rivera",
      text: "Beautifully done! 🎥",
      img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Noah Scott",
      text: "Truly a masterpiece.",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Olivia Turner",
      text: "Can’t wait for more like this! ❤️",
      img: "https://images.pexels.com/photos/1699167/pexels-photo-1699167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Paul Walker",
      text: "Next-level content here. 🔥",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Quinn Brooks",
      text: "Blown away by this!",
      img: "https://images.pexels.com/photos/1239292/pexels-photo-1239292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ruby Mitchell",
      text: "Such positive energy in this!",
      img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sam Harris",
      text: "I’m so impressed. 🤯",
      img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Tina Evans",
      text: "What a fantastic watch!",
      img: "https://images.pexels.com/photos/3775112/pexels-photo-3775112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        name: "Alice Johnson",
        text: "This video is absolutely mesmerizing! ✨",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Bob Smith",
        text: "Wow, such incredible quality!",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Catherine Brown",
        text: "I could watch this all day. 😍",
        img: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "David Lee",
        text: "Such a relaxing vibe!",
        img: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Ella Martinez",
        text: "Fantastic editing and music!",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Franklin Carter",
        text: "Can’t believe how good this is! 👏",
        img: "https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Grace Taylor",
        text: "Love the colors in this video!",
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Henry Adams",
        text: "Amazing visuals and energy!",
        img: "https://images.pexels.com/photos/195451/pexels-photo-195451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Ivy Nguyen",
        text: "Keep up the great work! 🙌",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      }
  ];
  

// Select the parent container for comments

const container = document.querySelector('.extras');
const commentsHTML = comments
  .map(
    ({ name, text, img }) => `
    <div class="comment">
        <div class="imgContainer">
            <img src="${img}" alt="${name}">
        </div>
        <span>
            <h1>${name}</h1>
            <p>${text}</p>
        </span>
    </div>`
  )
  .join('');
container.innerHTML = `<h3>Comments</h3>${commentsHTML}`;