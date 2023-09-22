//для плагина lightSlider из библиотеки jquery
$(document).ready(function () {
  $("#lightSlider").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 20,
    galleryMargin: 15,
    thumbItem: 4,
    thumbMargin: 10,
    currentPagerPosition: "middle",
  });
});

//создаём свой html-тег с таймером

let date;

class MyTimer extends HTMLElement {
  render() {
    date = new Date(
      this.getAttribute("datetime") || new Date(2024, 11, 11, 5, 0)
    );
    // date.setHours(date.getHours() + 5);
    date.setSeconds(date.getSeconds() - 1);

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("time-zone-name") || undefined,
    }).format(date);
  }
  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
  static get observedAttributes() {
    return [
      "datetime",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "time-zone-name",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define("my-timer", MyTimer);
setInterval(() => elem.setAttribute("datetime", new Date(date)), 1000);
