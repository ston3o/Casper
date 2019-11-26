var titles = document.querySelectorAll('.post-card-title');

[].forEach.call(titles, function(title) {
    title.innerHTML = title.innerHTML.replace(" ?", "&nbsp;?");
});
