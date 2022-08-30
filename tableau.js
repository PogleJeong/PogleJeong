function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/app/profile/.14312360/viz/_16618623910980/1";

    var viz = new tableau.Viz(containerDiv, url);
}