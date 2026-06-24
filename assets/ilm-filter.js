const ilmFilterTitle = document.querySelectorAll('.ilm_filter_title');

ilmFilterTitle.forEach(function(item) {
  item.addEventListener('click', function() {
    item.parentElement.classList.toggle('deActive');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".ilm_collection_filter_head").forEach(function(filterBlock) {
    
    const btn = filterBlock.querySelector(".show-more-btn");
    if (!btn) return;

    let expanded = false;

    btn.addEventListener("click", function () {
      const extraItems = filterBlock.querySelectorAll(".ilm_sublist_content:nth-child(n+6)");

      extraItems.forEach(item => {
        item.style.display = expanded ? "none" : "flex";
      });

      btn.textContent = expanded ? "Show more" : "Show less";
      expanded = !expanded;
    });
  });
});



// class CollectionFilters extends HTMLElement {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   get sectionId() {
//     return this.dataset.sectionId;
//   }

//   connectedCallback() {
//     this.init();
//   }

//   init() {
//     this.filterInputs = this.querySelectorAll("input");

//     this.filterInputs.forEach((input) => {
//       input.removeEventListener("change", this.handleClick); // prevent duplicates
//       input.addEventListener("change", this.handleClick);
//     });

//     this.initShowMore();
//   }

//   handleClick(event) {
//     const input = event.currentTarget;

//     const url = new URL(
//       input.checked
//         ? input.dataset.addUrl
//         : input.dataset.removeUrl,
//       window.location.origin
//     );

//     url.searchParams.set("section_id", this.sectionId);

//     fetch(url.toString())
//       .then((res) => {
//         if (!res.ok) throw new Error("Network error");
//         return res.text();
//       })
//       .then((html) => {
//         const tempDiv = document.createElement("div");
//         tempDiv.innerHTML = html;

//         const newContent = tempDiv.querySelector(".ilm_collection_inner");
//         const currentContent = document.querySelector(".ilm_collection_inner");

//         if (!newContent || !currentContent) return;

//         currentContent.innerHTML = newContent.innerHTML;

//         // IMPORTANT: Re-initialize component after DOM update
//         const newComponent = currentContent.querySelector("collection-filters");
//         if (newComponent) {
//           newComponent.init();
//         }

//         url.searchParams.delete("section_id");
//         window.history.pushState({}, "", url.toString());
//       })
//       .catch((err) => {
//         console.error("Filter error:", err);
//       });
//   }

//   initShowMore() {
//     const buttons = this.querySelectorAll(".show-more-btn");

//     buttons.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const hiddenItems = btn
//           .closest(".ilm_collection_filter_head")
//           .querySelectorAll(".hidden-item");

//         hiddenItems.forEach((item) => {
//           item.classList.toggle("hidden-item");
//         });

//         btn.textContent =
//           btn.textContent === "Show more" ? "Show less" : "Show more";
//       });
//     });
//   }
// }

// customElements.define("collection-filters", CollectionFilters);




// class CollectionFilters extends HTMLElement {
//   constructor() {
//     super();
//   }

//   get sectionId(){
//     return this.dataset.sectionId
//   }

//   connectedCallback() {
//     this.filterInputs = this.querySelectorAll("input");
//     this.handleClick = this.handleClick.bind(this);

//     this.filterInputs.forEach((input) => {
//       input.addEventListener("change", this.handleClick);
//     });
//   }

//   handleClick(event) {
//     const input = event.currentTarget;

//     const url = new URL(
//       input.checked
//         ? input.dataset.addUrl
//         : input.dataset.removeUrl,
//       window.location.origin
//     );

//     console.log(url.toString());

//     url.searchParams.set("section_id", this.sectionId);
//     fetch(url.toString())
//     .then((response)=> {
//       return response.text();
//     })
//     .then((html) => {
//       const tempDiv = document.createElement('div');
//       tempDiv.innerHTML = html;

//       document.querySelector('.ilm_collection_inner').innerHTML = tempDiv.querySelector(".ilm_collection_inner").innerHTML;

//       url.searchParams.delete("section_id");
//       window.history.pushState({},"",url.toString());
//     })
//   }
// }

// customElements.define("collection-filters", CollectionFilters);