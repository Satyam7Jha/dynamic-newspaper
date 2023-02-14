window.addEventListener("DOMContentLoaded", () => {
  $(".summernote").summernote({
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "underline", "clear"]],
      ["fontname", ["fontname"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture", "video"]],
      ["view", ["fullscreen", "codeview", "help"]],
    ],
  });

  newsData = [
    {},
    {
      title: "Home Page",
      page: 1,
      news: [
        {
          title: "Need More Foreign Investment ",
          content:
            "Lorem ipsum dolor  laudantium ipsa? Eaque eos, magni tempore voluptas laudantium quidem maiores perferendis. Voluptas sapiente accusantium repellendus possimus, totam, veniam rerum laudantium placeat omnis officia enim repellat molestias quia esse quod? Facilis quisquam, natus ratione corrupti aperiam placeat eveniet minima est sit dolorem tempora veritatis qui, non id necessitatibus eligendi numquam nesciunt corporis asperiores distinctio nihil et ad esse doloremque! Quis itaque aperiam, inventore reiciendis ex ipsum. Repellat veniam reiciendis dolorem natus aperiam sunt sed maiores, nihil laudantium explicabo. Quisquam voluptate exercitationem vel! Odio adipisci earum nostrum est. sit amet consectetur adipisicing elit. Quia minima consectetur quaerat quos corporis voluptatum debitis sit rem, magni nisi hic, dolorem doloremque, repellendus ratione dolorum tempore illo? Veritatis, eveniet beatae ex provident, saepe veniam tempora dolorum dolorem incidunt magni ab quas modi fuga laudantium aliquam expedita odio harum! Harum molestias, labore eos corrupti tempora illum accusantium minima non! Culpa dignissimos non sit quam, a magnam fugiat, consectetur hic aperiam nam autem ipsam architecto alias commodi, ea nulla nemo deleniti. Ipsum beatae earum sequi, veniam soluta quo! Placeat magni eveniet itaque laudantium ipsa? Eaque eos, magni tempore voluptas laudantium quidem maiores perferendis. Voluptas sapiente accusantium repellendus possimus, totam, veniam rerum laudantium placeat omnis officia enim repellat molestias quia esse quod? Facilis quisquam, natus ratione corrupti aperiam placeat eveniet minima est sit dolorem tempora veritatis qui, non id necessitatibus eligendi numquam nesciunt corporis asperiores distinctio nihil et ad esse doloremque! Quis itaque aperiam, inventore reiciendis ex ipsum. Repellat veniam reiciendis dolorem natus aperiam sunt sed maiores, nihil laudantium explicabo. Quisquam voluptate exercitationem vel! Odio adipisci earum nostrum est. Ab inventore accusamus dolor voluptas blanditiis. Maxime ea, beatae magni libero quidem qui, sed iste illo labore laborum neque facilis velit quod ex? ",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima consectetur quaerat quos corporis voluptatum debitis sit rem, magni nisi hic, dolorem doloremque, repellendus ratione dolorum tempore illo? Veritatis, eveniet beatae ex provident, saepe veniam tempora dolorum dolorem incidunt magni ab quas modi fuga laudantium aliquam expedita odio harum! Harum molestias, labore eos corrupti tempora illum accusantium minima non! Culpa dignissimos non sit quam, a magnam fugiat, consectetur hic aperiam nam autem ipsam architecto alias commodi, ea nulla nemo deleniti. Ipsum beatae earum sequi, veniam soluta quo! Placeat magni eveniet itaque laudantium ipsa? Eaque eos, magni tempore voluptas laudantium quidem maiores perferendis. Voluptas sapiente accusantium repellendus possimus, totam, veniam rerum laudantium placeat omnis officia enim repellat molestias quia esse quod? Facilis quisquam, natus ratione corrupti aperiam placeat eveniet minima est sit dolorem tempora veritatis qui, non id necessitatibus eligendi numquam nesciunt corporis asperiores distinctio nihil et ad esse doloremque! Quis itaque aperiam, inventore reiciendis ex ipsum. Repellat veniam reiciendis dolorem natus aperiam sunt sed maiores, nihil laudantium explicabo. Quisquam voluptate exercitationem vel! Odio adipisci earum nostrum est. Ab inventore accusamus dolor voluptas blanditiis. Maxime ea, beatae magni libero quidem qui, sed iste illo labore laborum neque facilis velit quod ex? ",

          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 3",
          content: "Content 3",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 4",
          content: "Content 4",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 5",
          content: "Content 5",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
      ],
    },
    {
      page: 2,
      title: "Sports",
      news: [
        {
          title: "India vs Australia",
          content: "Content 1",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 2",
          content: "Content 2",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 3",
          content: "Content 3",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 4",
          content: "Content 4",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 5",
          content: "Content 5",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
      ],
    },
    {
      page: 3,
      title: "Business",
      news: [
        {
          title: "News 1",
          content: "Content 1",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 2",
          content: "Content 2",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 3",
          content: "Content 3",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 4",
          content: "Content 4",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
        {
          title: "News 5",
          content: "Content 5",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
          createdByuser: false,
        },
      ],
    },
  ];

  if (!window.localStorage.getItem("newsData")) {
    window.localStorage.setItem("newsData", JSON.stringify(newsData));
  } else {
    newsData = JSON.parse(window.localStorage.getItem("newsData"));
  }

  var selectedDropdownPage = 1;

  const newsTitle = document.querySelector("#news-title");
  const newsImage = document.querySelector("#news-image");
  const newsContent = document.querySelector(".summernote");
  // const createNews = document.querySelector("#create-news");
  const addPage = document.querySelector("#Add-Page");
  const addNewsForm = document.querySelector("#add-news-form");

  const dropDown = document.querySelector("#pages");
  const renderDropDown = () => {
    dropDown.innerHTML = "";
    for (let iterator = 1; iterator < newsData.length; iterator++) {
      dropDown.innerHTML += `<option value="${iterator}">${iterator}</option>`;
    }
  };
  renderDropDown();

  const handleAddPage = () => {
    if (newsData[newsData.length - 1].news.length === 0) {
      return;
    }
    newsData.push({
      page: newsData.length,
      title: "Page " + newsData.length,
      news: [],
    });
    renderDropDown();
    dropDown.value = newsData.length - 1;
    selectedDropdownPage = newsData.length - 1;
    renderAccrodians(
      newsData[selectedDropdownPage].news,
      newsData[selectedDropdownPage].title
    );
  };

  addPage.addEventListener("click", handleAddPage);

  dropDown.addEventListener("change", (e) => {
    selectedDropdownPage = e.target.value;
    renderAccrodians(
      newsData[selectedDropdownPage].news,
      newsData[selectedDropdownPage].title
    );
  });

  const renderAccrodians = (accordianNewsList, page_title) => {
    const accordion_container = document.querySelector("#accordion-contianer");
    const edit_page_title = document.querySelector("#edit-page-title");

    edit_page_title.value = page_title;

    accordion_container.innerHTML = "";
    for (let iterator = 0; iterator < accordianNewsList.length; iterator++) {
      accordion_container.innerHTML += `
      
      <div class="accordion"> ${accordianNewsList[iterator].title} <i class="fa fa-home abs"></i>
      </div>
     
    
      <div class="panel">
        <div class="accordian-news-image" >
        </div>
        <h2>News Title<h2/>
        <input type="text" value="${accordianNewsList[iterator].title}" />
        <h2>Image URL<h2/>
        <input type="text" value="${accordianNewsList[iterator].imgURL}" />
        <h2>News Content<h2/>
        <textArea class="accordian-text-area">
        ${accordianNewsList[iterator].content}
        </textArea>
         
      </div>
    `;
    }

    //render row content eventlistner
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  };

  renderAccrodians(
    newsData[selectedDropdownPage].news,
    newsData[selectedDropdownPage].title
  );

  const handleAdddNews = (e) => {
    e.preventDefault();
    const news = {
      title: newsTitle.value,
      imgURL: newsImage.value,
      content: newsContent.value,
      createdByuser: true,
    };

    newsData[selectedDropdownPage].news.push(news);
    renderAccrodians(
      newsData[selectedDropdownPage].news,
      newsData[selectedDropdownPage].title
    );
    newsTitle.value = "";
    newsImage.value = "";
    newsContent.value = "";
    $(".summernote").summernote("reset");
  };

  addNewsForm.addEventListener("submit", handleAdddNews);

  // createNews.addEventListener("click", handleAdddNews);
  const submitPage = document.getElementById("submitPage");
  const handleSubmitPage = (e) => {
    e.preventDefault();

    const pageLimitWarning = document.querySelector("#min-news-warning");

    if (newsData[selectedDropdownPage].news.length < 4) {
      pageLimitWarning.style.display = "block";
      return;
    } else {
      console.log(newsData);
      window.localStorage.setItem("newsData", JSON.stringify(newsData));
      pageLimitWarning.style.display = "none";
    }
  };

  submitPage.addEventListener("click", handleSubmitPage);
});
