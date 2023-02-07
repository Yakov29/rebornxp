$(window).on('xpboot', () => {
  xp.applications.add('minesweeper', () => {
    var el = $.parseHTML(`<window width="350" height="590" title="Minesweeper">
      <style>
iframe[seamless]{
  background-color: transparent;
  border: 0px none transparent;
  padding: 0px;
  overflow: hidden;
}
.frame-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}
  </style>
  
  <div class="frame-container">
    
<iframe height="100%" seamless="seamless" width="100%" src="https://roanrobersson.github.io/js-minesweeper/index.html"></iframe>
  </div> 
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
    xp.startmenu.add('minesweeper', 'Minesweeper', 'https://w7.pngwing.com/pngs/337/559/png-transparent-minesweeper-computer-icons-bing-maps-video-game-mines-miscellaneous-game-angle.png');
});
