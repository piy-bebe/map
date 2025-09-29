function setProgress(percent) {
  const fill = document.querySelector('.map__success');
  // Вычисляем сколько скрыть сверху (100% - текущий процент)
  const hideFromTop = 100 - percent;

  // clip-path: inset(top right bottom left)
  fill.style.clipPath = `inset(${hideFromTop}% 0 0 0)`;
}
setProgress(35);
